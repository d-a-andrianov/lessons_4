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

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const addPrefix = names.map( names => 'Mr ' + names);

console.log(addPrefix);

// не ясно на сколько это всё правильно