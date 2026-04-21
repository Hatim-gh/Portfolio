import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      style={{ background: 'var(--section-about-bg)' }}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 24%, rgba(99,123,255,0.16) 0%, transparent 28%), radial-gradient(circle at 78% 78%, rgba(76,94,130,0.18) 0%, transparent 30%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="theme-badge inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
            <Sparkles size={14} />
            About Me
          </div>

          <h2 className="theme-heading mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            I build interfaces that feel modern, calm, and memorable.
          </h2>

          <p className="theme-body mt-6 max-w-2xl text-base leading-8 sm:text-lg">
            I&apos;m a passionate developer with a love for building modern,
            responsive, and user-friendly web apps. I enjoy working with React,
            JavaScript, and crafting polished UI experiences that feel as good
            as they function.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Responsive UI', 'Frontend Craft', 'React Focus', 'Clean Motion'].map(
              (item) => (
                <span
                  key={item}
                  className="theme-chip rounded-full border px-4 py-2 text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-400/20 via-transparent to-slate-400/10 blur-3xl" />

          <div className="theme-panel relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-5">
              <div>
                <p className="theme-badge inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.28em]">
                  Creative Profile
                </p>
                <h3 className="theme-heading mt-2 text-2xl font-semibold">
                  Developer Mindset
                </h3>
              </div>
              <div className="theme-icon-shell rounded-full border p-3">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="grid gap-6 pt-6 sm:grid-cols-2">
              <div>
                <p className="theme-muted text-sm uppercase tracking-[0.24em]">
                  Focus
                </p>
                <p className="theme-heading mt-2 text-lg font-medium">
                  Frontend experiences with clean structure and strong visual
                  rhythm.
                </p>
              </div>
              <div>
                <p className="theme-muted text-sm uppercase tracking-[0.24em]">
                  Approach
                </p>
                <p className="theme-heading mt-2 text-lg font-medium">
                  Build fast, refine carefully, and keep the interface easy to
                  understand.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-[var(--border-soft)] pt-6 sm:grid-cols-3">
              {[
                ['Modern', 'UI direction'],
                ['Responsive', 'Across devices'],
                ['Focused', 'On clarity'],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="min-w-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-2 py-4 text-center"
                >
                  <p className="theme-heading whitespace-nowrap text-base font-semibold sm:text-lg lg:text-xl">
                    {value}
                  </p>
                  <p className="theme-muted mt-1 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
