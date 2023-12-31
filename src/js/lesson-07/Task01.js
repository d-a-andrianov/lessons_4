'use strict'

// Задача 4.7.1

// Первая задача:

// Напишите функцию генератор  массива случайных чисел в файле task01.js

// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;


// задаем кол-во эл-тов массива
const num = 10;

// запускаем функцию, передаем параметр numbers
function generator(num) {

  // задаем пустой массив, куда потом передадим данные
  const newArr = [];
  // задаем переменную random для генерации случайных чисел
  let random;

  // запускаем цикл с 1 элемента, меньше чем n, с шагом +1
  for (let i = 0; i < num; i++) {

    // создаем рандом число, с округлением вверх, умножая на 100, чтобы числа были без запятой
    random = Math.ceil(Math.random() * 100);

    // кладем данные в массив newArr после вычисления, которое выполняется в random
    newArr.push(random);
  }

  // возвращаем значение массива newArr
  return newArr;
}

// выводим в консоль функцию, с заданным значением переменной (n)
console.log(generator(num));

