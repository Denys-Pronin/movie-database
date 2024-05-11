"use strict";
const personalMovvieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovvieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovvieDB.count == null ||
      personalMovvieDB.count == "" ||
      isNaN(personalMovvieDB.count)
    ) {
      personalMovvieDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const film = prompt("Один из последних просмотренных фильмов?", ""),
        rating = prompt("На сколько оцените его?", "");
      if (
        film != null &&
        rating != null &&
        film != "" &&
        rating != "" &&
        film.length < 50
      ) {
        personalMovvieDB.movies[film] = rating;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovvieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovvieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: ({ privat }) => {
    if (!privat) console.log(personalMovvieDB);
  },
  toggleVisibleMyDB: () => {
    if (personalMovvieDB.privat) {
      personalMovvieDB.privat = false;
    } else {
      personalMovvieDB.privat = true;
    }
  },
  writeYourGenres: ({ genres }) => {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимый жанр по номером ${i + 1}`);

      if (genre != null && genre != "" && genre.length < 50) {
        genres[i] = genre;
      } else {
        i--;
      }
    }
    genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

personalMovvieDB.start();
personalMovvieDB.rememberMyFilms();
personalMovvieDB.detectPersonalLevel();
personalMovvieDB.showMyDB(personalMovvieDB);
personalMovvieDB.writeYourGenres(personalMovvieDB);
