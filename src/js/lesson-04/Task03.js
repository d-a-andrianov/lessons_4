'use strict'

// Задача 4.4.3
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
// Порядок применения скидок должен соблюдаться

console.clear();

function cart(basketAmount, countGoods, promo = null) {
  let totalAmount = basketAmount;

  if (promo = 'ДАРИМ300' && basketAmount < 300) {
    totalAmount = 0;
    console.log('ДАРИМ300 ' + totalAmount);
  } else if (promo = 'ДАРИМ300') {
    totalAmount -= 300;
    console.log('ДАРИМ300 ' + totalAmount);
  }

  if (countGoods >= 10) {
    const countFiveProcent = basketAmount / 100 * 5;
    totalAmount -= countFiveProcent;
    console.log('больше 10 товаров ' + totalAmount);
  }

  if (basketAmount > 50000) {
    const countTwentyProcent = totalAmount / 100 * 20;
    const countDifference = totalAmount - 50000;
    totalAmount = countDifference - countTwentyProcent;
    console.log('больше 50 000 ₽ ' + totalAmount);
  }

  if (promo = 'СКИДКА15' && basketAmount >= 20000) {
    const countFifteenProcent = totalAmount / 100 * 15;
    totalAmount -= countFifteenProcent;
    console.log('СКИДКА15 ' + totalAmount);
  }
  console.log('Стоимость равна ' + totalAmount);
}

cart(100000, 12, 'ДАРИМ300');