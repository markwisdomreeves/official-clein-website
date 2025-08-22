import { COOKIE_POLICY_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL } from "@/consts/support";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Termini e Condizioni per Fornitori di Servizi - CLEIN Home Services",
  description: "Termini e condizioni per fornitori di servizi e artigiani che utilizzano la piattaforma CLEIN in Italia.",
};

export default function ProviderAgreementPage() {
  return (
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden bg-gradient-to-br from-[#00A896] to-[#0057B8]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="relative z-10 container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Termini e Condizioni per Fornitori di Servizi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Data di entrata in vigore: 10 luglio 2024
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl flex flex-col items-center">
            <Link
              href="/it/diventa-professionista"
              className="inline-flex items-center gap-2 text-[#00A896] hover:text-[#008775] mb-8 transition-colors"
            >
              <HiArrowLeft className="w-5 h-5" />
              Torna a Diventa Fornitore
            </Link>

            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg !max-w-screen-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduzione</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Benvenuto su CLEIN di Di Mattia Servizi. Questi Termini regolano l&apos;utilizzo della nostra piattaforma da parte dei Fornitori di Servizi e Artigiani. Registrandoti accetti integralmente tali condizioni.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Requisiti di Idoneità</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Età minima 18 anni.</li>
                <li>Documento d&apos;identità e/o licenza professionale validi.</li>
                <li>Informazioni accurate e aggiornate durante la registrazione.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Offerta dei Servizi e Responsabilità</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sei responsabile della qualità dei servizi che offri. Le descrizioni devono essere oneste, dettagliate e non ingannevoli.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Utilizzo dell&apos;Account e Condotta</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Rispondere prontamente alle richieste dei clienti.</li>
                <li>Rispettare le prenotazioni confermate.</li>
                <li>È vietato aggirare la piattaforma per trattative private.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pagamenti e Commissioni</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CLEIN applica una quota di abbonamento mensile a ciascun fornitore di servizi per poter accedere alla piattaforma e iniziare a offrire i propri servizi domestici. I pagamenti vengono elaborati rapidamente e i guadagni sono generalmente accreditati entro 48 ore dal completamento del lavoro.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellazioni e Assenze</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Comportamenti non professionali, assenze o cancellazioni frequenti possono comportare la sospensione dell&apos;account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Assicurazione e Responsabilità</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                È consigliato dotarsi di un&apos;assicurazione professionale. CLEIN non è responsabile per eventuali danni o controversie legate ai tuoi servizi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Verifiche e Controlli</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Potremmo richiedere documentazione di verifica per aumentare la sicurezza della piattaforma.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sospensione o Cancellazione dell&apos;Account</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ci riserviamo il diritto di sospendere o eliminare un account in caso di violazioni.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Gestione delle Controversie</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CLEIN può mediare, ma non garantisce la risoluzione delle controversie tra utenti.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Proprietà Intellettuale</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Il marchio CLEIN e i suoi contenuti sono protetti da copyright. L&apos;uso non autorizzato non è consentito.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Protezione dei Dati</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I dati degli utenti devono essere trattati in conformità con la normativa sulla privacy. Non è permesso l&apos;uso a scopo di marketing esterno.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifiche ai Termini</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Potremmo aggiornare i Termini. Le modifiche saranno pubblicate e notificate agli utenti registrati.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Legge Applicabile</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Le presenti condizioni sono regolate dalla legge italiana. Foro competente: Teramo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contatti</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> fornitori@clein.it 
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefono:</strong> +39 392 349 8466
                </p>
                <p className="text-gray-700">
                  <strong>Indirizzo:</strong> Via Via Don Lorenzo Milani 50, Teramo (TE)
                </p>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <p className="text-center text-gray-700">
                  Registrandoti come fornitore di servizi CLEIN, confermi di aver letto, compreso e accettato questi Termini e Condizioni.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-br from-[#00A896] to-[#0057B8] rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Pronto a Unirti a CLEIN?</h3>
              <p className="mb-6 text-white/90">
                Inizia a guadagnare con la piattaforma leader per servizi a domicilio in Italia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.clein.professionals&hl=it&gl=IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-gray-900 hover:bg-gray-100"
                >
                  Scarica App Fornitori
                </a>
                <Link
                  href="/it/diventa-professionista"
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Scopri di Più
                </Link>
              </div>
            </div>

            {/* Related Legal Pages */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documenti Legali Correlati</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href={PRIVACY_POLICY_URL} 
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Informativa Privacy</h4>
                  <p className="text-sm text-gray-600">Come proteggiamo i tuoi dati</p>
                </Link>
                <Link
                  href={TERMS_AND_CONDITIONS_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Termini e Condizioni</h4>
                  <p className="text-sm text-gray-600">Termini generali della piattaforma</p>
                </Link>
                <Link
                  href={COOKIE_POLICY_URL}
                  className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Policy sui Cookie</h4>
                  <p className="text-sm text-gray-600">Come utilizziamo i cookie</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
   
  );
}