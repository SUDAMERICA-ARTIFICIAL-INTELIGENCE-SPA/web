import React from "react";
import { AnimatedCarousel } from "@/components/ui/logo-carousel";

const partnerLogos = [
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React" },
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js" },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    alt: "Tailwind CSS",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/notion-2.svg", alt: "Notion" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
    alt: "Figma",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    alt: "Framer Motion",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",
    alt: "Storybook",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/sanity.svg", alt: "Sanity" },
];

export default function IntegrationHero() {
  return (
    <section className="relative pt-0 pb-16 overflow-hidden bg-white dark:bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Animated logo carousel */}
      <div className="relative">
        <AnimatedCarousel
          title="Potenciando negocios con IA"
          logos={partnerLogos.map((l) => l.src)}
          autoPlay={true}
          autoPlayInterval={4000}
          itemsPerViewMobile={3}
          itemsPerViewDesktop={5}
          logoContainerWidth="w-40"
          logoContainerHeight="h-20"
          logoImageWidth="w-auto"
          logoImageHeight="h-10"
          padding="py-8"
        />
      </div>
    </section>
  );
}
