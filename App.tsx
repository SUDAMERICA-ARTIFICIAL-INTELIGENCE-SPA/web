import DottedHero from "./pages/home/hero/DottedHero";
import IntegrationHero from "./components/ui/integration-hero";
import { Features } from "./components/ui/features-8";
import RotatingGradientRight from "./components/ui/rotating-gradient-right";
import { GlowingEffectDemo } from "./components/ui/glowing-effect-demo";
import { ContainerScrollDemo } from "./components/ui/container-scroll-demo";
import { TestimonialsDemo } from "./components/ui/testimonials-demo";
import { PricingDemo } from "./components/ui/pricing-demo";
import { TypewriterEffectDemo } from "./components/ui/typewriter-effect-demo";
import { FAQDemo } from "./components/ui/faq-demo";
import "./index.css";

function App() {
  return (
    <main className="dark bg-black text-white min-h-screen">
      <DottedHero />
      <IntegrationHero />
      <RotatingGradientRight />
      <Features />
      <GlowingEffectDemo />
      <ContainerScrollDemo />
      <TestimonialsDemo />
      <PricingDemo />
      <FAQDemo />
      <TypewriterEffectDemo />
    </main>
  );
}

export default App;
