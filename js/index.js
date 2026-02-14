var movies = [
  {
    title: 'Inception',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    plot: 'Профессиональный вор крадет корпоративные секреты, используя технологию вторжения в сны.',
    year: '2010',
    genre: 'Sci-Fi, Action',
    rating: '8.8/10',
    mainActor: { 
      name: 'Leonardo DiCaprio', 
      photo: 'https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      character: 'Дом Кобб — вор, специализирующийся на извлечении секретов из подсознания людей во время сна.'
    },
    actors: [
      { name: 'Marion Cotillard', photo: 'https://image.tmdb.org/t/p/w500/4kw8ybottKAtKMnye0DzvloartS.jpg' },
      { name: 'Tom Hardy', photo: 'https://image.tmdb.org/t/p/w500/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg' },
      { name: 'Ellen Page', photo: 'https://image.tmdb.org/t/p/w500/eqJHPSKP5z3Ld5eNGRoFxfBdXFW.jpg' }
    ]
  },
  {
    title: 'The Dark Knight',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    plot: 'Когда угроза Джокер сеет хаос в Готэме, Бэтмен принимает величайший вызов.',
    year: '2008',
    genre: 'Action, Crime',
    rating: '9.0/10',
    mainActor: { 
      name: 'Christian Bale', 
      photo: 'https://image.tmdb.org/t/p/w500/3qx2QFUbG6t6IlzR0F9k3Z6Yhf7.jpg',
      character: 'Брюс Уэйн / Бэтмен — миллиардер-филантроп, защищающий Готэм от преступности.'
    },
    actors: [
      { name: 'Heath Ledger', photo: 'https://image.tmdb.org/t/p/w500/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg' },
      { name: 'Aaron Eckhart', photo: 'https://image.tmdb.org/t/p/w500/2SLkguRELD73Z6bVXlJdnFr8F7M.jpg' },
      { name: 'Michael Caine', photo: 'https://image.tmdb.org/t/p/w500/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg' }
    ]
  },
  {
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    plot: 'Команда исследователей путешествует через червоточину для спасения человечества.',
    year: '2014',
    genre: 'Adventure, Sci-Fi',
    rating: '8.7/10',
    mainActor: { 
      name: 'Matthew McConaughey', 
      photo: 'https://image.tmdb.org/t/p/w500/sY2mwpafcwqyYS1sOySu1MENDse.jpg',
      character: 'Джозеф Купер — бывший пилот НАСА, отправившийся в космос для поиска нового дома.'
    },
    actors: [
      { name: 'Anne Hathaway', photo: 'https://image.tmdb.org/t/p/w500/ssgNz3BexOv26D8IP7kzuDgcon4.jpg' },
      { name: 'Jessica Chastain', photo: 'https://image.tmdb.org/t/p/w500/vOFrDeYXILnj747dOleaNh4jK3l.jpg' },
      { name: 'Michael Caine', photo: 'https://image.tmdb.org/t/p/w500/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg' }
    ]
  },
  {
    title: 'The Matrix',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    plot: 'Хакер узнает шокирующую правду о своей реальности.',
    year: '1999',
    genre: 'Action, Sci-Fi',
    rating: '8.7/10',
    mainActor: { 
      name: 'Keanu Reeves', 
      photo: 'https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
      character: 'Нео — хакер, который узнает, что реальность — это компьютерная симуляция.'
    },
    actors: [
      { name: 'Laurence Fishburne', photo: 'https://image.tmdb.org/t/p/w500/8suOhUmPbfKqDQ17jQ1Gy0mI3P4.jpg' },
      { name: 'Carrie-Anne Moss', photo: 'https://image.tmdb.org/t/p/w500/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg' },
      { name: 'Hugo Weaving', photo: 'https://image.tmdb.org/t/p/w500/n3FCe3bMCg4WpvjToigBbugrW75.jpg' }
    ]
  },
  {
    title: 'Pulp Fiction',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    plot: 'Жизни наемных убийц и боксера переплетаются в историях насилия.',
    year: '1994',
    genre: 'Crime, Drama',
    rating: '8.9/10',
    mainActor: { 
      name: 'John Travolta', 
      photo: 'https://image.tmdb.org/t/p/w500/9GVufE87MMIrSn0CbJFLudkALdL.jpg',
      character: 'Винсент Вега — наемный убийца, работающий на криминального босса.'
    },
    actors: [
      { name: 'Samuel L. Jackson', photo: 'https://image.tmdb.org/t/p/w500/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg' },
      { name: 'Uma Thurman', photo: 'https://image.tmdb.org/t/p/w500/6Sjz9teWjrMY9lF2o9FCo4XmoRh.jpg' },
      { name: 'Bruce Willis', photo: 'https://image.tmdb.org/t/p/w500/A1XBu3CffBpSK8HEIJM8q7Mn4lz.jpg' }
    ]
  },
  {
    title: 'Fight Club',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    plot: 'Офисный работник и мыловар создают бойцовский клуб.',
    year: '1999',
    genre: 'Drama',
    rating: '8.8/10',
    mainActor: { 
      name: 'Brad Pitt', 
      photo: 'https://image.tmdb.org/t/p/w500/ajNaPmXVVMJFg9GWmu6MJzTaXdV.jpg',
      character: 'Тайлер Дёрден — харизматичный продавец мыла, создавший подпольный клуб.'
    },
    actors: [
      { name: 'Edward Norton', photo: 'https://image.tmdb.org/t/p/w500/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg' },
      { name: 'Helena Bonham Carter', photo: 'https://image.tmdb.org/t/p/w500/DDeITcCpnBd0CkAIRPhggy9bt5.jpg' },
      { name: 'Jared Leto', photo: 'https://image.tmdb.org/t/p/w500/msugySeTCyCmlRWtyB6sMixTQYY.jpg' }
    ]
  },
  {
    title: 'Forrest Gump',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    plot: 'История жизни простого человека, ставшего свидетелем ключевых событий.',
    year: '1994',
    genre: 'Drama, Romance',
    rating: '8.8/10',
    mainActor: { 
      name: 'Tom Hanks', 
      photo: 'https://image.tmdb.org/t/p/w500/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg',
      character: 'Форрест Гамп — простодушный человек с добрым сердцем.'
    },
    actors: [
      { name: 'Robin Wright', photo: 'https://image.tmdb.org/t/p/w500/9Ly5USA3NzreBSDhkTLkSmPGN1h.jpg' },
      { name: 'Gary Sinise', photo: 'https://image.tmdb.org/t/p/w500/5h1RKXuOy36z8lT44CPW1aHTOW.jpg' },
      { name: 'Sally Field', photo: 'https://image.tmdb.org/t/p/w500/5fBK4f2d8EETpWJq3TusPLw9rqP.jpg' }
    ]
  },
  {
    title: 'The Shawshank Redemption',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    plot: 'Два заключенных создают связь через годы, находя искупление.',
    year: '1994',
    genre: 'Drama',
    rating: '9.3/10',
    mainActor: { 
      name: 'Tim Robbins', 
      photo: 'https://image.tmdb.org/t/p/w500/hsCow4JWKvLsVOsW3f0XBW5vvzV.jpg',
      character: 'Энди Дюфрейн — банкир, ложно обвиненный в убийстве.'
    },
    actors: [
      { name: 'Morgan Freeman', photo: 'https://image.tmdb.org/t/p/w500/jPsLqiYGSofU4s6BjrxnefMfabb.jpg' },
      { name: 'Bob Gunton', photo: 'https://image.tmdb.org/t/p/w500/s3e2ozEKMQeyvxz4wYWWfbbIFBo.jpg' },
      { name: 'William Sadler', photo: 'https://image.tmdb.org/t/p/w500/gE6uitJPup1vCHZw9TLhKBvVRgf.jpg' }
    ]
  },
  {
    title: 'Gladiator',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    plot: 'Преданный генерал становится гладиатором и жаждет мести.',
    year: '2000',
    genre: 'Action, Adventure',
    rating: '8.5/10',
    mainActor: { 
      name: 'Russell Crowe', 
      photo: 'https://image.tmdb.org/t/p/w500/uxiXuVH4vNWrKlJMVVPG1sxAJFe.jpg',
      character: 'Максимус — предательски убитый римский генерал, ставший гладиатором.'
    },
    actors: [
      { name: 'Joaquin Phoenix', photo: 'https://image.tmdb.org/t/p/w500/ls72wfQl8AhRVFeBnotmnAdy3JR.jpg' },
      { name: 'Connie Nielsen', photo: 'https://image.tmdb.org/t/p/w500/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg' },
      { name: 'Oliver Reed', photo: 'https://image.tmdb.org/t/p/w500/5rHbRCKHXPzKTGssCoJIbjRMzBK.jpg' }
    ]
  },
  {
    title: 'The Godfather',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    plot: 'Стареющий патриарх криминальной династии передает контроль своему сыну.',
    year: '1972',
    genre: 'Crime, Drama',
    rating: '9.2/10',
    mainActor: { 
      name: 'Marlon Brando', 
      photo: 'https://image.tmdb.org/t/p/w500/fuTEPWdkYRhMaPRsFAqqRwBySL1.jpg',
      character: 'Дон Вито Корлеоне — глава могущественной мафиозной семьи.'
    },
    actors: [
      { name: 'Al Pacino', photo: 'https://image.tmdb.org/t/p/w500/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg' },
      { name: 'James Caan', photo: 'https://image.tmdb.org/t/p/w500/4FCGwuKTPJC4CKSerFfmY3AWKjO.jpg' },
      { name: 'Robert Duvall', photo: 'https://image.tmdb.org/t/p/w500/ybMmK25h4IVtfE7qrnlVp47RQlh.jpg' }
    ]
  }
];

var currentIndex = 0;

function updatePoster() {
  var movie = movies[currentIndex];
  
  var posterImg = document.getElementById('rotating-poster');
  var mainActorPhoto = document.getElementById('main-actor-photo');
  var actor2Photo = document.getElementById('actor2-photo');
  var actor3Photo = document.getElementById('actor3-photo');
  var actor4Photo = document.getElementById('actor4-photo');
  
  if (!posterImg || !mainActorPhoto) {
    console.error('Elements not found');
    return;
  }
  
  posterImg.style.opacity = '0';
  mainActorPhoto.style.opacity = '0';
  actor2Photo.style.opacity = '0';
  actor3Photo.style.opacity = '0';
  actor4Photo.style.opacity = '0';
  
  setTimeout(function() {
    posterImg.src = movie.poster;
    document.getElementById('poster-title').textContent = movie.title;
    document.getElementById('movie-plot').textContent = movie.plot;
    document.getElementById('movie-year').textContent = movie.year;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-rating').textContent = movie.rating;
    
    mainActorPhoto.src = movie.mainActor.photo;
    document.getElementById('main-actor-name').textContent = movie.mainActor.name;
    document.getElementById('character-bio').textContent = movie.mainActor.character;
    
    actor2Photo.src = movie.actors[0].photo;
    document.getElementById('actor2-name').textContent = movie.actors[0].name;
    
    actor3Photo.src = movie.actors[1].photo;
    document.getElementById('actor3-name').textContent = movie.actors[1].name;
    
    actor4Photo.src = movie.actors[2].photo;
    document.getElementById('actor4-name').textContent = movie.actors[2].name;
    
    posterImg.style.opacity = '1';
    mainActorPhoto.style.opacity = '1';
    actor2Photo.style.opacity = '1';
    actor3Photo.style.opacity = '1';
    actor4Photo.style.opacity = '1';
  }, 500);
  
  currentIndex = (currentIndex + 1) % movies.length;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded, starting movie rotation');
  updatePoster();
  setInterval(updatePoster, 20000);
});