import React from 'react';
import {
  IoBookOutline,
  IoCallOutline,
  IoCodeSlashOutline,
  IoFolderOpenOutline,
  IoPersonOutline,
} from 'react-icons/io5';

import GradientMenu from '@/components/ui/gradient-menu';

const sectionItems = [
  {
    title: 'About',
    href: '#about',
    icon: <IoPersonOutline />,
    gradientFrom: '#5f74ff',
    gradientTo: '#7c8dff',
  },
  {
    title: 'Skills',
    href: '#skills',
    icon: <IoCodeSlashOutline />,
    gradientFrom: '#4f678d',
    gradientTo: '#6f86ab',
  },
  {
    title: 'Projects',
    href: '#project',
    icon: <IoFolderOpenOutline />,
    gradientFrom: '#516db8',
    gradientTo: '#6e8edf',
  },
  {
    title: 'Education',
    href: '#education',
    icon: <IoBookOutline />,
    gradientFrom: '#5d71a8',
    gradientTo: '#8090c4',
  },
  {
    title: 'Reach Out',
    href: '#contact',
    icon: <IoCallOutline />,
    gradientFrom: '#51627f',
    gradientTo: '#7386a4',
  },
];

const SectionNavigator = () => {
  return (
    <section className="relative z-20 mt-4 px-4 pb-8 sm:px-6 md:-mt-8 lg:px-8">
      <div className="section-nav-shell mx-auto max-w-full rounded-[1.75rem] border px-3 py-3 backdrop-blur-2xl sm:px-4 md:max-w-fit md:rounded-full md:px-5">
        <div className="hidden justify-center md:flex">
          <GradientMenu items={sectionItems} />
        </div>

        <div className="flex gap-3 overflow-x-auto px-1 py-2 md:hidden">
          {sectionItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="theme-chip shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:border-indigo-300/30 hover:bg-indigo-300/10 hover:text-[var(--heading)]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionNavigator;
