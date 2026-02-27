import { AuthStorage, Favorites, Reviews } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const user = AuthStorage.getUser();
  const nameInput = document.getElementById('profile-name');
  const emailInput = document.getElementById('profile-email');
  const passInput = document.getElementById('profile-password');
  const form = document.getElementById('profile-form');
  const favList = document.getElementById('favorites-list');
  const myReviewsList = document.getElementById('my-reviews-list');
  const logoutBtn = document.getElementById('logout-btn');
  const displayName = document.getElementById('profile-display-name');
  const displayEmail = document.getElementById('profile-display-email');
  const statFavs = document.getElementById('stat-favs');
  const statReviews = document.getElementById('stat-reviews');
  const themeCheckbox = document.getElementById('theme-checkbox');
  const themeLabel = document.getElementById('theme-label');

  if (!user) {
    window.location.href = 'register.html';
    return;
  }

  // ======= ТЁМНАЯ ТЕМА =======
  const savedTheme = localStorage.getItem('kp_theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    themeCheckbox.checked = true;
    themeLabel.textContent = '☀️ Светлая тема';
  }

  themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('kp_theme', 'dark');
      themeLabel.textContent = '☀️ Светлая тема';
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('kp_theme', 'light');
      themeLabel.textContent = '🌙 Тёмная тема';
    }
  });

  // ======= ЗАПОЛНЯЕМ ПРОФИЛЬ =======
  nameInput.value = user.name || '';
  emailInput.value = user.email || '';
  passInput.value = user.password || '';
  displayName.textContent = user.name || 'Пользователь';
  displayEmail.textContent = user.email || '';

  statFavs.textContent = Favorites.getAll().length;
  const allReviews = Reviews.getAll();
  let reviewCount = 0;
  Object.keys(allReviews).forEach(id => {
    allReviews[id].forEach(r => {
      if (r.userEmail === user.email) reviewCount++;
    });
  });
  statReviews.textContent = reviewCount;

  // ======= ВЫХОД =======
  logoutBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите выйти?')) {
      AuthStorage.logout();
      window.location.href = 'register.html';
    }
  });

  // ======= СОХРАНЕНИЕ =======
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const updated = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passInput.value
    };
    AuthStorage.setUser(updated);
    displayName.textContent = updated.name;
    displayEmail.textContent = updated.email;
    alert('Профиль сохранён ✅');
  });

  // ======= ИЗБРАННОЕ =======
  function renderFavorites() {
    const list = Favorites.getAll();
    statFavs.textContent = list.length;
    if (!list.length) {
      favList.innerHTML = '<div class="empty-state">🎬 Нет избранных фильмов.<br>Найдите что-нибудь интересное!</div>';
      return;
    }
    favList.innerHTML = '';
    list.forEach(m => {
      const el = document.createElement('div');
      el.className = 'fav-item';
      el.innerHTML = `
        <img src="${m.Poster && m.Poster !== 'N/A' ? m.Poster : '../assets/icons/user.svg'}" alt="${m.Title}" />
        <div class="fav-info">
          <strong>${m.Title}</strong>
          <div class="fav-meta">
            ${m.Year ? `<span>📅 ${m.Year}</span>` : ''}
            ${m.Genre ? `<span>🎬 ${m.Genre.split(',')[0]}</span>` : ''}
          </div>
          ${m.Rating && m.Rating !== 'N/A' ? `<span class="fav-rating">⭐ ${m.Rating} / 10</span>` : ''}
        </div>
        <div class="fav-actions">
          <button class="btn open-btn" data-id="${m.imdbID}">Открыть</button>
          <button class="btn remove-btn" data-id="${m.imdbID}">Убрать</button>
        </div>
      `;
      favList.appendChild(el);
    });
    favList.querySelectorAll('.open-btn').forEach(b => {
      b.addEventListener('click', () => { window.location.href = `movie.html?imdbID=${b.dataset.id}`; });
    });
    favList.querySelectorAll('.remove-btn').forEach(b => {
      b.addEventListener('click', () => { Favorites.remove(b.dataset.id); renderFavorites(); });
    });
  }

  // ======= ОТЗЫВЫ =======
  function renderMyReviews() {
    const all = Reviews.getAll();
    const myReviews = [];
    Object.keys(all).forEach(imdbID => {
      all[imdbID].forEach(r => {
        if (r.userEmail === user.email) myReviews.push({ ...r, imdbID });
      });
    });
    if (!myReviews.length) {
      myReviewsList.innerHTML = '<div class="empty-state">💬 Вы ещё не оставляли отзывов.<br>Поделитесь мнением о фильме!</div>';
      return;
    }
    myReviewsList.innerHTML = '';
    myReviews.forEach(r => {
      const el = document.createElement('div');
      el.className = 'my-review';
      el.innerHTML = `
        <div class="review-top">
          <strong>${r.name}</strong>
          <span class="muted">${new Date(r.createdAt).toLocaleString()}</span>
        </div>
        <a class="review-movie-link" href="movie.html?imdbID=${r.imdbID}">🎥 Перейти к фильму</a>
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        <p>${r.text}</p>
        <button class="del-review" data-id="${r.id}" data-imdb="${r.imdbID}">🗑 Удалить</button>
      `;
      myReviewsList.appendChild(el);
    });
    myReviewsList.querySelectorAll('.del-review').forEach(b => {
      b.addEventListener('click', () => { Reviews.remove(b.dataset.imdb, b.dataset.id); renderMyReviews(); });
    });
  }

  renderFavorites();
  renderMyReviews();
});