import {
  PricingCard,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const plans: PricingCardProps[] = [
  {
    planName: "Free",
    description: "Get started at no cost.",
    price: "0",
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    planName: "Pro",
    description: "For growing teams.",
    price: "29",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    buttonText: "Start Free Trial",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Enterprise",
    description: "For large organizations.",
    price: "99",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
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
            Simple, transparent pricing
          </h1>
          <p className="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto font-sans">
            No hidden fees. Cancel anytime.
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
