import { AuthStorage } from './storage.js';

// Получаем всех зарегистрированных пользователей
function getAllUsers() {
  const raw = localStorage.getItem('kp_all_users');
  return raw ? JSON.parse(raw) : [];
}

// Сохраняем нового пользователя в список всех
function saveNewUser(user) {
  const users = getAllUsers();
  users.push(user);
  localStorage.setItem('kp_all_users', JSON.stringify(users));
}

// Проверяем существует ли email
function emailExists(email) {
  const users = getAllUsers();
  return users.some(u => u.email === email);
}

document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const msg = document.getElementById('auth-message');

  // ======= РЕГИСТРАЦИЯ =======
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = regForm.name.value.trim();
      const email = regForm.email.value.trim().toLowerCase();
      const password = regForm.password.value;

      // Проверка полей
      if (!name || !email || password.length < 6) {
        msg.textContent = 'Проверьте данные. Пароль минимум 6 символов.';
        msg.style.color = '#ff6b6b';
        msg.style.background = 'rgba(255,107,107,0.1)';
        return;
      }

      // Проверка формата email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        msg.textContent = 'Введите корректный email адрес.';
        msg.style.color = '#ff6b6b';
        msg.style.background = 'rgba(255,107,107,0.1)';
        return;
      }

      // Проверка — существует ли уже такой аккаунт
      if (emailExists(email)) {
        msg.textContent = '❌ Аккаунт с таким email уже существует. Войдите в систему.';
        msg.style.color = '#ff6b6b';
        msg.style.background = 'rgba(255,107,107,0.1)';
        return;
      }

      // Создаём пользователя
      const user = { name, email, password };
      saveNewUser(user);         // сохраняем в общий список
      AuthStorage.setUser(user); // сохраняем как текущего

      msg.textContent = '✅ Регистрация успешна! Перенаправление...';
      msg.style.color = '#6366f1';
      msg.style.background = 'rgba(99,102,241,0.1)';

      setTimeout(() => {
        window.location.href = 'home.html';
      }, 800);
    });
  }

  // ======= ВХОД =======
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      // Ищем пользователя в общем списке
      const users = getAllUsers();
      const found = users.find(u => u.email === email && u.password === password);

      if (!found) {
        msg.textContent = '❌ Неверный email или пароль.';
        msg.style.color = '#ff6b6b';
        msg.style.background = 'rgba(255,107,107,0.1)';
        return;
      }

      // Логиним найденного пользователя
      AuthStorage.setUser(found);

      msg.textContent = '✅ Вход успешен! Перенаправление...';
      msg.style.color = '#6366f1';
      msg.style.background = 'rgba(99,102,241,0.1)';

      setTimeout(() => {
        window.location.href = 'home.html';
      }, 600);
    });
  }
});