'use strict';

(() => {

  const figures = [1, 2];

  // Ф-ия для получения рандомного числа, округление вниз, умножаем на 3, чтобы число было не больше 2. Итого число от 0 до 2
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * 2);
  };

  console.log(getRandomInt());

  // сама игра
  const game = () => {
    // в замыкании хранится объект result, в нем стартовое кол-во шаров. Если кто-то выиграл значение увеличивается/уменьшается
    const result = {
      player: 5,
      computer: 5,
    };

    // сама игра описана ф-ией start, которая возвращается
    return function start() {

      let playerChoice = prompt(`Выбери количество шариков от 1 до ${result.player}`);

      // присваиваем переменной computerChoice массив (getRandomInt() создает рандомное число и выбирает по индексу из массива рандомное значение: чет/нечет)
      const computerChoice = figures[getRandomInt()];
      // console.log(computerChoice);

      // Перезваписываем переменную, для корректной работы
      const playerChoice2 = playerChoice;

      // завершении игры при нажатии на отмену
      if (playerChoice2 === null) {
        alert(`Игра завершена. У ПК шариков: ${result.computer} - У нас шариков: ${result.player}`)
        return;

      } else if (playerChoice2 === '') {
        alert('Вы ничего не ввели. Сделайте выбор')

        // проверка на число
      } else if (isNaN(playerChoice2)) {
        alert('Вы ввели не число')

      } else if (playerChoice2 <= 0 || playerChoice > result.player) {
        alert(`Можно выбирать не меньше 1 и не больше оставшегося у нас количества шариков: ${result.player}`)

      } else {
        console.log('Запуск игры')
        // запускаем ф-ию с правилами игры
        gameplay(playerChoice2, computerChoice);
      }

      // ф-ия с правилами игры
      function gameplay(user, pc) {

        // проверка на победу ПК
        if (((pc % 2 == 0) && (user % 2 == 0)) || ((pc % 2 !== 0) && (user % 2 !== 0))) {
          result.computer += +user;
          result.player -= +user;
          alert(`ПК угадал`);
          game();

        } else {
          // Победа пользователя. Присваиваем в объект значение переменной через +=. Знаком + меняем переменную с prompt на число
          result.player += +user;
          result.computer -= +user;
          alert(`Игрок угадал`);
          game();
        }
      }

      // проверка на 0 или отрицательное значение, для завершения игры (вне ф-ии gameplay)
      if ((result.computer <= 0) || (result.player >= 10))  {
        alert(`Игра завершена. Мы набрали 10 шаров и выиграли, ура!`)
        return;   

      } else if ((result.player <= 0) || (result.computer >= 10)) {
        alert(`Игра завершена. ПК набрал 10 шаров и выиграл, попытайте удачу в следующий раз!`)
        return;   
      }
      console.log('player', result.player)
      console.log('pc', result.computer,)
      return start();
    };
  };
  
  // игра вынесена в window.Marbl
  window.Marbl = game;
})();
