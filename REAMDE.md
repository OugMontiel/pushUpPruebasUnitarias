# Sistema de Control de Teleférico

## Actividades a Realizar

A continuación están las actividades a desarrollar:

### Diseño del sistema:

Diseñar una estructura de clases que represente el sistema de control del teleférico, teniendo en cuenta los requisitos mencionados anteriormente.

### Implementación de métodos:

Implementar métodos para la creación, eliminación y movimiento de cabinas.
Implementar métodos para permitir que los usuarios soliciten viajes y controlar su acceso a las cabinas.
Utilizar expresiones lambda donde sea adecuado para mejorar la legibilidad y la eficiencia del código.

### Pruebas unitarias:

Crear casos de prueba para cada método implementado, considerando diferentes escenarios posibles. y teniendo en cuenta los siguientes segmentos:
ID: Identificación del caso de prueba.
Tipo de caso de prueba: Especificar si es positivo, negativo, de límite, etc.
Descripción: Detallar brevemente qué se está probando.
Pasos: Enumerar los pasos a seguir para ejecutar la prueba.
Datos de prueba: Proveer los datos que se utilizarán durante la prueba.
Resultados esperados: Definir qué resultado se espera obtener tras la ejecución.

Implementar pruebas unitarias utilizando JUnit para verificar el correcto funcionamiento de los métodos en diversas situaciones.

## Descripción

En este ejercicio, se desarrollará un sistema de control para un teleférico utilizando JavaScript, expresiones lambda, relaciones entre clases y conceptos clave de programación orientada a objetos (POO). El objetivo es diseñar un sistema que administre las operaciones de un teleférico, incluida la gestión de las cabinas y los usuarios.

Un teleférico es un medio de transporte utilizado en áreas montañosas o turísticas para transportar personas de una ubicación a otra mediante cabinas suspendidas en cables. El sistema de control del teleférico debe ser capaz de gestionar múltiples cabinas y usuarios.

## Requisitos del Sistema

El sistema de control requiere los siguientes elementos:

### Cabinas:

Cada cabina tiene un identificador único y una capacidad máxima de pasajeros.
Las cabinas pueden estar en dos estados: en movimiento o detenidas.
El sistema debe permitir la creación, eliminación y movimiento de cabinas.

### Usuarios:

Cada usuario tiene un nombre y una edad.
Los usuarios pueden solicitar viajes en el teleférico.
El sistema debe controlar el acceso de los usuarios a las cabinas, asegurándose de que no excedan la capacidad máxima.

### Operaciones del sistema:

El sistema debe permitir que los usuarios soliciten viajes en el teleférico.
Debe haber una función que determine la disponibilidad de cabinas para un viaje en particular.
Las cabinas deben moverse automáticamente entre estaciones, pero también pueden ser controladas manualmente si es necesario.
El sistema debe garantizar la seguridad de los usuarios, evitando sobrecargar las cabinas.
