// Flavor Mixer — saved drinks, notes and your own ideas, plus storage (claude.ai account or this browser).

// ---------- saved drinks, your own ideas and notes; kept in the artifact's private per-viewer store ----------
const LAB = {
  ready: false,        // store reachable and this viewer has a private subtree
  entries: [],         // raw docs, newest first: notes {note} and saves {kind:"save"}
  groups: [],          // one per saved drink (combination + idea), newest first
  byKey: {},           // group key -> group
  col: null,
  key: "",             // combination the drafts belong to
  drafts: {}, status: {}, saving: {},
  own: "",             // unsent text for your own idea
  ideas: [],           // ideas on screen: suggestions, then your own and earlier saved ones
  picks: [],
};
const comboKey = s => s.slice().sort().join("|");
const groupKey = (flavors, idea) => comboKey(flavors) + "||" + idea;
const fmtDate = iso => { try { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" }); } catch (e) { return ""; } };
const ideaOf = e => e.idea || (e.made ? e.made.split(" + ")[0] : "");
const hashId = str => { let h = 5381; for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0; return "s-" + h.toString(36) + "-" + str.length; };

function buildGroups() {
  const map = {};
  LAB.entries.forEach(e => {
    const idea = ideaOf(e);
    if (!idea) return;
    const k = groupKey(e.flavors, idea);
    const g = map[k] || (map[k] = { key: k, flavors: e.flavors, idea, garnish: e.garnish || "", save: null, notes: [], latest: "" });
    if (e.kind === "save") g.save = e; else if (e.note) g.notes.push(e);
    if (!g.garnish && e.garnish) g.garnish = e.garnish;
    if ((e.createdAt || "") > g.latest) g.latest = e.createdAt || "";
  });
  LAB.byKey = map;
  LAB.groups = Object.values(map).sort((a, b) => b.latest.localeCompare(a.latest));
}

// a dot beside a flavor that appears in something saved alongside the current picks
function flavorDot(level, n) {
  if (!LAB.ready || !LAB.groups.length) return false;
  const need = [...sel.slice(0, level), n];
  return LAB.groups.some(g => need.every(x => g.flavors.includes(x)));
}

function labSync(s, ideas) {
  const key = comboKey(s);
  if (LAB.key !== key) { LAB.key = key; LAB.drafts = {}; LAB.status = {}; LAB.own = ""; LAB.noteOpen = null; LAB.ownOpen = false; }
  LAB.picks = s;
  // your own and earlier saved drinks for this combination join the suggestions
  const shown = ideas.map(i => groupKey(s, i.chain));
  const extra = LAB.ready ? LAB.groups.filter(g => comboKey(g.flavors) === key && !shown.includes(g.key))
    .sort((a, b) => a.latest.localeCompare(b.latest))
    .map(g => ({ chain: g.idea, items: g.idea.split(" · "), garnish: g.garnish, own: true })) : [];
  LAB.ideas = ideas.concat(extra);
  return LAB.ideas;
}

// ---------- markup ----------
function saveMark(g, attrs) {
  const on = !!g;
  const locked = on && g.notes.length > 0;
  return `<button type="button" class="save-mark${on ? " on" : ""}" ${attrs} aria-pressed="${on}" ` +
    `title="${locked ? "Saved. Delete its notes to unsave." : on ? "Unsave" : "Save this drink"}">${on ? "●" : "○"}</button>`;
}
function notesList(g) {
  return (g ? g.notes : []).map(e =>
    `<div class="log-row log-entry"><span class="log-note">${esc(e.note)}<span class="log-date"> · ${esc(fmtDate(e.createdAt))}</span></span>` +
    `<button type="button" class="log-del" data-del="${esc(e.id)}" aria-label="Delete note">×</button></div>`).join("");
}

function ideaHTML(k, idea) {
  const g = LAB.ready ? LAB.byKey[groupKey(LAB.picks, idea.chain)] : null;
  const open = LAB.noteOpen === k;
  return `<div class="idea">
    <div class="idea-head"><span class="no">${String(k + 1).padStart(2, "0")}</span><div class="idea-chain">${esc(idea.chain)}</div>${LAB.ready ? saveMark(g, `data-savek="${k}"`) : ""}</div>
    <div class="idea-meta">
      ${idea.garnish ? `<span class="garn">G: ${esc(idea.garnish)}</span>` : ""}
      ${LAB.ready ? `<div class="idea-notes">
        ${notesList(g)}
        ${open
          ? `<input id="lab-note-${k}" data-k="${k}" class="log-input" type="text" maxlength="280" placeholder="${LAB.saving[k] ? "saving…" : "note ↵"}" value="${esc(LAB.drafts[k] || "")}">`
          : `<button type="button" class="add" data-open="${k}">+ note</button>`}
        ${LAB.status[k] ? `<span class="why">${esc(LAB.status[k])}</span>` : ""}
      </div>` : ""}
    </div>
  </div>`;
}

function groupHTML(g, withCombo) {
  return `<div class="line log-item">
    ${withCombo ? `<div class="log-row"><button type="button" class="log-load" data-load="${esc(g.key)}">${g.flavors.map(esc).join(" / ")}</button>${saveMark(g, `data-unsave="${esc(g.key)}"`)}</div>` : ""}
    <div class="log-row"><span class="garn">${esc(g.idea)}</span>${withCombo ? "" : saveMark(g, `data-unsave="${esc(g.key)}"`)}</div>
    ${g.garnish ? `<span class="garn">G: ${esc(g.garnish)}</span>` : ""}
    ${notesList(g)}
  </div>`;
}

// a line for writing your own drink for this combination
function ownIdeaRow() {
  if (!LAB.ready) return "";
  return `<div class="own-row">${LAB.ownOpen
    ? `<input id="lab-own" class="log-input" type="text" maxlength="200" placeholder="your own idea ↵" value="${esc(LAB.own || "")}">`
    : `<button type="button" class="add" data-own="1">+ your own idea</button>`}</div>`;
}
async function saveOwn() {
  const s = sel.filter(Boolean);
  const parts = (LAB.own || "").split(/\s*(?:·|,|\+|\/|;|\s-\s)\s*/).map(x => x.trim()).filter(Boolean);
  if (s.length < 2 || !parts.length) return;
  const chain = parts.join(" · ");
  try {
    await LAB.col.doc(hashId(groupKey(s, chain))).set({ kind: "save", own: true, flavors: s, idea: chain, items: parts, garnish: "", createdAt: new Date().toISOString() });
    LAB.own = ""; LAB.ownOpen = false;
  } catch (e) { /* the text stays in the box */ }
  renderPanel();
}

// everything saved, for the resting panel
function labIndex() {
  if (!LAB.ready) return "";
  if (!LAB.groups.length) return "";
  return `<div class="sec lab"><h2>SAVED · ${LAB.groups.length}</h2>${LAB.groups.map(g => groupHTML(g, true)).join("")}</div>`;
}

// ---------- actions ----------
async function writeSave(flavors, idea) {
  const k = groupKey(flavors, idea.chain);
  await LAB.col.doc(hashId(k)).set({ kind: "save", flavors, idea: idea.chain, items: idea.items, garnish: idea.garnish || "", createdAt: new Date().toISOString() });
}
async function toggleSave(g, flavors, idea) {
  try {
    if (!g) await writeSave(flavors, idea);
    else if (!g.notes.length) await LAB.col.doc(g.save ? g.save.id : hashId(g.key)).delete();
  } catch (e) { /* the mark stays as it was */ }
}

async function labSave(k) {
  if (LAB.saving[k]) return;
  const s = sel.filter(Boolean);
  const idea = LAB.ideas[k];
  if (s.length < 2 || !idea) return;
  const note = (LAB.drafts[k] || "").trim();
  if (!note) return;
  LAB.saving[k] = true; LAB.status[k] = ""; renderPanel();
  try {
    await LAB.col.doc().set({ flavors: s, idea: idea.chain, items: idea.items, garnish: idea.garnish || "", note, createdAt: new Date().toISOString() });
    LAB.drafts[k] = ""; LAB.noteOpen = null;
  } catch (e) {
    LAB.status[k] = e && e.code === "quota_exceeded" ? "Storage is full. Delete some old notes first." : "Couldn't save. Try again in a moment.";
  }
  LAB.saving[k] = false; renderPanel();
}

async function labDelete(id) {
  try { await LAB.col.doc(id).delete(); } catch (e) { /* the note stays listed */ }
}

function labLoad(key) {
  const g = LAB.byKey[key];
  if (!g) return;
  const f = g.flavors.filter(n => F[n]);
  sel[0] = f[0] || null; sel[1] = f[1] || null; sel[2] = f[2] || null;
  LAB.key = ""; // fresh drafts for the loaded combination
  render();
}

panel.addEventListener("click", ev => {
  const t = ev.target.closest("button");
  if (!t) return;
  const d = t.dataset;
  if (t.id === "clear-all") clearAll();
  else if (d.open !== undefined) {
    LAB.noteOpen = +d.open; LAB.ownOpen = false; renderPanel();
    const n = document.getElementById("lab-note-" + d.open); if (n) n.focus();
  }
  else if (d.own) {
    LAB.ownOpen = true; LAB.noteOpen = null; renderPanel();
    const n = document.getElementById("lab-own"); if (n) n.focus();
  }
  else if (d.savek !== undefined) {
    const k = +d.savek, idea = LAB.ideas[k];
    toggleSave(LAB.byKey[groupKey(LAB.picks, idea.chain)], sel.filter(Boolean), idea);
  }
  else if (d.unsave) { const g = LAB.byKey[d.unsave]; if (g) toggleSave(g); }
  else if (d.del) labDelete(d.del);
  else if (d.load) labLoad(d.load);
});
panel.addEventListener("input", ev => {
  if (ev.target.id === "lab-own") LAB.own = ev.target.value;
  else if (ev.target.dataset.k !== undefined) LAB.drafts[+ev.target.dataset.k] = ev.target.value;
});
panel.addEventListener("focusout", ev => {
  const t = ev.target;
  setTimeout(() => {
    if (t.id === "lab-own" && !(LAB.own || "").trim() && document.activeElement !== t) { LAB.ownOpen = false; renderPanel(); }
    else if (t.dataset && t.dataset.k !== undefined && !(LAB.drafts[+t.dataset.k] || "").trim() && document.activeElement !== t && LAB.noteOpen === +t.dataset.k) { LAB.noteOpen = null; renderPanel(); }
  }, 120);
});
panel.addEventListener("keydown", ev => {
  if (ev.key !== "Enter") return;
  if (ev.target.id === "lab-own") saveOwn();
  else if (ev.target.dataset.k !== undefined) labSave(+ev.target.dataset.k);
});

// ---------- storage ----------
// inside claude.ai: the viewer's private store. Anywhere else (e.g. GitHub Pages): this browser's localStorage.
function localCollection(key) {
  const read = () => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; } };
  const write = all => { try { localStorage.setItem(key, JSON.stringify(all)); } catch (e) { throw { code: "quota_exceeded" }; } };
  const listeners = [];
  const emit = () => {
    const all = read();
    const docs = Object.entries(all).map(([id, d]) => ({ id, data: () => d }))
      .sort((a, b) => String(b.data().createdAt).localeCompare(String(a.data().createdAt)));
    listeners.forEach(fn => fn({ docs }));
  };
  return {
    doc(id) {
      id = id || Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      return {
        id,
        async set(d) { const all = read(); all[id] = d; write(all); emit(); },
        async delete() { const all = read(); delete all[id]; write(all); emit(); },
      };
    },
    orderBy() { return { limit() { return { onSnapshot(next) { listeners.push(next); setTimeout(emit, 0); return () => {}; } }; } }; },
  };
}
function startStore(col) {
  LAB.col = col;
  LAB.col.orderBy("createdAt", "desc").limit(1000).onSnapshot(snap => {
    LAB.entries = snap.docs.map(d => Object.assign({ id: d.id }, d.data()))
      .filter(e => Array.isArray(e.flavors) && e.flavors.length && (e.note || e.kind === "save"));
    buildGroups();
    LAB.ready = true;
    render();
  }, () => { LAB.ready = false; render(); });
}
function localStoreWorks() { try { localStorage.setItem("fm-test", "1"); localStorage.removeItem("fm-test"); return true; } catch (e) { return false; } }

(async () => {
  try {
    const c = window.claude;
    if (c && c.use) {
      const [db, user] = await Promise.all([c.use("db"), c.use("user")]);
      const uid = db && user ? await user.id() : null;
      if (uid) { startStore(db.doc("data/users/" + uid + "/lab").collection("entries")); return; }
    }
    if (localStoreWorks()) startStore(localCollection("flavor-mixer:saved"));
  } catch (e) { /* no storage at all: saving and notes stay hidden */ }
})();

// first draw
render();
