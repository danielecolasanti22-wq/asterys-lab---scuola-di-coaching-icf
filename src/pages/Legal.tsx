import { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Pagine legali: Privacy, Cookie, Termini.
 * ⚠️ BOZZE — la Privacy è adattata dal testo del vecchio sito (asteryslab.com/disclaimer-privacy),
 * aggiornata con le sedi attuali; Cookie e Termini non esistevano sul vecchio sito e sono bozze
 * coerenti da completare. Tutti i testi vanno validati legalmente prima della pubblicazione.
 */

const tH2 = 'text-lg lg:text-xl font-display font-black tracking-tight text-brand-navy mt-8 mb-3';
const tP = 'text-[15px] leading-relaxed text-brand-navy/75 font-medium mb-4';

function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="pt-28 lg:pt-32 pb-20 bg-white">
      <div className="max-w-[820px] mx-auto px-4">
        {/* Banner bozza — da rimuovere dopo la validazione legale */}
        <div className="flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 mb-8">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[13px] leading-relaxed text-amber-800 font-medium">
            <span className="font-black">Bozza in revisione.</span> Questo testo è provvisorio e
            deve essere validato legalmente prima della pubblicazione.
          </p>
        </div>

        <h1 className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-[1.05] mb-2">
          {title}
        </h1>
        <p className="text-[13px] font-black uppercase tracking-[0.16em] text-brand-navy/45 mb-8">
          Ultimo aggiornamento: {updated}
        </p>

        <div>{children}</div>
      </div>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="Luglio 2026">
      <p className={tP}>
        Gentile cliente, desideriamo fornirti alcune informazioni relative all'utilizzo e al
        trattamento dei tuoi dati e di ogni altra informazione a carattere personale che deciderai
        di comunicarci nel corso del rapporto. Il rispetto della tua privacy e la totale
        riservatezza delle nostre comunicazioni è per noi un principio fondamentale.
      </p>

      <h2 className={tH2}>Titolare del trattamento</h2>
      <p className={tP}>
        Titolare del trattamento è <strong>Asterys Lab S.r.l.</strong>, con sedi operative in
        Milano, via Conservatorio 22 (20122) e Roma, via del Porto Fluviale 35 (00154). P.IVA e
        C.F. 11673371008. Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a{' '}
        <a href="mailto:privacy@asteryslab.com" className="text-brand-accent font-bold">
          privacy@asteryslab.com
        </a>
        .
      </p>

      <h2 className={tH2}>Dati raccolti e finalità</h2>
      <p className={tP}>
        Se decidi di usufruire dei nostri servizi, ti chiediamo di comunicarci alcune informazioni
        relative alla tua persona (ad esempio nome, cognome, professione, codice fiscale). Le
        utilizziamo esclusivamente per programmare e organizzare le sessioni e i percorsi
        formativi, per adempiere ad obblighi di legge — anche di carattere fiscale e contabile — e,
        previo tuo consenso, per tenerti informato su novità e opportunità e per finalità di
        marketing, pubblicità e promozione. Trattiamo i tuoi dati con mezzi manuali e informatici,
        idonei a garantirne riservatezza e integrità.
      </p>

      <h2 className={tH2}>Conferimento dei dati</h2>
      <p className={tP}>
        Sei tenuto a comunicarci le informazioni richieste nei campi contrassegnati come
        obbligatori nei nostri moduli: senza queste informazioni non potremo dare seguito alla tua
        richiesta e fornirti il servizio. Il conferimento di ogni altra informazione è facoltativo.
      </p>

      <h2 className={tH2}>Comunicazione a terzi</h2>
      <p className={tP}>
        I tuoi dati non sono comunicati a terzi, fatta eccezione per i dati strettamente necessari
        ad adempiere agli obblighi contabili e fiscali, e non sono diffusi né trasferiti all'estero.
      </p>

      <h2 className={tH2}>I tuoi diritti</h2>
      <p className={tP}>
        Hai il diritto di ottenere informazioni sull'esistenza, l'origine, le finalità e le
        modalità del trattamento dei dati che ti riguardano; di ottenerne la cancellazione, il
        blocco, l'aggiornamento, la rettifica e l'integrazione; e di opporti, per motivi legittimi,
        al trattamento. Puoi esercitare questi diritti scrivendo a{' '}
        <a href="mailto:privacy@asteryslab.com" className="text-brand-accent font-bold">
          privacy@asteryslab.com
        </a>{' '}
        o presso la sede della società.
      </p>

      <p className="text-[13px] leading-relaxed text-brand-navy/50 font-medium mt-8 pt-6 border-t border-gray-100">
        Nota per la revisione: il testo originale del vecchio sito faceva riferimento al D.Lgs.
        196/2003; va aggiornato ai riferimenti del Regolamento UE 2016/679 (GDPR) — base giuridica,
        tempi di conservazione, diritto alla portabilità e reclamo al Garante — a cura del
        consulente legale.
      </p>
    </LegalLayout>
  );
}

export function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updated="Luglio 2026">
      <p className={tP}>
        Questo sito utilizza cookie e tecnologie simili per garantire il corretto funzionamento
        delle pagine e per migliorare l'esperienza di navigazione. Di seguito trovi le informazioni
        essenziali; la versione definitiva sarà completata a valle della validazione legale.
      </p>

      <h2 className={tH2}>Cosa sono i cookie</h2>
      <p className={tP}>
        I cookie sono piccoli file di testo che i siti visitati inviano al tuo dispositivo, dove
        vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
      </p>

      <h2 className={tH2}>Tipologie di cookie utilizzati</h2>
      <p className={tP}>
        <strong>Cookie tecnici</strong> — necessari al funzionamento del sito, non richiedono
        consenso. <br />
        <strong>Cookie analitici</strong> — utilizzati in forma aggregata per raccogliere
        statistiche di utilizzo del sito. <br />
        <strong>Cookie di terze parti</strong> — impostati da servizi esterni (es. social network,
        strumenti di misurazione o video incorporati), soggetti alle rispettive privacy policy.
      </p>

      <h2 className={tH2}>Gestione dei cookie</h2>
      <p className={tP}>
        Puoi gestire o disabilitare i cookie tramite le impostazioni del tuo browser. La
        disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
      </p>

      <p className="text-[13px] leading-relaxed text-brand-navy/50 font-medium mt-8 pt-6 border-t border-gray-100">
        Nota per la revisione: l'elenco puntuale dei cookie effettivamente installati (nome,
        finalità, durata, fornitore) e l'eventuale banner di consenso vanno definiti in base agli
        strumenti realmente attivi sul sito in produzione.
      </p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Termini e Condizioni" updated="Luglio 2026">
      <p className={tP}>
        I presenti termini regolano l'utilizzo del sito e l'accesso ai servizi e ai percorsi
        formativi offerti da Asterys Lab S.r.l. La versione definitiva sarà completata a valle della
        validazione legale.
      </p>

      <h2 className={tH2}>Oggetto</h2>
      <p className={tP}>
        Asterys Lab S.r.l. eroga servizi di formazione e coaching e mette a disposizione, tramite
        questo sito, informazioni sui propri corsi e la possibilità di richiedere l'iscrizione.
      </p>

      <h2 className={tH2}>Iscrizioni e pagamenti</h2>
      <p className={tP}>
        Le condizioni economiche, le modalità di pagamento e le eventuali rateizzazioni sono
        indicate per ciascun percorso. L'iscrizione si perfeziona con la sottoscrizione del relativo
        contratto e nei termini in esso previsti.
      </p>

      <h2 className={tH2}>Diritto di recesso</h2>
      <p className={tP}>
        Al consumatore si applicano i diritti di recesso previsti dalla normativa vigente, secondo
        le condizioni indicate nel contratto di iscrizione.
      </p>

      <h2 className={tH2}>Proprietà intellettuale</h2>
      <p className={tP}>
        I contenuti del sito e dei materiali formativi (testi, marchi, loghi, materiali didattici)
        sono di proprietà di Asterys Lab S.r.l. o dei rispettivi titolari e non possono essere
        riprodotti senza autorizzazione.
      </p>

      <h2 className={tH2}>Legge applicabile e foro competente</h2>
      <p className={tP}>
        I presenti termini sono regolati dalla legge italiana. Per le controversie è competente il
        foro del luogo di residenza o domicilio del consumatore, ove previsto dalla normativa
        applicabile.
      </p>

      <p className="text-[13px] leading-relaxed text-brand-navy/50 font-medium mt-8 pt-6 border-t border-gray-100">
        Nota per la revisione: condizioni di vendita, recesso, gestione reclami e foro competente
        vanno definiti puntualmente dal consulente legale in base ai contratti realmente utilizzati.
      </p>
    </LegalLayout>
  );
}
