
'use strict';

// Задача 4.11.2

// Напишите рекурсивную функцию, которая принимает один параметр массив,  генерирует целое число от 0 до 10 включительно и добавляет его в массив.

// Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма 50 или больше, то функция возвращает этот массив.


const array = [];

const genArray = array => {

  // переменная для рандомного числа
  let randomNum;

  // рандомное число
  randomNum = Math.ceil(Math.random() * 11);

  // добавляем рандомное число в массив
  array.push(randomNum);

  // считаем сумму элементов массива
  // acc — текущее значение аккумулятора; arr — сам массив, который мы перебираем. Используем каллбек ф-ию.
  const sum = array.reduce((acc, arr) => acc + arr, 0);

  if (sum > 50) {
    return array;
  }
  console.log(sum);
  console.log(array);
  genArray(array);
};
genArray(array);



// console.log(genArray(10));


// const array = [];

// function genArray(max) {

//   let randomNum;

// randomNum = Math.ceil(Math.random()* max);

// };

// console.log(genArray(10));


// // запускаем функцию, передаем параметр numbers
// function generator(num, n, m) {

//   // задаем пустой массив, куда потом передадим данные
//   const newArr = [];
//   // задаем переменную random для генерации случайных чисел
//   let random;

//   // запускаем цикл с 1 элемента, меньше чем n, с шагом +1
//   for (let i = 0; i < num; i++) {

//     // создаем рандом число, с округлением вверх, умножая на разницу между минимальным и максимальным числом, прибавить минимальное число

//     // Мы умножаем на (max-min), чтобы преобразовать диапазон [0,1] в [0, max-min]. Далее, чтобы получить случайное число в нужном диапазоне, мы складываем min. Наконец, мы округляем это до целого числа, используя Math.ceil()
//     random = Math.ceil(Math.random() * (Math.max(n, m) - Math.min(n, m))) + Math.min(n, m);

//     // кладем данные в массив newArr после вычисления, которое выполняется в random
//     newArr.push(random);
//   }

//   // возвращаем значение массива newArr
//   return newArr;
// }

// // выводим в консоль функцию, с заданным значением переменной (n)
// console.log(generator(num, n, m));

//   genArray();
// };

// genArray();
