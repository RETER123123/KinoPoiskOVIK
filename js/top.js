document.addEventListener('DOMContentLoaded', () => {
    // Навешиваем события на кнопки "Смотреть"
    document.querySelectorAll('.top-open-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (id) window.location.href = `movie.html?imdbID=${id}`;
      });
    });
  });