/*Зміна мови*/ 
function changeLanguage(lang) {
    const translations = {
  
      'ua': {
        //Зміна шапки
        'home': 'Головна',
        'movies': 'Фільми',
        'series': 'Серіали',
        'englishMovies': 'Фільми англійською',
        'top100': 'ТОП 100',
        'about': 'Про автора',
  
        //Зміна Заголовків
  
        'welcomeMessage': 'Ласкаво просимо на наш сайт!',
        'selection': 'Тут ви можете знайти великий вибір різних фільмів для перегляду.',
        'noResultsMessage': 'Фільм не знайдено. Будь ласка, змініть ваш запит або перевірте правильність написання назви фільму',
  
        'moviesHeading': 'Фільми',
        'seriesHeading': 'Серіали',
        'englishMoviesHeading': 'Фільми англійською',
        'aboutHeading': 'Про автора',
        'about-text': 'Привіт, я студент, що вивчає програмування в Київському Коледжі Зв\'язку та присвятив цей сайт своїй дипломній роботі. Я захоплююся розробкою веб-сайтів та створенням крутих інтерфейсів.',
  
        //Зміна назви фільмів
  
        'Чорний Ворон': 'Чорний Ворон',
        '13-ий район': '13-ий район',
        'Шаолинь': 'Шаолінь',
        'Час': 'Час',
        'Погані хлопці назавжди': 'Погані хлопці назавжди',
  
        'contact-info': 'Контактна інформація',
        'communication': 'Для спілкування, співпраці та запитань:',
        'phone': 'Телефон:+380982023020',
        'social-media': 'Соціальні мережі',
        'join': 'Приєднуйтесь до мене в соціальних мережах, щоб бути в курсі новин та оновлень:',
        'all-rights': '© 2023 Всі права захищені | Дизайн та розробка: Brytiuk Bohdan',



        //Сортування переклад

        'sorting-label': 'Сортування:',
        'year-option': 'Рік',
        'year-desc-option': 'За роком випуску (новіші)',
        'year-asc-option': 'За роком випуску (старіші)',
        'genre-option': 'Всі жанри',
        'drama-option': 'Драма',
        'action-option': 'Екшн',
        'crime-option': 'Кримінал',
        'fantasy-option': 'Фантастика',
        'comedy-option': 'Комедія',
        'adventure-option': 'Пригоди',
        'country-option': 'Всі країни',
        'france-option': 'Франція',
        'usa-option': 'США',
        'china-option': 'Китай',
        'ukraine-option': 'Україна',
        'language-option': 'Всі мови',
        'ukrainian-option': 'Українська',
        'russian-option': 'Російська',
        'english-option': 'Англійська',
        'category-option': 'Всі категорії',
        'movies-option': 'Фільми',
        'series-option': 'Серіали',
        'english-movies-option': 'Фільми англійською',
  
  
        'badBoysForever': {
          'heading': 'Погані хлопці назавжди',
          'releaseYear': 'Рік випуску:',
          'genre': 'Жанр:',
          'directors': 'Режисер:',
          'cast': 'У ролях:',
          'duration': 'Тривалість:',
          'country': 'Країна:',
          'language': 'Озвучення:',
        },
  
      },
      'en': {
         //Зміна шапки
         'home': 'Home',
         'movies': 'Movies',
         'series': 'Series',
         'englishMovies': 'English Movies',
         'top100': 'Top 100',
         'about': 'About Author',
  
         //Зміна Заголовків
  
        'welcomeMessage': 'Welcome to our website!',
        'selection': 'Here you can find a great selection of various movies to watch.',
        'noResultsMessage': 'Movie not found. Please change your request or check the correct spelling of the movie title',
        'moviesHeading': 'Movies',
        'seriesHeading': 'Series',
        'englishMoviesHeading': 'English Movies',
        'aboutHeading': 'About Author',
        'about-text': 'Hello, I am a student studying programming at Kyiv College of Communication and dedicated this site to my diploma work. I am passionate about web development and creating cool interfaces.',
  
        //Зміна назви фільмів
  
        'Чорний Ворон': 'Black Woron',
        '13-ий район': '13th District',
        'Шаолинь': 'Shaolin',
        'Час': 'Time',
        'Погані хлопці назавжди': 'Bad Boys Forever',
  
        'contact-info': 'Contact Information',
        'communication': 'For communication, collaboration, and inquiries:',
        'phone': 'Phone: +380982023020',
        'social-media': 'Social Media',
        'join': 'Join me on social media to stay updated on news and updates:',
        'all-rights': '© 2023 All rights reserved | Design and Development: Brytiuk Bohdan',


        //Сортування переклад

        'sorting-label': 'Sorting:',
        'year-option': 'Year',
        'year-desc-option': 'By release year (newest)',
        'year-asc-option': 'By release year (oldest)',
        'genre-option': 'All genres',
        'drama-option': 'Drama',
        'action-option': 'Action',
        'crime-option': 'Crime',
        'fantasy-option': 'Fantasy',
        'comedy-option': 'Comedy',
        'adventure-option': 'Adventure',
        'country-option': 'All countries',
        'france-option': 'France',
        'usa-option': 'USA',
        'china-option': 'China',
        'ukraine-option': 'Ukraine',
        'language-option': 'All languages',
        'ukrainian-option': 'Ukrainian',
        'russian-option': 'Russian',
        'english-option': 'English',
        'category-option': 'All categories',
        'movies-option': 'Movies',
        'series-option': 'Series',
        'english-movies-option': 'English Movies',
  
  
        // Переклад для фільму
        'badBoysForever': {
        'heading': 'Bad Boys Forever',
        'releaseYear': 'Release Year:',
        'genre': 'Genre:',
        'directors': 'Directors:',
        'cast': 'Cast:',
        'duration': 'Duration:',
        'country': 'Country:',
        'language': 'Language:',
        'description': 'Description:'
                },
      },  
};
  
    const selectedLang = translations[lang];
  
    //Шапка
    document.querySelector('.nav-menu ul li:nth-child(1) a').textContent = selectedLang['home'];
    document.querySelector('.nav-menu ul li:nth-child(2) a').textContent = selectedLang['movies'];
    document.querySelector('.nav-menu ul li:nth-child(3) a').textContent = selectedLang['series'];
    document.querySelector('.nav-menu ul li:nth-child(4) a').textContent = selectedLang['englishMovies'];
    document.querySelector('.nav-menu ul li:nth-child(5) a').textContent = selectedLang['top100'];
    document.querySelector('.nav-menu ul li:nth-child(6) a').textContent = selectedLang['about'];
  
    //Зміна тексту нема результатів
    document.getElementById('noResultsMessage').textContent = selectedLang['noResultsMessage'] || translations['noResultsMessage'];
  
    //Зміна назв заголовків
    document.getElementById('home').getElementsByTagName('h2')[0].textContent = selectedLang['welcomeMessage'];
    document.getElementById('home').querySelector('p').textContent = selectedLang['selection'];
    document.getElementById('movies').getElementsByTagName('h2')[0].textContent = selectedLang['moviesHeading'];
    document.getElementById('series').getElementsByTagName('h2')[0].textContent = selectedLang['seriesHeading'];
    document.getElementById('english-movies').getElementsByTagName('h2')[0].textContent = selectedLang['englishMoviesHeading'];
    document.getElementById('about').getElementsByTagName('h2')[0].textContent = selectedLang['aboutHeading'];
    document.getElementById('about').querySelector('p').textContent = selectedLang['about-text'];
  
    // Зміна футеру
    document.querySelector('.footer-contact h3').textContent = selectedLang['contact-info'];
    document.querySelector('.footer-contact p').textContent = selectedLang['communication'];
    document.querySelector('.footer-social h3').textContent = selectedLang['social-media'];
    document.querySelector('.footer-social p').textContent = selectedLang['join'];
    document.querySelector('.footer-bottom p').textContent = selectedLang['all-rights'];
    
    
   //Зміна назв фільмів
    document.querySelectorAll('.movies-list .movie h3').forEach((element) => {
      const translationKey = element.getAttribute('data-translation-key');
      element.textContent = selectedLang[translationKey] || translationKey;
    });

    //Сортування переклад

    // Зміна тексту внутрішнього HTML для кожного вибору у випадаючому списку
    document.querySelector('.sort1').textContent = selectedLang['sorting-label'];

document.getElementById('sortSelect').querySelectorAll('option').forEach((option, index) => {
    option.textContent = selectedLang[`year-option`];
    if (index === 1) option.textContent = selectedLang['year-desc-option'];
    if (index === 2) option.textContent = selectedLang['year-asc-option'];
});

document.getElementById('genreSelect').querySelectorAll('option').forEach((option, index) => {
    option.textContent = selectedLang['genre-option'];
    if (index === 1) option.textContent = selectedLang['drama-option'];
    if (index === 2) option.textContent = selectedLang['action-option'];
    if (index === 3) option.textContent = selectedLang['crime-option'];
    if (index === 4) option.textContent = selectedLang['fantasy-option'];
    if (index === 5) option.textContent = selectedLang['comedy-option'];
    if (index === 6) option.textContent = selectedLang['adventure-option'];
});

document.getElementById('countrySelect').querySelectorAll('option').forEach((option, index) => {
    option.textContent = selectedLang['country-option'];
    if (index === 1) option.textContent = selectedLang['france-option'];
    if (index === 2) option.textContent = selectedLang['usa-option'];
    if (index === 3) option.textContent = selectedLang['china-option'];
    if (index === 4) option.textContent = selectedLang['ukraine-option'];
});

document.getElementById('languageSelect').querySelectorAll('option').forEach((option, index) => {
    option.textContent = selectedLang['language-option'];
    if (index === 1) option.textContent = selectedLang['ukrainian-option'];
    if (index === 2) option.textContent = selectedLang['russian-option'];
    if (index === 3) option.textContent = selectedLang['english-option'];
});

document.getElementById('categorySelect').querySelectorAll('option').forEach((option, index) => {
    option.textContent = selectedLang['category-option'];
    if (index === 1) option.textContent = selectedLang['movies-option'];
    if (index === 2) option.textContent = selectedLang['series-option'];
    if (index === 3) option.textContent = selectedLang['english-movies-option'];
});

}