'use client';

import React, { memo, useEffect, useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';

type GlowColor = 'cyan' | 'purple';
type SkillIconType =
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'node'
  | 'git'
  | 'machine-learning'
  | 'java'
  | 'express';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: SkillIconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

const iconMap: Record<
  SkillIconType,
  { component: React.ComponentType<{ className?: string }>; colorClass: string }
> = {
  html: {
    component: FaHtml5,
    colorClass: 'text-orange-500',
  },
  css: {
    component: FaCss3Alt,
    colorClass: 'text-sky-500',
  },
  javascript: {
    component: IoLogoJavascript,
    colorClass: 'text-yellow-300',
  },
  react: {
    component: FaReact,
    colorClass: 'text-cyan-300',
  },
  node: {
    component: FaNodeJs,
    colorClass: 'text-green-500',
  },
  git: {
    component: FaGitAlt,
    colorClass: 'text-orange-400',
  },
  'machine-learning': {
    component: BrainCircuit,
    colorClass: 'text-fuchsia-300',
  },
  java: {
    component: FaJava,
    colorClass: 'text-red-400',
  },
  express: {
    component: SiExpress,
    colorClass: 'text-slate-200',
  },
};

const desktopSkillsConfig: SkillConfig[] = [
  {
    id: 'html',
    orbitRadius: 92,
    size: 48,
    speed: 1,
    iconType: 'html',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'HTML',
  },
  {
    id: 'css',
    orbitRadius: 92,
    size: 48,
    speed: 1,
    iconType: 'css',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'CSS',
  },
  {
    id: 'javascript',
    orbitRadius: 92,
    size: 48,
    speed: 1,
    iconType: 'javascript',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'JavaScript',
  },
  {
    id: 'react',
    orbitRadius: 156,
    size: 54,
    speed: -0.62,
    iconType: 'react',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'React',
  },
  {
    id: 'node',
    orbitRadius: 156,
    size: 52,
    speed: -0.62,
    iconType: 'node',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Node.js',
  },
  {
    id: 'git',
    orbitRadius: 156,
    size: 50,
    speed: -0.62,
    iconType: 'git',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Git',
  },
  {
    id: 'machine-learning',
    orbitRadius: 220,
    size: 54,
    speed: 0.42,
    iconType: 'machine-learning',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'Machine Learning',
  },
  {
    id: 'java',
    orbitRadius: 220,
    size: 50,
    speed: 0.42,
    iconType: 'java',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Java Language',
  },
  {
    id: 'express',
    orbitRadius: 220,
    size: 50,
    speed: 0.42,
    iconType: 'express',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Express',
  },
];

const mobileSkillsConfig: SkillConfig[] = [
  {
    id: 'html-mobile',
    orbitRadius: 76,
    size: 42,
    speed: 1,
    iconType: 'html',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'HTML',
  },
  {
    id: 'css-mobile',
    orbitRadius: 76,
    size: 42,
    speed: 1,
    iconType: 'css',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'CSS',
  },
  {
    id: 'javascript-mobile',
    orbitRadius: 76,
    size: 42,
    speed: 1,
    iconType: 'javascript',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'JavaScript',
  },
  {
    id: 'react-mobile',
    orbitRadius: 126,
    size: 46,
    speed: -0.62,
    iconType: 'react',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'React',
  },
  {
    id: 'node-mobile',
    orbitRadius: 126,
    size: 44,
    speed: -0.62,
    iconType: 'node',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Node.js',
  },
  {
    id: 'git-mobile',
    orbitRadius: 126,
    size: 44,
    speed: -0.62,
    iconType: 'git',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'Git',
  },
];

const remainingSkills = [
  { id: 'machine-learning-grid', label: 'Machine Learning', iconType: 'machine-learning' as const },
  { id: 'java-grid', label: 'Java Language', iconType: 'java' as const },
  { id: 'express-grid', label: 'Express', iconType: 'express' as const },
];

const mobileSkillGrid = [
  { id: 'html-grid', label: 'HTML', iconType: 'html' as const },
  { id: 'css-grid', label: 'CSS', iconType: 'css' as const },
  { id: 'javascript-grid', label: 'JavaScript', iconType: 'javascript' as const },
  { id: 'react-grid', label: 'React', iconType: 'react' as const },
  { id: 'node-grid', label: 'Node.js', iconType: 'node' as const },
  { id: 'git-grid', label: 'Git', iconType: 'git' as const },
  ...remainingSkills,
];

const SkillBadgeIcon = memo(({ type }: { type: SkillIconType }) => {
  const config = iconMap[type];
  const Icon = config.component;
  return <Icon className={`h-full w-full ${config.colorClass}`} />;
});
SkillBadgeIcon.displayName = 'SkillBadgeIcon';

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label, glowColor } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;
  const glow =
    glowColor === 'cyan'
      ? '0 0 30px rgba(99,123,255,0.34), 0 0 70px rgba(99,123,255,0.16)'
      : '0 0 30px rgba(130,142,176,0.28), 0 0 70px rgba(130,142,176,0.14)';

  return (
    <div
      className="absolute left-1/2 top-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900/85 p-2 backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'scale-125 shadow-2xl' : 'hover:scale-110'
        }`}
        style={{
          borderColor: 'var(--border-soft)',
          background: 'var(--surface-panel-strong)',
          boxShadow: isHovered ? glow : undefined,
        }}
      >
        <div aria-label={label} className="h-full w-full">
          <SkillBadgeIcon type={iconType} />
        </div>
        {isHovered ? (
          <div
            className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap"
            style={{
              background: 'var(--surface-elevated)',
              color: 'var(--heading)',
            }}
          >
            {label}
          </div>
        ) : null}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(
  ({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: 'rgba(99, 123, 255, 0.22)',
        secondary: 'rgba(99, 123, 255, 0.12)',
        border: 'rgba(99, 123, 255, 0.24)',
      },
      purple: {
        primary: 'rgba(130, 142, 176, 0.2)',
        secondary: 'rgba(130, 142, 176, 0.1)',
        border: 'rgba(130, 142, 176, 0.22)',
      },
    };

    const colors = glowColors[glowColor];

    return (
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, transparent 54%, ${colors.secondary} 78%, ${colors.primary} 100%)`,
            boxShadow: `0 0 45px ${colors.primary}, inset 0 0 30px ${colors.secondary}`,
            animation: `pulseRing 4.2s ease-in-out ${animationDelay}s infinite`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

function OrbitStage({
  skills,
  orbitConfigs,
  compact = false,
}: {
  skills: SkillConfig[];
  orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }>;
  compact?: boolean;
}) {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div
      className={`relative flex items-center justify-center ${
        compact ? 'h-[290px] w-full max-w-[290px] sm:h-[320px] sm:max-w-[320px]' : 'h-[520px] w-[520px]'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`absolute inset-0 rounded-full ${
          compact ? 'bg-[radial-gradient(circle,rgba(15,23,42,0.36),transparent_72%)]' : ''
        }`}
      />

      <div
        className={`relative z-10 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-700 to-slate-950 shadow-2xl ${
          compact ? 'h-20 w-20' : 'h-24 w-24'
        }`}
        style={{
          borderColor: 'var(--border-soft)',
          background: 'var(--surface-panel-strong)',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-indigo-400/20 blur-2xl" />
        <div className="absolute inset-0 rounded-full bg-slate-400/15 blur-[42px]" />
        <div className="relative z-10 text-center">
          <div className="theme-heading text-sm font-semibold tracking-[0.22em]">
            SKILLS
          </div>
        </div>
      </div>

      {orbitConfigs.map((config) => (
        <GlowingOrbitPath
          key={`path-${config.radius}`}
          radius={config.radius}
          glowColor={config.glowColor}
          animationDelay={config.delay}
        />
      ))}

      {skills.map((config) => {
        const angle = time * config.speed + config.phaseShift;
        return <OrbitingSkill key={config.id} config={config} angle={angle} />;
      })}
    </div>
  );
}

export default function OrbitingSkills() {
  return (
    <section
      id="skills"
      style={{ background: 'var(--section-skills-bg)' }}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      <style>
        {`
          @keyframes pulseRing {
            0%, 100% {
              opacity: 0.55;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.02);
            }
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 18%, rgba(99,123,255,0.16) 0%, transparent 28%), radial-gradient(circle at 80% 80%, rgba(130,142,176,0.14) 0%, transparent 30%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-badge inline-flex rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.35em]">
            My Skills
          </p>
          <h2 className="theme-heading mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Orbit of Tools I Build With
          </h2>
          <p className="theme-body mt-4 text-sm leading-relaxed sm:text-base md:text-lg">
            A focused set of technologies I use to build responsive interfaces,
            reliable backends, and polished web experiences.
          </p>
        </div>

        <div className="mt-16 hidden items-center justify-center md:flex">
          <OrbitStage
            skills={desktopSkillsConfig}
            orbitConfigs={[
              { radius: 92, glowColor: 'cyan', delay: 0 },
              { radius: 156, glowColor: 'purple', delay: 1.4 },
              { radius: 220, glowColor: 'cyan', delay: 2.2 },
            ]}
          />
        </div>

        <div className="mt-10 md:hidden">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
            {mobileSkillGrid.map((skill) => (
              <div
                key={skill.id}
                className="theme-panel flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-2xl border px-3 py-4 text-center"
              >
                <div className="theme-icon-shell flex h-12 w-12 items-center justify-center rounded-full border p-2">
                  <SkillBadgeIcon type={skill.iconType} />
                </div>
                <p className="theme-heading text-sm font-medium">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
