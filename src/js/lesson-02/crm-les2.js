'use strict';

// ДЗ 4.2.1 
// Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу
// Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара". Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так-то поправьте. В консоль выведите строку со значением количество товара, наименование и общую сумму пример: "На складе 3 единицы товара "Приставка денди" на сумму 6600 деревянных"

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

  console.log(`На складе ${productUnits} единицы товара "${productName}" на сумму ${productResult} ${productCurrency}`);
}

