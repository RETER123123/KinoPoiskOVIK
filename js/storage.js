// Утилиты для работы с localStorage
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

// Специфичные функции
export const AuthStorage = {
  key: 'kp_user',
  getUser() { return Storage.load(this.key); },
  setUser(user) { Storage.save(this.key, user); },
  logout() { Storage.remove(this.key); }
};

export const Favorites = {
  key: 'kp_favs',
  getAll() { return Storage.load(this.key, []); },
  add(movie) {
    const list = this.getAll();
    if (!list.find(m => m.imdbID === movie.imdbID)) list.push(movie);
    Storage.save(this.key, list);
  },
  remove(imdbID) {
    let list = this.getAll().filter(m => m.imdbID !== imdbID);
    Storage.save(this.key, list);
  },
  isFav(imdbID) { return !!this.getAll().find(m => m.imdbID === imdbID); }
};

export const Reviews = {
  key: 'kp_reviews',
  // структура: { imdbID: [ {id, userEmail, name, text, rating, createdAt} ] }
  getAll() { return Storage.load(this.key, {}); },
  getFor(imdbID) { const all = this.getAll(); return all[imdbID] || []; },
  add(imdbID, review) {
    const all = this.getAll();
    all[imdbID] = all[imdbID] || [];
    all[imdbID].push(review);
    Storage.save(this.key, all);
  },
  remove(imdbID, reviewId) {
    const all = this.getAll();
    if (!all[imdbID]) return;
    all[imdbID] = all[imdbID].filter(r => r.id !== reviewId);
    Storage.save(this.key, all);
  },
  update(imdbID, reviewId, newData) {
    const all = this.getAll();
    if (!all[imdbID]) return;
    all[imdbID] = all[imdbID].map(r => r.id === reviewId ? {...r, ...newData} : r);
    Storage.save(this.key, all);
  }
};
