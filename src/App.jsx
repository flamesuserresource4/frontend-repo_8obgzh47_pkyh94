import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
