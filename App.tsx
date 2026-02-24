import type { ReactNode } from "react";
import DottedHero from "./pages/home/hero/DottedHero";
import IntegrationHero from "./components/ui/integration-hero";
import LogoMarquee from "./pages/home/LogoMarquee/LogoMarquee";
import ProblemSection from "./pages/home/ProblemSection/ProblemSection";
import HowItWorks from "./pages/home/HowItWorks/HowItWorks";
import FeaturesGrid from "./pages/home/Features/FeaturesGrid";
import { Features } from "./components/ui/features-8";
import { GlowingEffectDemo } from "./components/ui/glowing-effect-demo";
import { ContainerScrollDemo } from "./components/ui/container-scroll-demo";
import { TestimonialsDemo } from "./components/ui/testimonials-demo";
import Testimonials from "./pages/home/Testimonials/TestimonialsSection";
import { PricingDemo } from "./components/ui/pricing-demo";
import PricingSection from "./pages/home/Pricing/PricingSection";
import { FAQDemo } from "./components/ui/faq-demo";
import FAQSection from "./pages/home/FAQ/FAQSection";
import { TypewriterEffectDemo } from "./components/ui/typewriter-effect-demo";
import CTASection from "./pages/home/CTA/CTASection";
import "./index.css";

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="suda-boxed rounded-3xl border border-white/10 bg-card/95 p-4 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      {children}
    </div>
  );
}

function App() {
  return (
    <main className="dark min-h-screen bg-background text-foreground pb-12">
      <section className="story-section pt-4 md:pt-8">
        <Box>
          <DottedHero />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <IntegrationHero />
          <LogoMarquee />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <ProblemSection />
          <HowItWorks />
          <FeaturesGrid />
          <Features />
          <GlowingEffectDemo />
          <ContainerScrollDemo />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <TestimonialsDemo />
          <Testimonials />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <PricingDemo />
          <PricingSection />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <FAQDemo />
          <FAQSection />
        </Box>
      </section>

      <section className="story-section mt-6 md:mt-10">
        <Box>
          <TypewriterEffectDemo />
          <CTASection />
        </Box>
      </section>
    </main>
  );
}

export default App;
