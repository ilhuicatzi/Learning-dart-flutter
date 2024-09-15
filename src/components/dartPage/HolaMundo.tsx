import CodeComponent from "@/components/code/CodeComponent";
import Code from "@/components/code/Code";
import {
  holaMundo1,
  holaMundo2,
} from "@/utils/introducctionCodes";
function HolaMundo() {
  return (
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

    <CodeComponent code={holaMundo1} />

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
  )
}

export default HolaMundo