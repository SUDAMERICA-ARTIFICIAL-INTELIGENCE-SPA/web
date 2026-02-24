import RotatingGradientRight from "@/components/ui/rotating-gradient-right"

const steps = [
  { number: "01", title: "Conecta tus herramientas", desc: "Integra tu operación actual en minutos." },
  { number: "02", title: "Automatiza flujos clave", desc: "Activa automatizaciones inteligentes sin código." },
  { number: "03", title: "Escala con acompañamiento", desc: "Tu equipo recibe soporte en español durante todo el proceso." },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6 bg-transparent text-foreground overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Cómo funciona</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Tres pasos para empezar a ganar eficiencia.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-4xl font-black text-cyan-400">{step.number}</span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <RotatingGradientRight />
    </section>
  )
}
