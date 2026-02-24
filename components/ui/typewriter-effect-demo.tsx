import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const WHATSAPP_URL =
  "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20agendar%20una%20demo";

export function TypewriterEffectDemo() {
  const words = [
    { text: "Haz" },
    { text: "crecer" },
    { text: "tu" },
    { text: "negocio" },
    { text: "con", className: "text-accent" },
    { text: "Sudaméria", className: "text-primary" },
    { text: "AI." },
  ];

  return (
    <div className="flex h-auto min-h-[32rem] flex-col items-center justify-center bg-transparent py-8">
      <div className="suda-boxed flex w-full flex-col items-center px-0 text-center">
        <p className="text-xs text-muted-foreground sm:text-base">
          Automatiza hoy y recupera tiempo para vender más
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="h-11 w-52 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Agendar demostración
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="h-11 w-52 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
