export const lisya_vacia=`void main() {
  List<int> emptyList = []; // Lista vacía de enteros
}
`;

export const listas_con_elementos=`void main() {
  List<int> numeros = [1, 2, 3, 4, 5];
  List<String> palabras = ['hola', 'mundo'];
  List<dynamic> listaDinamica = [1, 'hola', 2.0];

    print(numeros); // [1, 2, 3, 4, 5]
    print(palabras); // [hola, mundo]
    print(listaDinamica); // [1, hola, 2.0]
}
`;

export const listas_con_elementos_con_tamaño=`void main() {
  List<int> numeros = List<int>.filled(5, 0);
  List<String> palabras = List<String>.filled(2, 'hola');
  List<dynamic> listaDinamica = List<dynamic>.filled(3, 'mundo');

    print(numeros); // [0, 0, 0, 0, 0]
    print(palabras); // [hola, hola]
    print(listaDinamica); // [mundo, mundo, mundo]
}
`;

export const listas_acceder_elementos=`void main() {
  List<String> fruits = ['Apple', 'Banana', 'Orange'];
  print(fruits[0]); // Apple
  print(fruits[2]); // Orange
}
`;

export const lista_modificar_elementos=`void main() {
  List<int> numbers = [1, 2, 3];
  
  // Agregar un solo elemento
  numbers.add(4); 
  print(numbers); // [1, 2, 3, 4]
  
  // Agregar varios elementos
  numbers.addAll([5, 6]);
  print(numbers); // [1, 2, 3, 4, 5, 6]
}
`;

export const lista_eliminar_elementos=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Eliminar un elemento
  numbers.remove(3);
  print(numbers); // [1, 2, 4, 5]
  
  // Eliminar un elemento por índice
  numbers.removeAt(2);
  print(numbers); // [1, 2, 5]
  
  // Eliminar todos los elementos
  numbers.clear();
  print(numbers); // []
}
`;

export const lista_buscar_elementos=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Buscar un elemento
  print(numbers.contains(3)); // true
  
  // Buscar un elemento por índice
  print(numbers.indexOf(3)); // 2
}
`;

export const lista_operaciones=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Obtener la longitud de la lista
  print(numbers.length); // 5
  
  // Verificar si la lista está vacía
  print(numbers.isEmpty); // false
  
  // Verificar si la lista no está vacía
  print(numbers.isNotEmpty); // true
}
`;

export const lista_iterar=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Iterar la lista
  for (var number in numbers) {
    print(number);
  }
}

  // Iterar la lista con forEach
  numbers.forEach((number) => print(number));
}

  // Iterar la lista con while
  var index = 0;
  while (index < numbers.length) {
    print(numbers[index]);
    index++;
  }
`;

export const lista_map=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Duplicar cada elemento
  var doubled = numbers.map((number) => number * 2).toList();
  print(doubled); // [2, 4, 6, 8, 10]
}
`;

export const lista_where=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Filtrar los números pares
  var even = numbers.where((number) => number.isEven).toList();
  print(even); // [2, 4]
}
`;

export const lista_reduce=`void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // Sumar todos los elementos
  var sum = numbers.reduce((value, element) => value + element);
  print(sum); // 15
}
`;

export const lista_sort=`void main() {
  List<int> numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  
  // Ordenar la lista
  numbers.sort();
  print(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
}
`;

// ----------Sets----------

export const conjunto_vacio=`void main() {
  Set<int> numeros = Set<int>(); // Forma explícita de crear un set vacío
  print(numeros); // {}
}
`;

export const conjunto_con_elementos=`void main() {
  Set<int> numeros = {1, 2, 3, 4, 5};
  Set<String> palabras = {'hola', 'mundo'};
  Set<dynamic> conjuntoDinamico = {1, 'hola', 2.0};

  print(numeros); // {1, 2, 3, 4, 5}
  print(palabras); // {hola, mundo}
  print(conjuntoDinamico); // {1, hola, 2.0}
}
`;

export const conjunto_acceder_elementos=`void main() {
  Set<String> fruits = {'Apple', 'Banana', 'Orange'};
  print(fruits.contains('Apple')); // true
  print(fruits.contains('Grapes')); // false
}
`;

export const conjunto_modificar_elementos=`void main() {
  Set<int> numeros = {1, 2, 3};
  
  // Añadir un solo elemento
  numeros.add(4);
  print(numeros); // {1, 2, 3, 4}
  
  // Añadir múltiples elementos
  numeros.addAll([5, 6, 7]);
  print(numeros); // {1, 2, 3, 4, 5, 6, 7}
  
  // Intentar añadir un elemento duplicado
  numeros.add(3);
  print(numeros); // {1, 2, 3, 4, 5, 6, 7} (No se añade nuevamente)
}
`;

export const conjunto_eliminar_elementos=`void main() {
  Set<String> frutas = {'Manzana', 'Banana', 'Naranja', 'Banana'};
  
  // Eliminar un elemento específico
  frutas.remove('Banana');
  print(frutas); // {Manzana, Naranja}
  
  // Eliminar elementos que cumplen una condición
  frutas.removeWhere((fruta) => fruta.startsWith('M'));
  print(frutas); // {Naranja}
  
  // Limpiar el set
  frutas.clear();
  print(frutas); // {}
}
`;

export const conjunto_operaciones=`void main() {
  Set<int> numeros1 = {1, 2, 3, 4, 5};
  Set<int> numeros2 = {4, 5, 6, 7, 8};
  
  // Obtener la longitud del set
  print(numeros.length); // 5
  
  // Verificar si el set está vacío
  print(numeros1.isEmpty); // false
  
  // Verificar si el set no está vacío
  print(numeros2.isNotEmpty); // true

  // Unión de conjuntos
  var union = numeros1.union(numeros2);
  print(union); // {1, 2, 3, 4, 5, 6, 7, 8}

  // Intersección de conjuntos
  var intersection = numeros1.intersection(numeros2);
  print(intersection); // {4, 5}

  // Diferencia de conjuntos
  var difference = numeros1.difference(numeros2);
  print(difference); // {1, 2, 3}
}
`;

export const conjunto_iterar=`void main() {
  Set<int> numeros = {1, 2, 3, 4, 5};
  
  // Iterar el conjunto
  for (var numero in numeros) {
    print(numero);
  }
}
`;




