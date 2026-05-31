import { MapPin, Phone, Coffee, Scissors, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222222] font-sans selection:bg-[#C5A880] selection:text-[#FDFBF7]">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-wide text-[#222222]">
            Schnitt & Frisuren Shop
          </div>
          <a href="#kontakt" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#222222] hover:text-[#C5A880] transition-colors">
            Termin vereinbaren
          </a>
        </div>
      </header>

      {/* HERO / EDITORIAL SECTION 1 */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        <div className="lg:col-span-5 relative z-10 lg:-mr-12">
          <p className="text-[#C5A880] uppercase tracking-[0.3em] text-xs font-bold mb-6">Seit 20 Jahren</p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#222222] mb-8 leading-[1.1]">
            Ihr Friseur für die <br />
            <span className="italic text-[#C5A880]">ganze Familie.</span>
          </h1>
          <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10 max-w-md">
            Unser geschultes Team nimmt sich Zeit für eine ausführliche Beratung und Ihre individuellen Wünsche. Ein Ruhepol, an dem Handwerk auf Ästhetik trifft.
          </p>
          <a href="#kontakt" className="inline-block bg-[#222222] text-[#FDFBF7] px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#C5A880] transition-colors">
            Anrufen & Entspannen
          </a>
        </div>
        
        {/* INTERIOR PHOTO 1 */}
        <div className="lg:col-span-7">
          <img 
            src="/IMG_2975.jpg" 
            alt="Helles, offenes Salon-Interior" 
            className="w-full h-[600px] md:h-[800px] object-cover shadow-2xl shadow-[#E8E3DA]/50"
          />
        </div>
      </section>

      {/* TEXT ZONE - MAGAZINE LAYOUT */}
      <section className="py-32 bg-[#E8E3DA]/30 border-y border-[#E8E3DA]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222222] mb-6">Raum für Entfaltung.</h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              Lassen Sie sich in unserer entspannten Loft-Atmosphäre verwöhnen. Mit <strong>9 Bedienplätzen</strong>, <strong>3 bequemen Rückwärtswaschbecken</strong> und einem klassischen Vorwärtswaschplatz bieten wir viel Freiraum für Ihren Besuch.
            </p>
            <div className="flex items-center gap-4 text-[#C5A880]">
              <Coffee className="w-6 h-6" />
              <span className="text-[#222222] font-medium tracking-wide">Genießen Sie unsere Kaffeespezialitäten.</span>
            </div>
          </div>
          <div>
             <h2 className="font-serif text-3xl md:text-4xl text-[#222222] mb-6">Für unsere kleinen Gäste.</h2>
             <p className="text-[#4A4A4A] leading-relaxed mb-8">
              Ein Friseurbesuch soll ein Erlebnis sein. Daher können unsere kleinen Kunden auf einem <strong>original Pferdesattel</strong> Platz nehmen und sich stressfrei die Haare schneiden lassen.
            </p>
            <div className="flex items-center gap-4 text-[#C5A880]">
              <Scissors className="w-6 h-6" />
              <span className="text-[#222222] font-medium tracking-wide">Erfahrung & Geduld für jedes Alter.</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL SECTION 2 & FUNCTIONAL ZONE */}
      <section id="kontakt" className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* INTERIOR PHOTO 2 */}
        <div className="lg:col-span-6 relative">
           <img 
            src="/IMG_2976.jpg" 
            alt="Entspannte Lounge-Ecke im Salon" 
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-[#FDFBF7] p-8 border border-[#E8E3DA] hidden md:block">
            <p className="font-serif text-2xl text-[#222222] italic">Wohlfühlen.</p>
          </div>
        </div>

        {/* FUNCTIONAL ZONE (Buchung & Info) */}
        <div className="lg:col-span-6 lg:pl-10">
          <h2 className="font-serif text-4xl md:text-5xl text-[#222222] mb-12">Kontakt & <br/>Öffnungszeiten</h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <MapPin className="w-6 h-6 text-[#C5A880] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-2">Adresse</p>
                <p className="text-[#222222] text-lg font-medium">Schnitt & Frisuren Shop</p>
                <p className="text-[#4A4A4A]">Hauptstraße 43</p>
                <p className="text-[#4A4A4A]">38162 Cremlingen</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Phone className="w-6 h-6 text-[#C5A880] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-2">Terminvereinbarung</p>
                <p className="text-[#222222] text-2xl font-serif">(+49) 05306 912188</p>
                <p className="text-[#4A4A4A] mt-2">Gerne erwarten wir Ihren Anruf.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 pt-6 border-t border-[#E8E3DA]">
              <Clock className="w-6 h-6 text-[#C5A880] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-2">Öffnungszeiten</p>
                <p className="text-[#4A4A4A] italic">Bitte rufen Sie uns für Ihre Terminplanung an.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#222222] text-[#E8E3DA] py-12 text-center text-xs uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Schnitt & Frisuren Shop – Cremlingen</p>
      </footer>

    </div>
  );
}
