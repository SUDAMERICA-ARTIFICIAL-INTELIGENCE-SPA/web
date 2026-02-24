import { Typewriter } from "@/components/ui/typewriter";
import { Features } from "@/components/blocks/features-8";

export default function ProblemSection() {
  return (
    <section className="bg-transparent py-16 px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          El problema oculto
        </p>
        <h2 className="mb-4 min-h-[4rem] text-3xl font-bold text-foreground md:text-5xl">
          <Typewriter
            text={[
              "Tu negocio funciona… pero deja dinero en la mesa.",
              "Procesos manuales te quitan horas hombre todos los días.",
              "Atención lenta y tareas repetitivas frenan tu crecimiento.",
              "Sin automatización, cada mes pierdes eficiencia e ingresos.",
            ]}
            speed={60}
            waitTime={2200}
            loop={true}
            className="text-foreground"
          />
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
          Sudaméria AI identifica cuellos de botella y los convierte en flujos
          automáticos para que vendas más y operes mejor sin complicarte con
          tecnología.
        </p>
      </div>

      <Features />
    </section>
  );
}
