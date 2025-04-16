import { useState } from "react";

export default function App() {
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      <section className="bg-gradient-to-br from-[#1A202C] to-[#2D3748] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tvoj Kouc</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Koučing, ktorý mení perspektívu. Objav, že život môže byť hra.
        </p>
        <button className="bg-[#FFC857] text-black text-lg px-6 py-3 rounded-xl hover:bg-yellow-400">
          Chcem sa spojiť
        </button>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">O mne</h2>
        <p className="text-gray-600 mb-4">
          (Tu bude krátke predstavenie tvojej osoby – zatiaľ placeholder text.)
        </p>
        <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto" />
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">S čím pomáham</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Leadership a rozvoj tímov",
            "Work-life balans a wellbeing",
            "Zlepšenie rozhodovania a sebavedomia",
          ].map((title, index) => (
            <div key={index} className="rounded-2xl shadow-md p-6 bg-white">
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                (Krátky popis oblasti, s ktorou vieš pomôcť. Neskôr sa doplní.)
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Referencie</h2>
        <p className="text-gray-500 italic">
          (Tu budú neskôr citáty a spätná väzba od klientov.)
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Kontaktuj ma</h2>
        {formSent ? (
          <p className="text-center text-green-600">Ďakujem za správu! Ozvem sa čo najskôr.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormSent(true);
            }}
            className="max-w-xl mx-auto space-y-4"
          >
            <input type="text" placeholder="Tvoje meno" required className="w-full p-3 rounded-lg border" />
            <input type="email" placeholder="Tvoj e-mail" required className="w-full p-3 rounded-lg border" />
            <textarea placeholder="Správa" required className="w-full p-3 rounded-lg border h-32"></textarea>
            <button type="submit" className="bg-[#1A202C] text-white px-6 py-3 rounded-xl">
              Odoslať
            </button>
          </form>
        )}
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tvoj Kouc. Všetky práva vyhradené.
      </footer>
    </div>
  );
}