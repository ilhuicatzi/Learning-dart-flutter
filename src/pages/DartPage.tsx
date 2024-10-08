import Hero from "@/components/dartPage/Hero";
import HolaMundo from "@/components/dartPage/HolaMundo";
import Variables from "@/components/dartPage/Variables";
import Listas from "@/components/dartPage/Listas";
import Iterables from "@/components/dartPage/Iterables";
import Conjuntos from "@/components/dartPage/Conjuntos";
import FlujoControl from "@/components/dartPage/FlujoControl";
import Funciones from "@/components/dartPage/Funciones";
import Classes from "@/components/dartPage/Classes";
import Mixins from "@/components/dartPage/Mixins";
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

        <AccordionItem value="item-Conjuntos">
          <AccordionTrigger>Conjuntos</AccordionTrigger>
          <AccordionContent>
            <Conjuntos />
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

        <AccordionItem value="item-Classes">
          <AccordionTrigger>Clases</AccordionTrigger>
          <AccordionContent>
            <Classes />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-Mixins">
          <AccordionTrigger>Mixins</AccordionTrigger>
          <AccordionContent>
            <Mixins />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default DartPage;
