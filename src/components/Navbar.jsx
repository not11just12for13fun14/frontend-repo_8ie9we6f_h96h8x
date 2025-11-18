import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const links = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#accueil" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-300 animate-pulse shadow-[0_0_25px_rgba(56,189,248,0.55)]"></div>
          <span className="text-white font-semibold tracking-tight">BlueMind Digital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="grid gap-2 rounded-xl bg-slate-800/60 p-4 border border-white/10 mx-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
