import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function FeaturesGrid() {
  const features = [
    { icon: "🤖", title: "Agentes IA", desc: "Respuestas automáticas en español" },
    { icon: "📈", title: "Más ventas", desc: "Seguimiento inteligente de prospectos" },
    { icon: "🧩", title: "Integraciones", desc: "Conecta tus sistemas actuales" },
    { icon: "⚙️", title: "Automatización", desc: "Menos tareas manuales" },
    { icon: "🧠", title: "CRM + ERP", desc: "Operación unificada" },
    { icon: "🔒", title: "Control", desc: "Trazabilidad y seguridad" },
  ];

  return (
    <div className="bg-transparent">
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
            Lo que puedes lograr con
            <span className="block leading-none text-accent md:text-[4.5rem]">
              Sudaméria AI
            </span>
          </h2>
        }
      >
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#101828] via-[#10203f] to-[#0f172a] p-8">
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
              >
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
