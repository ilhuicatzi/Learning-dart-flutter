import CodeComponent from "@/components/code/CodeComponent";
import {
  flujo_control,
} from "@/utils/introducctionCodes";
import Container from "../ui/container";

function FlujoControl() {
  return (
    <Container>
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
  </Container>
  )
}

export default FlujoControl