'use strict';

// ДЗ 4.2_1 Задача_Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу. В консоль выведите строку со значением количество товара, наименование и общую сумму + ДЗ 4.3_1 Задача_проверка что пользователь ввёл число, выдать ошибку если не число

{
  const productName = prompt('Укажите наименование товара');
  console.log(typeof productName);

  const productUnits = +prompt('Укажите количество товара');
  console.log(typeof productUnits);

  const productCategory = prompt('Укажите категорию товара');
  console.log(typeof productName);

  const productPrice = +prompt('Укажите цену товара');
  console.log(typeof productUnits);

  if (isNaN(productUnits) || isNaN(productPrice)) {
    alert('Вы ввели некорректные данные');
  } else {
    const productCurrency = 'деревянных';
    const productResult = (productUnits * productPrice);
    
    console.log(`На складе ${productUnits} единицы товара "${productName}" на сумму ${productResult} ${productCurrency}`);
  }
}

