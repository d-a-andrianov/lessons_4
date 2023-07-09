'use strict'



const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const result = allStudents.filter(el_allStudents => !failedStudents.includes(el_allStudents));

    console.log (allStudents[allStudents.length-1]);
