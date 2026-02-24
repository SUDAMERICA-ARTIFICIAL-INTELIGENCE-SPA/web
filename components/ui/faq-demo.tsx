import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
  automatizacion: "Automatización",
  precios: "Precios y garantía",
  tecnologia: "Tecnología",
};

const faqData = {
  automatizacion: [
    {
      question: "¿Qué tipo de procesos puedo automatizar?",
      answer:
        "Ventas, seguimiento comercial, atención al cliente, tareas administrativas y reportes operativos.",
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer:
        "No. Sudaméria AI está diseñada para dueños, administradores y equipos no técnicos.",
    },
    {
      question: "¿Funciona para pymes y microempresas?",
      answer:
        "Sí. Nuestro enfoque es democratizar la automatización con planes accesibles y acompañamiento.",
    },
  ],
  precios: [
    {
      question: "¿Tienen prueba gratis?",
      answer: "Sí, ofrecemos 7 días de prueba para validar resultados sin riesgo.",
    },
    {
      question: "¿Hay garantía de satisfacción?",
      answer:
        "Sí. Si no quedas satisfecho, puedes solicitar reembolso dentro del periodo acordado.",
    },
    {
      question: "¿Puedo cambiar de plan?",
      answer:
        "Sí. Puedes escalar al plan profesional o solicitar plan a medida cuando lo necesites.",
    },
  ],
  tecnologia: [
    {
      question: "¿Incluye CRM y ERP con IA?",
      answer:
        "Sí, integramos CRM, ERP y agentes de IA según la operación específica de tu negocio.",
    },
    {
      question: "¿Qué integraciones soportan?",
      answer:
        "Integramos herramientas existentes y conectores a medida para que no pierdas tus sistemas actuales.",
    },
    {
      question: "¿Atienden en toda Hispanoamérica?",
      answer:
        "Sí, trabajamos con empresas de todos los países de habla hispana.",
    },
  ],
};

export function FAQDemo() {
  return (
    <FAQ
      title="Preguntas frecuentes"
      subtitle="Te ayudamos a decidir con claridad"
      categories={categories}
      faqData={faqData}
    />
  );
}
