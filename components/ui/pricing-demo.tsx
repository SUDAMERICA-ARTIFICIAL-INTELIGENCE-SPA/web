import {
  ModernPricingPage,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const plans: PricingCardProps[] = [
  {
    planName: "Esencial",
    description: "Para negocios que empiezan a automatizar.",
    price: "29.990 CLP",
    features: ["Flujos base", "Asistente IA", "Soporte inicial"],
    buttonText: "Comenzar ahora",
    buttonVariant: "secondary",
  },
  {
    planName: "Profesional",
    description: "Para equipos que quieren crecer con procesos inteligentes.",
    price: "79.990 CLP",
    features: ["CRM + ERP", "Automatizaciones avanzadas", "Soporte prioritario"],
    buttonText: "Elegir plan profesional",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "A Medida",
    description: "Para empresas con integraciones y alcance personalizado.",
    price: "Cotizar",
    features: ["Implementación dedicada", "Integraciones a medida", "Acompañamiento experto"],
    buttonText: "Contactar asesor",
    buttonVariant: "primary",
  },
];

export function PricingDemo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60">
      <InteractiveNebulaShader disableCenterDimming={true} />
      <div className="relative z-10 w-full px-4 md:px-6">
        <ModernPricingPage
          title={
            <>
              Elige el <span className="text-cyan-400">plan ideal</span> para tu negocio
            </>
          }
          subtitle="Planes claros y accesibles para automatizar tus procesos en español."
          plans={plans}
          showAnimatedBackground={false}
        />
      </div>
    </div>
  );
}
