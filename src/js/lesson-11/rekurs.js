'use strict';

// ф-ия возведения в степень

const pow = (n, power) => {
  // ф-ия принимает число (n) и число на которое будем возводить в степень (power)
  if (power === 1) {
    return n;
    // если power равен 1, будем возвращать число n
  } else {
    return pow(n, power - 1) * n;
    // иначе возвращаем вызов ф-ии pow
  }
};

console.log(pow(5, 5));
// выведем в консоль, запустив ф-ию pow

console.log(Math.pow(5, 5));
// проверка с помощью ф-ии pow

console.log(5 ** 5);
// проверка


// Функция для вычисления факториала

const factorial = n => {
  if (n === 0) {
    return 1;
    // если n равен 0, то мы возвращаем 1
  } else {
    return factorial(n - 1) * n
    // иначе будем вызывать ф-ию factorial, от будем отнимать 1 и умножать на n
  }
};

console.log(factorial(5));
// выводим в консоль и вызываем ф-ию factorial

console.log(1*2*3*4*5);
// проверка