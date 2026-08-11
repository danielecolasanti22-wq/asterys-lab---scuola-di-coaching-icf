# Pubblicazione automatica

Come arrivare a: **dici la modifica → la vedi online**, senza aprire nessun programma.

---

## Il flusso, una volta configurato

```
1. Tu:  "cambia questa data"
2. Io:  modifico e committo
3. Tu:  push          ← l'unica cosa che fai, come già oggi
4. ⚙️   compila e carica da solo
5. ✅   online in ~2 minuti
```

Nessun FTP da aprire, nessuna cartella da trascinare, nessun comando da ricordare.

## Cosa succede a ogni push

Il caricamento avviene solo se tutti i controlli passano:

| | Se fallisce |
|---|---|
| Controllo dei tipi | si ferma, non pubblica |
| Compilazione | si ferma, non pubblica |
| Almeno 50 pagine generate | si ferma, non pubblica |
| La home contiene il contenuto atteso | si ferma, non pubblica |

Solo dopo carica, e **solo i file cambiati** (~7 MB su 53: immagini e PDF non cambiano
mai). Se qualcosa non va, il sito online resta quello di prima: non viene pubblicato
niente a metà.

## ⛔ Perché non può cancellare WordPress

È la domanda giusta da farsi, visto che i file convivono nella stessa cartella.

Due protezioni indipendenti:

1. **Tiene il conto di ciò che ha caricato lui** (in `.ftp-deploy-sync-state.json`) e
   agisce solo su quello. I file di WordPress non li ha messi lui, quindi non li vede.
2. **Un elenco esplicito di esclusioni**: `wp-admin`, `wp-includes`, `wp-content`,
   `wp-config.php`, `index.php`, `inner/`, `forms/`, `office/`, `2025/`.

E l'opzione che svuoterebbe la cartella (`dangerous-clean-slate`) **non è attivata** —
va lasciata così.

---

## Configurazione, una volta sola (10 minuti)

Serve dire a GitHub come entrare nel server. Sono quattro dati, e **li inserisci tu**:
finiscono nei "Secrets", che sono cifrati e non visibili a nessuno, nemmeno nei log.

### 1. Crea un accesso FTP dedicato su Plesk

Meglio non usare l'accesso principale: se un domani va revocato, si revoca solo questo.

Plesk → **Domini** → asteryslab.com → **Accesso FTP** → *Aggiungi account FTP*

- Nome: `github-deploy` (o come preferisci)
- Password: generane una lunga e casuale
- **Home directory**: `/httpdocs` ← importante, deve puntare lì

### 2. Metti i dati su GitHub

Sul repository → **Settings** → **Secrets and variables** → **Actions** →
*New repository secret*. Quattro voci:

| Nome | Valore |
|---|---|
| `FTP_SERVER` | `server1.asteryslab.com` |
| `FTP_USERNAME` | l'utente creato al punto 1 |
| `FTP_PASSWORD` | la sua password |
| `FTP_SERVER_DIR` | `/` (se la home dell'utente è già `httpdocs`) |

> Se al punto 1 non hai potuto impostare la home a `httpdocs`, allora `FTP_SERVER_DIR`
> va messo a `/httpdocs/`. In caso di dubbio si vede al primo tentativo: il registro
> dice esattamente in che cartella ha scritto.

### 3. Prova

Vai sulla scheda **Actions** del repository e lancia *Pubblica su asteryslab.com* con
**Run workflow**. Guarda il registro: ti dice quante pagine ha generato e quali file ha
caricato.

---

## Le prime volte, controlla

Alla prima pubblicazione conviene verificare, in quest'ordine:

```bash
curl -I https://asteryslab.com/inner/            # area riservata: deve dare 200
curl -s https://asteryslab.com/ | grep -o "<title>[^<]*</title>"
```

E apri `/inner/` nel browser facendo un **login vero**. Se quello funziona, il resto sono
dettagli.

## Se qualcosa va storto

**Il caricamento fallisce.** Il sito online non è stato toccato: leggi il registro su
Actions, correggiamo, ripubblichi.

**È stato caricato qualcosa di sbagliato.** Si annulla il commit, si fa push, e in due
minuti il sito torna alla versione precedente. È il vantaggio di avere tutto in git:
ogni versione pubblicata corrisponde a un commit.

**L'area riservata non risponde.** Non può dipendere da questo caricamento (non tocca
quei file), ma nel dubbio: le regole nginx si ripristinano rimettendo
`deploy/nginx-esistenti-multisite.conf`.

---

## Cosa può andare storto, e cosa succede

Analisi fatta prima di configurare, non dopo. Ogni riga è un problema reale di questo
server, non un elenco teorico.

| Rischio | Come è gestito |
|---|---|
| **La home mostra ancora WordPress** — nella cartella convivono `index.html` e `index.php`, e a decidere sarebbe l'ordine con cui Apache cerca i file indice | Regola nginx esplicita: `rewrite ^/$ /index.html break`. Non dipendiamo da quell'ordine |
| **Pagine che rimandano a file non ancora caricati** — un HTML nuovo che cerca un javascript non ancora arrivato | Caricamento in due passaggi: prima le risorse, poi le pagine. In ogni istante il sito è coerente |
| **Il file di servizio del deploy pubblico** — elenca tutti i file del sito | Bloccato in nginx insieme a ogni altro file nascosto (con eccezione per `.well-known`, che serve al certificato) |
| **Due pubblicazioni in contemporanea** | `concurrency`: se arrivano più push ravvicinati, pubblica solo l'ultimo |
| **Pubblicato qualcosa di rotto** | Quattro controlli prima di caricare. Se uno fallisce, non parte nulla |
| **L'area riservata smette di rispondere** | Controllata **dopo ogni pubblicazione**: se `/inner` non risponde, la pubblicazione risulta fallita e lo vedi subito |
| **Caricamento interrotto a metà** | Al push successivo riprende: tiene il conto di cosa ha già caricato |
| **Cache di nginx** | Timeout 5 secondi: si riallinea da sé. Per forzare: *Clear cache* nel pannello |

### Il rischio che resta, ed è tuo

**Ogni push va online.** Non c'è un passaggio di approvazione: se qualcuno pubblica una
modifica non pronta, quella modifica è sul sito in due minuti.

Con più persone che lavorano al sito conviene decidere come gestirlo. Tre modi, dal più
semplice:

1. **Accordo fra persone** — si pubblica solo quando è pronto. Funziona se siete in
   pochi e vi parlate.
2. **Ramo di lavorazione** — si lavora su un ramo separato e si porta su `main` solo il
   finito. Il sito riflette sempre e solo `main`.
3. **Approvazione obbligatoria** — su GitHub si può richiedere che ogni modifica a `main`
   passi da una revisione. Più rigido, ma nessuno pubblica per sbaglio.

Se i tuoi colleghi lavoreranno sul sito, il **2** è il compromesso giusto: nessuno resta
bloccato, ma niente arriva online senza passare da te.

### Se il sito online non va, e serve tornare indietro

```bash
git revert HEAD    # annulla l'ultima modifica
# poi push → il sito torna alla versione precedente in ~2 minuti
```

Ogni versione pubblicata corrisponde a un commit: si torna indietro di uno, o di dieci.

---

## Perché questa strada e non altre

**Perché non caricare i file a mano.** Con modifiche giornaliere diventa il collo di
bottiglia, ed è il punto in cui prima o poi si sbaglia cartella.

**Perché non far compilare al server.** Plesk ha Git e Node, e potrebbe compilare da
solo. Ma vorrebbe dire installare le dipendenze sul server a ogni pubblicazione: più
lento, e con più cose che possono rompersi proprio mentre stai pubblicando. Qui la
compilazione avviene in un ambiente pulito e il server riceve solo file già pronti.

**Perché non Vercel.** Servirebbe far passare da lì anche `/inner`, e con esso login,
carrello e pagamenti. Più il fatto che il sito fa 99 GB di traffico al mese, che su
Vercel diventa un piano a pagamento per servire ciò che il tuo server già serve.
