import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-200 text-sm backdrop-blur">
            Agence IA & transformation digitale
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            BlueMind Digital
          </h1>

          <div className="mt-4 text-sky-200 text-lg sm:text-xl">
            <Reveal>
              Naviguez l’avenir avec l’IA
            </Reveal>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#services" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(34,211,238,0.35)] transition">Nos services</a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition">Contact</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Digitalisation',
            'Social Ads (Meta, Google, LinkedIn, TikTok, DV360)',
            'Dév. SaaS & ERP sur mesure',
            'Solutions IA (assistants, automation, data)'
          ].map((t) => (
            <div key={t} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sky-100/90 backdrop-blur hover:bg-white/10 hover:border-white/20 transition">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Reveal({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="inline-block bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent"
    >
      {children}
    </motion.span>
  )
}
