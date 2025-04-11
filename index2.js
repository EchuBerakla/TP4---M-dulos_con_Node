const Alumno = require('./modules/module2');

const alumno1 = new Alumno("JuanPerez", "12345678");
const alumno2 = new Alumno("MariaGomez", "87654321");

console.log(alumno1.mostrarInfo());
console.log(alumno2.mostrarInfo());
