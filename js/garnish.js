// Flavor Mixer — garnish library and the rule that picks one per cocktail idea.

// ---------- garnish: [label, base flavor, form] ----------
const GARNISH = [
  ["Black salt rim", "Kala Namak", "rim"], ["Flaky salt rim", "Sea Salt", "rim"], ["Smoked salt rim", "Smoked Salt", "rim"],
  ["Chili-salt rim", "Chili", "rim"], ["Chaat masala rim", "Chaat Masala", "rim"], ["Sumac rim", "Sumac", "rim"],
  ["Za'atar rim", "Za'atar", "rim"], ["Toasted sesame rim", "Sesame", "rim"], ["Black sesame rim", "Black Sesame", "rim"],
  ["Cacao nib rim", "Cacao Nib", "rim"], ["Hibiscus-sugar rim", "Hibiscus", "rim"], ["Cinnamon-sugar rim", "Cinnamon", "rim"],
  ["Toasted coconut rim", "Coconut", "rim"], ["Pistachio-dust rim", "Pistachio", "rim"], ["Matcha-sugar rim", "Matcha", "rim"],
  ["Amchur-salt rim", "Amchur", "rim"], ["Sichuan pepper-salt rim", "Sichuan Pepper", "rim"],

  ["Mint sprig", "Mint", "sprig"], ["Thyme sprig", "Thyme", "sprig"], ["Rosemary sprig", "Rosemary", "sprig"],
  ["Basil leaf", "Basil", "sprig"], ["Thai basil sprig", "Thai Basil", "sprig"], ["Shiso leaf", "Shiso", "sprig"],
  ["Sage leaf", "Sage", "sprig"], ["Dill frond", "Dill", "sprig"], ["Lemon verbena sprig", "Lemon Verbena", "sprig"],
  ["Fresh curry leaf, slapped", "Kadi Patta", "sprig"], ["Makrut lime leaf", "Makrut Lime Leaf", "sprig"],
  ["Lavender sprig", "Lavender", "sprig"], ["Bay leaf", "Bay Leaf", "sprig"], ["Cilantro sprig", "Cilantro", "sprig"],
  ["Tarragon sprig", "Tarragon", "sprig"], ["Pandan knot", "Pandan", "sprig"], ["Pine sprig", "Pine", "sprig"],
  ["Fennel frond", "Fennel Bulb", "sprig"], ["Lemongrass stalk", "Lemongrass", "stick"], ["Paan leaf, rolled", "Paan", "sprig"],

  ["Lemon twist", "Lemon", "peel"], ["Expressed orange peel", "Orange", "peel"], ["Grapefruit peel", "Grapefruit", "peel"],
  ["Yuzu peel", "Yuzu", "peel"], ["Mandarin peel", "Mandarin", "peel"], ["Bergamot peel", "Bergamot", "peel"],
  ["Lime wheel", "Lime", "wheel"], ["Dehydrated orange wheel", "Blood Orange", "wheel"], ["Dehydrated lime wheel", "Calamansi", "wheel"],

  ["Brandied cherry", "Cherry", "pick"], ["Olive", "Olive", "pick"], ["Cocktail onion", "Pickled Onion", "pick"],
  ["Caper berry", "Caper", "pick"], ["Candied ginger on a pick", "Ginger", "pick"], ["Lychee on a pick", "Lychee", "pick"],
  ["Kumquat on a pick", "Kumquat", "pick"], ["Prune on a pick", "Prune", "pick"],

  ["Dehydrated apple fan", "Apple", "fruit"], ["Thin pear slice", "Pear", "fruit"], ["Cucumber ribbon", "Cucumber", "fruit"],
  ["Watermelon wedge", "Watermelon", "fruit"], ["Pineapple fronds", "Pineapple", "fruit"], ["Fig half", "Fig", "fruit"],
  ["Skewered blackberries", "Blackberry", "fruit"], ["Raspberries", "Raspberry", "fruit"], ["Strawberry half", "Strawberry", "fruit"],
  ["Pomegranate arils", "Pomegranate", "fruit"], ["Dehydrated mango", "Mango", "fruit"], ["Starfruit slice", "Starfruit", "fruit"],
  ["Celery stalk", "Celery", "fruit"], ["Cherry tomato", "Tomato", "fruit"], ["Dehydrated peach slice", "Peach", "fruit"],
  ["Passion fruit half", "Passion Fruit", "fruit"],

  ["Grated nutmeg", "Nutmeg", "dust"], ["Grated tonka", "Tonka Bean", "dust"], ["Grated cinnamon", "Cinnamon", "dust"],
  ["Cocoa dusting", "Chocolate", "dust"], ["Matcha dusting", "Matcha", "dust"], ["Pistachio dust", "Pistachio", "dust"],
  ["Toasted coconut flakes", "Coconut", "dust"], ["Grated jaggery", "Gud", "dust"], ["Grated white chocolate", "White Chocolate", "dust"],
  ["Cinnamon stick", "Cinnamon", "stick"], ["Star anise pod", "Star Anise", "spice"], ["Cracked black pepper", "Black Pepper", "spice"],
  ["Cracked pink peppercorn", "Pink Peppercorn", "spice"], ["Saffron threads", "Saffron", "spice"], ["Crushed cardamom", "Cardamom", "spice"],
  ["Three coffee beans", "Coffee", "spice"], ["Juniper berries", "Juniper", "spice"], ["Toasted fennel seeds", "Fennel", "spice"],
  ["Crushed Sichuan pepper", "Sichuan Pepper", "spice"], ["Grated mace", "Mace", "dust"], ["Clove-studded peel", "Clove", "spice"],

  ["Edible rose petals", "Rose", "petal"], ["Dried hibiscus", "Hibiscus", "petal"], ["Osmanthus flowers", "Osmanthus", "petal"],
  ["Chamomile flowers", "Chamomile", "petal"], ["Edible violets", "Violet", "petal"], ["Elderflower heads", "Elderflower", "petal"],
  ["Butterfly pea flower", "Butterfly Pea", "petal"], ["Jasmine flowers", "Jasmine", "petal"], ["Gulkand dab on the rim", "Gulkand", "petal"],

  ["Rose water mist", "Rose", "mist"], ["Orange blossom mist", "Orange Blossom", "mist"], ["Kewra mist", "Kewra", "mist"],
  ["Absinthe mist", "Anise Seed", "mist"], ["Saline drops", "Sea Salt", "mist"],
  ["Smoked rosemary", "Rosemary", "smoke"], ["Smoked cinnamon", "Cinnamon", "smoke"], ["Cedar smoke", "Cedar", "smoke"],
  ["Lapsang smoke", "Lapsang Souchong", "smoke"], ["Flamed orange peel", "Orange", "smoke"],
];
const GARNISH_FORMS = {
  sour: ["rim", "sprig", "petal", "dust", "mist", "spice", "peel", "wheel", "pick"],
  flip: ["dust", "spice", "petal"],
  stirred: ["peel", "pick", "mist", "smoke", "spice"],
  long: ["sprig", "peel", "wheel", "fruit", "stick", "petal"],
};
function garnishFor(chain, kind, picks, used) {
  const forms = GARNISH_FORMS[kind];
  let best = null, bv = 0;
  GARNISH.forEach(([label, base, form]) => {
    if (!F[base] || !forms.includes(form) || used.has(label) || used.has(base)) return;
    let v = 0;
    chain.forEach(c => { if (c !== base) v += edge(base, c) * (picks.includes(c) ? 1.5 : 1); });
    v /= Math.sqrt(chain.length);
    if (picks.includes(base)) v += 2.5; else if (chain.includes(base)) v += .6;
    if (["Lime", "Lemon", "Orange"].includes(base)) v -= .8;   // plain citrus only when nothing better fits
    if (v > bv) { bv = v; best = [label, base]; }
  });
  if (!best) return null;
  used.add(best[0]); used.add(best[1]);
  return best[0];
}
