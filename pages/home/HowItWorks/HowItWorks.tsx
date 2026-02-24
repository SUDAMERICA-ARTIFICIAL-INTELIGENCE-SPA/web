import RotatingGradientRight from "@/components/ui/rotating-gradient-right"

const steps = [
  { number: "01", title: "Connect your tools", desc: "Integrate with your existing stack in minutes." },
  { number: "02", title: "Automate workflows", desc: "Set up smart automations without writing code." },
  { number: "03", title: "Collaborate in real-time", desc: "Your team works together on a single source of truth." },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Get productive in three simple steps.</p>
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
