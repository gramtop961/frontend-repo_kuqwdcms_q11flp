import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI-Driven Game Developer',
    company: 'AIGC Generative Solution Pvt. Ltd., Gurgaon',
    period: 'Aug 2023 – Present',
    points: [
      'Enhanced player engagement by 25% through innovative mechanics.',
      'Reduced load times by 40% across platforms.',
      'Built scalable backend architecture, cutting rollout time by 30%.'
    ],
  },
  {
    role: 'Minecraft Game Server Developer',
    company: 'SIF Homes Technologies Pvt. Ltd., Delhi',
    period: 'Nov 2022 – Jul 2023',
    points: [
      'Maintained game servers with 99.9% uptime.',
      'Built custom quests, AI NPCs, and PvP systems.',
      'Reduced latency by 35% through backend optimizations.'
    ],
  },
  {
    role: 'Freelance Full Stack Web Developer',
    company: 'Remote',
    period: 'Jan 2020 – Jan 2023',
    points: [
      'Delivered 10+ SEO-optimized, responsive websites.',
      'Achieved 90+ Google PageSpeed scores on projects.',
      'Built dashboards, blogs, and portfolio systems.'
    ],
  },
  {
    role: 'Trainee Web Developer',
    company: 'Systematic Solutions, Amritsar',
    period: 'Mar 2021 – Jul 2021',
    points: [
      'Accelerated PHP development cycles by 20%.',
      'Integrated MySQL for efficient CRUD operations.'
    ],
  },
];

const ExperienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-600/40 hover:bg-slate-900/60"
  >
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-xl border border-slate-700 bg-slate-800/60 p-2 text-emerald-400">
        <Briefcase size={18} />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{item.role}</h4>
        <p className="text-sm text-slate-400">{item.company}</p>
        <p className="text-xs text-slate-500">{item.period}</p>
      </div>
    </div>
    <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-slate-300">
      {item.points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-slate-950 py-16 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Experience</h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">A snapshot of my journey across web, AI, and game development.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
