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
      // let playerChoice = prompt(`Выбери: ${figures.join(', ')}?`);
      let playerChoice = prompt('Выбери: камень, ножницы или бумага?');
      
      if (playerChoice === "") {
        confirm('Вы ничего не ввели. Сделайте выбор');
      };
      if (playerChoice === null) {
        confirm('Вы хотите завершить игру?');
        return;
      };
      if (!figures.includes(playerChoice)) {
        alert('Можно выбирать только предложенные варианты');
        return start();
      }

      console.log(('Выбор игрока:'), playerChoice);
      //  присваиваем переменной computerChoice массив (не разобрался что за массив) или просто getRandomInt() если нужен индекс
      const computerChoice = figures[getRandomInt()];

      if (computerChoice === playerChoice) {
        alert('Ничья')
      }

      console.log(('Выбор ПК:'), computerChoice);
      
      return start();
    };
};


  // игра вынесена в window.RPS
  window.RPS = game;
})();

// 

// ф-ия для рандомного числа, от 0 до 2 включительно
// function getRandomInt(max) {
//   return Math.floor(Math.random() * 3);
// }

// Код от Лескина
// (() => {
//   const FIGURES_RUS = ['камень', 'ножницы', 'бумага',];

//   // ф-ия получает число от мин до макс включительно (ссылка на функцию на мдм в описании)
//   const getRandomIntInclusive = (min, max) => {
//   };

//   // усложненное задание для 2 языков
//   const getFigure = lang => {

//   };

//   // сама игра
//   const game = (language) => {
//     // в замыкании хранится объект result, в нем результаты игр. Если кто-то выиграл значение увеличивается
//     const result = {
//       player: 0,
//       computer: 0,
//     };

//     // сама игра описана ф-ией start, которая возвращается
//     return function start () {

//     };

//   };

//   // игра вынесена в window.RPS
//   window.RPS = game;
// })();