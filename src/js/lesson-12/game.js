'use strict';

(() => {
const figures = ['камень', 'ножницы', 'бумага',];

// ф-ия получает число от мин до макс включительно (ссылка на функцию на мдм в описании)
// const getRandomIntInclusive = (min, max) => {
// };

const getRandomInt = (max) => {
return Math.floor(Math.random() * 3);
};

console.log(getRandomInt());

// сама игра
const game = () => {
// в замыкании хранится объект result, в нем результаты игр. Если кто-то выиграл значение увеличивается
const result = {
player: 0,
computer: 0,
};

// сама игра описана ф-ией start, которая возвращается
return function start() {
// Можно так: let playerChoice = prompt(`Выбери: ${figures.join(', ')}?`);
let playerChoice = prompt('Выбери: камень, ножницы или бумага?');

// присваиваем переменной computerChoice массив (getRandomInt() создает рандомное число и выбирает по индексу из массива рандомное значение: КНБ)
const computerChoice = figures[getRandomInt()];

// Ф-ия для подставления слова, при вводе первой буквы/слогово одного из слов: камень, ножницы, бумага
playerChoice = figures.find(item =>item.startsWith(playerChoice.toLowerCase()));

if (playerChoice === null) {
alert ('Вы хотите завершить игру?')
// не завершает игру при нажатии ОК
} else if (playerChoice === '') {
alert ('Вы ничего не ввели. Сделайте выбор')
} else if (!figures.includes(playerChoice)) {
alert ('Можно выбирать только предложенные варианты: камень, ножницы, бумага')
} else {
console.log('Запуск игры')
// запускаем ф-ию с правилами игры
gameplay(playerChoice, computerChoice);
}

// if (playerChoice === "") {
// confirm('Вы ничего не ввели. Сделайте выбор')
// } else if (playerChoice === null) {
// confirm('Вы хотите завершить игру?');
// } else if (!figures.includes(playerChoice)) {
// alert('Можно выбирать только предложенные варианты');
// start();
// }

// ф-ия с правилами игры
function gameplay(pc, user) {

if (pc === 'камень' && user === 'камень') {
alert('Ничья');
} else if (pc === 'камень' && user === 'ножницы') {
alert(`ПК выиграл ${++result.computer}`);
game();
} else if (pc === 'камень' && user === 'бумага') {
alert(`Мы выиграли ${++result.player}`);
game();
} else if (pc === 'ножницы' && user === 'камень') {
alert(`Мы выиграли ${++result.player}`);
game();
} else if (pc === 'ножницы' && user === 'ножницы') {
alert('Ничья');
game();
} else if (pc === 'ножницы' && user === 'бумага') {
alert(`ПК выиграл ${++result.computer}`);
game();
} else if (pc === 'бумага' && user === 'камень') {
alert(`ПК выиграл ${++result.computer}`);
game();
} else if (pc === 'бумага' && user === 'ножницы') {
alert(`Мы выиграли ${++result.player}`);
game();
} else if (pc === 'бумага' && user === 'бумага') {
alert('Ничья');
game();
}
console.log('pc', result.computer)
console.log('player', result.player)

}
return start();
};
};




// игра вынесена в window.RPS
window.RPS = game;
})();

//

// ф-ия для рандомного числа, от 0 до 2 включительно
// function getRandomInt(max) {
// return Math.floor(Math.random() * 3);
// }

// Код от Лескина
// (() => {
// const FIGURES_RUS = ['камень', 'ножницы', 'бумага',];

// // ф-ия получает число от мин до макс включительно (ссылка на функцию на мдм в описании)
// const getRandomIntInclusive = (min, max) => {
// };

// // усложненное задание для 2 языков
// const getFigure = lang => {

// };

// // сама игра
// const game = (language) => {
// // в замыкании хранится объект result, в нем результаты игр. Если кто-то выиграл значение увеличивается
// const result = {
// player: 0,
// computer: 0,
// };

// // сама игра описана ф-ией start, которая возвращается
// return function start () {

// };

// };

// // игра вынесена в window.RPS
// window.RPS = game;
// })();