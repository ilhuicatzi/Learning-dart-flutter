import CodeComponent from "@/components/code/CodeComponent";
import {
  mixins_ejemplo,
  mixins_sintaxis_basica,
  mixins_con_propiedades,
} from "@/utils/classesCode";
import Code from "@/components/code/Code";
import Container from "../ui/container";

function Mixins() {
  return (
    <Container>
      <h2 className="group text-2xl font-medium">
        Mixin{" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        Un mixin es una clase especial que proporciona una funcionalidad
        específica a otras clases sin heredar de ellas. Para usar un mixin en
        una clase, simplemente usa la palabra clave <Code>with</Code> seguida
        del nombre del mixin.
      </p>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Sintaxis básica
        </h3>
        <p className="text-muted-foreground">
          La sintaxis básica de un mixin en Dart.
        </p>
        <CodeComponent code={mixins_sintaxis_basica} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Ejemplo
        </h3>
        <p className="text-muted-foreground">Ejemplo de un mixin en Dart.</p>
        <CodeComponent code={mixins_ejemplo} />
      </div>
      <div className="py-4 w-full space-y-3 ml-4">
        <h3 className="font-medium border-l-2 border-primary pl-2 py-0.5">
          Mixins con propiedades
        </h3>
        <p className="text-muted-foreground">
          Los mixins también pueden contener propiedades además de métodos.
          Estas propiedades pueden ser accedidas y manipuladas por las clases
          que usan el mixin.
        </p>
        <CodeComponent code={mixins_con_propiedades} />
      </div>

      <h2 className="font-medium text-2xl">Mixins vs Herencia</h2>

      <p>
        <strong>Mixins: </strong>Permiten agregar múltiples comportamientos a
        una clase. No establecen una relación jerárquica, sino que simplemente
        añaden funcionalidad. Esto es útil si varias clases necesitan un
        conjunto común de métodos o propiedades.
      </p>
      <p>
        <strong>Herencia: </strong>Es una relación más estricta, donde una clase
        hija hereda todas las propiedades y métodos de una clase padre. Sin
        embargo, en Dart solo puedes heredar de una clase, mientras que puedes
        usar varios mixins.
      </p>
      <h2 className="font-medium text-2xl">Ventajas de los Mixins en Dart</h2>
      <p>
        <strong>Reutilización de código: </strong>Los mixins permiten compartir
        comportamientos comunes sin tener que duplicar código.
      </p>
      <p>
        <strong>Flexibilidad: </strong>Puedes aplicar mixins a varias clases sin
        alterar sus jerarquías de herencia.
      </p>

      <p>
        <strong>Evitar la sobrecarga de la herencia: </strong>A diferencia de la
        herencia múltiple, los mixins son más ligeros y fáciles de aplicar.
      </p>
    </Container>
  );
}

export default Mixins;
