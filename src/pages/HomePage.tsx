

function HomePage() {
  return (
    <main className="w-full max-w-4xl">
      <section className="w-full flex justify-center items-start flex-col mx-20 my-10 space-y-4">
        <h1 className="text-4xl font-semibold">
          Introducción a <span className="text-primary">Dart</span> y <span className="text-primary"> Flutter</span>
        </h1>
        <p>
          Dart es un lenguaje de programación de código abierto, desarrollado por
          Google. Es fácil de aprender y tiene una sintaxis limpia y clara.
        </p>
        <p>
          Flutter es un kit de desarrollo de interfaz de usuario (UI toolkit),
          creado por Google, que permite crear aplicaciones compiladas nativas
          para móviles, web y escritorio a partir de una única base de código.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
