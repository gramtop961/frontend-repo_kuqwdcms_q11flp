import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 -z-0">
        <div className="h-[70vh] w-full">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-6 pb-12 pt-24 md:flex-row md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Abheet Singh
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Full-Stack Web Developer, AI Game Designer, and CEH-certified Cybersecurity Specialist.
            I craft scalable, high-performance experiences with modern UI, immersive interactions, and robust security.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:abheetsinghggiit@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="https://github.com/Abheet-singh-it"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abheet-singh-3b8238165"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
            <MapPin size={16} className="text-slate-500" /> Amritsar, Punjab, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full md:w-1/2"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[480px] rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/60 to-slate-800/30 p-1 shadow-2xl">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-2xl bg-slate-950/50 p-6 text-slate-300">
              <p className="text-sm leading-relaxed">
                Building resilient systems and delightful user interfaces with a focus on performance, accessibility, and security. Passionate about AI-driven gameplay and adaptive agents.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <span className="rounded-md bg-slate-800/70 px-2 py-1">MERN</span>
                <span className="rounded-md bg-slate-800/70 px-2 py-1">FastAPI</span>
                <span className="rounded-md bg-slate-800/70 px-2 py-1">React Native</span>
                <span className="rounded-md bg-slate-800/70 px-2 py-1">CEH</span>
                <span className="rounded-md bg-slate-800/70 px-2 py-1">LLMs</span>
                <span className="rounded-md bg-slate-800/70 px-2 py-1">AWS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
