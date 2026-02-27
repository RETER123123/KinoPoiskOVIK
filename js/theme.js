// Применяем тему сразу при загрузке любой страницы
(function () {
    const saved = localStorage.getItem('kp_theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark-theme');
    }
  })();