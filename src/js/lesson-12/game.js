'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага',];

  // ф-ия получает число от мин до макс включительно (ссылка на функцию на мдм в описании)
  // const getRandomIntInclusive = (min, max) => {
  // };

  // Ф-ия для получения рандомного числа, округление вниз, умножаем на 3, чтобы число было не больше 2. Итого число от 0 до 2
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
      playerChoice = figures.find(item => item.startsWith(playerChoice.toLowerCase()));

      if (playerChoice === null) {
        alert('Вы хотите завершить игру?')
        if (confirm('Точно хотите завершить игру?'))
        resultGame();
        return;

        // не завершает игру при нажатии ОК
      } else if (playerChoice === '') {
        alert('Вы ничего не ввели. Сделайте выбор')
      } else if (!figures.includes(playerChoice)) {
        alert('Можно выбирать только предложенные варианты: камень, ножницы, бумага')
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

        if ((pc === user)) {
          alert('Ничья');
          game();
        
          // поиск ответа из массива по индексу
        } if ((pc === figures[0] && user === figures[1]) || (pc === figures[1] && user === figures[2]) || (pc === figures[2] && user === figures[0])) {
          ++result.computer;
          alert(`ПК выиграл: ${result.computer} - Мы выиграли: ${result.player}`);
          game();

        } if ((pc === figures[0] && user === figures[2]) || (pc === figures[1] && user === figures[0]) || (pc === figures[2] && user === figures[1])) {
          ++result.player;
          alert(`ПК выиграл: ${result.computer} - Мы выиграли: ${result.player}`);
          game();
        }

        console.log('pc', result.computer,)
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