import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="apropos" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          À propos
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 text-sky-100/90">
          <div className="space-y-4">
            <p>
              BlueMind Digital accompagne les entreprises B2B dans leur transformation digitale et l’adoption pragmatique de l’IA. Notre approche combine innovation, accompagnement sur-mesure et obsession de la performance.
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {['Innovation', 'Accompagnement', 'Performance'].map((v) => (
                <li key={v} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">{v}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sky-200/80 text-sm">
              Historique, équipe et culture d’entreprise : nous croyons à des solutions élégantes et efficaces, à l’écoute de vos enjeux métiers. Photo du fondateur disponible sur demande.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
