import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays to enhance contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/70">Architecture · Urban · Futuristic</p>
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
          Minimalism shaped for the future
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          We design timeless, functional spaces rooted in clarity, light, and modern craft.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-white/90 transition">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
