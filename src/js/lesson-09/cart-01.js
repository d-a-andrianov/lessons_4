'use strict'

// Создайте файл cart.js, подключите к html-файлу
// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:

// items = пустой массив - это товары
// totalPrice = 0 - общая стоимость корзины
// count = 0 - количество товаров
// и методы

// getTotalPrice - получить общую стоимость товаров
// add - добавить товар
// increaseCount - увеличить количество товаров
// calculateItemPrice - посчитать общую стоимость товаров
// clear - очистить корзину
// print - распечатать корзину

// Далее описание каждого метода
// getTotalPrice()
// метод возвращает значение свойства totalPrice
// calculateItemPrice()
// пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice 

// increaseCount()
// Принимает один параметр(число)
// Увеличивает свойство count на это число

// add()
// Принимает три параметра:
// название товара
// цену товара
// количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

// clear()
// Очищает полностью нашу корзину, возвращает все значения в изначальные

// print()
// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
// Для проверки работы функционала добавить 3 или более товаров в корзину
// После вызвать метод print для вывода информации в консоль

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },


  // getTotalPrice() {
  //   return this.totalPrice;
  // },
  // получить общую стоимость товаров

  add(name, price, amount=1) {
    const item = {
      name,
      price,
      amount,
    }
    this.items.push(item);
    // пушим в свойство items значения объекта item (они потом передаются вызывом метода add)
    this.increaseCount(amount);
    this.calculateItemPrice();
  },
  // добавить товар

  increaseCount(amount) {
    this.count = this.count + amount
    // на этом этапе складываем действующее значение кол-ва товаров и добавляем amount (то что уже передали в метод add)
  },
  
  //  увеличить количество товаров

  this.calculateItemPrice() {
    return items.reduce((acc, item) => acc+ (item.price*item.amount) ,0)
  },
  // вместо item можем указать в фигурных скобках значения которые будет считать (price и amount), например: (acc, {price,amount})
  // посчитать общую стоимость товаров
  // начинаем с 0 элемента (типо как цикл)
  
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  // очистить корзину

  print() {
    console.log(`${JSON.stringify(this.items)}  
    ${this.totalPrice}
    ${this.count}`
    );
  },  // распечатать корзину
};

cart.add("TV",100,3);
cart.add("note",2000,5);
cart.add("iphone",50000);
// добавляем в корзину товары, то что в скобках (параметры) передается в name, price, amount
cart.print();

// cart.clear();
// cart.print();