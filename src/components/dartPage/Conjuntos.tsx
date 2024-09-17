import CodeComponent from "@/components/code/CodeComponent";
import Code from "../code/Code";
import {
  conjunto_vacio,
  conjunto_con_elementos,
  conjunto_acceder_elementos,
  conjunto_modificar_elementos,
  conjunto_eliminar_elementos,
  conjunto_operaciones,
  conjunto_iterar,
} from "@/utils/listCodes";
import Container from "../ui/container";

function Conjuntos() {
  return <Container>
  <h2 className="group text-2xl font-medium">
    Conjuntos (Sets){" "}
    <span className="text-transparent group-hover:text-primary">#</span>
  </h2>
  <p>
    Un conjunto (<Code>Set</Code>) es una colección de elementos únicos y no ordenados. Dart
    ofrece la clase (<Code>Set</Code>) para trabajar con conjuntos. Los conjuntos no permiten
    elementos duplicados.
    </p>
    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Conjunto vacío
        </h3>
        <p className="text-muted-foreground">
            Para crear un conjunto vacío, simplemente declara una variable de tipo Set y asigna un
            conjunto vacío.
        </p>
        <CodeComponent code={conjunto_vacio} />
    </div>
    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Conjunto con elementos
        </h3>
        <p className="text-muted-foreground">
            Puedes crear un conjunto con elementos de un tipo específico o de diferentes tipos.
        </p>
        <CodeComponent code={conjunto_con_elementos} />
    </div>

    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Acceder a elementos
        </h3>
        <p className="text-muted-foreground">
            Puedes verificar si un conjunto contiene un elemento específico.
        </p>
        <CodeComponent code={conjunto_acceder_elementos} />
    </div>

    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Modificar elementos
        </h3>
        <p className="text-muted-foreground">
            Puedes agregar o eliminar elementos de un conjunto.
        </p>
        <CodeComponent code={conjunto_modificar_elementos} />
    </div>

    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Eliminar elementos
        </h3>
        <p className="text-muted-foreground">
            Puedes eliminar elementos de un conjunto.
        </p>
        <CodeComponent code={conjunto_eliminar_elementos} />
    </div>

    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Operaciones con conjuntos
        </h3>
        <p className="text-muted-foreground">
            Puedes realizar operaciones de unión, intersección y diferencia entre conjuntos.
        </p>
        <CodeComponent code={conjunto_operaciones} />
    </div>

    <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
            Iterar un conjunto
        </h3>
        <p className="text-muted-foreground">
            Puedes iterar un conjunto utilizando un bucle for-in.
        </p>
        <CodeComponent code={conjunto_iterar} />
    </div>
    </Container>;
}

export default Conjuntos;
