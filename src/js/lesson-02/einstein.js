'use strict';

// ДЗ 4.2_2 задача 
// Создайте 2 константы myWeight и speedLight
// В myWeight запишите вашу массу тела (или кота), а в speedLight запишите скорость света 3e8
// Используя формулу E=mc2 посчитайте значение энергии вашего тела

{
  const myWeight = '92';
  const speedLight = '3e8';

  const energy = (myWeight * speedLight ** 2);
  console.log(`Энергия моего тела равна ${energy} Дж`);
}
