"use strick";

// let number = 5.7;

// // console.log(-4/0);
// // console.log('string' * 9);

// const persone = `Alex`;
// // console.log(persone);

// const object = {
//     name: "John",
//     age: 25,
//     isMarried: false,
// };

// // console.log(object.isMarried);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[0]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "19");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What your name?', '');
// answers[1] = prompt('What your last name?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === 8);

// const isChecker = true,
//       isClose = false;

// console.log(isChecker || isClose);

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     gentres: [],
//     privat: false

// };

// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDb.movies.a = b;
//       personalMovieDb.movies.c = d;

//       console.log(personalMovieDb);

// if (4 == 4) {
//     console.log('ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('OK!') : console.log('Error');

const num = 1000;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}