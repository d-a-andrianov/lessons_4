'use strict'

// Задача 4.4.1
// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

const getChange = euro => {
  return euro * 1.2 * 73
};

console.log(`Стоимость покупки ${getChange(100)} рублей`);