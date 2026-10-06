# Flavor Mixer

A cascading flavor-pairing explorer for cocktails. Pick a flavor, then a pairing, then optionally a third. The last column gives pairing notes, three cocktail ideas with a garnish each, and room for your own notes and drinks.

- 438 flavors in 21 families, from citrus and spice to cheese, ferments and desserts
- Three pairing strengths: **classic** (bright), **works well** (dim), **possible** (dimmer)
- Click the top of any column to search it, by flavor name, description or family ("citrus", "floral", "cheese")
- Save ideas with ○, write notes under any idea, add your own drinks
- `Esc` clears everything

## Files

| File | What's in it |
|---|---|
| `index.html` | Page layout |
| `style.css` | The look: colours, type, spacing |
| `js/flavors.js` | Every flavor by family, the hand-written pairings (`*` = classic), and the inferred "possible" pairings |
| `js/references.js` | Reference pairings that decide how strong a pairing is |
| `js/garnish.js` | The garnish library and the rule that picks one per idea |
| `js/app.js` | Columns, search, pairing notes, cocktail ideas, info box |
| `js/notes.js` | Saving, notes, your own ideas, and storage |
| `favicon.svg`, `preview.png` | Browser-tab icon and link-preview image |

No build step and no dependencies. The only external request is the IBM Plex Mono font from Google Fonts.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a repository (for example `flavor-mixer`) and upload all files, keeping the `js` folder.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute the app is live at `https://<your-username>.github.io/flavor-mixer/`.
4. For link previews on social media, change the `og:image` line in `index.html` to the full address, e.g. `https://<your-username>.github.io/flavor-mixer/preview.png`.

## Where saved drinks and notes go

Saved drinks and notes are stored in each visitor's own browser (`localStorage`). They're private to that browser, aren't shared between devices, and disappear if the browser's site data is cleared.

## Adding a flavor

In `js/flavors.js`:

1. Add a row to its family in `CATALOG`: `["Name", "tags", "short description"]`. Tags describe the taste and drive the pairing notes: `sweet sour bitter salty savory fresh herbal floral fruity tropical spice warm earthy smoke creamy nutty anise neutral`.
2. Add its pairings: `PAIRS["Name"] = "Lime*, Mint, Honey";`. A `*` marks a classic. Pairings work both ways, so you only need to write each pair once.
