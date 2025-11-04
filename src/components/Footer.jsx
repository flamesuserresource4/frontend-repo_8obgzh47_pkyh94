import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium">Let’s build something minimal</h4>
            <p className="mt-2 text-white/70 max-w-sm">We partner with ambitious teams to shape spaces where people and ideas thrive.</p>
          </div>
          <div>
            <p className="text-sm text-white/60">Studio</p>
            <p className="mt-2 text-white/80">42 Meridian Lane, Suite 8<br/>New City, NY</p>
          </div>
          <div className="space-y-2">
            <a href="mailto:hello@aether.archi" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="h-4 w-4" /> hello@aether.archi
            </a>
            <a href="tel:+12125550123" className="flex items-center gap-2 text-white/80 hover:text-white">
              <Phone className="h-4 w-4" /> +1 (212) 555-0123
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Aether Architects</p>
          <p>Minimalism · Clarity · Light</p>
        </div>
      </div>
    </footer>
  );
}
