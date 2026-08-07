# Messa online su asteryslab.com

Come far prendere il posto della vetrina a questo sito, **senza toccare il multisito
WordPress** che ospita l'area riservata e gli altri sottositi.

---

## Il vincolo da cui parte tutto

`asteryslab.com` è un **WordPress multisito**. La vetrina è solo uno dei siti della rete:
accanto vivono `/inner` (login, Lab, ordini) e altri sottositi, tutti serviti dallo
**stesso WordPress** installato nella cartella principale.

> ⛔ **Non cancellare `wp-admin/`, `wp-includes/`, `wp-config.php` o `index.php`.**
> In un multisito il nucleo di WordPress è uno solo: rimuoverlo spegne l'area riservata
> e tutti gli altri sottositi insieme alla vetrina.

Quindi la vetrina non si "sostituisce": i file del sito nuovo **si affiancano** a
WordPress nella stessa cartella, e nginx decide di volta in volta chi risponde.

## Come funziona la convivenza

Una sola regola, applicata in ordine a ogni richiesta:

| | Cosa cerca nginx | Chi risponde |
|---|---|---|
| 1 | Esiste un file con quel nome fra quelli del sito nuovo? | il sito nuovo |
| 2 | Esiste una cartella con dentro `index.html`? | il sito nuovo |
| 3 | Nessuna delle due | **WordPress**, come oggi |

Il terzo punto è la rete di sicurezza. `/inner`, la bacheca, gli altri sottositi e
qualunque indirizzo che non abbiamo previsto **continuano a funzionare da soli**, senza
doverli elencare da nessuna parte. Se domani aggiungi un sottosito, funziona senza che
tu debba toccare questa configurazione.

E rende l'operazione **reversibile**: se qualcosa non torna, togliere le regole nginx
riporta tutto esattamente a com'era, perché WordPress non è mai stato toccato.

## Perché non serve Node

Le 74 pagine sono HTML già generati al momento della build: quello che carichi è una
cartella di file. Nessun processo da tenere acceso, niente che possa cadere.

---

## Preparazione

```bash
npm ci
npm run seo      # sitemap + indice del blog
npm run build    # genera le 74 pagine in dist/
npm run nginx    # regole nginx da incollare in Plesk
```

Servono due cose: il contenuto di **`dist/`** e il file **`deploy/nginx-asteryslab.conf`**.

### Prima di procedere: due controlli

**1. Nomi che si sovrappongono.** Il sito nuovo occuperà questi indirizzi:

```
/corsi  /blog  /eventi  /aziende  /about  /iscriviti  /personal-coaching
/scuola-di-coaching-milano  /scuola-di-coaching-roma
/privacy  /cookie  /termini  /borsa-di-studio  /credito-ai-talenti
```

Nella bacheca di rete, controlla che **nessun sottosito** usi uno di questi nomi. Se ce
n'è uno, va rinominato uno dei due prima di procedere: il file statico avrebbe la
precedenza e quel sottosito diventerebbe irraggiungibile.

**2. Fai la prova su un dominio di test**, se ne hai uno su Plesk. Dieci minuti che ti
risparmiano di scoprire un problema in produzione.

---

## Il giorno del passaggio

### 1. Backup

Backup completo del dominio da Plesk. Finché non è fatto, non toccare nient'altro.

### 2. Carica i file

Il **contenuto** di `dist/` va nella docroot (di solito `httpdocs/`), accanto ai file di
WordPress. Non la cartella `dist`: il suo contenuto.

Alla fine nella docroot convivono:

```
httpdocs/
├── index.html          ← la home del sito nuovo
├── assets/             ← css e javascript
├── corsi/  blog/  ...  ← una cartella per pagina, con dentro index.html
├── robots.txt  sitemap.xml
│
├── index.php           ← WordPress: NON TOCCARE
├── wp-admin/           ← WordPress: NON TOCCARE
├── wp-includes/        ← WordPress: NON TOCCARE
├── wp-content/         ← WordPress: NON TOCCARE
└── wp-config.php       ← WordPress: NON TOCCARE
```

L'unico file che si sovrappone è `index.html`, che WordPress non usa.

> `robots.txt` e `sitemap.xml`: se WordPress ne generava di suoi, ora vincono i file
> nuovi. È quello che vogliamo.

### 3. Incolla le regole nginx

Plesk → **Domini** → asteryslab.com → **Apache & nginx Settings** →
**Additional nginx directives**: incolla `deploy/nginx-asteryslab.conf` e premi
**Applica** (non basta salvare).

Se compare un errore tipo *"duplicate location"*, Plesk ha già una sua `location /`:
in fondo al file trovi la variante alternativa, con le istruzioni per sostituirla.

### 4. Verifica, in quest'ordine

**Prima l'area riservata.** È la cosa che non può rompersi:

```bash
curl -I https://asteryslab.com/inner/          # atteso: 200
```

E soprattutto: apri `/inner/` nel browser, **fai un login vero**, controlla di vedere i
Lab. Poi apri la bacheca di rete e verifica che gli altri sottositi rispondano.

**Poi i rimandi:**

```bash
curl -I https://asteryslab.com/trovare-clienti-come-coach/
#    atteso: 301 → /blog/trovare-clienti-come-coach

curl -I https://asteryslab.com/scuola-coaching-facilitazione/masterincoaching
#    atteso: 301 → /corsi/apcm
```

**Infine le pagine nuove:**

```bash
curl -s https://asteryslab.com/ | grep -o "<title>[^<]*</title>"
curl -s https://asteryslab.com/corsi/apcm | grep -o "<title>[^<]*</title>"
curl -I https://asteryslab.com/sitemap.xml
```

### Se qualcosa non torna

Togli le regole nginx dal pannello e applica: il sito torna esattamente a com'era.
WordPress non è stato toccato, quindi il ripristino è immediato e completo.

---

## Subito dopo: gli strumenti Google

### Search Console
- La proprietà **resta valida**: stesso dominio.
- Invia la nuova `sitemap.xml` (72 indirizzi) e rimuovi la vecchia `wp-sitemap.xml`.
- Nelle settimane seguenti compariranno 404 in *Indicizzazione → Pagine*: sono attesi.
  Se fra questi c'è un indirizzo con traffico reale, aggiungilo a `scripts/redirects.mjs`
  e rigenera con `npm run redirects && npm run nginx`.
- Dopo 3–4 settimane guarda le ricerche in posizione **11–30**: lì un ritocco vale più
  di un articolo nuovo.

### Analytics
- Il tag GA4 **va reinserito**: stava nella vetrina WordPress, che non risponde più. Va
  aggiunto in `index.html` o via Tag Manager.
- Annota la data del passaggio: senza, un calo di qualche giorno sembra un problema di
  posizionamento invece che l'effetto del cambio.

### Google Ads
- Aggiorna le destinazioni degli annunci agli indirizzi nuovi. Continuerebbero a
  funzionare grazie ai rimandi, ma un annuncio che passa per un 301 perde qualità.
- Le conversioni basate su URL vanno rifatte con i percorsi nuovi.

### Profilo dell'attività
- Il collegamento al sito regge. Le due sedi possono ora puntare a
  `/scuola-di-coaching-milano` e `/scuola-di-coaching-roma`.

---

## Le domande che ti sei posto

**«Il redirect è già attivo adesso?»**
No. `vercel.json` vale solo per il deploy Vercel, che è un altro server
(`216.198.79.3`, mentre asteryslab.com è `188.165.123.76`). Il sito vero non ne è
toccato: i rimandi si accendono **solo** quando incolli le regole nginx su Plesk. Prima
di allora sono scritti, non attivi — che è esattamente come deve essere finché aspetti
l'ok.

**«Le vecchie pagine e le nuove convivranno sui motori?»**
Per qualche settimana sì, poi no. I vecchi indirizzi non sono più pagine ma rimandi:
Google li ripassa e sposta il posizionamento su quelli nuovi.

**«E le pagine vecchie che nel sito nuovo non esistono?»**
64 articoli, quasi tutti notizie di conferenze di anni fa, con traffico prossimo a zero.
Vanno all'elenco del blog. Se Search Console ne mostra una con visite vere, si aggiunge
un rimando dedicato in cinque minuti.

**«Non sarebbe più pulito tirare fuori la vetrina dal multisito?»**
Sì, alla lunga. Ma è un'operazione a sé: significa spostare gli altri sottositi su
sottodomini e rifare la struttura della rete. Vale la pena affrontarla dopo, a sito
nuovo online e stabile — non nello stesso momento.
