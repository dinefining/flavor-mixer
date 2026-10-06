// Flavor Mixer — columns, search, pairing notes, cocktail ideas, info box.

// ---------- build index ----------
const CATS = Object.keys(CATALOG).filter(c => !BAR_CATS.includes(c));   // columns show flavors only
const F = {};
Object.keys(CATALOG).forEach(cat => CATALOG[cat].forEach(([name, tags, desc]) => {
  F[name] = { name, cat, tags: tags.split(" "), desc: desc || null };
}));
const ALL = Object.keys(F);
const FLAVORS = ALL.filter(n => !BAR_CATS.includes(F[n].cat));
const EDGE = {};                       // EDGE[a][b] = 1 (works) | 2 (classic)
ALL.forEach(n => EDGE[n] = {});
Object.entries(PAIRS).forEach(([a, list]) => list.split(",").forEach(raw => {
  const t = raw.trim(); if (!t) return;
  const strong = t.endsWith("*"), b = t.replace("*", "");
  if (!F[b] || a === b) return;
  const v = strong ? 2 : 1;
  EDGE[a][b] = Math.max(EDGE[a][b] || 0, v);
  EDGE[b][a] = Math.max(EDGE[b][a] || 0, v);
}));
// the reference books decide first.
// classic = printed in capitals, or listed in both references; works well = listed once.
const BOOKED = new Set();                       // flavors the references cover
const bookLevel = {};
Object.entries(REFS).forEach(([k, s]) => {
  const [x, y] = k.split("~");
  if (!F[x] || !F[y]) return;
  BOOKED.add(x); BOOKED.add(y);
  bookLevel[k] = (s.includes("B2") || (s.includes("B") && s.includes("T"))) ? 2 : 1;
});
const pairKey = (a, b) => [a, b].sort().join("~");
// hand-written pairings: kept as written where the references are silent on a flavor;
// where the references cover both flavors but don't pair them, they drop to "possible"
const POSSIBLE = 0.5;
Object.keys(EDGE).forEach(x => Object.keys(EDGE[x]).forEach(y => {
  if (bookLevel[pairKey(x, y)]) return;
  if (BOOKED.has(x) && BOOKED.has(y) && !BAR_CATS.includes(F[x].cat) && !BAR_CATS.includes(F[y].cat)) EDGE[x][y] = POSSIBLE;
}));
Object.entries(bookLevel).forEach(([k, v]) => {
  const [x, y] = k.split("~");
  EDGE[x][y] = v; EDGE[y][x] = v;
});
// inferred from the references' network, only where nothing else links the pair
Object.entries(INFERRED).forEach(([x, ys]) => ys.forEach(y => {
  if (!F[x] || !F[y] || EDGE[x][y]) return;
  EDGE[x][y] = POSSIBLE; EDGE[y][x] = POSSIBLE;
}));
const edge = (a, b) => (EDGE[a] && EDGE[a][b]) || 0;

const isCat = (n, c) => F[n].cat === c;
const isSpirit = n => isCat(n, "SPIRITS");

// ---------- tag affinity (used for notes and tie-breaks only) ----------
const A = {};
function aff(a, b, v) { A[a + "|" + b] = v; A[b + "|" + a] = v; }
const SAME = { sour: .3, bitter: .2, salty: -1, creamy: .5, sweet: .4, neutral: .3 };
[["sweet","sour",1.2],["sweet","salty",.8],["sweet","bitter",.9],["sweet","spice",.8],["sweet","earthy",.6],["sweet","floral",.6],["sweet","smoke",.8],["sweet","creamy",.7],["sweet","tropical",.6],["sweet","fruity",.5],["sweet","warm",.6],["sweet","herbal",.4],["sweet","anise",.6],["sweet","nutty",.8],
 ["sour","fruity",.9],["sour","tropical",1],["sour","herbal",.8],["sour","fresh",.8],["sour","salty",1],["sour","floral",.6],["sour","creamy",-.8],["sour","smoke",.6],["sour","spice",.5],
 ["floral","fruity",.8],["floral","herbal",.5],["floral","bitter",.6],["floral","fresh",.6],["floral","salty",-.6],["floral","savory",-.7],["floral","creamy",.5],["floral","spice",.6],["floral","tropical",.6],["floral","nutty",.6],
 ["herbal","fresh",1],["herbal","salty",.5],["herbal","savory",.6],["herbal","bitter",.5],["herbal","spice",.5],["herbal","anise",.7],["herbal","earthy",.5],
 ["spice","warm",1],["spice","creamy",.9],["spice","bitter",.6],["spice","earthy",.7],["spice","smoke",.7],["spice","savory",.5],
 ["warm","creamy",.8],["warm","earthy",.8],["warm","bitter",.6],["warm","smoke",.8],["warm","nutty",.8],
 ["creamy","tropical",.7],["creamy","nutty",.8],["creamy","bitter",.4],["fruity","tropical",.8],["fruity","nutty",.6],["fruity","smoke",.4],
 ["salty","savory",.7],["salty","smoke",.6],["salty","nutty",.6],["smoke","earthy",.9],["smoke","bitter",.5],["bitter","nutty",.6],["bitter","fresh",.5],
 ["anise","fresh",.7],["tropical","fresh",.7],["savory","earthy",.6],["nutty","earthy",.6]
].forEach(([a, b, v]) => aff(a, b, v));
const tagAff = (a, b) => a === b ? (SAME[a] ?? 1) : (a === "neutral" || b === "neutral") ? .4 : (A[a + "|" + b] ?? .1);
function tagScore(x, y) {
  let s = 0; F[x].tags.forEach(a => F[y].tags.forEach(b => s += tagAff(a, b)));
  return s / Math.sqrt(F[x].tags.length * F[y].tags.length);
}

// ---------- column lists ----------
const sel = [null, null, null];
function listFor(level) {
  if (level === 0) return FLAVORS.map(n => ({ n, s: 0 }));
  if (level === 1) return FLAVORS.filter(n => edge(sel[0], n)).map(n => ({ n, s: edge(sel[0], n) }));
  // third column: flavors that pair with both picks; classic = classic with the second pick
  return FLAVORS.filter(n => n !== sel[0] && edge(sel[1], n) && edge(sel[0], n))
    .map(n => ({ n, s: edge(sel[1], n) }));
}

// ---------- notes ----------
const REL = {
  "sour|sweet": "the sweet/sour axis every sour is built on",
  "salty|sweet": "salt lifts the sweetness and rounds it out",
  "bitter|sweet": "bitterness gives the sweetness an edge and a finish",
  "smoke|sweet": "sweetness tames the smoke, and smoke keeps the sugar from going flat",
  "creamy|spice": "fat carries the spice and softens its heat",
  "spice|warm": "warm spice that reads like a winter drink",
  "floral|fruity": "perfume and fruit, a natural pairing; keep the acid bright",
  "fresh|herbal": "green and cooling, made for a long highball",
  "herbal|sour": "herbs and acid, the logic of a gimlet or a smash",
  "salty|sour": "chaat logic, sour and salty in the same sip",
  "fruity|sour": "fruit with acid, bright and immediate",
  "sour|tropical": "tropical fruit needs acid or it tastes like juice",
  "earthy|smoke": "earth and smoke, deep and low",
  "earthy|sweet": "earthy sweetness, like jaggery on toasted grain",
  "creamy|sweet": "dessert territory, rich and round; keep the dose small",
  "floral|sour": "acid keeps the perfume from turning soapy",
  "creamy|tropical": "lush and tropical, close to a lassi or a colada",
  "anise|herbal": "anise and green herbs, cooling and long",
  "anise|fresh": "anise opens up with dilution, so go long",
  "creamy|warm": "warm and buttery, a slow sipper",
  "fresh|tropical": "light and tropical, built for heat",
  "salty|savory": "savoury and salted, like a masala soda",
  "floral|spice": "spice gives the perfume a spine",
  "earthy|warm": "low, toasty and warm",
  "bitter|floral": "a bitter frame keeps the florals in check",
  "spice|sweet": "sweet against spice, the heat softened by sugar",
  "smoke|sour": "acid cuts through the smoke and keeps it lively",
  "fruity|tropical": "ripe fruit on fruit; acid will sharpen it",
  "bitter|spice": "bitter and spiced, aperitivo with a backbone",
  "earthy|spice": "earthy spice, grounded and savoury",
  "salty|smoke": "salt and smoke, mezcal's natural company",
  "herbal|savory": "green and savoury, a tadka in a glass",
  "floral|herbal": "garden notes, delicate; don't over-dilute",
  "bitter|fresh": "bitter and bright, a clean aperitif",
  "nutty|sweet": "nutty sweetness, the orgeat and praline register",
  "creamy|nutty": "nut and cream, rich and soft",
  "bitter|nutty": "bitter nut, amaro and walnut territory",
  "fruity|nutty": "stone fruit and nut, the almond-apricot logic",
  "nutty|warm": "toasty and warm, made for brown spirits",
  "nutty|salty": "salted nut, it makes the next sip necessary",
  "bitter|warm": "roasted bitterness and warmth, a stirred-drink pair",
  "bitter|fruity": "bitter against fruit, the Negroni and Jungle Bird logic",
  "herbal|spice": "herb and spice, liqueur-like complexity",
  "fresh|sour": "bright and clean, all lift",
  "bitter|sour": "sharp and bitter, needs sugar to hold together",
  "earthy|herbal": "woodsy and green",
  "floral|sweet": "soft and perfumed, easy to overdo",
  "fresh|fruity": "fresh fruit, best long and cold",
};
const WORD = { floral: "perfume", sweet: "sweetness", sour: "acid", herbal: "green notes", fresh: "freshness", salty: "salt", savory: "savoury depth", creamy: "body", spice: "spice", warm: "warmth", earthy: "earthiness", smoke: "smoke", bitter: "bitterness", fruity: "fruit", tropical: "tropical fruit", anise: "anise", nutty: "nuttiness", neutral: "a clean base" };
const label = n => F[n].desc ? `${n} (${F[n].desc})` : n;
function relation(x, y) {
  let best = null, bv = -99;
  F[x].tags.forEach(a => F[y].tags.forEach(b => {
    const k = [a, b].sort().join("|");
    const v = tagAff(a, b) + (REL[k] ? .3 : 0) + (k.includes("smoke") ? .4 : 0) + (a === b ? -.2 : 0);
    if (v > bv) { bv = v; best = [a, b]; }
  }));
  const k = best.slice().sort().join("|");
  let why = REL[k] || (best[0] === best[1]
    ? `both lean on ${WORD[best[0]]}, so they reinforce each other`
    : `${WORD[best[0]]} against ${WORD[best[1]]}, a contrast that holds`);
  const e = edge(x, y);
  const lead = e >= 2 ? "A classic pairing. " : e >= 1 ? "" : e > 0 ? "A possible pairing. " : "Indirect link. ";
  why = why[0].toUpperCase() + why.slice(1);
  return `${label(x)} + ${label(y)}. ${lead}${why}.`;
}

const DAIRY = ["Milk", "Cream", "Yogurt", "Whole Egg", "Kefir", "Crème Fraîche", "Condensed Milk", "Mascarpone", "Rabri"];
const FATWASH = ["Ghee", "Brown Butter", "Butter", "Bacon", "Prosciutto", "Olive Oil", "Coconut Oil", "Sesame Oil", "Goat Cheese", "Parmesan", "Blue Cheese", "Feta", "Ricotta", "Brie", "Cheddar", "Paneer", "Popcorn"];
const ACIDS = ["Lime", "Lemon", "Grapefruit", "Yuzu", "Kokum", "Imli", "Amla", "Jamun", "Passion Fruit", "Pineapple", "Aam Panna", "Tonic", "Hibiscus", "Rhubarb", "Pomegranate", "Raspberry"];
const LOUD = { "Kewra": "drops", "Ajwain": "a pinch or a short infusion", "Kala Namak": "a pinch", "Absinthe": "a rinse", "Fernet": "a bar spoon or a rinse", "Lapsang Souchong": "a short infusion", "Clove": "one or two buds", "Lavender": "a light infusion", "Orange Blossom": "drops", "Rose": "drops of rose water", "Islay Scotch": "a float or a rinse", "Star Anise": "a single pod", "Paan": "a short infusion", "Green Chartreuse": "a quarter ounce" };
const SWEETS = ["Caramel", "Simple Syrup", "Demerara", "Honey", "Maple", "Agave Syrup", "Gud", "Gulkand", "Orange Liqueur", "Elderflower Liqueur", "Crème de Cassis", "Crème de Cacao", "Maraschino", "Falernum", "Bénédictine", "Yellow Chartreuse", "Aamras"];
function tension(s) {
  const d = s.filter(n => DAIRY.includes(n)), a = s.filter(n => ACIDS.includes(n));
  if (d.length && a.length) return `${d[0]} with ${a[0]} will curdle. Lean into it as a clarified milk punch, or keep the acid out.`;
  const fat = s.find(n => FATWASH.includes(n));
  if (fat) return F[fat].cat === "CHEESE"
    ? `${fat} goes in as a fat-wash (melt or blend into the spirit, freeze, strain) or whipped into a savoury foam.`
    : `${fat} goes in as a fat-wash, not a pour: infuse the spirit, freeze, strain off the fat.`;
  const grain = s.find(n => F[n].cat === "GRAINS & PULSES");
  if (grain) return `Toast the ${grain.toLowerCase()} first, then infuse it into the spirit or cook it into an orgeat-style syrup.`;
  const salty = s.filter(n => F[n].tags.includes("salty") && !isSpirit(n) && n !== "Fino Sherry");
  if (salty.length >= 2) return `${salty[0]} and ${salty[1]} both bring salt. Pick one; a pinch is enough.`;
  const fl = s.filter(n => F[n].tags.includes("floral") && !isSpirit(n)), sv = s.filter(n => F[n].tags.includes("savory"));
  if (fl.length && sv.length) return `${fl[0]}'s perfume fights ${sv[0]}'s savoury edge. Keep ${sv[0]} to a rim or a pinch.`;
  const loud = s.filter(n => LOUD[n]);
  if (loud.length >= 2) return `${loud[0]} and ${loud[1]} are both dominant. Let one lead; dose the other as ${LOUD[loud[1]]}.`;
  if (loud.length) return `${loud[0]} is loud. Use ${LOUD[loud[0]]} or it flattens everything else.`;
  const sw = s.filter(n => SWEETS.includes(n));
  const hasCut = s.some(n => F[n].tags.includes("sour") || F[n].tags.includes("bitter"));
  if (sw.length >= 2 && !hasCut) return `${sw[0]} and ${sw[1]} are both sweeteners. It needs acid or bitters to stay drinkable.`;
  const missing = s.length >= 2 && !edge(s[0], s[s.length - 1]) && s.length === 3 ? `${s[0]} and ${s[2]} have no direct link; ${s[1]} is the bridge, so give it real weight.` : null;
  return missing;
}

// ---------- spirits ----------
const SPIRITS = CATALOG["SPIRITS"].map(r => r[0]);
const SWORD = {
  "Gin": { herbal: "botanicals", floral: "juniper", fresh: "crispness", sour: "crispness", default: "botanicals" },
  "Vodka": { default: "transparency" },
  "White Rum": { tropical: "brightness", sour: "brightness", fresh: "lightness", sweet: "cane", default: "cane" },
  "Aged Rum": { sweet: "molasses", tropical: "molasses", creamy: "body", warm: "oak", spice: "spice", nutty: "toffee", default: "molasses" },
  "Rhum Agricole": { herbal: "grassiness", fresh: "grassiness", tropical: "funk", default: "grassiness" },
  "Cachaça": { fruity: "funk", tropical: "funk", fresh: "funk", default: "funk" },
  "Tequila Blanco": { sour: "brightness", fresh: "vegetal", salty: "salinity", fruity: "agave", tropical: "agave", spice: "pepper", herbal: "vegetal", default: "agave" },
  "Tequila Reposado": { warm: "oak", spice: "pepper", sweet: "vanilla", bitter: "oak", default: "agave" },
  "Mezcal": { smoke: "smoke", earthy: "earth", salty: "minerality", sweet: "contrast", tropical: "smoke", fruity: "smoke", default: "smoke" },
  "Bourbon": { warm: "oak", spice: "spice", sweet: "caramel", creamy: "vanilla", nutty: "toast", bitter: "oak", default: "caramel" },
  "Rye": { spice: "pepper", bitter: "dryness", warm: "spice", herbal: "spice", default: "spice" },
  "Scotch": { sweet: "malt", warm: "malt", nutty: "malt", floral: "honey", default: "malt" },
  "Islay Scotch": { smoke: "peat", salty: "brine", sweet: "contrast", default: "peat" },
  "Cognac": { fruity: "fruit", warm: "richness", sweet: "richness", creamy: "richness", floral: "grape", default: "richness" },
  "Apple Brandy": { fruity: "orchard", warm: "orchard", spice: "orchard", default: "orchard" },
  "Pisco": { floral: "aromatics", fruity: "aromatics", sour: "brightness", default: "aromatics" },
  "Arak": { anise: "anise", herbal: "anise", fresh: "coolness", floral: "perfume", creamy: "louche", default: "anise" },
};
function spiritFit(sp, set) {
  const base = set.filter(n => !isSpirit(n));
  if (!base.length) return 0;
  return base.reduce((a, n) => a + edge(sp, n) * 1.6 + tagScore(sp, n) * .3, 0) / base.length;
}
function rankSpirits(set) {
  const base = set.filter(n => !isSpirit(n));
  return SPIRITS.map(sp => {
    const tagCount = {};
    base.forEach(n => F[n].tags.forEach(t => F[sp].tags.forEach(st => tagCount[t] = (tagCount[t] || 0) + tagAff(t, st))));
    const order = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).map(e => e[0]);
    const w = SWORD[sp], hit = order.find(t => w[t]);
    return { s: sp, v: spiritFit(sp, set), word: hit ? w[hit] : w.default };
  }).sort((a, b) => b.v - a.v);
}

// ---------- cocktail sketches, built on classic templates ----------
function fit(c, set) {
  if (set.includes(c)) return -99;
  let v = 0;
  for (const s of set) {
    if (s === c) return -99;
    const e = edge(s, c);
    if (DAIRY.includes(c) && ACIDS.includes(s) || DAIRY.includes(s) && ACIDS.includes(c)) return -99;
    v += e ? e * 1.5 : tagScore(s, c) * .4 - .4;
  }
  return v / set.length;
}
const best = (pool, set) => pool.map(c => [c, fit(c, set)]).filter(x => x[1] > -50).sort((a, b) => b[1] - a[1]).map(x => x[0]);
const POOL = {
  citrus: ["Lime", "Lemon", "Grapefruit", "Yuzu"],
  sweet: ["Simple Syrup", "Demerara", "Agave Syrup", "Honey", "Maple", "Gud", "Falernum", "Orange Liqueur", "Maraschino"],
  fortified: CATALOG["FORTIFIED, AMARI & LIQUEURS"].map(r => r[0]),
  bitters: CATALOG["BITTERS"].map(r => r[0]),
  long: CATALOG["LENGTHENERS"].map(r => r[0]),
  texture: ["Egg White", "Cream", "Whole Egg"],
};
const has = (set, cat) => set.some(n => F[n].cat === cat);
const hasAny = (set, list) => set.some(n => list.includes(n));
const STIRRED = ["Bourbon", "Rye", "Aged Rum", "Cognac", "Scotch", "Islay Scotch", "Mezcal", "Tequila Reposado", "Apple Brandy", "Gin"];
// chain order: spirit, modifier, the flavors, then the bar pieces that finish the drink
const rankOf = n => { const c = F[n].cat; return c === "SPIRITS" ? 0 : c === "FORTIFIED, AMARI & LIQUEURS" ? 1 : !BAR_CATS.includes(c) ? 2 : c === "BAR STAPLES" ? 3 : c === "LENGTHENERS" ? 4 : 5; };
const orderChain = list => list.slice().sort((a, b) => rankOf(a) - rankOf(b));

function sketches(sel) {
  const chosen = sel.find(isSpirit);
  const flav = sel.filter(n => !isSpirit(n));
  const ranked = rankSpirits(sel).map(r => r.s);
  const pickSpirit = (pref, avoid) => chosen || ranked.find(s => (!pref || pref.includes(s)) && !avoid.includes(s)) || ranked[0];
  const usedSp = [], out = [], seen = new Set();
  const dairy = hasAny(flav, DAIRY) || flav.some(n => F[n].tags.includes("creamy") && !FATWASH.includes(n) && !["Coconut", "Coconut Oil", "Avocado", "Pandan"].includes(n) && F[n].cat !== "GRAINS & PULSES" && F[n].cat !== "NUTTY & TOASTED");
  const sweetIn = flav.some(n => SWEETS.includes(n) || F[n].cat === "SWEET & CARAMEL");
  const acidIn = hasAny(flav, ACIDS);

  const recipes = [
    // 1. sour (or flip when dairy is in play)
    () => {
      const sp = pickSpirit(null, usedSp); usedSp.push(sp);
      const set = [sp, ...flav];
      const add = [];
      if (dairy) {
        if (!sweetIn) add.push(best(POOL.sweet, set)[0]);
        if (!hasAny(flav, POOL.texture)) add.push(best(POOL.texture, [...set, ...add])[0]);
      } else {
        if (!acidIn) add.push(best(POOL.citrus, set)[0]);
        if (!sweetIn) add.push(best(POOL.sweet, [...set, ...add])[0]);
      }
      return [sp, ...flav, ...add];
    },
    // 2. stirred, spirit-forward
    () => {
      const sp = pickSpirit(STIRRED, usedSp); usedSp.push(sp);
      const set = [sp, ...flav];
      const add = [];
      if (!has(flav, "FORTIFIED, AMARI & LIQUEURS")) add.push(best(POOL.fortified, set)[0]);
      if (!has(flav, "BITTERS")) add.push(best(POOL.bitters, [...set, ...add])[0]);
      return [sp, ...flav, ...add];
    },
    // 3. long / highball, or a spiced milk drink when dairy is in play
    () => {
      if (dairy) {
        const sp = pickSpirit(null, usedSp); usedSp.push(sp);
        const set = [sp, ...flav];
        return [sp, ...flav, best(["Nutmeg", "Cinnamon", "Cardamom", "Vanilla", "Clove", "Star Anise"], set)[0]];
      }
      const ln = has(flav, "LENGTHENERS") ? null : best(POOL.long, flav)[0];
      const set0 = ln ? [...flav, ln] : flav;
      const sp = chosen || SPIRITS.filter(s => !usedSp.includes(s)).map(s => [s, fit(s, set0)]).sort((a, b) => b[1] - a[1])[0][0];
      usedSp.push(sp);
      const add = ln ? [ln] : [];
      if (!acidIn) add.push(best(POOL.citrus, [sp, ...set0])[0]);
      return [sp, ...flav, ...add];
    },
  ];
  const kinds = [dairy ? "flip" : "sour", "stirred", dairy ? "flip" : "long"];
  const usedG = new Set();
  recipes.forEach((r, i) => {
    const chain = orderChain([...new Set(r().filter(Boolean))]).slice(0, 6);
    const k = chain.join("|");
    if (seen.has(k)) return;
    seen.add(k);
    out.push({ chain: chain.join(" · "), items: chain, kind: kinds[i], garnish: garnishFor(chain, kinds[i], flav, usedG) });
  });
  return out;
}

// ---------- render ----------
const cols = [document.getElementById("c1"), document.getElementById("c2"), document.getElementById("c3")];
const panel = document.getElementById("panel");
const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

// search state per column: the open column and each column's query
const SEARCH = { open: null, q: ["", "", ""] };
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function renderCol(level) {
  const el = cols[level];
  const active = level === 0 || sel[level - 1] !== null;
  el.dataset.active = String(active);
  el.innerHTML = "";
  if (!active) return;
  el.appendChild(pinRow(level));
  const list = document.createElement("div");
  list.className = "list";
  el.appendChild(list);
  renderList(level);
}

function renderList(level) {
  const list = cols[level].querySelector(".list");
  if (!list) return;
  list.innerHTML = "";
  const frag = document.createDocumentFragment();
  const q = norm(SEARCH.q[level].trim());
  let items = listFor(level);
  // a query matches a flavor's name, its description, or its family ("citrus", "floral", "spice", "cheese")
  if (q) items = items.filter(it => norm(it.n).includes(q) || (F[it.n].desc && norm(F[it.n].desc).includes(q)) || norm(F[it.n].cat).includes(q));
  if (!items.length) {
    const e = document.createElement("div");
    e.className = "empty"; e.textContent = q ? "no match" : "no shared pairings";
    list.appendChild(e); return;
  }
  CATS.forEach(cat => {
    const inCat = items.filter(it => F[it.n].cat === cat);
    if (!inCat.length) return;
    // classics first within a category
    if (level > 0) inCat.sort((a, b) => b.s - a.s);
    const h = document.createElement("div");
    h.className = "cat"; h.textContent = cat;
    frag.appendChild(h);
    inCat.forEach(({ n, s }) => {
      const b = document.createElement("button");
      b.className = "item" + (level > 0 ? (s >= 2 ? " classic" : s >= 1 ? " good" : " maybe") : "");
      b.type = "button";
      b.dataset.name = n;
      b.setAttribute("aria-pressed", String(sel[level] === n));
      const sp = document.createElement("span"); sp.textContent = n; b.appendChild(sp);
      if (typeof flavorDot === "function" && flavorDot(level, n)) {
        const dt = document.createElement("i"); dt.className = "dot"; dt.setAttribute("aria-label", "saved"); b.appendChild(dt);
      }
      b.addEventListener("mousedown", e => e.preventDefault());   // keep the search box focused
      b.addEventListener("click", () => pick(level, n));
      frag.appendChild(b);
    });
  });
  list.appendChild(frag);
}

function openSearch(level) {
  SEARCH.open = level; SEARCH.q[level] = "";
  renderCol(level);
  const inp = cols[level].querySelector(".pin-search");
  if (inp) inp.focus();
}
function closeSearch(level) {
  if (SEARCH.open !== level) return;
  SEARCH.open = null; SEARCH.q[level] = "";
  renderCol(level);
}

// sticky row at the top of each column: the current pick, or a prompt
const PROMPT = ["pick a flavor", "pick a pairing", "pick a third"];
function pinRow(level) {
  const row = document.createElement("div");
  row.className = "pin";
  const n = sel[level];
  if (SEARCH.open === level) {
    row.classList.add("searching");
    const inp = document.createElement("input");
    inp.type = "text"; inp.className = "pin-search"; inp.id = "search-" + level;
    inp.placeholder = n ? "search · " + n : "search " + ["flavors", "pairings", "thirds"][level];
    inp.setAttribute("aria-label", "Search this column");
    inp.autocomplete = "off"; inp.spellcheck = false;
    inp.value = SEARCH.q[level];
    inp.addEventListener("input", () => { SEARCH.q[level] = inp.value; renderList(level); cols[level].querySelector(".list").scrollTop = 0; cols[level].scrollTop = 0; });
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        // best match: name starts with the query, then name contains it, then description
        const q = norm(inp.value.trim());
        const shown = [...cols[level].querySelectorAll(".list button.item")].map(b => b.dataset.name);
        const rank = n => norm(n).startsWith(q) ? 0 : norm(n).split(/[\s-]/).some(w => w.startsWith(q)) ? 1 : norm(n).includes(q) ? 2 : 3;
        const best = shown.map((n, i) => [n, rank(n), i]).sort((a, b) => a[1] - b[1] || (a[1] < 3 ? a[0].length - b[0].length : a[2] - b[2]))[0]?.[0];
        if (best) { SEARCH.open = null; SEARCH.q[level] = ""; pick(level, best); }
      } else if (e.key === "Escape") { e.stopPropagation(); closeSearch(level); }
    });
    inp.addEventListener("blur", () => setTimeout(() => {
      if (SEARCH.open === level && document.activeElement !== inp && !SEARCH.q[level]) closeSearch(level);
    }, 150));
    row.appendChild(inp);
    if (n) {
      const x = document.createElement("button");
      x.type = "button"; x.className = "pin-x";
      x.innerHTML = X_SVG;
      x.setAttribute("aria-label", "Close search");
      x.addEventListener("mousedown", e => e.preventDefault());
      x.addEventListener("click", () => closeSearch(level));
      row.classList.add("on");
      row.appendChild(x);
    }
    return row;
  }
  if (!n) {
    row.classList.add("idle");
    const open = document.createElement("button");
    open.type = "button"; open.className = "pin-prompt";
    open.textContent = PROMPT[level];
    open.title = "Search";
    open.addEventListener("click", () => openSearch(level));
    row.appendChild(open);
    return row;
  }
  row.classList.add("on");
  const go = document.createElement("button");
  go.type = "button"; go.className = "pin-name";
  const t = document.createElement("span");
  t.className = "chain"; t.textContent = n; go.appendChild(t);
  go.title = "Search";
  go.addEventListener("click", () => openSearch(level));
  const x = document.createElement("button");
  x.type = "button"; x.className = "pin-x";
  x.innerHTML = X_SVG;
  x.setAttribute("aria-label", "Deselect " + n);
  x.addEventListener("click", () => pick(level, n));
  row.append(go, x);
  return row;
}

const X_SVG = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M.5 .5L9.5 9.5M9.5 .5L.5 9.5" stroke="currentColor" stroke-width="1" fill="none"/></svg>';
// the panel's top row: the whole chain, with a cross that clears everything
function panelPin(s) {
  if (!s.length) return '<div class="pin idle panel-pin">no flavors picked</div>';
  const chain = s.map(esc).join('<i> / </i>') + (s.length === 1 ? "<i> / …</i>" : "");
  return '<div class="pin on panel-pin"><span class="pin-name"><span class="chain">' + chain + '</span></span>' +
    '<button type="button" class="pin-x" id="clear-all" aria-label="Clear all">' + X_SVG + "</button></div>";
}

function pick(level, n) {
  for (let i = level; i < 3; i++) { SEARCH.q[i] = ""; if (SEARCH.open === i) SEARCH.open = null; }
  if (sel[level] === n) { for (let i = level; i < 3; i++) sel[i] = null; }
  else { sel[level] = n; for (let i = level + 1; i < 3; i++) sel[i] = null; }
  render();
}

function keepFocus(f) {
  if (!f) return;
  const el = document.getElementById(f.id);
  if (el) { el.focus(); try { el.setSelectionRange(f.pos, f.pos); } catch (e) {} }
}
function renderPanel() {
  const s = sel.filter(Boolean);
  const a = document.activeElement;
  const focused = a && a.id && (a.id.startsWith("lab-note") || a.id === "lab-own") ? { id: a.id, pos: a.selectionStart } : null;
  if (s.length < 2) {
    panel.innerHTML = `${panelPin(s)}${labIndex()}`;
    if (typeof growFields === "function") growFields();
    keepFocus(focused);
    return;
  }
  const notes = [relation(s[0], s[1])];
  const t = tension(s);
  if (t) notes.push(t); else if (s[2]) notes.push(relation(s[1], s[2]));

  const ideas = labSync(s, sketches(s));
  panel.innerHTML = `
    ${panelPin(s)}
    <div class="sec"><h2>PAIRING NOTES</h2>${notes.map(n => "<p>" + esc(n) + "</p>").join("")}</div>
    <div class="sec"><h2>COCKTAIL IDEAS</h2>${ideas.map((i, k) => ideaHTML(k, i)).join("")}${ownIdeaRow()}</div>`;
  if (typeof growFields === "function") growFields();
  keepFocus(focused);
}

function clearAll() { SEARCH.open = null; SEARCH.q = ["", "", ""]; sel[0] = sel[1] = sel[2] = null; render(); cols[0].scrollTop = 0; }
function render() {
  cols.forEach((_, i) => renderCol(i));
  renderPanel();
}
// info: what the page holds and how it works, behind a small "i" at the bottom right
const PAIR_COUNT = FLAVORS.reduce((a, n) => a + FLAVORS.filter(m => edge(n, m) >= 1).length, 0) / 2;
const infoBtn = document.getElementById("info");
const infoBox = document.getElementById("info-box");
infoBox.innerHTML = `
  <button type="button" class="info-x" aria-label="Close">${X_SVG}</button>
  <p class="info-title">Flavor Mixer</p>
  <p>Explore potential cocktail pairings across 400+ flavors and 20 families.</p>
  <p><span class="key-c">Bright</span> flavors indicate classic pairings. <span class="key-g">Dim</span> ones work okay. <span class="key-m">Dimmer</span> ones are a maybe.</p>
  <p>Flavors appearing in ‘saved’ ideas will be marked with a <span class="key-c">▪</span></p>
  <p>Click the top of any column to search it, by flavor or by family.</p>
  <p>A <a href="https://ravipopat.info/maybe-machines" target="_blank" rel="noopener">maybe machine</a> by <a href="https://ravipopat.info" target="_blank" rel="noopener">Ravi Popat</a>.</p>`;
// on phones the box has a fixed height, so the text grows until it fills it
function fitInfo() {
  if (infoBox.hidden) return;
  infoBox.style.fontSize = ""; infoBox.style.lineHeight = "";
  if (!matchMedia("(max-width: 760px)").matches) return;
  let lo = 14, hi = 34;
  while (hi - lo > 0.1) {
    const mid = (lo + hi) / 2;
    infoBox.style.fontSize = mid + "px";
    if (infoBox.scrollHeight <= infoBox.clientHeight) lo = mid; else hi = mid;
  }
  infoBox.style.fontSize = lo + "px";
  // a bigger size would wrap onto another line, so spread what's left over the line spacing instead
  const lh = parseFloat(getComputedStyle(infoBox).lineHeight);
  const lines = [...infoBox.querySelectorAll("p")].reduce((a, p) => a + Math.round(p.offsetHeight / lh), 0);
  const gap = infoBox.clientHeight - contentBottom();
  if (lines && gap > 1) infoBox.style.lineHeight = Math.min(lh * 1.35, lh + gap / lines) + "px";
}
function contentBottom() {
  const last = infoBox.querySelector("p:last-of-type");
  const cs = getComputedStyle(infoBox);
  return last.offsetTop + last.offsetHeight + parseFloat(cs.paddingBottom);
}
function setInfo(open) { infoBox.hidden = !open; infoBtn.setAttribute("aria-expanded", String(open)); if (open) fitInfo(); }
addEventListener("resize", fitInfo);
infoBox.querySelector(".info-x").addEventListener("click", e => { e.stopPropagation(); setInfo(false); infoBtn.focus(); });
infoBtn.addEventListener("click", e => { e.stopPropagation(); setInfo(infoBox.hidden); });
document.addEventListener("click", e => { if (!infoBox.hidden && !infoBox.contains(e.target)) setInfo(false); });
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!infoBox.hidden) { setInfo(false); return; }
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) { e.target.blur(); return; }
  clearAll();
});
// marquee on hover, only when the text is cut off
function startRun(pn) {
  const c = pn.querySelector(".chain");
  if (!c) return;
  const over = c.scrollWidth - c.clientWidth;
  if (over <= 2) return;
  c.style.setProperty("--shift", -(over + 8) + "px");
  c.style.setProperty("--dur", Math.max(2.4, (over + 8) / 35) + "s");
  pn.classList.add("run");
}
document.addEventListener("mouseover", e => {
  const pn = e.target.closest && e.target.closest(".pin-name");
  if (pn && !(e.relatedTarget && pn.contains(e.relatedTarget))) startRun(pn);
});
document.addEventListener("mouseout", e => {
  const pn = e.target.closest && e.target.closest(".pin-name");
  if (pn && !(e.relatedTarget && pn.contains(e.relatedTarget))) pn.classList.remove("run");
});

