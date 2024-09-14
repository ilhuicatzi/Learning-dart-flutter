import CodeComponent from "@/components/code/CodeComponent";
import {
  holaMundo,
  holaMundo2,
  variables_explicitas,
  variables_dinamicas,
  flujo_control,
  funciones,
  arrow_functions,
} from "@/utils/introducctionCodes";
import Code from "@/components/code/Code";

function HomePage() {
  return (
    <main className="w-full max-w-4xl">
      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
        <h1 className="text-4xl font-semibold">
          Introducción a <span className="text-primary">Dart</span>
        </h1>
        <p>
          Esta página proporciona una breve introducción al lenguaje Dart a
          través de algunos ejemplos de código
        </p>
      </section>
      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
        <h2 className="group text-2xl font-medium">
          Hola Mundo{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
          Cada aplicación requiere la función de nivel superior{" "}
          <Code>main()</Code>, donde comienza la ejecución. Las funciones que no
          devuelven un valor de forma explícita tienen el <Code>void</Code> tipo
          de retorno. Para mostrar texto en la consola, puedes usar la{" "}
          <Code>print()</Code> función de nivel superior:
        </p>

        <CodeComponent code={holaMundo} />

        <p>
          Si desea insertar una variable en una cadena, puede usar el{" "}
          <Code>$</Code> prefijo. Si desea llamar a una función en una cadena,
          puede usar{" "}
          <Code>
            ${"{"}variable.toUpperCase(){"}"}
          </Code>{" "}
          sintaxis:
        </p>
        <CodeComponent code={holaMundo2} />
      </section>

      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
        <h2 className="group text-2xl font-medium">
          Variables{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
          En Dart, las variables se pueden declarar de dos formas: con un tipo
          explícito o con un tipo dinámico. Las variables declaradas sin un tipo
          explícito se consideran de tipo dinámico. El tipo dinámico es el tipo
          de todas las variables si no se especifica un tipo.
        </p>
        <h3 className="text-xl font-medium">Variables explícitas</h3>
        <CodeComponent code={variables_explicitas} />
        <h3 className="text-xl font-medium">Variables dinámicas</h3>
        <CodeComponent code={variables_dinamicas} />
      </section>

      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
        <h2 className="group text-2xl font-medium">
          Flujo de control{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
          Dart admite las declaraciones de flujo de control habituales:
        </p>
        <ul className="list-disc list-inside">
          <li>if y else</li>
          <li>for loops</li>
          <li>while y do-while loops</li>
          <li>try catch finally</li>
          <li>break y continue</li>
          <li>switch y case</li>
          <li>assert</li>
        </ul>
        <CodeComponent code={flujo_control} />
      </section>

      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
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
          las variables de la función envolvente, incluso si la función
          envolvente ha finalizado.
        </p>
        <p>
        Recomendamos especificar los tipos de argumentos y el valor de retorno de cada función:
        </p>
        <CodeComponent code={funciones} />
        <p>
          Para funciones que contienen una única expresión, puedes usar la
          sintaxis de función de flecha:
        </p>
        <CodeComponent code={arrow_functions} />
      </section>
    </main>
  );
}

export default HomePage;
