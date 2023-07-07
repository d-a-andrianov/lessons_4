'use strict'

// Задача 4.5.3
// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"


function reverseStr(str) {

  var newStr = '', i;
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;
}
console.log (reverseStr('Привет мир!'));