export class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }
  
  solicitarViaje(teleferico) {
    return teleferico.asignarCabina(this);
  }
}