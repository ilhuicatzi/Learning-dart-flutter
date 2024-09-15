import CodeComponent from "@/components/code/CodeComponent";
import { list } from "@/utils/introducctionCodes";
import Container from "../ui/container";

function Listas() {
  return (
    <Container>
    <h2 className="group text-2xl font-medium">
      Listas{" "}
      <span className="text-transparent group-hover:text-primary">#</span>
    </h2>
    <p>
      En Dart, una lista es simplemente una colección ordenada de elementos.
      Puedes acceder a los elementos de una lista mediante su índice, que
      comienza en 0.
    </p>
    <p>
      Alguna de las operaciones comunes que puedes realizar con listas son:
    </p>
    <ul className="list-disc list-inside">
      <li>Acceder a un elemento por su índice.</li>
      <li>Añadir elementos al final de la lista.</li>
      <li>Añadir elementos al principio de la lista.</li>
      <li>Eliminar elementos de la lista.</li>
      <li>Encontrar la longitud de la lista.</li>
      <li>Comprobar si la lista está vacía.</li>
      <li>Comprobar si la lista no está vacía.</li>
      <li>Obtener el primer elemento de la lista.</li>
      <li>Obtener el último elemento de la lista.</li>
      <li>Eliminar un elemento de la lista por su índice.</li>
      <li>Obtener una vista invertida de la lista.</li>
    </ul>

    <CodeComponent code={list} />
    </Container>
  )
}

export default Listas