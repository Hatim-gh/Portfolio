import React from 'react';
import {
  IoBookOutline,
  IoCallOutline,
  IoCodeSlashOutline,
  IoFolderOpenOutline,
  IoHomeOutline,
  IoPersonOutline,
} from 'react-icons/io5';

type GradientMenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

interface GradientMenuProps {
  items?: GradientMenuItem[];
}

const defaultItems: GradientMenuItem[] = [
  {
    title: 'Home',
    href: '#home',
    icon: <IoHomeOutline />,
    gradientFrom: '#5f74ff',
    gradientTo: '#8898ff',
  },
  {
    title: 'About',
    href: '#about',
    icon: <IoPersonOutline />,
    gradientFrom: '#4f678d',
    gradientTo: '#6f86ab',
  },
  {
    title: 'Skills',
    href: '#skills',
    icon: <IoCodeSlashOutline />,
    gradientFrom: '#59657c',
    gradientTo: '#7b879d',
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
    gradientFrom: '#6f76b8',
    gradientTo: '#8d95d7',
  },
  {
    title: 'Contact',
    href: '#contact',
    icon: <IoCallOutline />,
    gradientFrom: '#4b5f87',
    gradientTo: '#7084ab',
  },
];

export default function GradientMenu({
  items = defaultItems,
}: GradientMenuProps) {
  return (
    <ul className="flex items-center gap-3 xl:gap-4">
      {items.map(({ title, href, icon, gradientFrom, gradientTo }) => (
        <li
          key={title}
          style={
            {
              '--gradient-from': gradientFrom,
              '--gradient-to': gradientTo,
            } as React.CSSProperties
          }
          className="group relative h-[54px] w-[54px] cursor-pointer rounded-full border border-[var(--border-soft)] bg-[var(--surface-panel-strong)] shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out hover:w-[156px] hover:border-transparent hover:shadow-none"
        >
          <a
            href={href}
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <span className="absolute inset-x-2 top-[12px] -z-10 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-[14px] transition-all duration-500 group-hover:opacity-40" />

            <span className="relative z-10 transition-all duration-500 group-hover:scale-0">
              <span className="text-[1.35rem] text-[var(--muted-text)]">{icon}</span>
            </span>

            <span className="absolute scale-0 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 delay-150 group-hover:scale-100">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
