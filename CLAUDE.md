# Asterys Lab — sito vetrina

Sito della scuola di coaching accreditata ICF. React + Vite + Tailwind, **prerenderizzato**:
ogni pagina viene generata come HTML statico al momento della build.

Questo file è il punto di partenza di ogni sessione: com'è fatto il progetto, cosa è già
stato deciso e perché, e cosa non va rifatto da capo.

---

## Come si lavora

- **I commit li faccio io, il push lo fa Daniele.** Le credenziali di questa sessione non
  hanno permessi di scrittura sul repository.
- Daniele è il referente di Asterys Lab e sviluppa in prima persona: si può entrare nel
  dettaglio tecnico, ma pesa costo e manutenzione reali di ogni scelta.
- Il sito **non è ancora online sul dominio**: `asteryslab.com` serve ancora il vecchio
  WordPress. Si aspetta l'ok della direzione per pubblicare.
- Si scrive in italiano: interfaccia, commenti nel codice, messaggi di commit.

## Pubblicare una modifica

**Il push pubblica.** `.github/workflows/deploy.yml` compila e carica su Plesk a ogni push
su `main`: io committo, Daniele fa push, il sito è online in ~2 minuti. Nessun FTP a mano.

Il caricamento si ferma da solo se il controllo tipi, la compilazione o la verifica delle
pagine generate falliscono — il sito online resta quello di prima. Non tocca i file di
WordPress (vedi le esclusioni nel workflow). Dettagli in `deploy/PUBBLICAZIONE-AUTOMATICA.md`.

## Comandi

```bash
npm run dev        # sviluppo
npm run build      # build + build SSR + prerender delle 74 pagine → dist/
npm run lint       # tsc --noEmit
npm run preview    # ⚠️ NON riflette la produzione, vedi sotto
```

Da rieseguire **a mano** dopo aver cambiato contenuti (i file generati si committano):

```bash
npm run seo        # sitemap.xml + src/constants/blogIndex.ts
npm run images     # varianti WebP + manifest dimensioni  (serve: brew install webp imagemagick)
npm run redirects  # sezione redirects di vercel.json
npm run nginx      # deploy/nginx-asteryslab.conf per Plesk
```

---

## Le cinque trappole (non reintrodurle)

**1. `vite preview` non riflette la produzione.** Fa sempre il fallback SPA, quindi
mostra la home su ogni indirizzo e nasconde se il prerender funziona. Per verificare
davvero serve un server che provi prima i file statici.

**2. `Seo.tsx` non deve emettere i tag come elementi React.** L'`<head>` lo scrive già il
prerender; riemetterli faceva fallire l'idratazione, che scartava tutto l'HTML statico.
Il componente aggiorna il DOM solo al cambio di rotta.

**3. Tutto ciò che nel render legge `window` va reso deterministico anche lato build**,
altrimenti il markup generato e quello del browser non combaciano e l'idratazione salta.
Vedi `src/utils/whatsapp.ts`, che riceve il percorso da `__PRERENDER_PATH__`.

**4. `<motion.img>` non si trova cercando `<img`.** Il carosello accreditamenti della home
sfuggiva così alla migrazione delle immagini e scaricava i badge ICF a 1600px (591 KB) per
mostrarli a 128. Per i tag che non possono essere `<Img>` c'è l'helper `imgAttrs()`.

**5. `srcSet` va sullo stesso `<img>`, non in un `<picture>` con `<source>`.** Con
`<picture>` il browser risolveva `src` prima di considerare il `<source>` fratello appena
montato: scaricava l'originale a piena risoluzione **oltre** alla variante.

---

## Architettura

### Prerender
`npm run build` fa tre cose in fila: build del browser, build SSR (`src/entry-server.tsx`),
poi `scripts/prerender.mjs` che scrive `dist/<rotta>/index.html` con head completo e
contenuto già renderizzato.

Serve perché Bing e i bot delle AI non eseguono JavaScript: prima trovavano una pagina
vuota su tutti gli indirizzi. L'`<head>` non viene dal markup di React ma dalle stesse
funzioni di `src/constants/seo.ts` — una sola fonte di verità.

**Il sito non richiede Node in produzione**: `dist/` è una cartella di file statici.

### Immagini
`scripts/images.mjs` genera per ogni jpg/png una variante WebP a piena risoluzione più
400w/800w, e un manifest con le dimensioni reali. Una variante viene tenuta **solo se è
più leggera dell'originale**: su JPEG già compressi e PNG a pochi colori il WebP pesa di
più. Il componente `Img` sceglie la variante adatta e degrada da solo quando manca.

### Blog
Link ai corsi dentro il testo, senza toccare una parola degli articoli: si appoggiano a
`autoHighlight`, che già evidenziava quei termini. Regole concordate con Daniele
(**non allentarle senza chiederglielo**): massimo 3 link per articolo, uno per
destinazione, uno slot riservato al percorso più pertinente, **nessuna CTA commerciale**
in fondo — teme che un articolo sembri di vendita e perda credibilità.

51 articoli, 8 categorie (erano 23, piene di sinonimi). L'ordine è quello dell'array in
`blogPosts.ts`: le 5 guide che intercettano le ricerche stanno in testa, gli altri sono
distribuiti in modo che due dello stesso argomento non siano mai affiancati.

---

## ⛔ La messa online: `asteryslab.com` è un WordPress MULTISITO

La vetrina è **uno dei siti della rete**. Accanto vivono `/inner` (area riservata: login,
Lab, ordini) **e altri sottositi**, tutti serviti dallo stesso WordPress nella cartella
principale.

**Non cancellare `wp-admin/`, `wp-includes/`, `wp-config.php`, `index.php`**: il nucleo è
uno solo e spegnerebbe l'area riservata e tutti i sottositi insieme alla vetrina.

I file del sito nuovo si **affiancano** a WordPress nella stessa cartella
(`/var/www/vhosts/asteryslab.com/httpdocs`), senza cancellare nulla.

⛔ **Il campo "Additional nginx directives" di Plesk NON è vuoto**: contiene le regole del
multisito, quelle che tengono in piedi `/inner`, `/forms`, `/office`, `/2025`. Il campo è
uno solo — sovrascriverlo senza rimetterle spegne quei siti all'istante. Il file generato
da `npm run nginx` le include già in fondo, invariate; copia di riferimento in
`deploy/nginx-esistenti-multisite.conf`.

Quelle regole finiscono con *"se il file non esiste, passa a WordPress"*: è esattamente la
logica di convivenza che serve. I file del sito nuovo vengono serviti come file, tutto il
resto continua ad andare a WordPress, senza elencare i sottositi da nessuna parte.

L'operazione è **reversibile**: per tornare indietro si rimettono nel campo le sole regole
del multisito (non si svuota il campo).

Procedura completa in **`deploy/LANCIO.md`**. Rilevato dal pannello: nginx serve già da sé
`html`/`webp`/`css`/`js`, la cache nginx è attiva (usare *Clear cache* dopo il caricamento),
il traffico è di **99 GB/mese** — motivo per cui la produzione sta su Plesk e non su Vercel.

### I redirect sono scritti ma NON attivi
187 rimandi 301 dai vecchi indirizzi (110 articoli + 77 pagine del WordPress attuale).
Stanno in `vercel.json` **e** in `deploy/nginx-asteryslab.conf`.

`vercel.json` vale **solo** per il deploy Vercel, che è un altro server. `asteryslab.com`
punta a Plesk e non ne è toccato: i rimandi si accendono solo incollando le regole nginx.
**Pushare non mette niente online.**

---

## Stato

| | |
|---|---|
| Pagine prerenderizzate | 74 |
| Articoli | 51 |
| URL in sitemap | 72 |
| Redirect pronti | 187 |
| Peso immagini home | 4093 → 1460 KB (−64%) |
| Bundle entry | 631 → 447 KB |

Ogni pagina ha titolo e descrizione propri; dati strutturati `EducationalOrganization`,
`Course`, `FAQPage`, `BlogPosting`, `BreadcrumbList`, `LocalBusiness`.

## Cosa resta da fare

**In attesa di Daniele**
- **4 immagini nuove** per i primi articoli del blog (le attuali sono adattate male) —
  vanno richieste, se ne è dimenticato.
- Ok della direzione per pubblicare.
- ~~Verificare i nomi dei sottositi~~ **fatto (11 ago)**: la rete ha `/` (vetrina),
  `/inner`, `/forms`, `/office`, `/2025`. Nessuno collide con le sezioni del sito nuovo.
  Se in futuro se ne aggiunge uno, il controllo va rifatto.

**Contenuti** (piano completo: vedi il documento personas nella memoria del progetto)
1. Guida "coach o psicologo" + "a cosa serve un coach" — il buco più ampio
2. Pagina "da ACC a PCC" — ponte verso il 2° livello del Master
3. Sezione ROI sulla pagina Aziende (dati 5,7×–7,9× già disponibili)
4. Risposta secca in apertura alle guide esistenti — condizione per essere citati dalle AI
5. Pagina pubblica sulle agevolazioni (borsa di studio e credito sono noindex)

**Tecnico**
- `BlogPostDetail` ha due `<h1>`.
- `public/guide/diventare-coach.pdf` pesa 13,2 MB, mai ottimizzato.
- `public/blog/perche-diventare-coach-3.jpg` non è più referenziata (articoli uniti).
- `coursesContent.tsx` (165 KB) sta nel bundle iniziale perché lo importa `seo.ts`.
  Estrarne un indice leggero porterebbe l'entry da ~130 a ~70 KB gzip, ma è un refactor
  sulla struttura dati centrale: rapporto rischio/beneficio non favorevole.

**Dopo il lancio**
- Google Search Console: inviare la nuova sitemap, rimuovere `wp-sitemap.xml`.
- Reinserire il tag Analytics (stava in WordPress).
- Aggiornare le destinazioni degli annunci Ads.
- Dopo 3-4 settimane: guardare le ricerche in posizione 11-30.

---

## Convenzioni di contenuto

- Sempre **"Asterys Lab"**, mai "Asterys" da solo.
- Mai "certificazione": si dice **"accreditamento"** ICF.
- Vietato il claim "prima/1ª scuola ICF".
- Corso Personal Branding: mai "webinar", sempre **"incontri online"**.
- Le lezioni sono **in diretta e non registrate**; "Inner" nel copy è **"Laboratorio Virtuale"**.
- Nella UI è **"Master in Coaching"**; "…Professionale" solo nei meta SEO.
