import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  'Ooredoo','Oppo','Aigle','Zara','Pepsi','Renault','LG','Ifri','Président','Rouiba','Henkel','Marriott','IRIS','Dacia','Maxon','Hamoud Boualem','Brandt','Le Chat','Holiday Inn','Mobilis','Société Générale','Danone','Candia','Jetour','Condor','Biopharm','Kiri','Jotun'
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          Portfolio – 6 ans d’expertise
        </motion.h2>
        <p className="mt-2 text-sky-200/80">Cette section intègre visuellement et textuellement les noms et logos des marques comme sur la photo fournie.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="group relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.25),transparent_60%)]"></div>
              <div className="scale-100 group-hover:scale-105 transition-transform duration-300 text-center px-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-tr from-slate-200 to-white shadow-inner shadow-white/50 mb-3" />
                <p className="text-slate-200 text-sm font-medium">{b}</p>
                <p className="text-sky-300/70 text-xs">Logo + nom</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
