"use strict";

// alert('Hello');

// const result = confirm("Are you here?");

// console.log(result);

// const answer = prompt("How old are you?", "18 is old");
// console.log(typeof (answer));

// const answer = [];

// answer[0] = prompt("Как тебя завут?", "Ivan");
// answer[1] = prompt("Как твоя фамилия?", " Ivanov");
// answer[2] = prompt("Сколько тебе лет?", " 00");
// document.write(answer);
// console.log(answer);

// const category = 'toys';
// console.log(`https://test.com/${category}/5`)

// let user = "Alex";
// alert(`Hello my friend ${user}`);

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt("Один из последних просмотренный фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренный фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (5 == 4){
//     console.log("Super!")
// } else {
//     console.log("Error!")
// }

// let number = 50;
// if (number < 49) {
//     console.log("Error!");
// } else if (number > 100){
//     console.log("Это много");
// } else  {
//     console.log("Ok!")
// }

// (number === "50") ? console.log("Ok!") : console.log("Error!");

// switch (number) {
//     case 49:
//         console.log("Не верно");
//         break;
//     case 100:
//         console.log("Не верно");
//         break;
//     case 50 :
//         console.log("Верно");
//         break;
//     default:
//         console.log("Соррян, не в этот раз");
//         break;
// }

"use strict";

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = " ";
}

function backspace() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1);
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}
