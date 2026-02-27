const movies = [
  {
    title: 'Начало',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    tagline: 'Что если бы ваши сны могли быть украдены?',
    mainActor: {
      realName: 'Леонардо ДиКаприо',
      charName: 'Доминик Кобб',
      photo: 'https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      bio: 'Опытный вор, работающий в сфере корпоративного шпионажа. Умеет проникать в сны людей и похищать их секреты.'
    },
    actors: [
      { realName: 'Джозеф Гордон-Левитт', charName: 'Артур', photo: 'https://image.tmdb.org/t/p/w185/zSuXCR6xCKIgo9hFNfGdqb8F7GD.jpg' },
      { realName: 'Эллиот Пейдж', charName: 'Ариадна', photo: 'https://image.tmdb.org/t/p/w185/dSEKKamAopCQmCPvhUXMYY87L1H.jpg' },
      { realName: 'Том Харди', charName: 'Эймс', photo: 'https://image.tmdb.org/t/p/w185/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg' }
    ]
  },
  {
    title: 'Тёмный рыцарь',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    tagline: 'Почему так серьёзно?',
    mainActor: {
      realName: 'Кристиан Бэйл',
      charName: 'Брюс Уэйн / Бэтмен',
      photo: 'https://image.tmdb.org/t/p/w185/nIBklcAKuiMi0EPIjBGeFhFyNBX.jpg',
      bio: 'Миллиардер Брюс Уэйн стал тёмным стражем Готэма. Появление Джокера ставит его перед невозможным выбором.'
    },
    actors: [
      { realName: 'Хит Леджер', charName: 'Джокер', photo: 'https://image.tmdb.org/t/p/w185/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg' },
      { realName: 'Аарон Экхарт', charName: 'Харви Дент', photo: 'https://image.tmdb.org/t/p/w185/9PkZer3rRFBelzPMbKmQiP0XJq9.jpg' },
      { realName: 'Гэри Олдман', charName: 'Комиссар Гордон', photo: 'https://image.tmdb.org/t/p/w185/2v9FO1zI4JROUrivZCHBYVaOkWQ.jpg' }
    ]
  },
  {
    title: 'Интерстеллар',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    tagline: 'Следующий великий шаг человечества — за пределы нашей галактики.',
    mainActor: {
      realName: 'Мэттью МакКонахи',
      charName: 'Джозеф Купер',
      photo: 'https://image.tmdb.org/t/p/w185/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg',
      bio: 'Бывший пилот НАСА и фермер. Соглашается возглавить межзвёздную экспедицию ради спасения Земли.'
    },
    actors: [
      { realName: 'Джессика Честейн', charName: 'Мёрф Купер', photo: 'https://image.tmdb.org/t/p/w185/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg' },
      { realName: 'Энн Хэтэуэй', charName: 'Доктор Бренд', photo: 'https://image.tmdb.org/t/p/w185/tLelKoPNiyJCSEtQTXCFMvskCer.jpg' },
      { realName: 'Майкл Кейн', charName: 'Профессор Бренд', photo: 'https://image.tmdb.org/t/p/w185/lGRiYAqoV7iDKNe7M8a9IXKZ9eO.jpg' }
    ]
  },
  {
    title: 'Матрица',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    tagline: 'Добро пожаловать в реальный мир.',
    mainActor: {
      realName: 'Киану Ривз',
      charName: 'Томас Андерсон / Нео',
      photo: 'https://image.tmdb.org/t/p/w185/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
      bio: 'Программист днём и хакер ночью. Узнаёт, что является Избранным, способным остановить войну с машинами.'
    },
    actors: [
      { realName: 'Лоренс Фишборн', charName: 'Морфеус', photo: 'https://image.tmdb.org/t/p/w185/8suOhpnST4YTiijRD2B2sXPT5pd.jpg' },
      { realName: 'Кэрри-Энн Мосс', charName: 'Тринити', photo: 'https://image.tmdb.org/t/p/w185/rMmVCURApRHxkJBFgcz9NiMTAkM.jpg' },
      { realName: 'Хьюго Уивинг', charName: 'Агент Смит', photo: 'https://image.tmdb.org/t/p/w185/jXyWg03GZFKQS4KuMhx25cIBxqn.jpg' }
    ]
  },
  {
    title: 'Криминальное чтиво',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    tagline: 'Ты когда-нибудь замечал, что Паариж по-французски — это Пари?',
    mainActor: {
      realName: 'Джон Траволта',
      charName: 'Винсент Вега',
      photo: 'https://image.tmdb.org/t/p/w185/q7YGXjE3p78zH4LpD0RIFiCsm4Y.jpg',
      bio: 'Наёмный убийца, работающий на гангстера Марселаса Уоллеса. Любит бургеры и философские беседы.'
    },
    actors: [
      { realName: 'Сэмюэл Л. Джексон', charName: 'Джулс Уиннфилд', photo: 'https://image.tmdb.org/t/p/w185/nCJJ3NVgsZQ4bBX37PzAa2OBnCv.jpg' },
      { realName: 'Ума Турман', charName: 'Мия Уоллес', photo: 'https://image.tmdb.org/t/p/w185/8UZBT7TzKMYe4MWf7QdHGXCIkIy.jpg' },
      { realName: 'Брюс Уиллис', charName: 'Бутч Кулидж', photo: 'https://image.tmdb.org/t/p/w185/A1pGNnWRZSLAdPiGVEsTwJJDRRX.jpg' }
    ]
  },
  {
    title: 'Бойцовский клуб',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    tagline: 'Первое правило бойцовского клуба — не говорить о бойцовском клубе.',
    mainActor: {
      realName: 'Эдвард Нортон',
      charName: 'Рассказчик',
      photo: 'https://image.tmdb.org/t/p/w185/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg',
      bio: 'Безымянный офисный клерк, потерявший смысл жизни. Страдает от хронической бессонницы.'
    },
    actors: [
      { realName: 'Брэд Питт', charName: 'Тайлер Дёрден', photo: 'https://image.tmdb.org/t/p/w185/cckcYc2v0yh1tc9QjRelptcOBko.jpg' },
      { realName: 'Хелена Бонэм Картер', charName: 'Марла Сингер', photo: 'https://image.tmdb.org/t/p/w185/9s9LYwx1PXk7UmDi6XYMfAH8j4g.jpg' },
      { realName: 'Мит Лоаф', charName: 'Роберт Полсон', photo: 'https://image.tmdb.org/t/p/w185/4gGFBFqDiobDiRNmxJmEgVoXPRk.jpg' }
    ]
  },
  {
    title: 'Форрест Гамп',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    tagline: 'Жизнь — как коробка шоколадных конфет.',
    mainActor: {
      realName: 'Том Хэнкс',
      charName: 'Форрест Гамп',
      photo: 'https://image.tmdb.org/t/p/w185/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg',
      bio: 'Добросердечный парень из Алабамы с невероятной удачей. Ветеран Вьетнама и капитан креветочной лодки.'
    },
    actors: [
      { realName: 'Робин Райт', charName: 'Дженни Каррен', photo: 'https://image.tmdb.org/t/p/w185/0lHGKJQVLJ1mNHBEsNgXHQJo0WF.jpg' },
      { realName: 'Гэри Синиз', charName: 'Лейтенант Дэн', photo: 'https://image.tmdb.org/t/p/w185/kVILd9VgJ2qlT3JKmwUhYBPiFoH.jpg' },
      { realName: 'Мэйкелти Уильямсон', charName: 'Бабба Блю', photo: 'https://image.tmdb.org/t/p/w185/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg' }
    ]
  },
  {
    title: 'Побег из Шоушенка',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    tagline: 'Страх держит тебя в заточении. Надежда освобождает.',
    mainActor: {
      realName: 'Тим Роббинс',
      charName: 'Энди Дюфрейн',
      photo: 'https://image.tmdb.org/t/p/w185/wC1mBdRAFm5TDLSN9HKxo6tJBt1.jpg',
      bio: 'Бывший банкир, осуждённый за убийство, которого не совершал. Никогда не теряет надежды на свободу.'
    },
    actors: [
      { realName: 'Морган Фриман', charName: 'Рэд Реддинг', photo: 'https://image.tmdb.org/t/p/w185/jPssioI9NQBBl4SXsAgjOVQ0GrN.jpg' },
      { realName: 'Боб Гантон', charName: 'Начальник Нортон', photo: 'https://image.tmdb.org/t/p/w185/d5NTKBZmkbSjMBNPDKbXKGbUliT.jpg' },
      { realName: 'Уильям Сэдлер', charName: 'Хэйвуд', photo: 'https://image.tmdb.org/t/p/w185/iKWs5F3KHGAKhmVE7jxlwMVXlkV.jpg' }
    ]
  },
  {
    title: 'Гладиатор',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    tagline: 'Что мы делаем в жизни — отзывается эхом в вечности.',
    mainActor: {
      realName: 'Рассел Кроу',
      charName: 'Максимус Децим Меридий',
      photo: 'https://image.tmdb.org/t/p/w185/cGOPbv9wA5gEejkUN892eLZILteq.jpg',
      bio: 'Легендарный полководец Рима. После предательства становится гладиатором с целью отомстить.'
    },
    actors: [
      { realName: 'Хоакин Феникс', charName: 'Коммод', photo: 'https://image.tmdb.org/t/p/w185/nXMzvVF6xR3OXOedozfOcoA20xh.jpg' },
      { realName: 'Конни Нильсен', charName: 'Луцилла', photo: 'https://image.tmdb.org/t/p/w185/eCpwVFCuCIlDCaCqBgAOXvSCaxE.jpg' },
      { realName: 'Оливер Рид', charName: 'Проксимо', photo: 'https://image.tmdb.org/t/p/w185/8VlECAMnFXjRRUFpShQFO6LDIRC.jpg' }
    ]
  },
  {
    title: 'Крёстный отец',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    tagline: 'Предложение, от которого нельзя отказаться.',
    mainActor: {
      realName: 'Марлон Брандо',
      charName: 'Дон Вито Корлеоне',
      photo: 'https://image.tmdb.org/t/p/w185/fuTEPMDM9uqbgJxMuRbPpXLEBWa.jpg',
      bio: 'Глава семьи Корлеоне. Мудрый, терпеливый и беспощадный к врагам. Верит в силу семьи и традиций.'
    },
    actors: [
      { realName: 'Аль Пачино', charName: 'Майкл Корлеоне', photo: 'https://image.tmdb.org/t/p/w185/ks7Ba4pw1p5uFx6uYAjPBZOrsyY.jpg' },
      { realName: 'Джеймс Каан', charName: 'Сонни Корлеоне', photo: 'https://image.tmdb.org/t/p/w185/qO5u8LwGH14JfKMGjWS7C6X4oXj.jpg' },
      { realName: 'Роберт Дюваль', charName: 'Том Хэйген', photo: 'https://image.tmdb.org/t/p/w185/nNAeTmMcvRxHezMdRpnkIvXQLIF.jpg' }
    ]
  }
];

let currentIndex = 0;

function updatePoster(index) {
  const movie = movies[index];

  // Постер и заголовок
  const poster = document.getElementById('rotating-poster');
  const title = document.getElementById('poster-title');
  const tagline = document.getElementById('movie-tagline');

  if (poster) poster.src = movie.poster;
  if (title) title.textContent = movie.title;
  if (tagline) tagline.textContent = movie.tagline;

  // Главный актёр
  const mainPhoto = document.getElementById('main-actor-photo');
  const mainRealName = document.getElementById('main-actor-real-name');
  const mainCharName = document.getElementById('main-actor-char-name');
  const mainBio = document.getElementById('character-bio');

  if (mainPhoto) mainPhoto.src = movie.mainActor.photo;
  if (mainRealName) mainRealName.textContent = movie.mainActor.realName;
  if (mainCharName) mainCharName.textContent = movie.mainActor.charName;
  if (mainBio) mainBio.textContent = movie.mainActor.bio;

  // Второстепенные актёры
  [2, 3, 4].forEach((num, i) => {
    const photo = document.getElementById(`actor${num}-photo`);
    const realName = document.getElementById(`actor${num}-real-name`);
    const charName = document.getElementById(`actor${num}-char-name`);
    if (photo) photo.src = movie.actors[i].photo;
    if (realName) realName.textContent = movie.actors[i].realName;
    if (charName) charName.textContent = movie.actors[i].charName;
  });
}

function nextMovie() {
  currentIndex = (currentIndex + 1) % movies.length;
  updatePoster(currentIndex);
}

updatePoster(0);
setInterval(nextMovie, 5000);