import { AuthStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const msg = document.getElementById('auth-message');

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = regForm.name.value.trim();
      const email = regForm.email.value.trim().toLowerCase();
      const password = regForm.password.value;

      if (!name || !email || password.length < 6) {
        msg.textContent = 'Проверьте введённые данные. Пароль минимум 6 символов.';
        msg.style.color = '#ff6b6b';
        return;
      }

      // Для учебного проекта сохраняем пользователя в localStorage
      const user = { name, email, password };
      AuthStorage.setUser(user);
      msg.textContent = 'Регистрация успешна. Перенаправление...';
      msg.style.color = '#6366f1';
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 800);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;
      const user = AuthStorage.getUser();
      
      if (!user || user.email !== email || user.password !== password) {
        msg.textContent = 'Неверный email или пароль.';
        msg.style.color = '#ff6b6b';
        return;
      }
      
      msg.textContent = 'Вход успешен. Перенаправление...';
      msg.style.color = '#6366f1';
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 600);
    });
  }
}); 