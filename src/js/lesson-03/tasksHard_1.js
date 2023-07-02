'use strict';

const salary = +prompt('Укажите размер заработной платы');

if (salary <= 15000) {
  console.log(`Налог с заработной платы 13%, итого ${salary * 0.13} рублей`);
}
if (salary >= 15000 && salary < 50000) {
  console.log(`Налог с заработной платы 20%, итого ${salary * 0.20} рублей`);
}
if (salary >= 50000) {
  console.log(`Налог с заработной платы 30%, итого ${salary * 0.30} рублей`);
}