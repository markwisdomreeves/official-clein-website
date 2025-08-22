import { COOKIE_POLICY_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL } from "@/consts/support";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Termini e Condizioni per Fornitori - CLEIN Home Services",
  description: "Termini e condizioni per fornitori di servizi e artigiani su CLEIN Home Services.",
};

export default function ProviderTermsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Richiesta di Cancellazione Dati Personali
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
            href="/it/"
            className="inline-flex items-center gap-2 text-[#0057B8] hover:text-[#004494] mb-8 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            Torna alla Home
          </Link>

          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg !max-w-screen-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduzione</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La presente informativa definisce le modalità con cui gli utenti di CLEIN possono richiedere la cancellazione dei propri dati personali. Comprendiamo che la privacy sia di fondamentale importanza per i nostri utenti e ci impegniamo a gestire tali richieste in modo sicuro, trasparente e conforme alle normative vigenti. Questa policy illustra i tuoi diritti, come presentare una richiesta, come verifichiamo la tua identità e come i tuoi dati verranno eliminati.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. I Tuoi Diritti</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR) e di altre normative applicabili in materia di protezione dei dati, hai il diritto di richiedere la cancellazione dei tuoi dati personali nei seguenti casi:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Dati non più necessari: i dati non sono più necessari per le finalità per le quali sono stati raccolti o trattati.</li>
              <li>Revoca del consenso: revochi il consenso su cui si basa il trattamento e non esistono altre basi giuridiche per procedere.</li>
              <li>Opposizione al trattamento: ti opponi al trattamento dei tuoi dati e non sussistono motivi legittimi prevalenti per proseguire.</li>
              <li>Trattamento illecito: i tuoi dati personali sono stati trattati in modo illecito.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Come Presentare una Richiesta di Cancellazione Dati</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Per avviare una richiesta di cancellazione dei dati, segui questi passaggi:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>1. Accedi al tuo account: effettua l’accesso tramite il l’app mobile di CLEIN.</li>
              <li>2. Accedi al Modulo di Richiesta Cancellazione Dati: nella sezione “Impostazioni Account”, seleziona l’opzione “Richiesta Cancellazione Dati”.</li>
              <li>3. Completa il modulo fornendo tutte le informazioni richieste, inclusi il tuo indirizzo email registrato, il motivo della richiesta di eliminazione (se applicabile) e se desideri procedere con l’eliminazione completa del tuo account o solo di specifici set di dati.</li>
              <li>4. Invia il modulo: dopo averlo compilato, invialo attraverso la piattaforma.</li>
              <li>5. Conferma via email: riceverai un’email di conferma dell’avvenuta presentazione della richiesta.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Verifica dell’identità</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Per proteggere i tuoi dati, confermeremo la tua identità tramite email e, se necessario, documenti aggiuntivi.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Elaborazione della richiesta</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Dopo la verifica, elaboreremo la cancellazione entro 30 giorni, salvo casi complessi che potrebbero richiedere più tempo, informandoti di eventuali ritardi e nuove tempistiche.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conservazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sebbene i tuoi dati verranno cancellati, potrebbero esserci situazioni in cui siamo obbligati per legge o per contratto a conservare alcune informazioni per un determinato periodo. Ad esempio:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Obblighi legali: alcuni dati devono essere conservati per un periodo minimo per rispettare obblighi fiscali, contabili o legali.</li>
              <li>Risoluzione delle controversie: potremmo conservare alcuni dati per tutelare i nostri interessi legali.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Eccezioni alla Cancellazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pur impegnandoci a soddisfare la tua richiesta di cancellazione, ci sono circostanze in cui la cancellazione potrebbe non essere possibile. Tra queste, a titolo esemplificativo ma non esaustivo:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Obblighi legali o contrattuali: se i tuoi dati sono necessari per adempiere a obblighi di legge (es. documenti fiscali) o contrattuali (es. contratti di servizio).</li>
              <li>Finalità di sicurezza: dati necessari per garantire la sicurezza della piattaforma o prevenire frodi.</li>
              <li>Contenziosi legali: dati necessari per l’accertamento, l’esercizio o la difesa di un diritto in sede giudiziaria.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contattaci</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Per qualsiasi domanda o necessità di assistenza in merito alla cancellazione dei tuoi dati, puoi contattarci ai recapiti indicati nella nostra informativa sulla privacy.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@clein.it
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefono:</strong> +39 392 349 8466
              </p>
              <p className="text-gray-700">
                <strong>Indirizzo:</strong> Via Via Don Lorenzo Milani 50, Teramo (TE)
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-center text-gray-700">
                Registrandoti su CLEIN, dichiari di accettare integralmente la presente Informativa sulla Richiesta di Cancellazione dei Dati Personali.
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
                href={TERMS_AND_CONDITIONS_URL}
                className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Termini e Condizioni</h4>
                <p className="text-sm text-gray-600">Leggi i nostri termini di servizio</p>
              </Link>
              <Link
                href={PRIVACY_POLICY_URL} 
                className="block p-4 bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Informativa Privacy</h4>
                <p className="text-sm text-gray-600">Come proteggiamo i tuoi dati</p>
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