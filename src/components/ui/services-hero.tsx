"use client";

import React from "react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export default function ServicesHero() {
  const handleExploreServices = () => {
    const section = document.getElementById("services-list");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-transparent pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pt-24">
      <div
        className="relative w-full overflow-hidden border-y shadow-[0_34px_90px_rgba(2,6,23,0.18)]"
        style={{
          borderColor: 'var(--border-soft)',
          background: 'var(--services-hero-frame)',
        }}
      >
        <div className="absolute inset-0">
          <WebGLShader />
        </div>
        <div className="absolute inset-0" style={{ background: 'var(--services-hero-overlay)' }} />

        <div className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl border p-2 backdrop-blur-[2px]" style={{ borderColor: 'var(--border-soft)', background: 'var(--surface-soft)' }}>
            <main className="relative overflow-hidden border px-4 py-10 sm:px-7 sm:py-14" style={{ borderColor: 'var(--border-soft)' }}>
              <h1 className="theme-heading mb-4 text-center text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl lg:text-[clamp(3.5rem,7vw,6.75rem)]">
                Websites that help businesses grow
              </h1>

              <p className="theme-body mx-auto max-w-2xl px-2 text-center text-sm leading-7 sm:text-base lg:text-lg">
                From development to SEO, maintenance, and deployment, I build
                digital experiences that look sharp, perform smoothly, and stay
                reliable after launch.
              </p>

              <div className="my-8 flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-400 sm:text-sm">
                  Available for New Projects
                </p>
              </div>

              <div className="flex justify-center">
                <LiquidButton
                  className="border border-[var(--border-soft)] text-[var(--heading)]"
                  size="xl"
                  onClick={handleExploreServices}
                >
                  Explore Services
                </LiquidButton>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
