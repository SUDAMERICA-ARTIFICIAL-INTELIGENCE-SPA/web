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
    <main className="dark min-h-screen bg-background text-foreground py-6 md:py-10 space-y-6 md:space-y-8">
      <section className="site-width"><DottedHero /></section>
      <section className="site-width"><IntegrationHero /></section>
      <section className="site-width"><RotatingGradientRight /></section>
      <section className="site-width"><Features /></section>
      <section className="site-width"><GlowingEffectDemo /></section>
      <section className="site-width"><ContainerScrollDemo /></section>
      <section className="site-width"><TestimonialsDemo /></section>
      <section className="site-width"><PricingDemo /></section>
      <section className="site-width"><FAQDemo /></section>
      <section className="site-width"><TypewriterEffectDemo /></section>
    </main>
  );
}

export default App;
