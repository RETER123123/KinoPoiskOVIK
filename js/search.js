import { CONFIG } from './config.js';
import { Favorites } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  
  const filterTitle = document.getElementById('filter-title');
  const filterRating = document.getElementById('filter-rating');

  async function searchMovies() {
    status.textContent = 'Загрузка...';
    results.innerHTML = '';
    
    try {
      // Получаем значения фильтров
      const title = filterTitle.value.trim();
      const rating = parseFloat(filterRating.value);
      const selectedGenres = Array.from(document.querySelectorAll('.genre-item input:checked')).map(cb => cb.value);
      
      let moviesList = [];
      
      // Если есть название - ищем по названию
      if (title) {
        const url = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&s=${encodeURIComponent(title)}`;
        const res = await fetch(url);
        const data = await res.json();
        
        if (data.Response === 'False') {
          status.textContent = 'Ничего не найдено';
          return;
        }
        
        moviesList = data.Search || [];
      } else {
        // Если нет названия - показываем популярные фильмы
        const popularTitles = ['Inception', 'Matrix', 'Interstellar', 'Avatar', 'Titanic', 'Gladiator'];
        const randomTitle = popularTitles[Math.floor(Math.random() * popularTitles.length)];
        
        const url = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&s=${randomTitle}`;
        const res = await fetch(url);
        const data = await res.json();
        moviesList = data.Search || [];
      }
      
      // Фильтруем по рейтингу и жанрам (нужно получать детали каждого фильма)
      const filteredMovies = [];
      
      for (let movie of moviesList.slice(0, 10)) {
        const detailUrl = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&i=${movie.imdbID}`;
        const detailRes = await fetch(detailUrl);
        const detail = await detailRes.json();
        
        // Проверка рейтинга
        if (rating && detail.imdbRating && detail.imdbRating !== 'N/A') {
          const movieRating = parseFloat(detail.imdbRating);
          if (Math.abs(movieRating - rating) > 1.5) continue;
        }
        
        // Проверка жанров
        if (selectedGenres.length > 0 && detail.Genre) {
          const movieGenres = detail.Genre.split(', ');
          const hasGenre = selectedGenres.some(g => movieGenres.includes(g));
          if (!hasGenre) continue;
        }
        
        filteredMovies.push({ ...movie, rating: detail.imdbRating });
      }
      
      if (filteredMovies.length === 0) {
        status.textContent = 'Не найдено фильмов по заданным фильтрам';
        return;
      }
      
      status.textContent = '';
      renderResults(filteredMovies);
      
    } catch (err) {
      status.textContent = 'Ошибка сети. Попробуйте позже.';
      console.error(err);
    }
  }

  function renderResults(list) {
    results.innerHTML = '';
    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <img src="${item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/200x280/667eea/ffffff?text=No+Image'}" alt="${item.Title}">
        <h4>${item.Title}</h4>
        <p class="muted">${item.Year}</p>
        ${item.rating ? `<p class="muted">⭐ ${item.rating}</p>` : ''}
        <button class="btn view-btn" data-id="${item.imdbID}">Открыть</button>
      `;
      results.appendChild(card);
    });

    results.querySelectorAll('.view-btn').forEach(b => {
      b.addEventListener('click', () => {
        window.location.href = `movie.html?imdbID=${b.dataset.id}`;
      });
    });
  }

  searchBtn.addEventListener('click', searchMovies);
  
  // Enter в полях
  filterTitle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMovies();
  });
});