import React from "react";
import ShaderBackground from "@/components/ui/shader-background";

export const AuroraFlow = () => {
  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold tracking-tight text-white mb-6 [text-shadow:_0_0_30px_rgb(0_255_255_/_40%)]">
          Shader <span className="text-cyan-400">Background</span>
        </h1>
        <p className="text-xl text-cyan-100/80 max-w-2xl mx-auto mb-8">
          A high-performance WebGL shader background with flowing patterns and
          digital aurora effects.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.3)]">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuroraFlow;
