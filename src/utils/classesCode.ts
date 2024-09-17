export const clase_sintaxis_basica = `class NombreClase {
  // Propiedades (atributos)
  String atributo;

  // Constructor
  NombreClase(this.atributo);

  // Métodos
  void hacerAlgo() {
    print('Haciendo algo con $atributo');
  }
}
`;

export const clase_ejemplo = `class Persona {
  String nombre;
  int edad;

  // Constructor
  Persona(this.nombre, this.edad);

  // Método
  void saludar() {
    print('¡Hola! Me llamo $nombre y tengo $edad años.');
  }
}

void main() {
  var persona = Persona('Gonzalo', 30);
  persona.saludar(); // ¡Hola! Me llamo Gonzalo y tengo 30 años.
}
`;

export const clase_constructor = `class Coche {
  String marca;
  String modelo;
  int year;

  // Constructor principal
  Coche(this.marca, this.modelo, this.year);

  // Constructor con nombre
  Coche.sinModelo(this.marca, this.year) {
    modelo = 'Desconocido';
  }

  void mostrarInfo() {
    print('Coche: $marca $modelo, Año: $year');
  }
}

void main() {
  var coche1 = Coche('Toyota', 'Corolla', 2020);
  coche1.mostrarInfo(); // Coche: Toyota Corolla, Año: 2020

  var coche2 = Coche.sinModelo('Honda', 2019);
  coche2.mostrarInfo(); // Coche: Honda Desconocido, Año: 2019
}
`;

export const clase_publico_privado = `class CuentaBancaria {
  double _saldo = 0.0; // Propiedad privada

  void depositar(double cantidad) {
    _saldo += cantidad;
    print('Depositado: \\$\${cantidad}, Saldo actual: \\$\${_saldo}');
  }

  void mostrarSaldo() {
    print('Saldo actual: \\$\${_saldo}');
  }
}

void main() {
  var cuenta = CuentaBancaria();
  cuenta.depositar(100);
  cuenta.mostrarSaldo(); // Saldo actual: $100.0
}
`;

export const clase_herencia = `class Animal {
  void hacerSonido() {
    print('El animal hace un sonido.');
  }
}

class Perro extends Animal {
  // Sobrescribir el método de la clase base
  @override
  void hacerSonido() {
    print('El perro ladra.');
  }
}

void main() {
  var perro = Perro();
  perro.hacerSonido(); // El perro ladra.
}
`;

export const clase_polimorfismo = `class Animal {
  void hacerSonido() {
    print('El animal hace un sonido.');
  }
}

class Perro extends Animal {
  @override
  void hacerSonido() {
    print('El perro ladra.');
  }
}

class Gato extends Animal {
  @override
  void hacerSonido() {
    print('El gato maulla.');
  }
}

void hacerSonidoAnimal(Animal animal) {
  animal.hacerSonido();
}

void main() {
  var perro = Perro();
  var gato = Gato();

  hacerSonidoAnimal(perro); // El perro ladra.
  hacerSonidoAnimal(gato); // El gato maulla.
}
`;


export const mixins_sintaxis_basica = `mixin NombreMixin {
  // Definir comportamientos (métodos o propiedades)
  void accion() {
    print('Acción del mixin');
  }
}

class ClasePrincipal with NombreMixin {
  // Clase que usa el mixin
}
`;

export const mixins_ejemplo = `mixin Volador {
  void volar() {
    print('Estoy volando');
  }
}

mixin Nadador {
  void nadar() {
    print('Estoy nadando');
  }
}

class Pato with Volador, Nadador {
  // Pato puede volar y nadar gracias a los mixins
}

void main() {
  var pato = Pato();
  pato.volar(); // Estoy volando
  pato.nadar(); // Estoy nadando
}
`;

export const mixins_con_propiedades = `mixin Habilidad {
  String habilidad = 'Desconocida';

  void mostrarHabilidad() {
    print('Mi habilidad es: $habilidad');
  }
}

class Robot with Habilidad {
  Robot() {
    habilidad = 'Corte preciso';
  }
}

void main() {
  var robot = Robot();
  robot.mostrarHabilidad(); // Mi habilidad es: Corte preciso
}
`;