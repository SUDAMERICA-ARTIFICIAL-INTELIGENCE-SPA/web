import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const words = [
    { text: "Start" },
    { text: "building" },
    { text: "with" },
    { text: "us", className: "text-cyan-400 dark:text-cyan-400" },
    { text: "today." },
]

export default function CTASection() {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-6 bg-black text-white">
            <TypewriterEffectSmooth words={words} />
            <p className="text-gray-400 mt-4 text-lg max-w-xl text-center">
                Join thousands of teams who build faster, smarter, and better.
            </p>
            <div className="flex gap-4 mt-10">
                <a
                    href="#"
                    className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                >
                    Get Started Free
                </a>
                <a
                    href="#"
                    className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
                >
                    Learn More
                </a>
            </div>
        </section>
    )
}
