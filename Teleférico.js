import { Cabina } from "./Cabina";
import { Usuario } from "./Usuario";

export class Teleferico {
  constructor() {
    this.cabinas = [];
    this.usuarios = [];
  }

  getCabinas() {
    return this.cabinas;
  }

  getUsuarios() {
    return this.usuarios;
  }

  crearCabina(id, capacidad) {
    const nuevaCabina = new Cabina(id, capacidad);
    this.cabinas.push(nuevaCabina);
  }

  eliminarCabina(id) {
    this.cabinas = this.cabinas.filter((cabina) => cabina.id !== id);
  }

  asignarCabina(usuario) {
    const cabinaDisponible = this.cabinas.find(
      (cabina) =>
        cabina.estado === "detenida" &&
        cabina.pasajeros.length < cabina.capacidad
    );
    if (cabinaDisponible) {
      cabinaDisponible.agregarPasajero(usuario);
      return `Usuario ${usuario.nombre} asignado a cabina ${cabinaDisponible.id}`;
    }
    return "No hay cabinas disponibles.";
  }

  solicitarViaje(usuario, cabina) {
    // Implementar la lógica para verificar si el usuario puede viajar en la cabina
    // Verificar si la cabina tiene espacio disponible y si el usuario cumple con los requisitos de edad
    // Si todo está correcto, permitir el viaje y actualizar el estado de la cabina a "en movimiento"
    // De lo contrario, informar al usuario que no hay espacio disponible o que no cumple con los requisitos de edad
  }

  listarCabinas() {
    return this.cabinas.map((cabina) => ({
      id: cabina.id,
      estado: cabina.estado,
      capacidad: cabina.capacidad,
      ocupacion: cabina.pasajeros.length,
    }));
  }
}
