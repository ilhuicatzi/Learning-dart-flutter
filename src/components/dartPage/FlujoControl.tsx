import CodeComponent from "@/components/code/CodeComponent";
import {
  flujo_control,
} from "@/utils/introducctionCodes";

function FlujoControl() {
  return (
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
  )
}

export default FlujoControl