const fs = require('fs');

const copiar = (origen, destino) => {
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error al leer el archivo ${origen}:`, err.message);
            return;
        }

        fs.writeFile(destino, data, (err) => {
            if (err) {
                console.error(`Error al escribir el archivo ${destino}:`, err.message);
                return;
            }

            console.log(`Archivo copiado exitosamente de ${origen} a ${destino}`);
        });
    });
};
copiar('./entrada.txt', './salida.txt');
