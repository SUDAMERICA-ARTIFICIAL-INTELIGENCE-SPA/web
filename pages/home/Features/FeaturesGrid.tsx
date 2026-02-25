import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export default function FeaturesGrid() {
    return (
        <div className="bg-black">
            <ContainerScroll
                titleComponent={
                    <h2 className="text-4xl font-semibold text-black dark:text-white">
                        Everything your team needs,{" "}
                        <span className="text-4xl md:text-[6rem] font-bold leading-none text-white">
                            in one place.
                        </span>
                    </h2>
                }
            >
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {[
                            { title: "Analytics", desc: "Real-time insights", icon: "📊" },
                            { title: "Automation", desc: "Streamline workflows", icon: "⚡" },
                            { title: "Collaboration", desc: "Work as one team", icon: "🤝" },
                            { title: "Security", desc: "Enterprise-grade", icon: "🔒" },
                            { title: "Integrations", desc: "50+ tools", icon: "🔌" },
                            { title: "AI Powered", desc: "Smart suggestions", icon: "🧠" },
                        ].map((f) => (
                            <div
                                key={f.title}
                                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                            >
                                <span className="text-3xl">{f.icon}</span>
                                <h3 className="font-semibold text-white text-sm">{f.title}</h3>
                                <p className="text-xs text-gray-400">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerScroll>
        </div>
    )
}
