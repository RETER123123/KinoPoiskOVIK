import { CONFIG } from './config.js';
import { Favorites } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');

  async function searchMovies(query) {
    status.textContent = 'Загрузка...';
    results.innerHTML = '';
    try {
      const url = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&s=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === 'False') {
        status.textContent = data.Error || 'Ничего не найдено';
        return;
      }
      status.textContent = '';
      renderResults(data.Search);
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
        <img src="${item.Poster !== 'N/A' ? item.Poster : '../assets/images/poster1.jpg'}" alt="${item.Title}">
        <h4>${item.Title}</h4>
        <p class="muted">${item.Year}</p>
        <div style="display:flex;gap:6px;justify-content:center;margin-top:8px;">
          <button class="btn view-btn" data-id="${item.imdbID}">Открыть</button>
          <button class="btn fav-btn" data-id="${item.imdbID}">${Favorites.isFav(item.imdbID) ? 'Убрать' : 'В избранное'}</button>
        </div>
      `;
      results.appendChild(card);
    });

    // Навешиваем события
    results.querySelectorAll('.view-btn').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.id;
        // Переходим на страницу фильма с query string
        window.location.href = `movie.html?imdbID=${id}`;
      });
    });

    results.querySelectorAll('.fav-btn').forEach(b => {
      b.addEventListener('click', async () => {
        const id = b.dataset.id;
        // Получаем краткие данные фильма через OMDb
        try {
          const url = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&i=${id}`;
          const res = await fetch(url);
          const movie = await res.json();
          if (Favorites.isFav(id)) {
            Favorites.remove(id);
            b.textContent = 'В избранное';
          } else {
            Favorites.add({ imdbID: movie.imdbID, Title: movie.Title, Poster: movie.Poster });
            b.textContent = 'Убрать';
          }
        } catch (err) {
          console.error(err);
          alert('Ошибка при добавлении в избранное');
        }
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      searchMovies(q);
    });
  }
});
