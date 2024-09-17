import CodeComponent from "@/components/code/CodeComponent";
import {
  clase_sintaxis_basica,
  clase_ejemplo,
  clase_constructor,
  clase_publico_privado,
  clase_herencia,
  clase_polimorfismo,
} from "@/utils/classesCode";
import Code from "@/components/code/Code";
import Container from "../ui/container";

function Classes() {
  return (
    <Container>
      <h2 className="group text-2xl font-medium">
        Clases{" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        Una clase es una plantilla para crear objetos. Define propiedades y
        métodos que los objetos pueden tener. En Dart, una clase se define con
        la palabra clave <Code>class</Code>, seguida del nombre de la clase y un
        conjunto de llaves que contienen las propiedades y métodos de la clase.
      </p>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Sintaxis básica
        </h3>
        <p className="text-muted-foreground">
          La sintaxis básica de una clase en Dart.
        </p>
        <CodeComponent code={clase_sintaxis_basica} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Ejemplo
        </h3>
        <p className="text-muted-foreground">
          Ejemplo de una clase simple en Dart.
        </p>
        <CodeComponent code={clase_ejemplo} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Constructor
        </h3>
        <p className="text-muted-foreground">
          Un constructor es un método especial que se llama cuando se crea un
          objeto de una clase. Puedes definir un constructor principal o un
          constructor con nombre en una clase.
        </p>
        <CodeComponent code={clase_constructor} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Propiedades públicas y privadas
        </h3>
        <p className="text-muted-foreground">
          En Dart, puedes definir propiedades públicas y privadas en una clase.
          Las propiedades privadas se prefijan con un guion bajo (<Code>_</Code>
          ).
        </p>
        <CodeComponent code={clase_publico_privado} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Herencia
        </h3>
        <p className="text-muted-foreground">
          La herencia es un mecanismo en el que una clase hereda propiedades y
          métodos de otra clase. En Dart, puedes extender una clase utilizando
          la palabra clave <Code>extends</Code>.
        </p>
        <CodeComponent code={clase_herencia} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Polimorfismo
        </h3>
        <p className="text-muted-foreground">
          El polimorfismo es la capacidad de un objeto para tomar muchas formas.
          En Dart, puedes usar el polimorfismo para reemplazar un método en una
          clase derivada que ya existe en la clase base.
        </p>
        <CodeComponent code={clase_polimorfismo} />
      </div>
    </Container>
  );
}

export default Classes;
