export default function FeaturedWork() {
  const projects = [
    {
      title: 'Nocturne Tower',
      subtitle: 'Mixed-use highrise',
      img: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Axis Residence',
      subtitle: 'Private home',
      img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Nebula Pavilion',
      subtitle: 'Cultural space',
      img: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="work" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Selected</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Featured work</h2>
          </div>
          <a href="#" className="hidden sm:inline text-sm text-white/70 hover:text-white">See all →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-white/70">{p.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
