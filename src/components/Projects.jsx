import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Assets Manager for Minecoin App',
    desc: 'Resource management system optimizing asset delivery for thousands of users.',
    href: 'https://github.com/Abheet-singh-it/asset-manager-minecoinapp',
    tags: ['Node.js', 'MongoDB', 'Optimization'],
  },
  {
    title: 'Minecoin App',
    desc: 'Enables Minecraft players to purchase in-game services via secure payments.',
    href: 'https://github.com/singhalaryann/MinecoinApp',
    tags: ['React Native', 'Payments', 'Security'],
  },
  {
    title: 'AI NPC (Game Development)',
    desc: 'AI-controlled NPCs with human-like interaction patterns.',
    href: 'https://github.com/X-Gaming-Club/AI_AGENT_lobby',
    tags: ['AI', 'Behavior Trees', 'Game Dev'],
  },
  {
    title: 'AI PvP Bot',
    desc: 'Adaptive combat AI opponents using reinforcement learning logic.',
    href: 'https://github.com/X-Gaming-Club/AI-PVP-BOT',
    tags: ['RL', 'AI', 'Game Dev'],
  },
  {
    title: 'Ranked PvP System',
    desc: 'Ranking algorithms for competitive matchmaking and tracking.',
    href: 'https://github.com/X-Gaming-Club/RankedPvP',
    tags: ['Algorithms', 'Leaderboard', 'Game Dev'],
  },
];

const ProjectCard = ({ p, i }) => (
  <motion.a
    href={p.href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-emerald-600/40 hover:bg-slate-900/60"
  >
    <div className="flex items-start justify-between gap-3">
      <h4 className="text-lg font-semibold text-white">{p.title}</h4>
      <ExternalLink size={18} className="text-slate-500 transition group-hover:text-emerald-400" />
    </div>
    <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      {p.tags.map((t) => (
        <span key={t} className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-slate-200">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400">
      <Github size={14} /> View on GitHub
    </div>
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-16 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">A selection of work across apps, AI, and game systems.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
