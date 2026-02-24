import React from "react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { TextColor } from "@/components/ui/text-color";
import { cn } from "@/lib/utils";

export function DottedHero() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Canvas ocupa pantalla completa anclado abajo — la parte superior queda recortada */}
      <div className="absolute inset-x-0 bottom-0 h-screen pointer-events-none">
        <DottedSurface />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_50%)]",
          "blur-[30px]",
        )}
      />

      <div className="absolute bottom-8 left-0 right-0 z-10 px-8 md:px-16">
        <TextColor />
        <div className="flex gap-4 justify-center mt-2">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default DottedHero;
