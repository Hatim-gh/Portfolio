import React from 'react';
import { motion } from 'framer-motion';

import ProjectCardDemo from '@/components/ui/project-card-demo';
import ServicesHero from '@/components/ui/services-hero';

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  overlayImage: string;
};

const services: ServiceCard[] = [
  {
    title: 'Web Development',
    description:
      'Modern business websites and web apps built to feel fast, polished, and trustworthy.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    overlayImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'SEO Optimization',
    description:
      'Technical and on-page improvements that help businesses rank better and get discovered more easily.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80',
    overlayImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Maintenance',
    description:
      'Ongoing updates, fixes, and performance care so your website stays reliable after launch.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    overlayImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hosting and Deployment',
    description:
      'Production-ready deployment pipelines and hosting setup for smooth launches and stable delivery.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    overlayImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ServicesSection() {
  return (
    <>
      <ServicesHero />
      <section
        id="services-list"
        style={{ background: 'var(--section-services-bg)' }}
        className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-6 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 opacity-45">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 16% 20%, rgba(99,123,255,0.16) 0%, transparent 25%), radial-gradient(circle at 82% 72%, rgba(148,163,184,0.12) 0%, transparent 28%)',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mb-12 text-center sm:mb-16"
          >
            <div className="theme-badge inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
              Services
            </div>
            <h2 className="theme-heading mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              What I can build and support
            </h2>
            <p className="theme-body mx-auto mt-4 max-w-2xl text-base leading-8 sm:text-lg">
              Practical web services for businesses that want a stronger digital
              presence and a smoother launch process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="theme-panel group flex h-[360px] flex-col rounded-[2rem] border p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-300/20 sm:h-[380px]"
              >
                <div className="relative mb-5 flex flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,123,255,0.18),transparent_40%)] opacity-80" />

                  <img
                    src={service.image}
                    alt={`${service.title} workspace`}
                    className="absolute w-[70%] max-w-[240px] rounded-2xl border border-white/10 object-cover shadow-[0_18px_50px_rgba(2,6,23,0.35)] transition-all duration-500 ease-out -rotate-6 group-hover:-rotate-[9deg] group-hover:scale-[1.03]"
                  />
                  <img
                    src={service.overlayImage}
                    alt={`${service.title} preview`}
                    className="absolute w-[70%] max-w-[240px] rounded-2xl border border-white/10 object-cover shadow-[0_24px_60px_rgba(2,6,23,0.45)] transition-all duration-500 ease-out rotate-3 group-hover:rotate-[7deg] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="theme-heading text-left text-xl font-semibold sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="theme-body mt-3 max-w-md text-sm leading-7 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            className="mt-20"
          >
            <div className="mx-auto max-w-3xl text-center">
              <div className="theme-chip inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
                Selected Projects
              </div>
              <h3 className="theme-heading mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                A few visuals from recent project directions
              </h3>
              <p className="theme-body mx-auto mt-4 max-w-2xl text-base leading-8">
                These project cards give a quick look at the kind of polished,
                modern work I can design and build for service clients.
              </p>
            </div>

            <div className="mt-10">
              <ProjectCardDemo />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="mt-14 flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#6477ff,#8998ff)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(99,123,255,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Reach Out
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
