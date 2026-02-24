import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Valentina Muñoz",
      handle: "@valentina.negocios",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "En 3 semanas automatizamos seguimiento comercial y recuperamos horas de trabajo cada día.",
  },
  {
    author: {
      name: "Diego Pérez",
      handle: "@diegopyme",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Pensé que era caro, pero Sudaméria AI nos mostró una solución accesible y mucho más rentable.",
  },
  {
    author: {
      name: "Sofía Andrade",
      handle: "@sofiaadmin",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Nuestro equipo no es técnico y aun así implementamos CRM, soporte y automatizaciones sin dolor.",
  },
];

export function TestimonialsDemo() {
  return (
    <TestimonialsSection
      title="Resultados reales en negocios reales"
      description="Historias de empresas que automatizaron procesos y empezaron a vender más con menos esfuerzo"
      testimonials={testimonials}
    />
  );
}
