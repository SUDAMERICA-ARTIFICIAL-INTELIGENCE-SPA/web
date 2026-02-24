import React from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { TextColor } from "@/components/ui/text-color";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20una%20demo";

export function DottedHero() {
  return (
    <div className="relative w-full min-h-[72vh] overflow-hidden rounded-2xl border border-white/10 bg-background">
      <div className="absolute inset-x-0 bottom-0 h-screen pointer-events-none">
        <DottedSurface />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.16),transparent_50%)]",
          "blur-[36px]",
        )}
      />

      <div className="absolute bottom-8 left-0 right-0 z-10 px-4 md:px-8">
        <TextColor />
        <p className="mx-auto max-w-3xl text-center text-sm md:text-lg text-muted-foreground">
          Automatizamos ventas, atención y operaciones para que tu negocio gane
          más en menos tiempo.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Agendar demo por WhatsApp
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-foreground transition hover:bg-white/20"
          >
            Probar 7 días gratis
          </a>
        </div>
      </div>
    </div>
  );
}

export default DottedHero;
