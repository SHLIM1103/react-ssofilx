class ArrayUtilities {
  static addZeros = (array) => array.map((num) => num * 10);
  static moreThanFifty = (array) => array.filter((num) => num > 50);
  static removeFirst = ([, ...rest]) => rest;
  static sumAll = (array) => array.reduce((acc, curr) => acc + curr);
  static divide = (num) => num.toString().split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
