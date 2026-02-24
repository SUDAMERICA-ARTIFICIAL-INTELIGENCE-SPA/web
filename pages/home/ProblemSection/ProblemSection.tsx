import { Typewriter } from "@/components/ui/typewriter"
import { Features } from "@/components/blocks/features-8"

export default function ProblemSection() {
    return (
        <section className="bg-white dark:bg-black py-16 px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">
                    The Problem
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 min-h-[4rem]">
                    <Typewriter
                        text={[
                            "Too many tools, not enough focus.",
                            "Inefficient communication silos.",
                            "Complex setups that slow you down.",
                            "Fragmented workflows kill productivity.",
                        ]}
                        speed={60}
                        waitTime={2200}
                        loop={true}
                        className="text-black dark:text-white"
                    />
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Modern teams struggle with scattered tools and broken processes.
                    We eliminate the friction so you can focus on what matters.
                </p>
            </div>

            <Features />
        </section>
    )
}
