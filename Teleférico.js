const { Usuario } = require("./Usuario");
const { Cabina } = require("./Cabina");

class Teleferico {
  constructor() {
    this.cabinas = [];
    this.usuarios = [];
  }
  // get's
  getCabinas() {
    return this.cabinas;
  }
  getUsuarios() {
    return this.usuarios;
  }
  getListarCabinas() {
    return this.cabinas.map((cabina) => ({
      id: cabina.id,
      estado: cabina.estado,
      capacidad: cabina.capacidad,
      ocupacion: cabina.pasajeros.length,
      pasajeros: cabina.pasajeros,
    }));
  }
  getListarUsuarios() {
    return this.usuarios.map((usuario) => ({
      id: usuario.id,
      nombre: usuario.nombre,
      edad: usuario.edad,
    }));
  }
  getListarPasajerosCabina(cabinaId) {
    const cabina = this.cabinas.find((cabina) => cabina.id === cabinaId);
    if (cabina) {
      return cabina.pasajeros.map((pasajero) => ({
        id: pasajero.id,
        nombre: pasajero.nombre,
        edad: pasajero.edad,
      }));
    }
    return `Cabina ${cabinaId} no encontrada.`;
  }
  

  // set's Cabinas
  crearCabina(cabinaId, capacidad) {
    const nuevaCabina = new Cabina(cabinaId, capacidad);
    this.cabinas.push(nuevaCabina);
  }
  eliminarCabina(cabinaId) {
    this.cabinas = this.cabinas.filter((cabina) => cabina.id !== cabinaId);
  }
  iniciarCabina(cabinaId) {
    const cabina = this.cabinas.find((cabina) => cabina.id === cabinaId);
    if (cabina) {
      cabina.mover(); // Llama al método mover de la clase Cabina
      return `Cabina ${cabina.id} iniciada.`;
    }
    return `Cabina ${id} no encontrada.`;
  }
  detenerCabina(cabinaId) {
    const cabina = this.cabinas.find((cabina) => cabina.id === cabinaId);
    if (cabina) {
      cabina.detener(); // Llama al método detener de la clase Cabina
      return `Cabina ${cabina.id} detenida.`;
    }
    return `Cabina ${id} no encontrada.`;
  }
  obtenerCabinasDisponibles() { 
    return this.cabinas
      .filter(
        (cabina) =>
          cabina.estado === "detenida" &&
          cabina.pasajeros.length < cabina.capacidad
      )
      .map((cabina) => cabina.id);
  }

  // set's Usuarios
  crearUsuario(usuarioId, nombre, edad) {
    const nuevoUsuario = new Usuario(usuarioId, nombre, edad);
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario; // Devuelve el usuario creado
  }
  eliminarUsuario(usuarioId) {
    const index = this.usuarios.findIndex(
      (usuario) => usuario.id === usuarioId
    );
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return true; // Usuario eliminado con éxito
    }
    return false; // Usuario no encontrado
  }
  obtenerUsuariosDisponibles() {
    const usuariosEnCabinaIds = this.cabinas.flatMap((cabina) =>
      cabina.pasajeros.map((pasajero) => pasajero.id)
    );

    return this.usuarios
      .filter((usuario) => !usuariosEnCabinaIds.includes(usuario.id))
      .map((usuario) => usuario.id);
  }// Verificar Disponibilidad de Usuarios: Un método que retorne los id de las usuarios disponibles(que no esten en cabina).

  // set's interacion usuario y cabinas
  agregarPasajeroACabina(usuarioId, cabinaId) {
    const usuario = this.usuarios.find((usuario) => usuario.id === usuarioId);
    const cabina = this.cabinas.find((cabina) => cabina.id === cabinaId);
    
    if (!usuario) return "Usuario no encontrado.";
    if (!cabina) return "Cabina no encontrada.";

    if (cabina.pasajeros.length < cabina.capacidad) {
      cabina.agregarPasajero(usuario);
      return `Usuario ${usuario.nombre} agregado a la cabina ${cabina.id}.`;
    }
    return "Cabina llena.";
  } // Agregar Pasajero a Cabina: Un método que permita agregar un pasajero a una cabina
}

module.exports = { Teleferico };