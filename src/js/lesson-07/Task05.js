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

  // +prompt принимает только число
  let userNumber = prompt('введите число', '');

  if (userNumber === null) {
    break;
  } 

  if (randomNumber < userNumber) {
    alert('Меньше! (пользовательское число больше, чем загаданное) ');
  }

  if (randomNumber > userNumber) {
    alert('Больше! (пользовательское число меньше, чем загаданное) ');
  }

  if (randomNumber == userNumber) alert('Правильно! (пользователь вводит правильное число) ');

  if (isNaN(userNumber)) alert('Введи число! (пользователь ввел не число) ');

 

  }

console.log(guessNumber());
