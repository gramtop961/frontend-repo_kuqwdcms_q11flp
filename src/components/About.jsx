import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-sm text-slate-400 sm:text-base">{subtitle}</p>
    )}
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-16 text-slate-300">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          title="About Me"
          subtitle="Full-Stack Web Developer | AI Game Designer | Cybersecurity Specialist"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <p className="leading-relaxed text-slate-300">
              With 3+ years of experience, I build scalable applications that blend performance, security, and design. From MERN dashboards to AI-driven game systems, I deliver reliable and immersive products with 99.9% uptime, 40% faster load times, and measurable engagement gains.
            </p>
            <ul className="mt-4 list-inside list-disc text-sm text-slate-400">
              <li>Optimized apps for 25% higher user engagement</li>
              <li>Reduced latency and load by up to 40%</li>
              <li>Hands-on with AI agents, LLMs, and secure architectures</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Core Skills</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
                'Python', 'Django', 'FastAPI', 'React Native', 'Expo', 'AWS', 'GCP',
                'CEH', 'LLMs', 'REST APIs', 'UI/UX', 'Git', 'Docker'
              ].map((skill) => (
                <span key={skill} className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
