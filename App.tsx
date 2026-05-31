import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-slate-500">
        <a href="#philosophie" className="hover:text-slate-900 transition-colors">Philosophie</a>
        <a href="#team" className="hover:text-slate-900 transition-colors">Unser Team</a>
      </div>
      
      {/* Centered Logo Box */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="border border-slate-900 p-2 leading-none">
          <span className="font-serif font-bold text-lg md:text-xl tracking-widest block uppercase text-center">Atelier</span>
          <span className="font-sans text-[0.5rem] tracking-[0.2em] uppercase block text-center mt-1">Salon</span>
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center text-xs font-medium tracking-widest uppercase text-slate-500">
        <a href="#leistungen" className="hover:text-slate-900 transition-colors">Leistungen</a>
        <a href="#kontakt" className="hover:text-slate-900 transition-colors">Kontakt</a>
      </div>
      
      {/* Mobile Menu Button - simplified for layout */}
      <div className="md:hidden">
        <span className="text-xs uppercase tracking-widest">Menü</span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center pt-20 md:pt-0 pb-12 w-full max-w-screen-2xl mx-auto">
      {/* Left Content: Hook & Promise */}
      <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-24 flex flex-col justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* HOOK */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-slate-900 mb-6 font-medium">
            Dein Haar.<br />
            <span className="italic text-slate-600">Deine Identität.</span><br />
            Unser Handwerk.
          </h1>
          
          {/* PROMISE OF VALUE */}
          <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed font-light mb-12">
            Wir kreieren nicht nur Frisuren. Wir übersetzen deine Persönlichkeit in einen Look, der jeden Tag funktioniert. Meisterhaftes Handwerk trifft auf individuelle Vision.
          </p>

          <button className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-semibold text-slate-900">
            <span className="border-b border-transparent group-hover:border-slate-900 transition-colors pb-1">Termin anfragen</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Right Content: Editorial Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 px-6 md:px-0">
        <motion.div 
          className="relative aspect-[3/4] md:aspect-auto md:h-[80vh] w-full max-w-lg mx-auto md:ml-auto md:mr-12 bg-slate-100 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e42?q=80&w=2000&auto=format&fit=crop" 
            alt="Editorial Hair Model" 
            className="object-cover w-full h-full"
          />
          {/* Decorative geometric element from reference */}
          <div className="absolute bottom-4 left-4 flex flex-col">
             <div className="w-6 h-6 border border-white/50 flex items-center justify-center text-[8px] text-white/70">A</div>
             <div className="w-6 h-6 border border-white/50 border-t-0 flex items-center justify-center text-[8px] text-white/70">S</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailsTeam() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-4">Das Atelier Team</h2>
          <p className="font-serif text-2xl md:text-4xl text-slate-900 max-w-2xl mx-auto leading-snug">
            Die kreativen Köpfe hinter deinem perfekten Look. Jedes Detail zählt.
          </p>
        </motion.div>

        {/* Scattered/Asymmetrical Grid (Bildverteilung) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          
          {/* Detail 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-4 md:col-start-1"
          >
            <div className="aspect-[4/5] overflow-hidden mb-6 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1620331311520-24c4bd2fc990?q=80&w=800&auto=format&fit=crop" alt="Master Stylist" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="font-serif text-xl mb-2">Präzises Handwerk</h3>
            <p className="text-sm font-light text-slate-500 leading-relaxed">
              Unsere Master Stylisten sind geschult in den neuesten Schneidetechniken. Wir formen Architektur, die deine natürliche Knochenstruktur betont.
            </p>
          </motion.div>

          {/* Detail 2 (Offset middle) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 md:col-start-6 mt-16 md:mt-32"
          >
            <div className="aspect-square overflow-hidden mb-6 bg-slate-200 w-3/4 ml-auto">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" alt="Coloring Technique" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-3/4 ml-auto">
              <h3 className="font-serif text-xl mb-2">Brillante Farbwelten</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                Von subtilen Balayage-Highlights bis zu radikalen Farbveränderungen. Unsere Coloristen arbeiten mit größter Sorgfalt für langanhaltende Brillanz.
              </p>
            </div>
          </motion.div>

          {/* Detail 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 md:col-start-10 mt-16 md:-mt-20"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" alt="Salon Details" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="font-serif text-xl mb-2">Exklusive Pflege</h3>
            <p className="text-sm font-light text-slate-500 leading-relaxed">
              Kompromisslose Haargesundheit durch hochwertigste, handverlesene Produkte.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-32 px-6 bg-white flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <span className="text-4xl text-slate-200 font-serif leading-none block mb-4">"</span>
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl leading-snug text-slate-900 mb-8">
          Ein Team, das wirklich zuhört. Die Atmosphäre ist ruhig und professionell, und das handwerkliche Ergebnis übertrifft jedes Mal meine Erwartungen.
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs tracking-widest uppercase font-semibold text-slate-900">— Elena M.</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400">Kundin seit 2022</p>
        </div>
        
        {/* Simple Brand Logos as text for minimalist proof */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex gap-8 md:gap-16 justify-center flex-wrap opacity-50">
           <span className="font-serif tracking-widest text-sm">Olaplex</span>
           <span className="font-sans tracking-[0.2em] font-light text-sm uppercase">Kerastase</span>
           <span className="font-serif tracking-widest italic text-sm">Oribe</span>
        </div>
      </motion.div>
    </section>
  );
}

function FooterCTA() {
  return (
    <footer className="bg-slate-900 text-white py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-6 font-medium">Bereit für deinen neuen Look?</h2>
          <p className="text-slate-400 font-light mb-12 max-w-md mx-auto">
            Vereinbare jetzt einen Termin in unserem Salon und lass dich von unserem Expertenteam beraten.
          </p>
          
          <button className="bg-white text-slate-900 px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-slate-100 transition-colors">
            Online Termin buchen
          </button>
        </motion.div>

        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-8">
           <p>© 2026 Atelier Salon</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Impressum</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DetailsTeam />
      <Proof />
      <FooterCTA />
    </div>
  );
}
