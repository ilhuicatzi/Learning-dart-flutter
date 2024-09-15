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