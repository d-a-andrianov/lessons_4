'use strict'

// Задача 4.6.4

// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив:

// const allCashbox = [
//   [12, 4500], 
//   [7, 3210], 
//   [4, 650], 
//   [3, 1250], 
//   [9, 7830], 
//   [1, 990], 
//   [6, 13900], 
//   [1, 370]
// ];

// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.


const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (allCashbox) => {

  // создаем пустую константу
  let sumAverageChek = 0;

  for (let i = 0; i < allCashbox.length; i++) {

    // allCashbox[i][1] - берем i-ый элемент массива, из него берем 1-ый элемент (по факту второй), / allCashbox[i][0] - делим это на 0-ой (по факту первый) элемент i-ого массива. Итого получаем например 4500 / 12 (1 строка массива)

    // берем 1-ый эл-т внутреннего массива (по факту второй) из i-го внешнего массива, делим на 0-ой эл-т внутреннего массива i-го внешнего массива, получаем стоимость одного товара в одном чеке.
    sumAverageChek  += (allCashbox[i][1] / allCashbox[i][0]);
  }

  // возвращаем посчитанную стоимость одного товара в каждом чеке, делим стоимость 1 товара в чеке на кол-во чеков (длину массива) 
  return (sumAverageChek / allCashbox.length).toFixed(2);
}
// вызываем функцию, в скобках указываем наш массив
console.log(getAveragePriceGoods(allCashbox));