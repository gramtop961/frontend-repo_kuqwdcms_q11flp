import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Rocket, Star } from 'lucide-react';

function Navbar() {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
            <Rocket size={16} />
          </span>
          Abheet Singh
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="transition hover:text-white">
              {it.label}
            </a>
          ))}
        </nav>
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-900 transition hover:bg-emerald-400">
          <Star size={14} /> Work
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs">© {new Date().getFullYear()} Abheet Singh. All rights reserved.</p>
        <div className="text-xs">
          Built with React, Tailwind, Framer Motion, and Spline.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="[&_*]:selection:bg-emerald-500/20">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
