import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
  implementacion: "Implementación",
  seguridad: "Seguridad",
  soporte: "Soporte",
};

const faqData = {
  implementacion: [
    {
      question: "¿Cuánto tarda la implementación?",
      answer:
        "Depende del alcance, pero en casos comunes comenzamos con automatizaciones funcionales en pocos días.",
    },
    {
      question: "¿Puedo integrar mis herramientas actuales?",
      answer:
        "Sí. Diseñamos integraciones a medida para preservar procesos que ya te funcionan.",
    },
  ],
  seguridad: [
    {
      question: "¿Qué pasa con mis datos?",
      answer:
        "Aplicamos buenas prácticas de seguridad y control de accesos para proteger la información de tu empresa.",
    },
    {
      question: "¿Puedo auditar los flujos?",
      answer:
        "Sí, documentamos la lógica de automatización para que tengas trazabilidad y control.",
    },
  ],
  soporte: [
    {
      question: "¿Incluye acompañamiento?",
      answer:
        "Sí, en todos los planes tendrás soporte en español y guía para maximizar resultados.",
    },
    {
      question: "¿Dónde puedo agendar una demo?",
      answer:
        "Desde cualquier botón de contacto por WhatsApp en esta página.",
    },
  ],
};

export default function FAQSection() {
  return (
    <FAQ
      title="¿Aún con dudas?"
      subtitle="Aquí resolvemos las más comunes"
      categories={categories}
      faqData={faqData}
      className=""
    />
  );
}
