"use strict";
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovvieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovvieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovvieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB({ privat }) {
  if (!privat) console.log(personalMovvieDB);
}

showMyDB(personalMovvieDB);

function writeYourGenres({ genres }) {
  for (let i = 0; i < 3; i++) {
    const genre = prompt(`Ваш любимый жанр по номером ${i + 1}`);

    if (genre != null && genre != "" && genre.length < 50) {
      genres[i] = genre;
      console.log("true");
    } else {
      i--;
      console.log("false");
    }
  }
}
writeYourGenres(personalMovvieDB);
