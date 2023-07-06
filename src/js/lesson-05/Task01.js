// Задача 4.5.1
// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения

'use strict'

  for (let i = 1; i < 11; i++ ) {
    console.log('----------');
    for (let y = 1; y < 11; y++) {
      console.log(`${i}'${y} = ${i ** y} `);
  }
}



// for (let i = 0; i < 10; i += 1) {
//     if (i % 3) continue;
//     console.log(i)
// }