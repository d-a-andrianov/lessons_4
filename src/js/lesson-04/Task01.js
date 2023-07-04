'use strict'

// Задача 4.4.1
// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

const getChange = euro => {
  return euro * 1.2 * 73
};

console.log(getChange(100));

// const goToShop = (money) => {
//   console.log('пришли в молочный магазин');

//   const getMilk = (cash) => {
//     if (cash >= 60) {
//       cash -= 60;
//       return 'молоко';
//     }
//   };

//   const milk = getMilk(money);

//   console.log('пришли в хлебный киоск');

//   const getBread = (cash) => {
//     if (cash >= 40) {
//       cash -= 40;
//       return 'хлеб';
//     }
//   };

//   const bread = getBread(money);

//   console.log(money);

//   return `${milk} ${bread}`;
// }

// const result = goToShop(100);
// console.log('result: ', result);