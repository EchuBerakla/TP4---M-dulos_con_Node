const PI = 3.14159265359;

const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "No se puede dividir por cero";
    return a / b;
}

module.exports = {
    PI,
    sumar,
    restar,
    multiplicar,
    dividir
};
