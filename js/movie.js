import { CONFIG } from './config.js';
import { Reviews, Favorites, AuthStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const imdbID = params.get('imdbID');
  const movieInfo = document.getElementById('movie-info');
  const reviewsList = document.getElementById('reviews-list');
  const reviewForm = document.getElementById('review-form');
  const favBtn = document.getElementById('fav-btn');

  if (!imdbID) {
    movieInfo.innerHTML = '<p>Фильм не указан.</p>';
    return;
  }

  let currentMovieData = null;

  async function loadMovie() {
    movieInfo.innerHTML = 'Загрузка...';
    try {
      const url = `${CONFIG.OMDB_BASE}?apikey=${CONFIG.OMDB_API_KEY}&i=${imdbID}&plot=full`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === 'False') {
        movieInfo.innerHTML = `<p>Ошибка: ${data.Error}</p>`;
        return;
      }
      currentMovieData = data;
      renderMovie(data);
      renderReviews();
      updateFavBtn();
    } catch (err) {
      movieInfo.innerHTML = '<p>Ошибка загрузки фильма.</p>';
      console.error(err);
    }
  }

  function renderMovie(data) {
    movieInfo.innerHTML = `
      <div class="movie-header">
        <img src="${data.Poster !== 'N/A' ? data.Poster : '../assets/images/poster1.jpg'}" alt="${data.Title}" style="width:200px;float:left;margin-right:1rem;border-radius:8px;">
        <h2>${data.Title} <small class="muted">(${data.Year})</small></h2>
        <p><strong>Рейтинг ODMB:</strong> ${data.imdbRating} / 10</p>
        <p>${data.Plot}</p>
        <p><strong>Жанр:</strong> ${data.Genre}</p>
        <div style="clear:both;"></div>
      </div>
    `;
  }

  function renderReviews() {
    const list = Reviews.getFor(imdbID);
    if (!list.length) {
      reviewsList.innerHTML = '<p>Пока нет отзывов. Будьте первым.</p>';
      return;
    }
    reviewsList.innerHTML = '';
    list.slice().reverse().forEach(r => {
      const el = document.createElement('div');
      el.className = 'review';
      el.innerHTML = `
        <div><strong>${r.name}</strong> <span class="muted">— ${new Date(r.createdAt).toLocaleString()}</span></div>
        <div>Оценка: ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        <p>${r.text}</p>
        ${AuthStorage.getUser() && AuthStorage.getUser().email === r.userEmail
          ? `<div>
               <button class="btn edit-btn" data-id="${r.id}">Редактировать</button>
               <button class="btn del-btn" data-id="${r.id}">Удалить</button>
             </div>`
          : ''}
      `;
      reviewsList.appendChild(el);
    });

    reviewsList.querySelectorAll('.del-btn').forEach(b => {
      b.addEventListener('click', () => {
        Reviews.remove(imdbID, b.dataset.id);
        renderReviews();
      });
    });

    reviewsList.querySelectorAll('.edit-btn').forEach(b => {
      b.addEventListener('click', () => {
        const rev = Reviews.getFor(imdbID).find(x => x.id === b.dataset.id);
        if (!rev) return;
        document.getElementById('review-text').value = rev.text;
        document.getElementById('review-rating').value = rev.rating;
        reviewForm.dataset.editId = b.dataset.id;
      });
    });
  }

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = AuthStorage.getUser();
    if (!user) {
      alert('Требуется вход для добавления отзыва.');
      return;
    }
    const text = document.getElementById('review-text').value.trim();
    const rating = parseInt(document.getElementById('review-rating').value, 10);
    if (!text) return;
    const editId = reviewForm.dataset.editId;
    if (editId) {
      Reviews.update(imdbID, editId, { text, rating });
      delete reviewForm.dataset.editId;
    } else {
      Reviews.add(imdbID, {
        id: 'r_' + Date.now(),
        userEmail: user.email,
        name: user.name,
        text,
        rating,
        createdAt: Date.now()
      });
    }
    reviewForm.reset();
    renderReviews();
  });

  function updateFavBtn() {
    favBtn.textContent = Favorites.isFav(imdbID) ? 'Убрать из избранного' : 'Добавить в избранное';
  }

  favBtn.addEventListener('click', async () => {
    try {
      if (Favorites.isFav(imdbID)) {
        Favorites.remove(imdbID);
        updateFavBtn();
        return;
      }
      // Сохраняем расширенные данные — Title, Poster, Year, Genre, Rating
      if (currentMovieData) {
        Favorites.add({
          imdbID: currentMovieData.imdbID,
          Title: currentMovieData.Title,
          Poster: currentMovieData.Poster,
          Year: currentMovieData.Year,
          Genre: currentMovieData.Genre,
          Rating: currentMovieData.imdbRating
        });
        updateFavBtn();
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка при добавлении в избранное');
    }
  });

  loadMovie();
});