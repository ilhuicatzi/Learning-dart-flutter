import Hero from "@/components/dartPage/Hero";
import HolaMundo from "@/components/dartPage/HolaMundo";
import Variables from "@/components/dartPage/Variables";
import FlujoControl from "@/components/dartPage/FlujoControl";
import Funciones from "@/components/dartPage/Funciones";
import Listas from "@/components/dartPage/Listas";
import Iterables from "@/components/dartPage/Iterables";
function DartPage() {
  return (
    <main className="w-full max-w-4xl">
      <Hero />
      <HolaMundo />
      <Variables />
      <FlujoControl />
      <Funciones />
      <Listas />
      <Iterables />
    </main>
  );
}

export default DartPage;
