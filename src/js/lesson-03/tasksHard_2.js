'use strict';

{
  const salary = +prompt('Укажите размер заработной платы');
  let tax = 0;

  if (salary <= 15000) {
    tax += (salary * 0.13);
    console.log(`Налог с заработной платы: ${tax}`);
  } if
    (salary >= 15000 && salary < 50000) {
    tax += ((salary - 15000) * 0.2) + (15000 * 0.13);
    console.log(`Налог с заработной платы: ${tax}`);
  } if
    (salary >= 50000) {
    tax += (((50000 - 15000) * 0.3) + ((salary - 15000) * 0.2) + (15000 * 0.13));
    console.log(`Налог с заработной платы: ${tax}`);
  }
}