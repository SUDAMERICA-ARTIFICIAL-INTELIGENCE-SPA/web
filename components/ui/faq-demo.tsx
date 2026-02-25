import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
  automatizacion: "Automatización",
  precios: "Planes y cobros",
  soporte: "Implementación y soporte",
};

const faqData = {
  automatizacion: [
    {
      question: "¿Qué procesos puedo automatizar?",
      answer:
        "Ventas, atención al cliente, seguimiento comercial, tareas administrativas y reportes operativos.",
    },
    {
      question: "¿Necesito saber tecnología?",
      answer:
        "No. Está pensado para dueños, administradores y equipos sin perfil técnico.",
    },
  ],
  precios: [
    {
      question: "¿Hay prueba gratuita?",
      answer:
        "Sí, puedes probar durante 7 días para validar resultados antes de comprometerte.",
    },
    {
      question: "¿Puedo cambiar de plan?",
      answer:
        "Sí, puedes escalar cuando tu operación crezca o pedir un plan a medida.",
    },
  ],
  soporte: [
    {
      question: "¿Ayudan con la implementación?",
      answer:
        "Sí, acompañamos todo el proceso de configuración e integración.",
    },
    {
      question: "¿Atienden en español?",
      answer:
        "Sí, soporte en español para todos los países de habla hispana.",
    },
  ],
};

export function FAQDemo() {
  return (
    <FAQ
      title="Preguntas frecuentes"
      subtitle="Resolvemos tus dudas en minutos"
      categories={categories}
      faqData={faqData}
    />
  );
}
