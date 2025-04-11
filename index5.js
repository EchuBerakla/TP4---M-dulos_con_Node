const parsearUrl = require('./modules/module5');


let objeto1 = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto1);


let objeto2 = parsearUrl("esto no es una url");
console.log(objeto2); 
