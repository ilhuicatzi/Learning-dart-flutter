import Hero from "@/components/dartPage/Hero";
import HolaMundo from "@/components/dartPage/HolaMundo";
import Variables from "@/components/dartPage/Variables";
import FlujoControl from "@/components/dartPage/FlujoControl";
import Funciones from "@/components/dartPage/Funciones";
import Listas from "@/components/dartPage/Listas";
function DartPage() {
  return (
    <main className="w-full max-w-4xl">
      <Hero />
      <HolaMundo />
      <Variables />
      <FlujoControl />
      <Funciones />
      <Listas />
    </main>
  );
}

export default DartPage;
