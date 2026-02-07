import { AuthStorage, Favorites, Reviews, Storage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const user = AuthStorage.getUser();
  const nameInput = document.getElementById('profile-name');
  const emailInput = document.getElementById('profile-email');
  const passInput = document.getElementById('profile-password');
  const avatar = document.getElementById('profile-avatar');
  const form = document.getElementById('profile-form');
  const favList = document.getElementById('favorites-list');
  const myReviewsList = document.getElementById('my-reviews-list');

  if (!user) {
    // Если нет пользователя — перенаправляем на регистрацию
    window.location.href = '../pages/register.html';
    return;
  }

  // Заполняем поля
  nameInput.value = user.name || '';
  emailInput.value = user.email || '';
  passInput.value = user.password || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const updated = { name: nameInput.value.trim(), email: emailInput.value.trim(), password: passInput.value };
    AuthStorage.setUser(updated);
    alert('Профиль сохранён');
  });

  function renderFavorites() {
    const list = Favorites.getAll();
    if (!list.length) {
      favList.innerHTML = '<p>Нет избранных фильмов.</p>';
      return;
    }
    favList.innerHTML = '';
    list.forEach(m => {
      const el = document.createElement('div');
      el.className = 'fav-item';
      el.innerHTML = `
        <img src="${m.Poster !== 'N/A' ? m.Poster : '../assets/images/poster1.jpg'}" alt="${m.Title}" style="width:80px;height:120px;object-fit:cover;border-radius:6px;">
        <div style="margin-left:10px;">
          <div><strong>${m.Title}</strong></div>
          <div class="muted">${m.imdbID}</div>
          <div style="margin-top:6px;">
            <button class="btn open-btn" data-id="${m.imdbID}">Открыть</button>
            <button class="btn remove-btn" data-id="${m.imdbID}">Убрать</button>
          </div>
        </div>
      `;
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.gap = '10px';
      favList.appendChild(el);
    });

    favList.querySelectorAll('.open-btn').forEach(b => b.addEventListener('click', () => {
      window.location.href = `movie.html?imdbID=${b.dataset.id}`;
    }));
    favList.querySelectorAll('.remove-btn').forEach(b => {
      b.addEventListener('click', () => {
        Favorites.remove(b.dataset.id);
        renderFavorites();
      });
    });
  }

  function renderMyReviews() {
    const all = Reviews.getAll();
    const myEmail = user.email;
    const myReviews = [];
    Object.keys(all).forEach(imdbID => {
      all[imdbID].forEach(r => {
        if (r.userEmail === myEmail) myReviews.push({ ...r, imdbID });
      });
    });
    if (!myReviews.length) {
      myReviewsList.innerHTML = '<p>Вы ещё не оставляли отзывов.</p>';
      return;
    }
    myReviewsList.innerHTML = '';
    myReviews.forEach(r => {
      const el = document.createElement('div');
      el.className = 'my-review';
      el.innerHTML = `
        <div><strong>${r.name}</strong> <span class="muted">— ${new Date(r.createdAt).toLocaleString()}</span></div>
        <div>Фильм: <a href="movie.html?imdbID=${r.imdbID}">${r.imdbID}</a></div>
        <div>Оценка: ${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        <p>${r.text}</p>
        <div><button class="btn del-review" data-id="${r.id}" data-imdb="${r.imdbID}">Удалить</button></div>
      `;
      myReviewsList.appendChild(el);
    });

    myReviewsList.querySelectorAll('.del-review').forEach(b => {
      b.addEventListener('click', () => {
        Reviews.remove(b.dataset.imdb, b.dataset.id);
        renderMyReviews();
      });
    });
  }

  renderFavorites();
  renderMyReviews();
});
