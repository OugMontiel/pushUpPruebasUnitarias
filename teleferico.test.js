const { Usuario } = require("./Usuario");
const { Cabina } = require("./Cabina");

describe("Sistema de Control de Teleférico", () => {
  // tests para toda la calse usuarios
  test("debe crear un usuario correctamente con id, nombre y edad", () => {
    const usuario = new Usuario(1, "Juan", 25);

    expect(usuario.getId()).toBe(1);
    expect(usuario.getNombre()).toBe("Juan");
    expect(usuario.getEdad()).toBe(25);
  });

  // tests para toda la clase cabinas
  let cabina;
  let usuario1;
  let usuario2;

  beforeEach(() => {
    cabina = new Cabina(1, 2); // Cabina con capacidad de 2 pasajeros
    usuario1 = new Usuario(1, "Juan", 25);
    usuario2 = new Usuario(2, "Maria", 30);
  });

  // Test para crear una cabina
  test("debe crear una cabina con id, capacidad, estado inicial y lista de pasajeros vacía", () => {
    expect(cabina.getId()).toBe(1);
    expect(cabina.getCapacidad()).toBe(2);
    expect(cabina.getEstado()).toBe("detenida");
    expect(cabina.getPasajeros()).toEqual([]);
  });

  // Test para mover y detener la cabina
  test('debe cambiar el estado de la cabina a "en movimiento" y luego a "detenida"', () => {
    cabina.mover();
    expect(cabina.getEstado()).toBe("en movimiento");

    cabina.detener();
    expect(cabina.getEstado()).toBe("detenida");
  });

  // Test para agregar un pasajero a la cabina
  test("debe agregar un pasajero si la cabina está detenida y no está llena", () => {
    const resultado = cabina.agregarPasajero(usuario1);
    expect(resultado).toBe(true);
    expect(cabina.getPasajeros()).toContain(usuario1);
  });

  // Test para evitar agregar un pasajero si la cabina está en movimiento
  test("no debe agregar un pasajero si la cabina está en movimiento", () => {
    cabina.mover();
    const resultado = cabina.agregarPasajero(usuario1);
    expect(resultado).toBe(false);
    expect(cabina.getPasajeros()).not.toContain(usuario1);
  });

  // Test para evitar agregar un pasajero si la cabina está llena
  test("no debe agregar un pasajero si la cabina está llena", () => {
    cabina.agregarPasajero(usuario1);
    cabina.agregarPasajero(usuario2);
    const usuario3 = new Usuario(3, "Luis", 28);

    const resultado = cabina.agregarPasajero(usuario3);
    expect(resultado).toBe(false);
    expect(cabina.getPasajeros()).not.toContain(usuario3);
  });

  // Test para remover un pasajero específico de la cabina
  test("debe remover un pasajero específico si está en la cabina", () => {
    cabina.agregarPasajero(usuario1);
    cabina.agregarPasajero(usuario2);

    const resultado = cabina.removerPasajero(usuario1.getId());
    expect(resultado).toBe(true);
    expect(cabina.getPasajeros()).not.toContain(usuario1);
  });

  // Test para evitar remover un pasajero que no está en la cabina
  test("no debe remover un pasajero si no está en la cabina", () => {
    const resultado = cabina.removerPasajero(usuario1.getId());
    expect(resultado).toBe(false);
  });

  // Test para remover todos los pasajeros de la cabina
  test("debe remover todos los pasajeros de la cabina", () => {
    cabina.agregarPasajero(usuario1);
    cabina.agregarPasajero(usuario2);

    cabina.removerPasajeros();
    expect(cabina.getPasajeros()).toEqual([]);
  });

});
