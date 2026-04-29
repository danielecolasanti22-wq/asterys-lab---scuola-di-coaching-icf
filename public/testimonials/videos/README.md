# Upload video testimonianze

Carica qui i file video delle testimonianze.

Per la testimonianza di Marco Guadagnuolo usa questo nome file:

- `marco-guadagnuolo.mp4`

Dopo il caricamento, imposta `src` in `src/constants/coursesContent.tsx` su:

- `/testimonials/videos/marco-guadagnuolo.mp4`

## Compatibilità browser
Se compare "formato video non supportato", il problema è quasi sempre il **codec** (non l'estensione `.mp4`).

Formato consigliato per web: **H.264 (video) + AAC (audio)**.

```bash
ffmpeg -i marco-guadagnuolo.mp4 \
  -c:v libx264 -profile:v high -level 4.1 -pix_fmt yuv420p \
  -movflags +faststart \
  -c:a aac -b:a 128k \
  marco-guadagnuolo.mp4
```

Fallback opzionale:

```bash
ffmpeg -i marco-guadagnuolo.mp4 -c:v libvpx-vp9 -c:a libopus marco-guadagnuolo.webm
```
