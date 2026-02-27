const LS = window.localStorage;

export const Storage = {
  save(key, value) {
    LS.setItem(key, JSON.stringify(value));
  },
  load(key, defaultValue = null) {
    const raw = LS.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  },
  remove(key) {
    LS.removeItem(key);
  }
};

export const AuthStorage = {
  key: 'kp_user',
  getUser() { return Storage.load(this.key); },
  setUser(user) { Storage.save(this.key, user); },
  logout() { Storage.remove(this.key); }
};

// Получаем email текущего пользователя для уникального ключа
function getUserKey(base) {
  const user = AuthStorage.getUser();
  const email = user ? user.email : 'guest';
  return `${base}_${email}`;
}

export const Favorites = {
  getAll() { return Storage.load(getUserKey('kp_favs'), []); },
  add(movie) {
    const list = this.getAll();
    if (!list.find(m => m.imdbID === movie.imdbID)) list.push(movie);
    Storage.save(getUserKey('kp_favs'), list);
  },
  remove(imdbID) {
    const list = this.getAll().filter(m => m.imdbID !== imdbID);
    Storage.save(getUserKey('kp_favs'), list);
  },
  isFav(imdbID) {
    return !!this.getAll().find(m => m.imdbID === imdbID);
  }
};

export const Reviews = {
  // Отзывы общие для всех (чтобы все видели отзывы друг друга на фильме)
  // но при удалении — только свои
  getAll() { return Storage.load('kp_reviews', {}); },
  getFor(imdbID) {
    const all = this.getAll();
    return all[imdbID] || [];
  },
  add(imdbID, review) {
    const all = this.getAll();
    all[imdbID] = all[imdbID] || [];
    all[imdbID].push(review);
    Storage.save('kp_reviews', all);
  },
  remove(imdbID, reviewId) {
    const all = this.getAll();
    if (!all[imdbID]) return;
    all[imdbID] = all[imdbID].filter(r => r.id !== reviewId);
    Storage.save('kp_reviews', all);
  },
  update(imdbID, reviewId, newData) {
    const all = this.getAll();
    if (!all[imdbID]) return;
    all[imdbID] = all[imdbID].map(r =>
      r.id === reviewId ? { ...r, ...newData } : r
    );
    Storage.save('kp_reviews', all);
  }
};