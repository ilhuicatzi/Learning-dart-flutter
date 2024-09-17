import CodeComponent from "@/components/code/CodeComponent";
import {
  funcion_sintaxis_basica,
  funcion_ejemplo,
  funciones_retorna_valor,
  funciones_parametros_opcionales,
  funciones_parametros_nombrados,
  funciones_de_una_linea,
  funciones_anonimas,
  funciones_como_parametros,
  funciones_recursividad,
  funciones_closures,
  funciones_asynchronous,
} from "@/utils/finctionCode";
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
      En Dart, una función es un bloque de código reutilizable que realiza una tarea específica. Puedes definir una función con la palabra clave <Code>void</Code> o especificando el tipo de retorno, seguido del nombre de la función y un conjunto de parámetros opcionales entre paréntesis.
      </p>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Sintaxis básica
        </h3>
        <p className="text-muted-foreground">
          La sintaxis básica de una función en Dart.
        </p>
        <CodeComponent code={funcion_sintaxis_basica} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Ejemplo
        </h3>
        <p className="text-muted-foreground">
          Ejemplo de una función simple en Dart.
        </p>
        <CodeComponent code={funcion_ejemplo} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones que retornan un valor
        </h3>
        <p className="text-muted-foreground">
        Si una función devuelve un valor, debes especificar el tipo de retorno (por ejemplo, <Code>int</Code>, <Code>String</Code>, etc.) en lugar de <Code>void</Code> y usar la palabra clave <Code>return</Code>.
        </p>
        <CodeComponent code={funciones_retorna_valor} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Parámetros opcionales
        </h3>
        <p className="text-muted-foreground">
        Puedes definir parámetros opcionales en una función, que pueden ser requeridos o tener un valor predeterminado.
        </p>
        <CodeComponent code={funciones_parametros_opcionales} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Parámetros nombrados
        </h3>
        <p className="text-muted-foreground">
        Puedes definir parámetros nombrados en una función, lo que permite especificar argumentos por su nombre.
        </p>
        <CodeComponent code={funciones_parametros_nombrados} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones de una línea
        </h3>
        <p className="text-muted-foreground">
        Puedes definir funciones de una línea utilizando la sintaxis de flecha <Code>={">"}</Code>.
        </p>
        <CodeComponent code={funciones_de_una_linea} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones anónimas
        </h3>
        <p className="text-muted-foreground">
        En Dart, las funciones pueden ser anónimas, lo que significa que no tienen nombre. Esto es útil para funciones que se pasan como argumentos a otras funciones o que se usan una sola vez.
        </p>
        <CodeComponent code={funciones_anonimas} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones como parámetros
        </h3>
        <p className="text-muted-foreground">
        Puedes pasar funciones como parámetros a otras funciones en Dart.
        </p>
        <CodeComponent code={funciones_como_parametros} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones recursivas
        </h3>
        <p className="text-muted-foreground">
        Una función recursiva es una función que se llama a sí misma para resolver un problema.
        </p>
        <CodeComponent code={funciones_recursividad} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Closures
        </h3>
        <p className="text-muted-foreground">
        Un closure es una función que recuerda el entorno en el que fue creada. Esto permite que una función interna acceda a las variables de la función externa, incluso después de que esta haya terminado de ejecutarse.
        </p>
        <CodeComponent code={funciones_closures} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
        Funciones asíncronas
        </h3>
        <p className="text-muted-foreground">
        En Dart, las funciones pueden ser asíncronas, lo que te permite manejar operaciones que tardan en completarse, como las solicitudes HTTP o lecturas de archivos. Para hacer una función asíncrona, se utiliza <Code>async</Code> y <Code>await</Code>.
        </p>
        <CodeComponent code={funciones_asynchronous} />
      </div>
    </Container>
  );
}

export default Funciones;
