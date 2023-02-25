"use strict";

// alert('Hello');
//
// const result = confirm("Are you here?");
//
// console.log(result);

// const answer = prompt("How old are you?", "18 is old");
// console.log(typeof (answer));

// const answer = [];
//
// answer[0] = prompt("Как тебя завут?", "Ivan");
// answer[1] = prompt("Как твоя фамилия?", " Ivanov");
// answer[2] = prompt("Сколько тебе лет?", " 00");
// document.write(answer);
// console.log(answer);

// const category = 'toys';
// console.log(`https://test.com/${category}/5`)

// let user = "Alex";
// alert(`Hello my friend ${user}`);

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренный фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренный фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
