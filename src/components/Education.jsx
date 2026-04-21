import React from 'react';
import { BookOpen, GraduationCap, School } from 'lucide-react';

import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: '10th Class',
    date: '2020',
    content:
      'Completed foundational schooling at MSB Educational Institute and built the academic base that carried into higher secondary studies.',
    category: 'School',
    icon: School,
    relatedIds: [2],
    status: 'completed',
    energy: 88,
  },
  {
    id: 2,
    title: '12th Class',
    date: '2022',
    content:
      'Finished higher secondary education at MSB Educational Institute before moving into the next stage of technical studies.',
    category: 'Higher Secondary',
    icon: BookOpen,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 94,
  },
  {
    id: 3,
    title: 'Graduation',
    date: '2022 - 2026',
    content:
      'Pursuing B.Tech in Computer Science Engineering at Medicaps University, with graduation targeted for 2026.',
    category: 'University',
    icon: GraduationCap,
    relatedIds: [2],
    status: 'in-progress',
    energy: 72,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      style={{ background: 'var(--section-education-bg)' }}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 18%, rgba(99,123,255,0.18) 0%, transparent 28%), radial-gradient(circle at 82% 78%, rgba(72,86,111,0.16) 0%, transparent 30%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-badge inline-flex rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.35em]">
            Education
          </p>
          <h2 className="theme-heading mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Academic Journey in Orbit
          </h2>
          <p className="theme-body mt-4 text-base leading-relaxed md:text-lg">
            A snapshot of my academic path, from early foundations to my
            ongoing Computer Science engineering degree.
          </p>
        </div>

        <div className="mt-12">
          <RadialOrbitalTimeline timelineData={[...timelineData]} />
        </div>
      </div>
    </section>
  );
};

export default Education;
