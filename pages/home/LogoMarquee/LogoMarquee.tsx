"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

const WHATSAPP_URL =
  "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20integrar%20mi%20negocio";

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative suda-boxed px-0 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-foreground">
          ⚡ Integraciones a medida
        </span>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Conecta tus herramientas sin frenar la operación
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Integramos CRM, ERP, atención al cliente y automatizaciones para que
          todo funcione como un solo sistema.
        </p>
        <Button
          variant="default"
          className="mt-8 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:brightness-110"
          onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
        >
          Quiero integrar mi negocio
        </Button>

        <div className="relative mt-12 overflow-hidden pb-2">
          <div className="animate-scroll-left flex gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-card shadow-md"
              >
                <img src={src} alt="icono" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="animate-scroll-right mt-6 flex gap-10 whitespace-nowrap">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-card shadow-md"
              >
                <img src={src} alt="icono" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
      `,
        }}
      />
    </section>
  );
}
