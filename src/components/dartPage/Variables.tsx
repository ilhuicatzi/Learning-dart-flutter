import CodeComponent from "@/components/code/CodeComponent";
import {
  variables_explicitas,
  variables_dinamicas,
} from "@/utils/introducctionCodes";
import Container from "../ui/container";
function Variables() {
  return (
    <Container>
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
  </Container>
  )
}

export default Variables