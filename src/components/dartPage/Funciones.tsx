import CodeComponent from "@/components/code/CodeComponent";
import { funciones, arrow_functions } from "@/utils/introducctionCodes";
import Code from "@/components/code/Code";
import Container from "../ui/container";

function Funciones() {
  return (
    <Container>
      <h2 className="group text-2xl font-medium">
        Funciones{" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        En Dart, cada función es un objeto y tiene un tipo,{" "}
        <Code>Function</Code>. Esto significa que las funciones pueden ser
        asignadas a variables o pasadas como argumentos a otras funciones.
        También puedes devolver funciones de otras funciones.
      </p>
      <p>
        Las funciones pueden ser anidadas. Una función anidada tiene acceso a
        las variables de la función envolvente, incluso si la función envolvente
        ha finalizado.
      </p>
      <p>
        Recomendamos especificar los tipos de argumentos y el valor de retorno
        de cada función:
      </p>
      <CodeComponent code={funciones} />
      <p>
        Para funciones que contienen una única expresión, puedes usar la
        sintaxis de función de flecha:
      </p>
      <CodeComponent code={arrow_functions} />
    </Container>
  );
}

export default Funciones;
