'use client';

import type React from 'react';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import careerCompassImage from '@/assets/career compass.png';
import customerComplaintImage from '@/assets/customer-complaint.png';
import laticeLabsImage from '@/assets/latice-labs.png';
import personalityPredictorImage from '@/assets/personality predictor.png';

interface Project {
  title: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Career Compass',
    year: 'TBD',
    image: careerCompassImage,
  },
  {
    title: 'Customer Complaint',
    year: 'TBD',
    image: customerComplaintImage,
  },
  {
    title: 'Latice Labs',
    year: 'TBD',
    image: laticeLabsImage,
  },
  {
    title: 'Personality Predictor',
    year: 'TBD',
    image: personalityPredictorImage,
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      const previewElement = previewRef.current;

      if (previewElement) {
        currentPositionRef.current.x = lerp(
          currentPositionRef.current.x,
          targetPositionRef.current.x,
          0.16
        );
        currentPositionRef.current.y = lerp(
          currentPositionRef.current.y,
          targetPositionRef.current.y,
          0.16
        );

        previewElement.style.transform = `translate3d(${currentPositionRef.current.x + 24}px, ${currentPositionRef.current.y - 110}px, 0) scale(${isVisible ? 1 : 0.94})`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  const handleMouseMove = (e: React.MouseEvent) => {
    targetPositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const nextPosition = {
      x: e.clientX,
      y: e.clientY,
    };

    targetPositionRef.current = nextPosition;
    currentPositionRef.current = nextPosition;
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleSectionLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleSectionLeave}
      className="relative mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16"
    >
      <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
        Selected Work
      </h2>

      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden overflow-hidden rounded-xl shadow-2xl transition-opacity duration-200 ease-out md:block"
        style={{ opacity: isVisible ? 1 : 0, willChange: 'transform, opacity' }}
      >
        <div className="relative h-[180px] w-[280px] overflow-hidden rounded-xl bg-secondary">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: `scale(${hoveredIndex === index ? 1 : 1.04})`,
                willChange: 'opacity, transform',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group block"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
          >
            <div className="relative border-t border-border py-5 transition-all duration-300 ease-out">
              <div
                className={`
                  absolute inset-0 -mx-4 rounded-lg bg-secondary/50 px-4
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              />

              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? 'w-full' : 'w-0'}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        h-4 w-4 text-muted-foreground
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? 'translate-x-0 translate-y-0 opacity-100'
                            : '-translate-x-2 translate-y-2 opacity-0'
                        }
                      `}
                    />
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-border/70 md:hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                </div>

                <span
                  className={`
                    font-mono text-xs tabular-nums text-muted-foreground sm:pt-1
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? 'text-foreground/60' : ''}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  );
}
