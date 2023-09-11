/* eslint-disable no-setter-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

// const figure = {
//   width: 5,
//   height: 5,
// }

// Object.defineProperty(figure, 'width', 'height', {

//   set(width) {
//     return `${this.width}`
//   },

//   set(height) {
//     return `${this.height}`
//   },

//   get perimeter() {
//     perimeter = (this.width + this.height)*2;
//   },

//   get square() {
//     square = (this.width * this.height);
//   },
// });

// console.log(square);


const rectangle = {
  _width: 5,
  _height: 5,

  get perimeter() {
    return (this._width + this._height) * 2 + ' sm*2';
  },

  get square() {
    return this._width * this._height + ' sm*2';
  },

  set width(newWidth) {
    if (typeof newWidth === 'number') {
      this._width = newWidth;
    }
  },

  set height(newHeight) {
    if (typeof newHeight === 'number') {
      this._height = newHeight;
    }
  },
};

rectangle.width = 100;
rectangle.height = '8';
console.log(rectangle.perimeter);
console.log(rectangle.square);