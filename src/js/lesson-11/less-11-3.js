'use strict';


// создаем объект со свойствами
const rectangle = {
  _width: 5,
  _height: 5,

  // объявляем геттер, который будет получать данные (считать периметр фигуры)
  get perimeter() {
    return (this._width + this._height) * 2 + ' sm*2';
  },

  // объявляем геттер, который будет получать данные (считать периметр фигуры)
  get square() {
    return this._width * this._height + ' sm*2';
  },

  // объявляем сеттер, устанавливает новое значение свойства, при условии, что это число
  set width(newWidth) {
    if (typeof newWidth === 'number') {
      this._width = newWidth;
    }
  },

  // объявляем сеттер, устанавливает новое значение свойства, при условии, что это число
  set height(newHeight) {
    if (typeof newHeight === 'number') {
      this._height = newHeight;
    }
  },
};

// новые свойства фигуры rectangle
rectangle.width = 100;
rectangle.height = '8';
// вызов в консоль геттеров периметр и площадь
console.log(rectangle.perimeter);
console.log(rectangle.square);