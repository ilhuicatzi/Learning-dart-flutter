export const holaMundo1 = `void main() {
    print('Hola Mundo');
    }

    //output: 
    //Hola Mundo`;

export const holaMundo2 = `void main() {
  var name = "Dart";
  final String name2 = "Flutter";

  print("Hello World");
  print("Hello, $name");
  print("Hello, \${name2.toUpperCase()}");
}

    //output:
    //Hello World
    //Hello, Dart
    //Hello, FLUTTER 
`;

export const variables_explicitas = `void main() {
  String name = 'Voyager I';
  int year = 1977;
  double antennaDiameter = 3.7;
  List<String> flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  Map<String, dynamic> image = {
    'tags': ['saturn'],
    'url': '/path/to/saturn.jpg'
  };

  print(name);
  print(year);
  print(antennaDiameter);
  print(flybyObjects);
  print(image);
}

// The output of this program is:
// Voyager I
// 1977
// 3.7
// [Jupiter, Saturn, Uranus, Neptune]
// {tags: [saturn], url: /path/to/saturn.jpg}`;

export const variables_dinamicas = `void main() {
  var name = 'Voyager I';
  var year = 1977;
  var antennaDiameter = 3.7;
  var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  var image = {
    'tags': ['saturn'],
    'url': '//path/to/saturn.jpg'
  };

  print(name);
  print(year);
  print(antennaDiameter);
  print(flybyObjects);
  print(image);
}

// The output of this program is:
// Voyager I
// 1977
// 3.7
// [Jupiter, Saturn, Uranus, Neptune]
// {tags: [saturn], url: /path/to/saturn.jpg}`;


export const flujo_control = `
// if and else
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

// for in loop
for (final object in flybyObjects) {
  print(object);
}

// for loop
for (int month = 1; month <= 12; month++) {
  print(month);
}

// while loop
while (year < 2016) {
  year += 1;
}

// try catch finally
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}

//assert
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');

`;

export const funciones = `int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);

print(result); // 6765
`;

export const arrow_functions = `var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
flybyObjects.where((name) => name.contains('turn')).forEach(print);
`;

export const iterable = `void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // Obtener un iterador
  Iterator<int> iterator = numbers.iterator;

  // Recorrer los elementos
  while (iterator.moveNext()) {
    print(iterator.current); // Imprime el valor actual del iterador
  }
}
`;

export const iterable_for_in = `void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  for (var number in numbers) {
    print(number);
  }
}
`;