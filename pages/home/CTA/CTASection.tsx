import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  { text: "Empieza" },
  { text: "a" },
  { text: "automatizar" },
  { text: "hoy", className: "text-accent" },
];

const WHATSAPP_URL =
  "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20empezar%20hoy";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center bg-transparent px-4 py-24 text-foreground">
      <TypewriterEffectSmooth words={words} />
      <p className="mt-4 max-w-xl text-center text-base text-muted-foreground md:text-lg">
        Prueba gratis por 7 días y valida el impacto real en tu negocio.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Iniciar prueba gratis
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 px-8 py-3 text-foreground transition hover:bg-white/10"
        >
          Solicitar asesoría
        </a>
      </div>
    </section>
  );
}
