'use strict';

// ДЗ 4.1

const productName = 'Навигационная система Soundmax';
const productUnits = '5';
const productCategory = 'Техника для дома';
const productPrice = '100';
const productCurrency = '$';

const productResult = (productUnits * productPrice);

console.log(productName);
console.log(productResult + productCurrency);

// ДЗ 4.2_1 задача

{
  const productName = prompt('Укажите наименование товара');
  console.log(typeof productName);

  const productUnits = +prompt('Укажите количество товара');
  console.log(typeof productUnits);

  const productCategory = prompt('Укажите категорию товара');
  console.log(typeof productName);

  const productPrice = +prompt('Укажите цену товара');
  console.log(typeof productUnits);

  const productCurrency = 'деревянных';

  const productResult = (productUnits * productPrice);

  console.log(`На складе ${productUnits} единицы товара "${productName}" на сумму ${productPrice} ${productCurrency}`);
}

