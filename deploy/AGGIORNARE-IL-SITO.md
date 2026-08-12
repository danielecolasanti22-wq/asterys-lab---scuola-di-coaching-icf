# Aggiornare il sito

Come funziona pubblicare una modifica, una volta che il sito è online.

```
1. Tu:      "cambia questa data"
2. Claude:  modifica, compila, prepara il ramo di pubblicazione
3. Tu:      git push origin pubblicazione
4. Tu:      su Plesk → Git → Pull  (o automatico, vedi sotto)
5. ✅       sito aggiornato
```

Nessun FTP, nessuna cartella da trascinare. E il controllo resta sul tuo server: è Plesk
che va a prendersi l'aggiornamento, non un servizio esterno che scrive dentro casa tua.

---

## Perché esiste un ramo separato

Il ramo principale (`main`) contiene il **codice sorgente**: file `.tsx`, componenti,
contenuti. A un server web non servono — le pagine vere nascono dalla compilazione, e la
cartella `dist/` non sta nel repository.

Se Plesk tirasse giù `main`, si troverebbe file di codice e nessuna pagina.

Per questo c'è il ramo **`pubblicazione`**, che contiene il sito già compilato: le 74
pagine HTML, le immagini, il CSS, il JavaScript. È quello che Plesk deve leggere.

> L'alternativa sarebbe far compilare al server a ogni aggiornamento. Ma vorrebbe dire
> installare le dipendenze su Plesk ogni volta: più lento, e con più cose che possono
> rompersi proprio mentre stai pubblicando. Così il server riceve solo file pronti.

Il ramo si rigenera da solo a ogni pubblicazione, con `npm run pubblica`. Non va mai
modificato a mano.

---

## Configurazione su Plesk (una volta sola)

### 1. Aggiungi il repository

Plesk → **Domini** → asteryslab.com → **Git** → *Add Repository*

| Campo | Valore |
|---|---|
| Remote Git repository | `https://github.com/danielecolasanti22-wq/asterys-lab---scuola-di-coaching-icf.git` |
| Branch | **`pubblicazione`** ← non `main` |
| Deployment path | `/httpdocs` |
| Deployment mode | **Manual** (per ora) |

> Se il repository è privato, Plesk mostra una **chiave di deploy**: va copiata su GitHub
> in *Settings → Deploy keys → Add deploy key*, con accesso in sola lettura.

### 2. Verifica il primo aggiornamento

Premi **Pull Updates** e controlla che i file arrivino:

```bash
curl -s https://asteryslab.com/ | grep -o "<title>[^<]*</title>"
curl -I https://asteryslab.com/inner/     # deve continuare a dare 200
```

### 3. Quando sarai tranquillo: automatico

Nella stessa schermata puoi passare a **Automatic**: Plesk fornisce un indirizzo webhook
da incollare su GitHub (*Settings → Webhooks*). Da quel momento il push aggiorna il sito
da solo, senza passare dal pannello.

Conviene farlo **dopo** qualche aggiornamento manuale andato bene.

---

## ⛔ Cosa NON succede a WordPress

La domanda giusta, visto che i file convivono nella stessa cartella.

Plesk scrive nella cartella **solo i file che stanno nel ramo**, e lascia stare tutti gli
altri. `wp-admin`, `wp-content`, `wp-includes`, `wp-config.php`, `index.php` e le cartelle
dei sottositi non sono nel ramo `pubblicazione`, quindi **non vengono toccati**.

Verificato: il ramo contiene 766 file, tutti del sito nuovo, **zero file di WordPress e
zero file sorgente**.

---

## Il ciclo completo, in pratica

Quando mi chiedi una modifica, io eseguo:

```bash
npm run build      # rigenera le 74 pagine
npm run pubblica   # aggiorna il ramo di pubblicazione
```

E poi tocca a te:

```bash
git push origin main            # il sorgente, per storia e collaboratori
git push origin pubblicazione   # il sito compilato, quello che Plesk legge
```

Poi **Pull Updates** su Plesk (o niente, se hai attivato l'automatico).

> Con GitHub Desktop: dopo che ho preparato tutto, ti troverai due rami da inviare.
> Puoi inviarli entrambi, oppure solo `pubblicazione` se vuoi pubblicare senza
> sincronizzare il sorgente — ma conviene tenerli allineati.

## Se un aggiornamento va storto

Il sito precedente è un commit indietro:

```bash
git revert HEAD           # sul ramo principale
npm run build && npm run pubblica
git push origin pubblicazione
```

Poi Pull su Plesk. Due minuti e sei tornato alla versione di prima.

E in ogni caso resta la rete di sicurezza definitiva: le regole nginx. Rimettendo quelle
vecchie, il sito torna a essere il WordPress di prima, qualunque cosa ci sia nei file.
