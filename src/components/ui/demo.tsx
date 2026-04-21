'use client';

import type { ReactNode } from 'react';

import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

interface SplineSceneBasicProps {
  heading?: ReactNode;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  sectionId?: string;
}

export function SplineSceneBasic({
  heading = 'Interactive 3D',
  description = 'Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.',
  ctaHref,
  ctaLabel,
  sectionId,
}: SplineSceneBasicProps) {
  return (
    <section
      id={sectionId}
      style={{ background: 'transparent' }}
      className="relative overflow-hidden bg-transparent px-3 pb-12 pt-20 sm:px-6 sm:pt-24 md:pb-8 lg:px-10 lg:pb-16 lg:pt-28"
    >
      <Spotlight className="-top-48 left-0 md:left-60 md:-top-24" fill="#aab8ff" />

      <div className="theme-panel relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[1.5rem] border md:min-h-[calc(100vh-72px)] md:rounded-[2rem] md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-6 text-center md:p-12 md:text-left">
          <h1 className="theme-heading mx-auto max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:mx-0 md:text-6xl">
            {heading}
          </h1>
          <p className="theme-body mx-auto mt-4 max-w-lg text-sm sm:text-base md:mx-0 md:text-xl">
            {description}
          </p>
          {ctaHref && ctaLabel ? (
            <a
              href={ctaHref}
              className="theme-link-button mx-auto mt-6 inline-flex w-fit items-center rounded-xl bg-[linear-gradient(135deg,#6477ff,#8ca0ff)] px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:brightness-110 md:mx-0 md:mt-8 md:px-6"
            >
              {ctaLabel}
            </a>
          ) : null}
        </div>

        <div className="relative h-[42svh] min-h-[280px] flex-1 sm:h-[48svh] sm:min-h-[340px] md:h-auto md:min-h-full">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/45" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full scale-[1.35] sm:scale-[1.28] md:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
