# Messa online su asteryslab.com

Procedura verificata sul server reale (Plesk Obsidian 18.0.79, 12 agosto 2026).

---

## ⛔ La cosa da fare prima di tutto: non esiste nessun backup

Ho controllato il Backup Manager: **è vuoto**. Nessun backup, nessuna copia programmata.

Non è un problema di questo lancio — è un problema che hai già adesso, e riguarda un
dominio con `/inner` dentro: iscritti, corsi, ordini. Oggi un errore umano o un guasto
non avrebbe nulla da cui ripartire.

**Prima di qualsiasi altra cosa: Plesk → Backup Manager → Back Up.** Dominio completo,
file e database. E già che ci sei, imposta anche una copia programmata settimanale:
serve a te comunque, indipendentemente da questo lavoro.

Tutto il resto della procedura è pensato per non averne bisogno. Ma è la rete che deve
esserci quando qualcosa esce dal previsto.

---

## Com'è fatto il server (rilevato, non supposto)

| | |
|---|---|
| Cartella del sito | `/var/www/vhosts/asteryslab.com/httpdocs` |
| Utente di sistema | `asteryslab` |
| Web server | nginx davanti ad Apache (proxy mode attivo) |
| File serviti da nginx senza passare da Apache | `html`, `webp`, `css`, `js`, `png`, `jpg`, `pdf`… |
| Cache nginx | attiva, scadenza 5 secondi |
| Spazio disco | **illimitato** (90 GB usati) |
| Traffico | **illimitato** (107 GB/mese) |
| PHP | 8.3.33 |
| Backup | **nessuno** ⛔ |

**I cinque siti della rete WordPress:**

| Indirizzo | Sito | Dopo il lancio |
|---|---|---|
| `/` | Asterys Lab (vetrina) | **coperta** dal sito nuovo |
| `/inner/` | Area riservata: login, Lab, ordini | intatta |
| `/forms/` | AL Forms | intatto |
| `/office/` | AL Office | intatto |
| `/2025/` | Asterys Lab 2025 | intatto |

Nessuno di questi usa un indirizzo che il sito nuovo occuperà: verificato uno per uno.

## Le tre garanzie

**1. La vecchia vetrina non viene cancellata.** Resta nel database, resta nella bacheca,
le sue pagine esistono ancora. Viene solo *coperta*: per ogni indirizzo nginx trova prima
un file del sito nuovo o un rimando, quindi WordPress non viene interpellato.

**2. Il caricamento non può rompere niente**, perché finché non tocchi le regole nginx
quei file **nessuno li serve**. Puoi caricare, controllare, ricaricare: il sito online
resta identico. Il passaggio avviene in un istante che decidi tu.

**3. Si torna indietro in 30 secondi**, rimettendo nel campo nginx le vecchie regole
(`deploy/nginx-esistenti-multisite.conf`). Non serve ripristinare backup né cancellare
file: WordPress non è mai stato toccato.

---

# La procedura

## Passo 0 — Backup (obbligatorio)

Plesk → **Backup Manager** → **Back Up** → dominio completo, file e database.
Aspetta che finisca. Senza questo, non proseguire.

## Passo 1 — Prepara i file

```bash
npm ci
npm run seo      # sitemap + indice del blog
npm run build    # genera le 74 pagine in dist/
npm run nginx    # regole da incollare in Plesk
```

## Passo 2 — Carica in una cartella di prova

Con FileZilla (o Cyberduck), carica il **contenuto** di `dist/` in:

```
/var/www/vhosts/asteryslab.com/httpdocs/_prova/
```

Una cartella nuova, che non esiste e dove non c'è niente di WordPress. **Rischio zero.**

Poi verifica che i file ci siano davvero:

```bash
curl -I https://asteryslab.com/_prova/index.html      # atteso: 200
curl -s https://asteryslab.com/_prova/index.html | grep -o "<title>[^<]*</title>"
```

Se il primo comando dà 200 e il secondo mostra il titolo del sito nuovo, il caricamento
funziona e i permessi sono giusti. Questo è il collaudo che ti serve.

## Passo 3 — Carica nella cartella vera

Sempre con FileZilla, il **contenuto** di `dist/` in:

```
/var/www/vhosts/asteryslab.com/httpdocs/
```

⛔ **Non cancellare niente.** I file si affiancano a WordPress:

```
httpdocs/
├── index.html          ← sito nuovo
├── assets/             ← sito nuovo
├── corsi/ blog/ …      ← sito nuovo (una cartella per pagina)
├── robots.txt sitemap.xml
│
├── index.php           ← WordPress, NON TOCCARE
├── wp-admin/           ← WordPress, NON TOCCARE
├── wp-includes/        ← WordPress, NON TOCCARE
├── wp-content/         ← WordPress, NON TOCCARE
└── wp-config.php       ← WordPress, NON TOCCARE
```

L'unico file che si sovrappone è `robots.txt`, ed è voluto.

**A questo punto il sito online non è ancora cambiato.** Puoi fermarti qui quanto vuoi:
i file ci sono, ma nessuno li serve. È il momento giusto per aspettare l'ok della
direzione.

## Passo 4 — Il passaggio (l'unico istante che conta)

Plesk → **Domini** → asteryslab.com → **Hosting & DNS** → **Apache & nginx** →
campo **Additional nginx directives**.

1. **Copia il contenuto attuale del campo** e salvalo da qualche parte. È la tua ancora.
2. Sostituiscilo con tutto il contenuto di `deploy/nginx-asteryslab.conf`.
3. **Apply**.
4. Sulla stessa pagina: **Clear cache**.

> Il file che incolli **contiene già** le regole del multisito, in fondo. Se incollassi
> solo i rimandi, `/inner` e gli altri sottositi smetterebbero di rispondere.

Se Plesk segnala un errore di sintassi, **rifiuta la modifica**: non applica niente a
metà, il sito resta com'è.

## Passo 5 — Verifica, in quest'ordine

**Prima l'area riservata.** È la cosa che non può rompersi:

```bash
curl -I https://asteryslab.com/inner/     # atteso: 200
curl -I https://asteryslab.com/forms/     # atteso: 200
curl -I https://asteryslab.com/office/    # atteso: 200
curl -I https://asteryslab.com/2025/      # atteso: 200
```

E soprattutto: apri `/inner/` nel browser e **fai un login vero**. Controlla di vedere i
Lab. Nessun comando sostituisce questa verifica.

**Poi i rimandi:**

```bash
curl -I https://asteryslab.com/master-in-coaching          # 301 → /corsi/apcm
curl -I https://asteryslab.com/trovare-clienti-come-coach/ # 301 → /blog/…
curl -I https://asteryslab.com/tag/coaching               # 301 → /blog
```

**Infine il sito nuovo:**

```bash
curl -s https://asteryslab.com/ | grep -o "<title>[^<]*</title>"
curl -s https://asteryslab.com/corsi/apcm | grep -o "<title>[^<]*</title>"
curl -I https://asteryslab.com/sitemap.xml
```

## Passo 6 — Pulizia

Cancella la cartella `_prova/`: ha finito il suo lavoro.

## Se qualcosa non torna

Rimetti nel campo nginx il contenuto che avevi salvato al passo 4.1 (o il file
`deploy/nginx-esistenti-multisite.conf`), **Apply**, **Clear cache**.

Trenta secondi e sei tornato esattamente a prima. I file del sito nuovo restano sul
disco senza dare fastidio: nessuno li raggiunge.

> ⚠️ Non svuotare il campo: senza quelle regole il multisito non funziona. Il ripristino
> è *rimettere le vecchie regole*, non toglierle tutte.

---

# Dopo il lancio

## Google

- **Search Console**: la proprietà resta valida (stesso dominio). Invia la nuova
  `sitemap.xml` e rimuovi `wp-sitemap.xml`. Nelle settimane seguenti compariranno errori
  404: se fra questi c'è un indirizzo con traffico vero, si aggiunge un rimando in
  `scripts/redirects.mjs` e si rigenera.
- **Analytics**: il tag va reinserito, stava nella vetrina WordPress.
- **Ads**: aggiorna le destinazioni degli annunci agli indirizzi nuovi.
- **Profilo attività**: le due sedi possono puntare a `/scuola-di-coaching-milano` e
  `/scuola-di-coaching-roma`.

## Le modifiche di tutti i giorni

Per ora: `npm run build` e sincronizzi `dist/` con FileZilla. Si spostano ~7 MB su 53,
perché immagini e PDF non cambiano mai. Le regole nginx **non si toccano più**.

Quando il primo lancio sarà andato bene e vorrai togliere anche quel passaggio, in
`.github/workflows/deploy.yml` c'è la pubblicazione automatica già pronta e **spenta**:
si accende togliendo il commento a tre righe. Da quel momento pubblicare = fare push.
Istruzioni in `deploy/PUBBLICAZIONE-AUTOMATICA.md`.

Ha senso accenderla **dopo**, non insieme al lancio: a quel punto starà solo ripetendo
un'operazione che hai già fatto a mano e che sai funzionare.
