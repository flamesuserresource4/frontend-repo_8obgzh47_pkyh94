import { Layers, Ruler, Building2 } from 'lucide-react';

const items = [
  {
    icon: Building2,
    title: 'Architectural Design',
    desc: 'From concept to construction, we craft spaces that balance form, function, and feeling.'
  },
  {
    icon: Ruler,
    title: 'Planning & Strategy',
    desc: 'Rigorous planning and precision documentation for seamless delivery and execution.'
  },
  {
    icon: Layers,
    title: 'Interior & Spatial',
    desc: 'Minimal, durable, and refined interior systems tailored to your brand and lifestyle.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Capabilities</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">What we do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition">
              <Icon className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-sm text-white/60">Sustainable materials · Passive design · Digital fabrication</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
