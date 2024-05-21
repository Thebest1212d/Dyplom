function changeVideo(videoSrc) {
  var videoPlayer = videojs('my-video');
  videoPlayer.src({
    src: videoSrc,
    type: 'video/mp4'
  });
  videoPlayer.load(); // Завантаження нового відео
}



document.getElementById('themeToggle').addEventListener('change', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
});

const toggleSwitch = document.querySelector('.switch input');

function switchTheme(event) {
  const body = document.body;
  if (event.target.checked) {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  const body = document.body;
  body.setAttribute('data-theme', currentTheme);
  body.classList.toggle('dark-mode', currentTheme === 'dark');
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;  
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// Зберегти час відтворення під час паузи або завершення відтворення
const videoPlayer = videojs('my-video');

videoPlayer.ready(function() {
  videoPlayer.on('pause', function() {
    localStorage.setItem('savedTime', videoPlayer.currentTime());
  });

  videoPlayer.on('ended', function() {
    localStorage.setItem('savedTime', 0); // Якщо відтворення завершено, зберегти 0
  });

  // Перевірити, чи є збережений час відтворення
  const savedTime = localStorage.getItem('savedTime');
  if(savedTime) {
    videoPlayer.currentTime(savedTime);
  }
});


// Функція пошуку
function performSearch() {
  // Отримання значення з поля введення
  const searchText = document.getElementById('searchInput').value.toLowerCase();

  // Всі розділи з фільмами
  const movieSections = document.querySelectorAll('.movies-list');

  // Флаг, що вказує на те, чи були знайдені результати
  let resultsFound = false;

  // Перегляд кожного розділу та додавання або видалення фільмів відповідно до умови пошуку
  movieSections.forEach(section => {
    const movies = section.querySelectorAll('.movie');

    movies.forEach(movie => {
      const title = movie.querySelector('h3').textContent.toLowerCase();
      const isMatch = title.includes(searchText);

      // Відображення або приховання фільму відповідно до умови пошуку
      movie.style.display = isMatch ? 'block' : 'none';

      // Встановлення флагу, якщо хоча б один фільм знайдено
      if (isMatch) {
        resultsFound = true;
      }
    });
  });

  // Повідомлення про відсутність результатів
  const noResultsMessage = document.getElementById('noResultsMessage');
  if (!resultsFound) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
  }
}

// Функція визначення змін у полі введення
function searchOnInput() {
  // Виклик функції пошуку при зміні тексту
  performSearch();
}


function sortFilms() {
  const sortSelect = document.getElementById('sortSelect');
  const moviesList = document.querySelector('.movies-list');
  const movies = Array.from(moviesList.querySelectorAll('.movie'));

  // Визначаємо напрямок сортування в залежності від обраного параметру
  let sortOrder;
  if (sortSelect.value === 'yearDesc') {
      sortOrder = -1; // Новіші фільми першими
  } else {
      sortOrder = 1; // Старіші фільми першими
  }

  // Сортуємо елементи за роком випуску
  movies.sort((a, b) => {
      const yearA = parseInt(a.dataset.year);
      const yearB = parseInt(b.dataset.year);
      return sortOrder * (yearA - yearB);
  });

  // Переміщаємо відсортовані елементи назад у батьківський контейнер
  movies.forEach(movie => moviesList.appendChild(movie));
}

function filterByCountry() {
  var selectedCountry = document.getElementById("countrySelect").value;
  var selectedCategory = document.getElementById("categorySelect").value;
  var selectedLanguage = document.getElementById("languageSelect").value;
  var selectedGenre = document.getElementById("genreSelect").value;
  var movies = document.querySelectorAll(".movies-list .movie");

  movies.forEach(function(movie) {
    var country = movie.getAttribute("country");
    var category = movie.getAttribute("category");
    var language = movie.getAttribute("language");
    var genre = movie.getAttribute("genre");
    if ((selectedCountry === "" || country === selectedCountry) && 
        (selectedCategory === "" || category === selectedCategory) && 
        (selectedLanguage === "" || language === selectedLanguage) &&
        (selectedGenre === "" || genre === selectedGenre)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

function filterByLanguage() {
  var selectedLanguage = document.getElementById("languageSelect").value;
  var selectedCategory = document.getElementById("categorySelect").value;
  var selectedCountry = document.getElementById("countrySelect").value;
  var selectedGenre = document.getElementById("genreSelect").value;
  var movies = document.querySelectorAll(".movies-list .movie");

  movies.forEach(function(movie) {
    var language = movie.getAttribute("language");
    var category = movie.getAttribute("category");
    var country = movie.getAttribute("country");
    var genre = movie.getAttribute("genre");
    if ((selectedLanguage === "" || language === selectedLanguage) && 
        (selectedCategory === "" || category === selectedCategory) && 
        (selectedCountry === "" || country === selectedCountry) &&
        (selectedGenre === "" || genre === selectedGenre)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

function filterByCategory() {
  var selectedCategory = document.getElementById("categorySelect").value;
  var selectedCountry = document.getElementById("countrySelect").value;
  var selectedLanguage = document.getElementById("languageSelect").value;
  var selectedGenre = document.getElementById("genreSelect").value;
  var movies = document.querySelectorAll(".movies-list .movie");

  movies.forEach(function(movie) {
    var category = movie.getAttribute("category");
    var country = movie.getAttribute("country");
    var language = movie.getAttribute("language");
    var genre = movie.getAttribute("genre");
    if ((selectedCategory === "" || category === selectedCategory) && 
        (selectedCountry === "" || country === selectedCountry) && 
        (selectedLanguage === "" || language === selectedLanguage) &&
        (selectedGenre === "" || genre === selectedGenre)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

function filterByGenre() {
  var selectedGenre = document.getElementById("genreSelect").value;
  var selectedCategory = document.getElementById("categorySelect").value;
  var selectedCountry = document.getElementById("countrySelect").value;
  var selectedLanguage = document.getElementById("languageSelect").value;
  var movies = document.querySelectorAll(".movies-list .movie");

  movies.forEach(function(movie) {
    var genres = movie.getAttribute("genre").split(', '); // Розділити значення жанру на окремі частини

    // Перевірити, чи обраний жанр міститься серед жанрів фільму
    if ((selectedGenre === "" || genres.includes(selectedGenre)) &&
        (selectedCategory === "" || movie.getAttribute("category") === selectedCategory) &&
        (selectedCountry === "" || movie.getAttribute("country") === selectedCountry) &&
        (selectedLanguage === "" || movie.getAttribute("language") === selectedLanguage)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });

  movies.forEach(function(movie) {
    var genre = movie.getAttribute("genre");
    var category = movie.getAttribute("category");
    var country = movie.getAttribute("country");
    var language = movie.getAttribute("language");
    if ((selectedGenre === "" || genre === selectedGenre) && 
        (selectedCategory === "" || category === selectedCategory) && 
        (selectedCountry === "" || country === selectedCountry) &&
        (selectedLanguage === "" || language === selectedLanguage)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

