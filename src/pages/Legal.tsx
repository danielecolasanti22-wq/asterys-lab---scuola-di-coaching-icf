import { ReactNode } from 'react';

/**
 * Pagine legali: Privacy, Cookie, Termini.
 * - Privacy: basata sull'Informativa GDPR ufficiale di asteryslab.com/informativa (art. 13 Reg. UE
 *   2016/679), + nota di trasparenza AI Act (immagini generate). Titolare/DPO come da Informativa.
 * - Cookie e Termini: bozze coerenti (non esistevano sul vecchio sito) da completare con lo stack
 *   reale (banner/CMP es. Iubenda, cookie effettivi, contratti d'iscrizione).
 * Validazione legale consigliata prima della pubblicazione.
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
    <LegalLayout title="Privacy Policy" updated="Agosto 2026">
      <p className={tP}>
        Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE
        2016/679 (GDPR). Il sito <strong>asteryslab.com</strong> è di proprietà di Asterys Lab
        S.r.l. La protezione dei dati personali e il loro trattamento consapevole sono per noi un
        principio di riferimento: ci impegniamo al rigoroso rispetto di tutte le leggi e le
        regolamentazioni in materia.
      </p>

      <h2 className={tH2}>Titolare del trattamento</h2>
      <p className={tP}>
        Il titolare del trattamento è <strong>Asterys Lab S.r.l.</strong>, via del Porto Fluviale
        35, 00154 Roma. P.IVA e C.F. 11673371008.
      </p>

      <h2 className={tH2}>Data Protection Officer (DPO)</h2>
      <p className={tP}>
        Pier Paolo Colasanti — via del Porto Fluviale 35, 00154 Roma —{' '}
        <a href="mailto:dpo@asteryslab.com" className="text-brand-accent font-bold">
          dpo@asteryslab.com
        </a>
        .
      </p>

      <h2 className={tH2}>Dati personali</h2>
      <p className={tP}>
        Per dato personale si intende qualsiasi informazione correlata a una persona fisica
        identificata o identificabile, direttamente o indirettamente (ad esempio nome, indirizzo o
        numero di telefono). Le informazioni non correlate alla tua identità reale non sono dati
        personali.
      </p>

      <h2 className={tH2}>Finalità del trattamento e base giuridica</h2>
      <p className={tP}>
        Asterys Lab tratta i dati personali per le seguenti finalità:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-2 text-[15px] leading-relaxed text-brand-navy/75 font-medium">
        <li>
          <strong>Esecuzione del rapporto contrattuale</strong> e fruizione dei servizi richiesti
          (organizzazione di sessioni e percorsi formativi). Per il trattamento di eventuali
          categorie particolari di dati è necessario il tuo espresso consenso, senza il quale non
          saremo in grado di fornirti il servizio.
        </li>
        <li>
          <strong>Adempimento di obblighi legali</strong> (es. normativa fiscale, richieste della
          magistratura): il conferimento dei dati necessari a tali fini rappresenta un obbligo di
          legge.
        </li>
        <li>
          <strong>Marketing</strong> (telefonico, posta elettronica o ordinaria, materiale
          pubblicitario, vendita diretta, indagini di mercato) sulla base del tuo{' '}
          <strong>consenso</strong>, libero e revocabile in qualsiasi momento. Il conferimento non è
          obbligatorio e il rifiuto non comporta conseguenze negative, salvo l'impossibilità di
          ricevere comunicazioni commerciali.
        </li>
      </ul>
      <p className={tP}>I tuoi dati personali non saranno trasferiti o venduti a terzi.</p>

      <h2 className={tH2}>Periodo di conservazione</h2>
      <p className={tP}>
        Conserviamo i tuoi dati per tutta la durata del rapporto contrattuale e per l'adempimento
        degli obblighi di legge e regolamentari applicabili, nonché per finalità difensive, fino
        alla scadenza dei relativi termini di conservazione (che decorrono dall'estinzione del
        rapporto). Per i trattamenti basati sul consenso, fino alla revoca dello stesso. Al termine,
        i dati vengono cancellati o resi anonimi, salvo un ulteriore trattamento necessario per la
        gestione di precontenziosi o contenziosi.
      </p>

      <h2 className={tH2}>Misure di sicurezza</h2>
      <p className={tP}>
        Adottiamo idonee misure tecniche e organizzative per proteggere i dati da accesso non
        autorizzato, alterazione, divulgazione, perdita, distruzione e abuso: monitoraggi e
        controlli dei processi di raccolta, archiviazione ed elaborazione, e misure di sicurezza dei
        sistemi informatici. Riesaminiamo regolarmente lo stato dell'arte delle tecnologie di
        sicurezza e adottiamo i principi di <strong>privacy by design</strong> e{' '}
        <strong>privacy by default</strong>, richiedendo solo i dati necessari alle rispettive
        finalità. I backup hanno finalità strettamente tecniche; i log di sistema, privi di dati
        personali, sono eliminati automaticamente dopo 90 giorni.
      </p>
      <p className={tP}>
        Ti ricordiamo che la privacy delle informazioni trasmesse via e-mail non può essere
        garantita: per informazioni riservate consigliamo canali più sicuri.
      </p>

      <h2 className={tH2}>I tuoi diritti</h2>
      <p className={tP}>
        Hai il diritto di accedere ai tuoi dati e di richiederne la rettifica, la cancellazione o la
        limitazione del trattamento, nonché il diritto alla portabilità e di opposizione. Se hai
        prestato il consenso, puoi <strong>revocarlo</strong> in qualsiasi momento (con effetto per
        il futuro). Il <strong>diritto alla portabilità</strong> ti consente di ricevere una copia
        dei tuoi dati in formato strutturato e leggibile da dispositivo automatico; il{' '}
        <strong>diritto all'oblio</strong> di richiederne la cancellazione. Puoi esercitare questi
        diritti scrivendo a{' '}
        <a href="mailto:dpo@asteryslab.com" className="text-brand-accent font-bold">
          dpo@asteryslab.com
        </a>
        . Alcuni dati potrebbero non essere immediatamente cancellabili per obblighi di
        conservazione di legge, di cui verrai informato.
      </p>
      <p className={tP}>
        Hai inoltre il diritto di presentare reclamo all'autorità di controllo: il{' '}
        <strong>Garante per la protezione dei dati personali</strong>, Piazza di Monte Citorio 121,
        00186 Roma —{' '}
        <a href="mailto:garante@gpdp.it" className="text-brand-accent font-bold">
          garante@gpdp.it
        </a>
        .
      </p>

      <h2 className={tH2}>Contenuti generati con intelligenza artificiale</h2>
      <p className={tP}>
        In conformità ai principi di trasparenza (Regolamento UE 2024/1689 — «AI Act»), ti
        informiamo che alcune immagini illustrative presenti su questo sito sono state{' '}
        <strong>generate o rielaborate con strumenti di intelligenza artificiale</strong> e non
        raffigurano necessariamente persone, luoghi o eventi reali. Il sito non utilizza sistemi di
        AI che interagiscono direttamente con l'utente (es. chatbot).
      </p>

      <h2 className={tH2}>Modifiche</h2>
      <p className={tP}>
        La presente informativa può essere aggiornata nel tempo; ogni versione è identificabile
        dalla data di aggiornamento. La versione più recente è sempre disponibile su questa pagina.
      </p>

      <p className="text-[13px] leading-relaxed text-brand-navy/50 font-medium mt-8 pt-6 border-t border-gray-100">
        Nota per la revisione: testo basato sull'Informativa GDPR ufficiale di asteryslab.com. Prima
        della pubblicazione va integrato l'elenco aggiornato dei responsabili/fornitori esterni
        realmente in uso sul nuovo sito (es. hosting, Gravity Forms, MailPoet, eventuali analytics)
        e va confermata con un legale la formulazione della sezione «AI Act».
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
        Nota per la revisione: al momento il sito usa solo cookie tecnici. Quando saranno attivati
        strumenti di misurazione (es. Google Analytics 4, Microsoft Clarity) serviranno un banner di
        consenso a norma con Google Consent Mode v2 (CMP, es. Iubenda) e l'elenco puntuale dei
        cookie (nome, finalità, durata, fornitore).
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
