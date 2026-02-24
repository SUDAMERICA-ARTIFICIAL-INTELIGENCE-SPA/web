import {
  PricingCard,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const WHATSAPP_URL =
  "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20una%20propuesta%20a%20medida";

const plans: PricingCardProps[] = [
  {
    planName: "Esencial",
    description: "Automatización inicial para negocios en crecimiento.",
    price: "29.990 CLP",
    periodLabel: "mensual",
    features: ["Soporte en español", "Onboarding guiado", "Flujos clave listos"],
    buttonText: "Comenzar ahora",
    buttonVariant: "secondary",
    buttonHref: WHATSAPP_URL,
  },
  {
    planName: "Profesional",
    description: "Mayor alcance para ventas, operaciones y servicio al cliente.",
    price: "79.990 CLP",
    periodLabel: "mensual",
    features: ["CRM + ERP", "Integraciones", "Acompañamiento continuo"],
    buttonText: "Solicitar demo",
    isPopular: true,
    buttonVariant: "primary",
    buttonHref: WHATSAPP_URL,
  },
  {
    planName: "A Medida",
    description: "Diseño e implementación según tus procesos e industria.",
    price: "Cotizar",
    periodLabel: "",
    features: ["Implementación local", "Capacitación", "Arquitectura personalizada"],
    buttonText: "Cotizar por WhatsApp",
    buttonVariant: "secondary",
    buttonHref: WHATSAPP_URL,
  },
];

export default function PricingSection() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden rounded-2xl border border-white/10">
      <InteractiveNebulaShader disableCenterDimming className="z-0" />
      <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">
        <div className="mx-auto mb-14 w-full max-w-5xl text-center">
          <h2 className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-[38px] font-extralight leading-tight tracking-[-0.03em] text-transparent md:text-[56px]">
            Elige cómo quieres crecer con IA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-muted-foreground md:text-[20px]">
            Sin costos ocultos, sin fricción técnica y con garantía de reembolso.
          </p>
        </div>
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
}
