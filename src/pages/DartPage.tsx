import Hero from "@/components/dartPage/Hero";
import HolaMundo from "@/components/dartPage/HolaMundo";
import Variables from "@/components/dartPage/Variables";
import FlujoControl from "@/components/dartPage/FlujoControl";
import Funciones from "@/components/dartPage/Funciones";
import Listas from "@/components/dartPage/Listas";
import Iterables from "@/components/dartPage/Iterables";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function DartPage() {
  return (
    <main className="w-full max-w-4xl">
      <Hero />
      <Accordion type="single" collapsible className="w-full mx-20">
        <AccordionItem value="item-HolaMundo">
          <AccordionTrigger>Hola Mundo </AccordionTrigger>
          <AccordionContent>
            <HolaMundo />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-Variables">
          <AccordionTrigger>Variables</AccordionTrigger>
          <AccordionContent>
            <Variables />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-FlujoControl">
          <AccordionTrigger>Flujo de control</AccordionTrigger>
          <AccordionContent>
            <FlujoControl />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-Funciones">
          <AccordionTrigger>Funciones</AccordionTrigger>
          <AccordionContent>
            <Funciones />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-Listas">
          <AccordionTrigger>Listas</AccordionTrigger>
          <AccordionContent>
            <Listas />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-Iterables">
          <AccordionTrigger>Iterables</AccordionTrigger>
          <AccordionContent>
            <Iterables />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default DartPage;
