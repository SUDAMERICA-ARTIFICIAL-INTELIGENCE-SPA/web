import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Carla Rojas",
      handle: "@carla.negocios",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Automatizamos la atención y ahora respondemos en minutos, no en horas.",
  },
  {
    author: {
      name: "Diego Méndez",
      handle: "@diegopymes",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Reducimos tareas repetitivas y el equipo se enfocó en vender más.",
  },
  {
    author: {
      name: "Sofía León",
      handle: "@sofiaadmin",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "La implementación fue simple y el soporte en español marcó la diferencia.",
  },
];

export function TestimonialsDemo() {
  return (
    <TestimonialsSection
      title="Empresas que confían en Sudaméria AI"
      description="Resultados reales en negocios que decidieron automatizar"
      testimonials={testimonials}
    />
  );
}
