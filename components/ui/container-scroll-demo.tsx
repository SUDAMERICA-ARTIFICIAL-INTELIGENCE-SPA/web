import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="suda-boxed w-full px-0">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Automatización para empresas de habla hispana <br />
                <span className="mt-1 text-4xl font-bold leading-none text-accent md:text-[5rem]">
                  Escala sin complicarte
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
