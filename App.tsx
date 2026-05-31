import { MapPin, Phone, Scissors, Coffee, Smile, Armchair } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-amber-700">
            <Scissors className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight">Schnitt & Frisuren Shop</h1>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-stone-100 py-24 px-4 text-center border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
            Ihr Friseur für die <span className="text-amber-700">ganze Familie</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
            Seit 20 Jahren nimmt sich unser geschultes Team Zeit für eine ausführliche Beratung und Ihre individuellen Wünsche.
          </p>
        </div>
      </section>

      {/* INFOS & SALON */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Armchair className="w-6 h-6 text-amber-600" /> Ausstattung
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Wir bieten viel Platz mit insgesamt <strong>9 Bedienplätzen</strong>, <strong>3 sehr bequemen Rückwärtswaschbecken</strong> und einem klassischen Vorwärtswaschplatz.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Smile className="w-6 h-6 text-amber-600" /> Für die Kleinen
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Ein besonderes Erlebnis: Unsere kleinen Kunden können auf einem <strong>original Pferdesattel</strong> die Haare geschnitten bekommen.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-center text-center">
            <Coffee className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Entspannen & Genießen</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Lassen Sie sich in entspannter Atmosphäre verwöhnen. Genießen Sie unsere leckeren Kaffeespezialitäten und lehnen Sie sich einfach zurück.
            </p>
          </div>

        </div>
      </section>

      {/* KONTAKT */}
      <section className="bg-stone-900 text-stone-300 py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Gerne erwarten wir Ihren Anruf</h2>
        
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="bg-stone-800 p-8 rounded-3xl flex flex-col items-center gap-4">
            <MapPin className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-white text-lg mb-1">Schnitt & Frisuren Shop</p>
              <p>Hauptstraße 43</p>
              <p>38162 Cremlingen</p>
            </div>
          </div>

          <div className="bg-stone-800 p-8 rounded-3xl flex flex-col items-center gap-4">
            <Phone className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-white text-lg mb-1">Telefon</p>
              <p className="text-xl">(+49) 05306 912188</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Schnitt & Frisuren Shop.</p>
      </footer>

    </div>
  );
}
