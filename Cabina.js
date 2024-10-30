class Cabina {
  constructor(id, capacidad) {
    this.id = id;
    this.capacidad = capacidad;
    this.estado = "detenida";
    this.pasajeros = [];
  }

  //  Get's
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

  //  Set's estado
  mover() {
    this.estado = "en movimiento";
  }
  detener() {
    this.estado = "detenida";
  }

  //  Set's Pasajeros
  agregarPasajero(usuario) {
    if (this.pasajeros.length < this.capacidad && this.estado === "detenida") {
      this.pasajeros.push(usuario);
      return true;
    }
    return false; // Cabina llena
  }
  removerPasajero(usuarioId) {
    const index = this.pasajeros.findIndex(pasajero => pasajero.id === usuarioId);
    if (index !== -1) {
      this.pasajeros.splice(index, 1);
      return true; // Pasajero removido con éxito
    }
    return false; // Pasajero no encontrado en la cabina
  }
  removerPasajeros() {
    this.pasajeros = [];
  }
}

module.exports = { Cabina };