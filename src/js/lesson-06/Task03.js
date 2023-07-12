'use strict'

// Задача 4.6.3
// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически
// Входящий массив:
// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
// Вызов функции:
// addPrefix(names, 'Mr')

// Результат функции:
// ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// запускаем ф-ию addPrefix с параметром names
const addPrefix = (names) => {
  // задаем 2 переменных, пустой массив и префикс
  const newNames =[];
  const prefix = ('Mr ');

  // запускаем цикл, будет выполняться с первогом эл-та (нулевого), пока i будеь меньше чем длина массива names, шаг +1 (++).
  for (let i = 0; i < names.length; i++) {
    // пока работает цикл, складываем префикс и элемент массива
  newNames[i] = prefix + names[i];
  }
  // возвращаем массив newNames
return newNames;
}
// выводим в консоль массив names
console.log(addPrefix(names));


// второй вариант решения

// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// // Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const addPrefix = names.map(names => 'Mr ' + names);

// console.log(addPrefix);


// третий вариант решения

// const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// // запускаем ф-ию arr
// const addPrefix = (arr) => {
//   let newnames = [];
//   for (let i = 0; i < arr.length; i++) {
//     newnames = (names.join('Mr '));
//   }

// };

// console.log(names);