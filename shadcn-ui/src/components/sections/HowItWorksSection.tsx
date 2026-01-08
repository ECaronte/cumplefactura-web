const steps = [
  {
    number: "1",
    title: "Paso 1",
    description: "El cliente hace un pedido en tu tienda WooCommerce.",
  },
  {
    number: "2",
    title: "Paso 2",
    description: "CumpleFactura genera la factura automáticamente.",
  },
  {
    number: "3",
    title: "Paso 3",
    description:
      "Se aplica la capa de cumplimiento en el PDF (QR + hash + frase legal).",
  },
  {
    number: "4",
    title: "Paso 4",
    description: "Se registra la trazabilidad con hash encadenado.",
  },
  {
    number: "5",
    title: "Paso 5",
    description:
      "Opcional: se preparan exportaciones coherentes para contabilidad y gestoría.",
  },
  {
    number: "6",
    title: "Paso 6",
    description:
      "Tu gestoría puede recibir todo en CSV, XML o a través de API.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="py-28 bg-brand-light"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2
            id="how-it-works-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-primary"
          >
            Así funciona CumpleFactura (simple y automático).
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sin paneles raros ni duplicidades: ocurre dentro de tu flujo Woo y
            deja la factura lista para cumplir y para contabilidad.
          </p>
        </div>

        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
          role="list"
        >
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-background p-9 rounded-xl border shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
            >
              <div
                className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                aria-hidden="true"
              >
                <span className="text-8xl font-bold text-primary">
                  {step.number}
                </span>
              </div>

              <div className="relative z-10">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mb-4"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="text-center mt-14">
          <p className="text-xl font-medium text-primary">
            Todo ocurre en segundos sin que tengas que intervenir.
          </p>
        </div>
      </div>
    </section>
  );
}
