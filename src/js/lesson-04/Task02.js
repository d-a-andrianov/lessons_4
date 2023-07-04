'use strict'

// Задача 4.4.2
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"

const getChangeText = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

console.log(getChangeText('привет Мир'));