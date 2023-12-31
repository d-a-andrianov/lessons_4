'use strict'

// Задача 4.7.5

// Создайте файл game01.js

// Написать простой игровой бот "Угадай число", который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

function guessNumber() {

  let randomNumber;

  randomNumber = Math.ceil(Math.random() * 100);

  console.log(randomNumber);

  while (true) {

    let userNumber = prompt('введите число', '');

    if (userNumber === null) {
      break;
    }
    // prompt возвращает текст, знаком + приводим тип данных к числовому
    userNumber = +userNumber;

    if (isNaN(userNumber)) {
      alert('Введи число! (пользователь ввел не число) ');
      continue;
    }

    else if (userNumber < 1 || userNumber > 100) {
      alert('Введите число от 1 до 100');
      continue;
    }

    else if (randomNumber == userNumber) {
      alert('Правильно! (пользователь вводит правильное число) ');
      break;
    }

    else if (randomNumber < userNumber) {
      alert('Меньше! (пользовательское число больше, чем загаданное) ');
      // continue;
    }

    else if (randomNumber > userNumber) {
      alert('Больше! (пользовательское число меньше, чем загаданное) ');
      // continue;
    }
  }
}

console.log(guessNumber());
