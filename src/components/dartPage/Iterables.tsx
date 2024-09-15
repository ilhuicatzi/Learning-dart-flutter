import CodeComponent from "@/components/code/CodeComponent";
import { iterable, iterable_for_in } from "@/utils/introducctionCodes";
import Code from "../code/Code";
import Container from "../ui/container";

function Iterables() {
  return (
    <Container>
      <h2 className="group text-2xl font-medium">
        Iterables{" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        En Dart, los iterables son objetos que pueden ser recorridos, como
        listas y conjuntos (sets). Un iterable es cualquier objeto que
        implementa la clase <Code>Iterable</Code>. Los iterables proporcionan
        una manera eficiente de procesar elementos secuencialmente.
      </p>
      <h3 className="group text-xl font-medium">Iterable y Iterator</h3>
      <ul className="list-disc list-inside">
        <li>Iterable es una colección abstracta que puede ser recorrida.</li>
        <li>
          Iterator es la forma en que Dart accede a los elementos de un iterable
          uno por uno.
        </li>
      </ul>
      <CodeComponent code={iterable} />

      <h3 className="group text-xl font-medium">For-in loop:</h3>
      <p>
        Es más común usar un ciclo for-in para iterar sobre un iterable de
        manera más sencilla:
      </p>
      <CodeComponent code={iterable_for_in} />
    </Container>
  );
}

export default Iterables;
