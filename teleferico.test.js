const { Usuario } = require("./Usuario");
const { Cabina } = require("./Cabina");
const { Teleferico } = require("./Teleférico");

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

  // tests para toda la clase teleferico
  let teleferico;

  beforeEach(() => {
    teleferico = new Teleferico();
  });

  test('debería crear una nueva cabina', () => {
    teleferico.crearCabina('1', 4);
    const cabinas = teleferico.getCabinas();
    expect(cabinas.length).toBe(1);
    expect(cabinas[0].id).toBe('1');
    expect(cabinas[0].capacidad).toBe(4);
  });

  test('debería eliminar una cabina', () => {
    teleferico.crearCabina('1', 4);
    teleferico.eliminarCabina('1');
    const cabinas = teleferico.getCabinas();
    expect(cabinas.length).toBe(0);
  });

  test('debería iniciar una cabina', () => {
    teleferico.crearCabina('1', 4);
    teleferico.iniciarCabina('1');
    expect(teleferico.getCabinas()[0].estado).toBe('en movimiento'); // Asegúrate de que el método mover cambie el estado
  });

  test('debería detener una cabina', () => {
    teleferico.crearCabina('1', 4);
    teleferico.iniciarCabina('1');
    teleferico.detenerCabina('1');
    expect(teleferico.getCabinas()[0].estado).toBe('detenida'); // Asegúrate de que el método detener cambie el estado
  });

  test('debería crear un nuevo usuario', () => {
    const usuario = teleferico.crearUsuario('1', 'Juan', 25);
    const usuarios = teleferico.getUsuarios();
    expect(usuarios.length).toBe(1);
    expect(usuarios[0].id).toBe('1');
    expect(usuarios[0].nombre).toBe('Juan');
  });

  test('debería eliminar un usuario', () => {
    teleferico.crearUsuario('1', 'Juan', 25);
    teleferico.eliminarUsuario('1');
    const usuarios = teleferico.getUsuarios();
    expect(usuarios.length).toBe(0);
  });

  test('debería obtener usuarios disponibles', () => {
    teleferico.crearUsuario('1', 'Juan', 25);
    teleferico.crearUsuario('2', 'Maria', 30);
    teleferico.crearCabina('1', 2);
    teleferico.agregarPasajeroACabina('1', '1');
    const disponibles = teleferico.obtenerUsuariosDisponibles();
    expect(disponibles).toEqual(['2']);
  });

  test('debería agregar un pasajero a una cabina', () => {
    teleferico.crearCabina('1', 2);
    teleferico.crearUsuario('1', 'Juan', 25);
    teleferico.agregarPasajeroACabina('1', '1');
    expect(teleferico.getCabinas()[0].pasajeros.length).toBe(1);
    expect(teleferico.getCabinas()[0].pasajeros[0].nombre).toBe('Juan');
  });

  test('no debería agregar un pasajero a una cabina llena', () => {
    teleferico.crearCabina('1', 1);
    teleferico.crearUsuario('1', 'Juan', 25);
    teleferico.crearUsuario('2', 'Maria', 30);
    teleferico.agregarPasajeroACabina('1', '1');
    const resultado = teleferico.agregarPasajeroACabina('2', '1');
    expect(resultado).toBe('Cabina llena.');
  });

  test('debería listar pasajeros de una cabina', () => {
    teleferico.crearCabina('1', 2);
    teleferico.crearUsuario('1', 'Juan', 25);
    teleferico.agregarPasajeroACabina('1', '1');
    const pasajeros = teleferico.getListarPasajerosCabina('1');
    expect(pasajeros.length).toBe(1);
    expect(pasajeros[0].nombre).toBe('Juan');
  });
});
