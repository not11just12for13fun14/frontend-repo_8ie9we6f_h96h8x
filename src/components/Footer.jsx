import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sky-300/70 text-sm">
        <p>© {new Date().getFullYear()} BlueMind Digital. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="#accueil" className="hover:text-white">Accueil</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
