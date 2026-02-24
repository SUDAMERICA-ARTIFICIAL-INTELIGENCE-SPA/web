import { useEffect, useMemo, useState } from "react";
import {
  ModernPricingPage,
  PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

const WHATSAPP_URL =
  "https://wa.me/56942201780?text=Hola%20Sudam%C3%A9ria%20AI%2C%20quiero%20activar%20mi%20prueba";

const BASE_PRICES_CLP = {
  esencial: 29990,
  profesional: 79990,
};

const EXCHANGE: Record<string, number> = {
  CLP: 1,
  ARS: 1.18,
  COP: 4.22,
  MXN: 0.022,
  PEN: 0.004,
  USD: 0.0011,
  EUR: 0.001,
};

function getLocaleAndCurrency() {
  const locale = navigator.language || "es-CL";
  const region = locale.split("-")[1]?.toUpperCase();
  const map: Record<string, string> = {
    CL: "CLP",
    AR: "ARS",
    CO: "COP",
    MX: "MXN",
    PE: "PEN",
    ES: "EUR",
  };
  return { locale, currency: map[region ?? ""] ?? "USD" };
}

function formatPrice(amount: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingDemo() {
  const [locale, setLocale] = useState("es-CL");
  const [currency, setCurrency] = useState("CLP");

  useEffect(() => {
    const detected = getLocaleAndCurrency();
    setLocale(detected.locale);
    setCurrency(detected.currency);
  }, []);

  const plans: PricingCardProps[] = useMemo(() => {
    const rate = EXCHANGE[currency] ?? EXCHANGE.USD;
    const essential = Math.round(BASE_PRICES_CLP.esencial * rate);
    const pro = Math.round(BASE_PRICES_CLP.profesional * rate);

    return [
      {
        planName: "Plan Esencial",
        description: "Ideal para microempresas que quieren empezar a automatizar.",
        price: formatPrice(essential, locale, currency),
        pricePrefix: "",
        periodLabel: "mensual",
        features: [
          "Automatización de tareas repetitivas",
          "Asistente IA para atención inicial",
          "Implementación guiada",
        ],
        buttonText: "Probar 7 días gratis",
        buttonVariant: "secondary",
        buttonHref: WHATSAPP_URL,
      },
      {
        planName: "Plan Profesional",
        description: "Para empresas que buscan escalar ventas y soporte.",
        price: formatPrice(pro, locale, currency),
        pricePrefix: "",
        periodLabel: "mensual",
        features: [
          "CRM + ERP asistido por IA",
          "Automatización comercial avanzada",
          "Integraciones personalizadas",
          "Soporte prioritario",
        ],
        buttonText: "Agendar demostración",
        isPopular: true,
        buttonVariant: "primary",
        buttonHref: WHATSAPP_URL,
      },
      {
        planName: "Plan a Medida",
        description: "Diseñado para necesidades específicas e instalaciones locales.",
        price: "Cotizar",
        periodLabel: "",
        features: [
          "Arquitectura personalizada",
          "Capacitaciones y certificaciones",
          "Despliegue para empresas grandes",
        ],
        buttonText: "Hablar con un asesor",
        buttonVariant: "primary",
        buttonHref: WHATSAPP_URL,
      },
    ];
  }, [currency, locale]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/50">
      <InteractiveNebulaShader disableCenterDimming={true} />
      <div className="relative z-10 suda-boxed px-0">
        <ModernPricingPage
          title={
            <>
              Planes accesibles para
              <span className="text-accent"> automatizar tu negocio</span>
            </>
          }
          subtitle="Mostramos valores en tu moneda local y puedes empezar sin riesgo con prueba gratis y garantía de satisfacción."
          plans={plans}
          showAnimatedBackground={false}
        />
      </div>
    </div>
  );
}
