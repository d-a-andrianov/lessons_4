'use strict';

const figure = {
  width: 5,
  height: 5,
}

Object.defineProperty(figure, 'width', 'height', {

  set(width) {
    return `${this.width}`
  },

  set(height) {
    return `${this.height}`
  },

  get perimeter() {
    perimeter = (this.width + this.height)*2;
  },

  get square() {
    square = (this.width * this.height);
  },
});

console.log(square);


// const rectangle = {
//   _width: 5,
//   _height: 5,

//   get perimeter() {
//     return .....
//   },
//   get square() {
//     return .....
//   },

//   set width(newWidth) {
//     if (typeof newWidth === 'number') {
// ....
//     }
//   },

//   set height(newHeight) {
//     if (typeof newHeight === 'number') {
// ....
//     }
//   },
// };
