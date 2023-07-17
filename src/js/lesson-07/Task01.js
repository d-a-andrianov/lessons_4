'use strict'

// Задача 4.7.1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // numbers.forEach(() => {
// //   console.log(1);
// // })

// const newArr = numbers.map((item) => {

//   return item.toString()
// })

// console.log(newArr);

// Первая задача:

// Напишите функцию генератор  массива случайных чисел в файле task01.js

// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;


// задаем кол-во эл-тов массива
const n = 100;

// запускаем функцию, передаем параметр numbers
function generator(numbers) {

  // задаем пустой массив, куда потом передадим данные
  const newArr = [];
  // задаем переменную random для генерации случайных чисел
  let random;

  // запускаем цикл с 1 элемента, меньше чем n, с шагом +1
  for (let i = 0; i < n; i++) {
    random = Math.ceil(Math.random() * 100) + 1;

    // кладем данные в массив newArr после вычисления, которое выполняется в random
    newArr.push(random);
  }

  // возвращаем значение массива newArr
  return newArr;
}

// выводим в консоль функцию, с заданным значением переменной (n)
console.log(generator(n));

