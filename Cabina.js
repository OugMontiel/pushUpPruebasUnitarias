export class Cabina {
  constructor(id, capacidad) {
    this.id = id;
    this.capacidad = capacidad;
    this.estado = "detenida";
    this.pasajeros = [];
  }

  getId() {
    return this.id;
  }

  getCapacidad() {
    return this.capacidad;
  }

  getEstado() {
    return this.estado;
  }

  getPasajeros() {
    return this.pasajeros;
  }

  mover() {
    this.estado = "en movimiento";
  }

  detener() {
    this.estado = "detenida";
  }

  agregarPasajero(usuario) {
    // solo cuando esta detedida puede subir alguien 
    if (this.pasajeros.length < this.capacidad) {
      this.pasajeros.push(usuario);
      return true;
    }
    return false; // Cabina llena
  }
//   remover un solo pasajero

  removerPasajeros() {
    this.pasajeros = [];
  }
}
