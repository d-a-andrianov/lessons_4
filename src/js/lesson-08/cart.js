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
  // пустой массив - это товары
  items: [],
  // общая стоимость корзины
  totalPrice: 0,
  // количество товаров
  count: 0,

  // получить общую стоимость товаров
  getTotalPrice () {
    return this.calculateItemPrice();
  },

  // добавить товар
  add (item, price, amount = 1) {
    const good = {
			item,
			price,
			amount,
		};
    this.items.push(good);
		this.increaseCount(amount);
  },

  // увеличить количество товаров
	increaseCount(amount) {
		this.count += amount;
	},

  // посчитать общую стоимость товаров
	calculateItemPrice() {
		return this.items.reduce((acc, item) => {
			return acc + item.price * item.amount;
		}, 0);
	},

  // очистить корзину
	clear() { 
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},

  // распечатать корзину
	print() {
		console.log(JSON.stringify(this.items));
		console.log(` Total price: ${this.getTotalPrice()}`);
		console.log(` Count: ${this.count}`);
	},
};

cart.add('note', 30000, 1);
cart.add('TV', 15000, 2);
cart.add('keyboard', 300, 10);
cart.print();