import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Rocket, LayoutGrid, LineChart, Sparkles, Cpu } from 'lucide-react'

const services = [
  {
    title: 'Digitalisation',
    icon: <Rocket className="w-6 h-6" />,
    desc: 'Cartographier vos processus, intégrer des outils performants et accélérer votre time-to-value.',
  },
  {
    title: 'Advertising – Social & Paid',
    icon: <LayoutGrid className="w-6 h-6" />,
    desc: 'Meta, Google Ads, LinkedIn Ads, TikTok Ads, DV360 : campagnes full-funnel orientées performance.',
  },
  {
    title: 'Développement SaaS & ERP sur mesure',
    icon: <Cpu className="w-6 h-6" />,
    desc: 'Conception et développement d’applications web, ERP/CRM et intégrations API adaptés à votre métier.',
  },
  {
    title: 'Solutions IA',
    icon: <Brain className="w-6 h-6" />,
    desc: 'Assistants IA, automatisations, RAG, analyse data et copilotes pour vos équipes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          Nos services
        </motion.h2>
        <p className="mt-2 text-sky-200/80">Des solutions concrètes pour accélérer votre transformation digitale.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-cyan-300/40 transition p-6 text-sky-100"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 mb-4 shadow-[0_10px_30px_rgba(34,211,238,0.35)]">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sky-200/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
