# mtownhvac-images

Public image host for [mtownhvac.com](https://mtownhvac.com). Photos are served
by jsDelivr, so the file path is the URL:

```
https://cdn.jsdelivr.net/gh/mtownhvac-gif/mtownhvac-assets@main/images/<category>/<file>.jpg
```

## What belongs here

Web-optimized photos and nothing else. No documents, no pricing, no source
code, no full-size originals. This repository is public; assume anything added
to it is permanently public.

These files are generated from the private site repository by
`tools/prep_images.py` and copied here by `tools/export_public_images.py`.
Edit them there, not here.

## Two rules

**Filenames are immutable.** jsDelivr caches aggressively. A changed photo
needs a new filename, not a new file at the same path.

**Nothing with a fact printed into it.** Review counts, prices, and offers
baked into an image go stale silently, because the page copy can be corrected
in seconds and the image cannot.

See `INDEX.md` for every photo, its URL, and its alt text.
