import React from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, MessageCircle, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
          Contact
        </motion.h2>
        <p className="mt-2 text-sky-200/80">Parlons de vos objectifs et construisons une feuille de route.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <div>
                <label className="text-sky-200 text-sm">Nom</label>
                <input className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Votre nom" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sky-200 text-sm">Email</label>
                  <input type="email" className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="text-sky-200 text-sm">Téléphone</label>
                  <input className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="+213..." />
                </div>
              </div>
              <div>
                <label className="text-sky-200 text-sm">Message</label>
                <textarea rows={5} className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Parlez-nous de votre projet" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition">
                <Send className="w-4 h-4" /> Envoyer
              </button>
            </div>
          </form>

          <div className="grid gap-4">
            <a href="https://wa.me/" target="_blank" className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-sky-100 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp
              </div>
              <p className="mt-2 text-sky-200/70 text-sm">Démarrez une conversation directe.</p>
            </a>
            <a href="mailto:contact@bluemind.digital" className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-sky-100 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                contact@bluemind.digital
              </div>
              <p className="mt-2 text-sky-200/70 text-sm">Nous répondons sous 24h ouvrées.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
