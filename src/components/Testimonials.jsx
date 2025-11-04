import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elena Moritz',
    role: 'Founder, Neometric Labs',
    quote:
      'They translated our vision into a space that feels inevitable — minimal, precise, and deeply human.',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'David Chen',
    role: 'Director, Axis Hospitality',
    quote:
      'The team navigated strict timelines and complex requirements with elegance and clarity.',
    avatar:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Rina Kapoor',
    role: 'Partner, Lumina Capital',
    quote:
      'A masterclass in restraint. Every detail serves the experience.',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop&crop=faces',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Voices</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">What clients say</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <figcaption className="font-medium">{t.name}</figcaption>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-white/80 leading-relaxed">“{t.quote}”</blockquote>
              <div className="mt-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
