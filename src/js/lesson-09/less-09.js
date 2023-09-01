'use strict'

const car = {
  car: 'mini',
  model: 'cooper',
  price: 30000,
    // создаем новое свойство fullname
    get comment() {
      return this.trueComment;
    },
  
    set comment(val) {
      if (typeof val === 'string') {
            // если val не является string то тогда записываем комментарий
        this.trueComment = val;
      }  
      
    // будем получиать что-нибудь, например val    
  
    },
    trueComment: 'not',

    // создадим свойство trueComment

};

// в скобках первым параметром передаем сам объект, вторым параметром мы передаем свойство это может быть новое свойство или свойство из объекта, который мы уже используем третий параметр это объект с дескрипторами , эти 3 свойства по умолчанию имеют true

// car.model = 'electric';

console.log(car.comment);
// сначала вызовем full name, получим его

car.comment = '123';
// попробуем что-нибудь записать, получим новое свойство в объекте

console.log(car.comment);
car.comment = 'Супер тачка!';

console.log(car.comment);

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

