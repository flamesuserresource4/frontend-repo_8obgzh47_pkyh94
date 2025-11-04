import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Start a project</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Tell us about your site, goals, and timeline. We typically respond within one business day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <form className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input type="text" className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Project type</label>
              <input type="text" className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="Residential, commercial, cultural..." />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="Tell us about your project"></textarea>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90">
              Send inquiry <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-medium">Direct</h3>
              <a href="mailto:hello@aether.archi" className="mt-3 flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="h-4 w-4" /> hello@aether.archi
              </a>
              <a href="tel:+12125550123" className="mt-1 flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="h-4 w-4" /> +1 (212) 555-0123
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-medium">Studio</h3>
              <p className="mt-2 text-white/70">42 Meridian Lane, Suite 8<br/>New City, NY</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-xs text-white/50">By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
