const { countries, currencies } = require('country-data');

const obtenerMoneda = (codigoPais) => {
    const pais = countries[codigoPais];

    if (!pais || !pais.currencies || pais.currencies.length === 0) {
        return "País no encontrado o sin datos de moneda.";
    }

    const monedaCodigo = pais.currencies[0]; // Ej: 'ARS'
    const moneda = currencies[monedaCodigo];

    if (moneda) {
        return moneda.name;
    } else {
        return "Moneda no encontrada.";
    }
};

module.exports = obtenerMoneda;

