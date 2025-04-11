const { PI, sumar, restar, multiplicar, dividir } = require('./modules/module1');

console.log("PI:", PI);
console.log("Suma: 5 + 3 =", sumar(5, 3));
console.log("Resta: 10 - 4 =", restar(10, 4));
console.log("Multiplicación: 6 * 7 =", multiplicar(6, 7));
console.log("División: 20 / 4 =", dividir(20, 4));
console.log("División por cero: 10 / 0 =", dividir(10, 0));
