import CodeComponent from "@/components/code/CodeComponent";
import Code from "../code/Code";
import {
  lisya_vacia,
  listas_con_elementos,
  listas_con_elementos_con_tamaño,
  listas_acceder_elementos,
  lista_modificar_elementos,
  lista_eliminar_elementos,
  lista_buscar_elementos,
  lista_sort,
  lista_iterar,
  lista_operaciones,
  lista_map,
  lista_reduce,
  lista_where,
} from "@/utils/listCodes";
import Container from "../ui/container";

function Listas() {
  return (
    <Container>
      <h2 className="group text-2xl font-medium">
        Listas{" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        Las listas en Dart son una de las estructuras de datos más usadas. Una
        lista es una colección ordenada de elementos, donde cada elemento puede
        accederse mediante un índice. Dart ofrece la clase List para trabajar
        con ellas, que es una implementación de un iterable.
      </p>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Lista vacía
        </h3>
        <p className="text-muted-foreground">
          Para crear una lista vacía, simplemente declara una variable de tipo
          List y asigna un array vacío.
        </p>
        <CodeComponent code={lisya_vacia} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Lista con elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes crear una lista con elementos de un tipo específico o de
          diferentes tipos.
        </p>
        <CodeComponent code={listas_con_elementos} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Lista con elementos y tamaño
        </h3>
        <p className="text-muted-foreground">
          Puedes crear una lista con elementos de un tipo específico o de
          diferentes tipos y un tamaño específico.
        </p>
        <CodeComponent code={listas_con_elementos_con_tamaño} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Acceder a elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes acceder a los elementos de una lista mediante su índice. El
          índice de la lista comienza en 0.
        </p>
        <CodeComponent code={listas_acceder_elementos} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Modificar elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes modificar los elementos de una lista de varias formas, como
          agregar un solo elemento o varios elementos.
        </p>
        <CodeComponent code={lista_modificar_elementos} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Eliminar elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes eliminar elementos de una lista de varias formas, como eliminar
          un solo elemento, eliminar un elemento por índice o eliminar todos los elementos.
        </p>
        <CodeComponent code={lista_eliminar_elementos} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Buscar elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes buscar elementos en una lista de varias formas, como buscar un
          elemento específico, buscar un elemento por índice o buscar todos los
          elementos que cumplan una condición.
        </p>
        <CodeComponent code={lista_buscar_elementos} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Ordenar elementos
        </h3>
        <p className="text-muted-foreground">
          Puedes ordenar los elementos de una lista de varias formas, como
          ordenar los elementos de forma ascendente o descendente.
        </p>
        <CodeComponent code={lista_sort} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Iterar una lista
        </h3>
        <p className="text-muted-foreground">
          Puedes recorrer los elementos de una lista de varias formas, como
          mediante un bucle for, un bucle while, un bucle do-while o un bucle
          forEach.
        </p>
        <CodeComponent code={lista_iterar} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Operaciones con listas
        </h3>
        <p className="text-muted-foreground">
        Las listas en Dart tienen varios métodos útiles para realizar operaciones sobre sus elementos:
        </p>
        <CodeComponent code={lista_operaciones} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Método map
        </h3>
        <p className="text-muted-foreground">
          El método <Code>map()</Code> aplica una función a cada elemento de la lista y
          devuelve una nueva lista con los resultados.
        </p>
        <CodeComponent code={lista_map} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Método reduce
        </h3>
        <p className="text-muted-foreground">
          El método <Code>reduce()</Code> combina los elementos de la lista en un solo
          valor, aplicando una función acumuladora.
        </p>
        <CodeComponent code={lista_reduce} />
      </div>

      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Método where
        </h3>
        <p className="text-muted-foreground">
          El método <Code>where()</Code> filtra los elementos de la lista que cumplan una
          condición y devuelve una nueva lista con los elementos filtrados.
        </p>
        <CodeComponent code={lista_where} />
      </div>
    </Container>
  );
}

export default Listas;
