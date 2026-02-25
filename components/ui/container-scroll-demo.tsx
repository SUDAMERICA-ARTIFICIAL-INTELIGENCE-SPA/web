import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Impulsa tu negocio con <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  automatización inteligente
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/hero-bg.jpg"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
