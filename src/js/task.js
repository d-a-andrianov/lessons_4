'use strict';

// ДЗ 4.3_2 Задача. С помощью Math.Random и Math.round напишите выражение, которое будет возвращать 1 или 0. Далее используя условную конструкцию выведите сообщение.

let rain = Math.round(Math.random());

if (rain = 1) {
  console.log ('Пошёл дождь. Возьмите зонт!');}
  if (rain = 0) {
    console.log ('Дождя нет!');
}

// ДЗ 4.3_3 Задача. Артур хочет поступить на бюджет в институт, для этого ему нужно хорошо сдать три экзамена и набрать минимум 265 баллов. Напишите программу, которая запрашивает у пользователя (prompt) результаты экзаменов по трём направлениям и проверяет, поступил он в институт или нет.

  const mathematics = prompt('Введите кол-во баллов по математике:');

  const russian = +prompt('Введите кол-во баллов по русскому языку:');

  const informatics = prompt('Введите кол-во баллов по информатике:');

  const result = (mathematics + russian + informatics);

  if (result >= '265') {
    alert ('Поздравляю, вы поступили на бюджет!');}
    if (result < '265') {
      alert ('К сожалению, вы не поступили на бюджет!');
  }


  // ДЗ 4.3_4 Задача. Вам необходимо написать программу для банкомата, который может выдавать минимальные купюры 100р. Ваша программа должна проверить, сможет ли банкомат выдать сумму, которую запросил Владимир

  const atm = prompt('Сколько денег Вы хотите снять?');

    if (atm % 100 == 0) {
      console.log ('Выдать денежные средства');}
    if (atm % 100 != 0) {
      console.log ('В операции отказано');
  }

