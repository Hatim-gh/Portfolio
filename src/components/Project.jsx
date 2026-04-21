import React from 'react';

import { ProjectShowcase } from '@/components/ui/project-showcase';

const Project = () => {
  return (
    <section
      id="project"
      style={{ background: 'var(--section-project-bg)' }}
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,123,255,0.14),transparent_36%)]" />
      <div className="relative mx-auto max-w-6xl">
        <ProjectShowcase />
      </div>
    </section>
  );
};

export default Project;
