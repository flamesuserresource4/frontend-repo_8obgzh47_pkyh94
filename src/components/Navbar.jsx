import { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <Building2 className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Aether Architects</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Start a Project</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-2 text-white/80">
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#work" className="block hover:text-white">Work</a>
            <a href="#about" className="block hover:text-white">About</a>
            <a href="#contact" className="block hover:text-white">Contact</a>
            <a href="#contact" className="block mt-2 rounded-md bg-white text-black px-4 py-2 text-center font-medium hover:bg-white/90">Start a Project</a>
          </div>
        </div>
      )}
    </header>
  );
}
