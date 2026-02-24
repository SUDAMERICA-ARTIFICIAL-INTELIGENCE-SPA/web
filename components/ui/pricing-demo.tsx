import {
  ModernPricingPage,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const plans: PricingCardProps[] = [
  {
    planName: "Basic",
    description: "Perfect for personal projects and hobbyists.",
    price: "0",
    features: ["1 User", "1GB Storage", "Community Forum"],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    planName: "Team",
    description: "Collaborate with your team on multiple projects.",
    price: "49",
    features: [
      "10 Users",
      "100GB Storage",
      "Email Support",
      "Shared Workspaces",
    ],
    buttonText: "Choose Team Plan",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Agency",
    description: "Manage all your clients under one roof.",
    price: "149",
    features: [
      "Unlimited Users",
      "1TB Storage",
      "Dedicated Support",
      "Client Invoicing",
    ],
    buttonText: "Contact Us",
    buttonVariant: "primary",
  },
];

export function PricingDemo() {
  return (
    <div className="relative overflow-hidden">
      <InteractiveNebulaShader disableCenterDimming={true} />
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <ModernPricingPage
          title={
            <>
              Find the <span className="text-cyan-400">Perfect Plan</span> for
              Your Business
            </>
          }
          subtitle="Start for free, then grow with us. Flexible plans for projects of all sizes."
          plans={plans}
          showAnimatedBackground={false}
        />
      </div>
    </div>
  );
}
