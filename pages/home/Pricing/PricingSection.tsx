import {
  PricingCard,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const plans: PricingCardProps[] = [
  {
    planName: "Esencial",
    description: "Empieza con automatización base.",
    price: "0",
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
    buttonText: "Comenzar",
    buttonVariant: "secondary",
  },
  {
    planName: "Profesional",
    description: "Para equipos en crecimiento.",
    price: "29",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    buttonText: "Iniciar prueba",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "A Medida",
    description: "Para operaciones complejas.",
    price: "99",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    buttonText: "Hablar con ventas",
    buttonVariant: "secondary",
  },
];

export default function PricingSection() {
  return (
    <div className="relative text-foreground min-h-screen w-full overflow-x-hidden">
      <InteractiveNebulaShader disableCenterDimming className="z-0" />
      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h1 className="text-[48px] md:text-[64px] font-extralight leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-blue-400 font-display">
            Precios claros y accesibles
          </h1>
          <p className="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto font-sans">
            Sin costos ocultos. Cancela cuando quieras.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
}
