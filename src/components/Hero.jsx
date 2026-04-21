import React from 'react';

import { SplineSceneBasic } from '@/components/ui/demo';

const Hero = () => {
  return (
    <SplineSceneBasic
      sectionId="home"
      heading={
        <>
          Hi, I&apos;m <span className="text-indigo-300">Hatim Ghadyali</span>
        </>
      }
      description="I design and develop modern web experiences that are responsive, polished, and built with attention to detail."
      ctaHref="#project"
      ctaLabel="View My Work"
    />
  );
};

export default Hero;
