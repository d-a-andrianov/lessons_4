'use strict'

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const result = allStudents.filter(el_allStudents => !failedStudents.includes(el_allStudents));

console.log (result);

// var marvelHeroes =  heroes.filter(function(hero) {
//     return hero.franchise == “Marvel”;
// });