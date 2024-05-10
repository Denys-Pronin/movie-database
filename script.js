const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovvieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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
    console.log("true");
  } else {
    i--;
    console.log("false");
  }
}

if (personalMovvieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovvieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
console.log(personalMovvieDB);
