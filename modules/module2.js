class Alumno {
    constructor(username, DNI) {
        this.username = username;
        this.DNI = DNI;
    }

    mostrarInfo() {
        return `Alumno: ${this.username} - DNI: ${this.DNI}`;
    }
}

module.exports = Alumno;
