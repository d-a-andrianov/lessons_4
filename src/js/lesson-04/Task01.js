'use strict'

const goToShop = (money) => {
  console.log('пришли в молочный магазин');

  const getMilk = (cash) => {
    if (cash >= 60) {
      cash -= 60;
      return 'молоко';
    }
  };

  const milk = getMilk(money);

  console.log('пришли в хлебный киоск');

  const getBread = (cash) => {
    if (cash >= 40) {
      cash -= 40;
      return 'хлеб';
    }
  };

  const bread = getBread(money);

  console.log(money);

  return `${milk} ${bread}`;
}

const result = goToShop(100);
console.log('result: ', result);