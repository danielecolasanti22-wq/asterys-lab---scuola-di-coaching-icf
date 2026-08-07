# Messa online su asteryslab.com

Come sostituire la vetrina WordPress con questo sito, tenendo in piedi l'area riservata
e senza perdere il posizionamento già acquisito.

---

## Com'è messo il dominio oggi

Su `asteryslab.com` girano **due WordPress separati**, non un multisito:

| Indirizzo | Cosa c'è | Cosa ne facciamo |
|---|---|---|
| `asteryslab.com/` | La vetrina WordPress | **Sostituita** da questo sito |
| `asteryslab.com/inner/` | Area riservata: login, Lab, ordini | **Resta esattamente com'è** |

Che siano due installazioni distinte è la ragione per cui l'operazione è fattibile senza
toccare l'area riservata: `/inner` è una cartella con il suo WordPress e la sua REST API,
indipendente dalla vetrina.

## Perché non serve Node sul server

Le pagine di questo sito vengono generate come **file HTML già pronti** al momento della
build (74 pagine). Quello che va caricato è una cartella di file statici: nessun processo
da tenere acceso, nessuna versione di Node da gestire, nessun rischio che il sito cada
perché un servizio si è fermato. Per Plesk è la condizione ideale.

---

## Preparazione (prima del giorno X)

```bash
npm ci          # dipendenze pulite
npm run seo     # sitemap + indice del blog
npm run images  # solo se hai aggiunto o cambiato immagini
npm run build   # compila e genera le 74 pagine in dist/
npm run nginx   # regole nginx da incollare in Plesk
```

Alla fine servono due cose:

- il contenuto di **`dist/`** — è tutto il sito;
- il file **`deploy/nginx-asteryslab.conf`** — le regole del server.

> ⚠️ Va caricato il **contenuto** di `dist/`, non la cartella. Nella docroot deve
> trovarsi `index.html`, non `dist/index.html`.

---

## Il giorno del passaggio

### 1. Backup della vetrina attuale

Da Plesk, backup completo del dominio. Serve a poter tornare indietro in pochi minuti se
qualcosa non torna: finché il backup non è fatto, non toccare altro.

### 2. Svuota la docroot **senza toccare `/inner`**

Nella docroot (di solito `httpdocs/`) vanno rimossi i file della vetrina WordPress:
`wp-admin/`, `wp-includes/`, `wp-content/`, `index.php`, `wp-config.php`, `.htaccess`…

**La cartella `inner/` non si tocca.** È l'area riservata: se sparisce, gli iscritti non
accedono più ai Lab.

> Se `wp-config.php` della vetrina contiene credenziali del database usate anche
> altrove, conservane una copia prima di cancellare.

### 3. Carica il sito

Il contenuto di `dist/` va nella docroot. Alla fine devi vedere, allo stesso livello:

```
httpdocs/
├── index.html          ← la home
├── assets/             ← css e javascript
├── corsi/  blog/  ...  ← una cartella per pagina, ognuna con index.html
├── robots.txt  sitemap.xml
└── inner/              ← l'area riservata, intatta
```

### 4. Incolla le regole nginx

Plesk → **Domini** → asteryslab.com → **Apache & nginx Settings** →
**Additional nginx directives**: incolla il contenuto di `deploy/nginx-asteryslab.conf`
e applica.

Fanno tre cose: lasciano `/inner` a WordPress, rimandano i 187 vecchi indirizzi ai nuovi,
e servono le pagine statiche.

### 5. Verifica subito, in quest'ordine

```bash
# a) L'area riservata funziona ancora — controlla PRIMA di tutto il resto
curl -I https://asteryslab.com/inner/

# b) Un vecchio indirizzo rimanda al nuovo (301, non 404)
curl -I https://asteryslab.com/trovare-clienti-come-coach/
#    atteso: 301 → /blog/trovare-clienti-come-coach

curl -I https://asteryslab.com/scuola-coaching-facilitazione/masterincoaching
#    atteso: 301 → /corsi/apcm

# c) Le pagine nuove rispondono con il PROPRIO titolo
curl -s https://asteryslab.com/corsi/apcm | grep -o "<title>[^<]*</title>"
curl -s https://asteryslab.com/scuola-di-coaching-milano | grep -o "<title>[^<]*</title>"

# d) I file per i motori ci sono
curl -I https://asteryslab.com/sitemap.xml
curl -I https://asteryslab.com/robots.txt
```

E dal browser: apri `/inner/`, **fai un login vero** e controlla di vedere i Lab. È la
verifica che conta più di tutte le altre.

---

## Subito dopo: gli strumenti Google

Il sito nuovo non eredita nulla in automatico. Serve rimettere mano a tutto.

### Search Console
- La proprietà esistente **resta valida**: stesso dominio, quindi non va rifatta.
- Invia la nuova `sitemap.xml` (72 indirizzi) e rimuovi le vecchie sitemap WordPress
  (`wp-sitemap.xml`), altrimenti Google continua a cercare pagine che non esistono più.
- Nelle settimane seguenti, in *Indicizzazione → Pagine*, compariranno errori 404: sono
  attesi e vanno letti. Se un indirizzo con traffico è finito lì, aggiungilo alla mappa
  in `scripts/redirects.mjs` e rigenera.
- Dopo 3–4 settimane guarda le ricerche in posizione **11–30**: lì un ritocco vale più di
  un articolo nuovo.

### Analytics
- Se è GA4, **il tag va reinserito**: era in WordPress, che non c'è più. Va aggiunto in
  `index.html` (o via Tag Manager).
- Annota la data del passaggio: senza, un eventuale calo di qualche giorno sembra un
  problema di posizionamento invece che l'effetto del cambio.

### Google Ads
- Controlla le **destinazioni di ogni annuncio**: quelle che puntano ai vecchi indirizzi
  funzionerebbero comunque grazie ai rimandi, ma un annuncio che passa per un 301 perde
  qualità e velocità. Meglio aggiornarle agli indirizzi nuovi.
- Se usi conversioni basate su URL, vanno rifatte con i percorsi nuovi.

### Profilo dell'attività (Google Business Profile)
- Il sito resta lo stesso, quindi il collegamento regge.
- Le due sedi possono ora puntare alle rispettive pagine:
  `/scuola-di-coaching-milano` e `/scuola-di-coaching-roma`.

---

## Le domande che ti sei posto, con risposta

**«Le vecchie pagine indicizzate e le nuove convivranno?»**
No, e va bene così. Dopo il passaggio esiste **un solo sito**: i vecchi indirizzi non
esistono più come pagine, esistono come rimandi. Google li ripassa nel giro di qualche
settimana e sposta il posizionamento sull'indirizzo nuovo.

**«E le pagine vecchie che nel sito nuovo non ci sono?»**
Sono 64 articoli, quasi tutti notizie di conferenze e apparizioni di anni fa, mai
ripubblicate. Vanno all'elenco del blog: non è la stessa cosa di un rimando puntuale, ma
è molto meglio di un errore, e riguarda pagine che oggi portano traffico quasi nullo. Se
Search Console dovesse mostrare che una di queste ha ancora visite, si aggiunge un
rimando dedicato in cinque minuti.

**«Come faccio ad avere due sistemi diversi sullo stesso dominio?»**
È il caso più semplice: non due sistemi in conflitto, ma due cartelle. La docroot serve
file statici, `/inner` continua a essere gestita da PHP. Il blocco `location ^~ /inner/`
nelle regole nginx è esattamente ciò che tiene separate le due cose.

**«E se invece tenessi il sito su Vercel?»**
Si può, ma **non lo consiglio in questo caso**: per servire `/inner` dallo stesso dominio
Vercel dovrebbe fare da tramite verso il tuo server, e in mezzo ci passano i cookie di
sessione, il login e il checkout dell'area riservata. Sono esattamente le cose che si
rompono per prime. Vercel resta perfetto per le anteprime prima di pubblicare.

---

## Se qualcosa va storto

| Sintomo | Causa quasi certa |
|---|---|
| `/inner` mostra la home della vetrina o "pagina non trovata" | Il blocco `location ^~ /inner/` non è stato applicato, o la cartella `inner/` è stata cancellata |
| Ogni indirizzo mostra la home | Manca `$uri/index.html` in `try_files`: si sta ripiegando su `index.html` prima di cercare la pagina |
| I vecchi indirizzi danno 404 | Le regole nginx non sono state applicate (in Plesk va premuto **Applica**, non solo salvato) |
| Il sito si vede senza stili | Il contenuto di `dist/` non è nella docroot ma dentro una sottocartella `dist/` |

In ogni caso: ripristina il backup del punto 1 e riprova con calma. Il sito nuovo resta
raggiungibile intanto sull'indirizzo di anteprima Vercel.
