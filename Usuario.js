class Usuario {
  constructor(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
  //  Get's
  getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }
  getId() {
    return this.id;
  }
}

module.exports = { Usuario };