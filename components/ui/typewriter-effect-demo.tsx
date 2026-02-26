import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    { text: "Automatiza" },
    { text: "vende" },
    { text: "más" },
    { text: "con" },
    { text: "Sudaméria.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex h-[40rem] flex-col items-center justify-center bg-background rounded-2xl border border-border">
      <div className="w-full px-8 md:px-16 flex max-w-none flex-col items-center">
        <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
          El crecimiento de tu negocio empieza aquí
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="h-10 w-40 rounded-xl border border-transparent bg-primary text-sm text-primary-foreground">
            Agendar demo
          </button>
          <button className="h-10 w-40 rounded-xl border border-input bg-card text-sm text-foreground">
            Probar 7 días
          </button>
        </div>
      </div>
    </div>
  );
}
