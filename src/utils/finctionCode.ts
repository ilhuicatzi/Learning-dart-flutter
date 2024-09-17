export const funcion_sintaxis_basica = `void nombreFuncion() {
  // Código que realiza alguna tarea
}
`;

export const funcion_ejemplo = `void saludar() {
  print('¡Hola, Gonzalo!');
}

void main() {
  saludar(); // Llama a la función
}
`;

export const funciones_retorna_valor = `int sumar(int a, int b) {
  return a + b;
}

void main() {
  int resultado = sumar(5, 3);
  print(resultado); // Imprime 8
}
`;

export const funciones_parametros_opcionales = `void saludar(String nombre, [String saludo = 'Hola']) {
  print('$saludo, $nombre');
}

void main() {
  saludar('Gonzalo'); // Imprime: Hola, Gonzalo
  saludar('Gonzalo', '¡Qué tal!'); // Imprime: ¡Qué tal!, Gonzalo
}
`;

export const funciones_parametros_nombrados = `void describirPersona({required String nombre, int edad = 18}) {
  print('Nombre: $nombre, Edad: $edad');
}

void main() {
  describirPersona(nombre: 'Gonzalo', edad: 30); // Nombre: Gonzalo, Edad: 30
  describirPersona(nombre: 'Juan'); // Nombre: Juan, Edad: 18
}
`;

export const funciones_de_una_linea = `int multiplicar(int a, int b) => a * b;

void main() {
  print(multiplicar(3, 4)); // Imprime 12
}
`;

export const funciones_anonimas = `void main() {
  // Función anónima
  var suma = (int a, int b) {
    return a + b;
  };

  print(suma(5, 3)); // Imprime 8
}
`;

export const funciones_como_parametros = `void operar(int a, int b, Function(int, int) operacion) {
  print(operacion(a, b));
}

void main() {
  operar(5, 3, (a, b) => a + b); // Imprime 8
}
`;

export const funciones_recursividad = `int factorial(int n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

void main() {
  print(factorial(5)); // Imprime 120
}
`;

export const funciones_closures = `Function crearContador() {
  int contador = 0;
  
  return () {
    contador++;
    print(contador);
  };
}

void main() {
  var incrementar = crearContador();
  
  incrementar(); // 1
  incrementar(); // 2
  incrementar(); // 3
}
`;

export const funciones_asynchronous = `Future<void> obtenerDatos() async {
  await Future.delayed(Duration(seconds: 2)); // Simula una tarea asíncrona
  print('Datos obtenidos');
}

void main() async {
  print('Inicio');
  await obtenerDatos();
  print('Fin');
}
`;