const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Concept to permit drawings typically spans 8–16 weeks depending on scope. Construction timelines vary by contractor and scale.'
  },
  {
    q: 'Do you handle permitting and consultants?',
    a: 'Yes. We coordinate with engineers, code consultants, and local authorities to streamline approvals.'
  },
  {
    q: 'What is your design philosophy?',
    a: 'Radical clarity. We pursue honest materials, light, proportion, and a restrained palette to create calm, functional spaces.'
  },
  {
    q: 'How do we begin?',
    a: 'Start with a 30-minute consultation. We discuss goals, budget, constraints, and assemble a tailored scope.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Answers</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Frequently asked questions</h2>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map((item) => (
            <details key={item.q} className="group open:bg-white/[0.03]">
              <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-6">
                <span className="font-medium">{item.q}</span>
                <span className="text-white/50 transition group-open:rotate-45">＋</span>
              </summary>
              <div className="px-6 pb-6 -mt-1 text-white/80 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
