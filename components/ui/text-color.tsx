import React from "react";
import { Plus } from "lucide-react";

export function TextColor() {
  return (
    <div>
      <div className="mb-10 mt-4 md:mt-6">
        <div className="px-2">
          <div className="relative h-full w-full border border-white/10 bg-card/40 p-8 [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)]">
            <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-extrabold leading-none tracking-tighter sm:text-7xl md:flex-col lg:flex-row lg:justify-center">
              <Plus className="absolute -left-4 -top-4 h-8 w-8 text-accent" />
              <Plus className="absolute -bottom-4 -left-4 h-8 w-8 text-accent" />
              <Plus className="absolute -right-4 -top-4 h-8 w-8 text-accent" />
              <Plus className="absolute -bottom-4 -right-4 h-8 w-8 text-accent" />

              <span
                data-content="Automatiza."
                className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  Automatiza.
                </span>
              </span>
              <span
                data-content="Escala."
                className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  Escala.
                </span>
              </span>
              <span
                data-content="Vende."
                className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                  Vende.
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
