// Flavor Mixer — flavors by family, hand-written pairings (* = classic), and possible pairings inferred from the references.
// ---------- flavors grouped by flavor family; the last five groups are bar-only (used in the panel, not the columns) ----------
const CATALOG = {
  "CITRUS": [
    ["Key Lime", "sour floral fresh"],
    ["Meyer Lemon", "sour sweet floral", "sweeter lemon"],
    ["Finger Lime", "sour fresh", "citrus caviar"],
    ["Sudachi", "sour fresh herbal"],
    ["Bitter Orange", "bitter sour fruity", "Seville orange"],
    ["Citron", "sour floral bitter"],
    ["Mosambi", "sweet fresh fruity", "sweet lime"],
    ["Gondhoraj", "sour floral herbal", "Bengali lime"],
    ["Loomi", "sour smoke earthy", "dried black lime"],
    ["Mandarin", "fruity sweet sour"],
    ["Bergamot", "sour floral bitter", "Earl Grey's citrus"],
    ["Kumquat", "sour bitter fruity"],
    ["Calamansi", "sour fresh floral", "Filipino lime"],
    ["Pomelo", "sour bitter fresh"],
    ["Lime","sour fresh"],
    ["Lemon","sour fresh"],
    ["Grapefruit","sour bitter fresh"],
    ["Orange","fruity sweet sour"],
    ["Yuzu","sour floral fresh"],
    ["Blood Orange","fruity sour sweet"],
  ],
  "SOUR & TART": [
    ["Kairi", "sour fresh fruity", "raw green mango"],
    ["Aloo Bukhara", "sour sweet fruity", "dried sour plum"],
    ["Rosehip", "sour fruity floral"],
    ["Hawthorn", "sour fruity"],
    ["Tamarillo", "sour tropical savory", "tree tomato"],
    ["Karonda", "sour fruity", "Indian cranberry"],
    ["Pani Puri Water", "sour salty spice herbal", "tangy street-snack water"],
    ["Shikanji", "sour sweet salty", "Indian spiced lemonade"],
    ["Tomatillo", "sour fresh herbal"],
    ["Pomegranate Molasses", "sour sweet fruity"],
    ["Jaljeera", "sour salty spice", "cumin-mint cooler"],
    ["Cranberry", "sour fruity bitter"],
    ["Sumac", "sour fruity earthy"],
    ["Sour Cherry", "sour fruity"],
    ["Gooseberry", "sour fresh fruity"],
    ["Verjus", "sour fruity fresh", "unripe-grape juice"],
    ["Umeboshi", "sour salty fruity", "salted plum"],
    ["Sea Buckthorn", "sour tropical fruity"],
    ["Barberry", "sour fruity"],
    ["Kokum","sour fruity","tart purple rind"],
    ["Imli","sour sweet earthy","tamarind"],
    ["Amla","sour bitter fresh","Indian gooseberry"],
    ["Aam Panna","sour fruity fresh salty","green-mango cooler"],
    ["Rhubarb","sour fresh"],
    ["Pomegranate","sour fruity"],
  ],
  "GREEN & HERBAL": [
    ["Tulsi", "herbal spice floral", "holy basil"],
    ["Kasuri Methi", "herbal bitter earthy", "dried fenugreek leaf"],
    ["Vietnamese Mint", "herbal spice fresh", "rau ram"],
    ["Culantro", "herbal fresh savory"],
    ["Lemon Thyme", "herbal sour fresh"],
    ["Pineapple Sage", "herbal fruity floral"],
    ["Hyssop", "herbal bitter anise"],
    ["Woodruff", "herbal sweet floral", "May wine herb"],
    ["Nettle", "herbal earthy"],
    ["Green Chili", "spice fresh herbal"],
    ["Epazote", "herbal savory anise"],
    ["Hoja Santa", "herbal anise", "root-beer leaf"],
    ["Za'atar", "herbal salty savory", "thyme-sumac-sesame blend"],
    ["Parsley", "herbal fresh savory"],
    ["Lemon Verbena", "herbal fresh floral"],
    ["Lemon Balm", "herbal fresh"],
    ["Sorrel", "sour herbal fresh"],
    ["Chervil", "herbal anise"],
    ["Lovage", "herbal savory"],
    ["Angelica", "herbal earthy", "a gin botanical"],
    ["Pandan", "floral sweet creamy", "screwpine leaf"],
    ["Oregano", "herbal earthy"],
    ["Marjoram", "herbal floral"],
    ["Mint","herbal fresh"],
    ["Basil","herbal fresh"],
    ["Thai Basil","herbal anise spice"],
    ["Cilantro","herbal fresh"],
    ["Shiso","herbal fresh spice"],
    ["Dill","herbal fresh savory"],
    ["Tarragon","herbal anise"],
    ["Lemongrass","herbal fresh"],
    ["Makrut Lime Leaf","herbal fresh floral"],
    ["Kadi Patta","herbal savory","curry leaf"],
    ["Paan","herbal sweet floral fresh","betel leaf"],
    ["Cucumber","fresh herbal"],
    ["Celery","savory fresh herbal"],
    ["Bell Pepper","fresh savory"],
    ["Matcha","bitter herbal earthy"],
  ],
  "WOODY & RESINOUS": [
    ["Sandalwood", "earthy floral warm"],
    ["Oak", "warm earthy spice", "toasted barrel"],
    ["Cinchona", "bitter earthy", "quinine bark"],
    ["Birch", "earthy sweet herbal"],
    ["Sarsaparilla", "sweet earthy anise", "root beer root"],
    ["Tobacco", "warm earthy smoke", "pipe tobacco aroma"],
    ["Pine", "herbal earthy fresh", "pine needle"],
    ["Hops", "bitter herbal floral"],
    ["Wormwood", "bitter herbal anise"],
    ["Gentian", "bitter earthy", "amaro root"],
    ["Mastic", "herbal fresh earthy", "resin"],
    ["Cedar", "earthy smoke herbal"],
    ["Rosemary","herbal earthy"],
    ["Thyme","herbal earthy"],
    ["Sage","herbal earthy savory"],
    ["Bay Leaf","herbal earthy"],
    ["Juniper","herbal earthy fresh","piney juniper berry"],
    ["Khus","earthy fresh herbal","vetiver"],
    ["Ajwain","herbal spice","carom seed"],
  ],
  "FLORAL": [
    ["Honeysuckle", "floral sweet"],
    ["Linden", "floral sweet herbal", "lime blossom"],
    ["Lotus", "floral earthy"],
    ["Chrysanthemum", "floral bitter herbal"],
    ["Meadowsweet", "floral sweet", "almond-honey wildflower"],
    ["Marigold", "floral bitter earthy"],
    ["Osmanthus", "floral fruity sweet"],
    ["Rose Geranium", "floral herbal"],
    ["Sakura", "floral salty sweet", "cherry blossom"],
    ["Butterfly Pea", "floral earthy", "colour-changing tea"],
    ["Heather", "floral sweet earthy"],
    ["Mahua", "floral sweet earthy", "Indian mahua flower"],
    ["Rose","floral sweet"],
    ["Gulkand","floral sweet","rose-petal jam"],
    ["Kewra","floral","screwpine water"],
    ["Orange Blossom","floral"],
    ["Elderflower","floral sweet fresh"],
    ["Hibiscus","floral sour fruity"],
    ["Lavender","floral herbal"],
    ["Jasmine","floral"],
    ["Chamomile","floral sweet herbal"],
    ["Violet","floral sweet"],
    ["Saffron","floral earthy warm"],
  ],
  "ORCHARD & STONE FRUIT": [
    ["Loquat", "fruity floral sour"],
    ["Greengage", "sweet fruity floral"],
    ["Damson", "sour fruity bitter"],
    ["Mirabelle", "sweet fruity floral"],
    ["Jujube", "sweet earthy fruity", "ber"],
    ["White Peach", "floral sweet fruity"],
    ["Nectarine", "fruity sweet sour"],
    ["Persimmon", "fruity sweet earthy"],
    ["Date", "sweet earthy fruity"],
    ["Prune", "sweet fruity earthy"],
    ["Raisin", "sweet fruity"],
    ["Nashi Pear", "fruity fresh sweet", "Asian pear"],
    ["Apple","fruity sweet sour"],
    ["Pear","fruity sweet floral"],
    ["Quince","fruity floral sour"],
    ["Peach","fruity sweet floral"],
    ["Apricot","fruity sweet sour"],
    ["Cherry","fruity sweet sour"],
    ["Plum","fruity sour sweet"],
    ["Grape","fruity sweet"],
    ["Fig","sweet earthy fruity"],
  ],
  "BERRY & BRAMBLE": [
    ["Cloudberry", "sour fruity floral"],
    ["Bilberry", "fruity sour earthy", "wild blueberry"],
    ["Aronia", "sour bitter fruity", "chokeberry"],
    ["Goji", "sweet sour earthy"],
    ["Schisandra", "sour salty bitter spice", "five-flavour berry"],
    ["Acai", "fruity earthy"],
    ["Wild Strawberry", "fruity floral sweet", "fraise des bois"],
    ["Blueberry", "fruity sweet sour"],
    ["Redcurrant", "sour fruity"],
    ["Mulberry", "fruity sweet earthy"],
    ["Elderberry", "fruity sour earthy"],
    ["Sloe", "sour fruity bitter", "blackthorn plum"],
    ["Lingonberry", "sour fruity"],
    ["Phalsa", "sour sweet fruity", "Indian falsa berry"],
    ["Strawberry","fruity sweet"],
    ["Raspberry","fruity sour"],
    ["Blackberry","fruity sour earthy"],
    ["Blackcurrant","fruity sour earthy"],
    ["Jamun","sour fruity earthy bitter","black plum"],
  ],
  "TROPICAL & MELON": [
    ["Rambutan", "sweet floral tropical"],
    ["Mangosteen", "sweet sour floral tropical"],
    ["Longan", "sweet floral earthy"],
    ["Plantain", "sweet earthy creamy", "ripe and caramelised"],
    ["Sugarcane", "sweet fresh herbal", "fresh-pressed juice"],
    ["Toddy", "sour sweet earthy", "palm toddy"],
    ["Nungu", "fresh sweet creamy", "ice apple"],
    ["Jabuticaba", "sweet sour fruity"],
    ["Cantaloupe", "sweet fruity floral"],
    ["Honeydew", "sweet fresh"],
    ["Kiwi", "sour fresh tropical"],
    ["Dragon Fruit", "fresh sweet tropical"],
    ["Jackfruit", "tropical sweet fruity"],
    ["Starfruit", "sour fresh tropical"],
    ["Sitaphal", "creamy sweet tropical", "custard apple"],
    ["Soursop", "tropical sour creamy"],
    ["Feijoa", "tropical floral sour"],
    ["Bael", "sweet earthy fruity", "wood apple"],
    ["Pineapple","tropical sour sweet"],
    ["Mango","tropical sweet fruity"],
    ["Aamras","fruity sweet creamy tropical","mango pulp"],
    ["Passion Fruit","tropical sour"],
    ["Banana","tropical sweet creamy"],
    ["Coconut","tropical creamy nutty"],
    ["Lychee","floral tropical sweet"],
    ["Guava","tropical fruity floral"],
    ["Papaya","tropical sweet"],
    ["Chikoo","sweet creamy earthy","sapodilla"],
    ["Watermelon","fresh sweet fruity"],
  ],
  "WARM SPICE": [
    ["Black Cardamom", "smoke spice earthy"],
    ["Saunth", "spice warm earthy", "dried ginger"],
    ["Five Spice", "spice anise warm"],
    ["Ras el Hanout", "spice floral warm"],
    ["Mukhwas", "anise sweet herbal", "after-meal fennel mix"],
    ["Fennel Pollen", "anise floral sweet"],
    ["Mace", "spice warm floral"],
    ["Anise Seed", "anise sweet spice"],
    ["Caraway", "anise earthy spice"],
    ["Licorice", "anise sweet bitter"],
    ["Tonka Bean", "sweet warm creamy"],
    ["Garam Masala", "spice warm earthy", "warm Indian spice blend"],
    ["Mahlab", "nutty floral bitter", "cherry-stone spice"],
    ["Thandai", "spice nutty creamy", "spiced nut-milk blend"],
    ["Cinnamon","spice warm sweet"],
    ["Clove","spice warm"],
    ["Nutmeg","spice warm"],
    ["Allspice","spice warm"],
    ["Star Anise","anise spice warm"],
    ["Fennel","anise sweet herbal","fennel seed"],
    ["Cardamom","spice floral warm"],
    ["Vanilla","sweet creamy floral"],
    ["Masala Chai","spice warm creamy bitter","spiced milk tea"],
  ],
  "HEAT & PEPPER": [
    ["Jalape\u00f1o", "spice fresh herbal"],
    ["Habanero", "spice fruity tropical"],
    ["Kashmiri Chili", "spice fruity smoke", "mild, red, fruity"],
    ["Aleppo Pepper", "spice fruity salty"],
    ["Timur", "spice floral fresh", "Nepali pepper"],
    ["Cubeb", "spice herbal bitter", "tailed pepper"],
    ["Green Peppercorn", "spice fresh herbal"],
    ["Long Pepper", "spice warm sweet"],
    ["Grains of Paradise", "spice floral"],
    ["Sansho", "spice fresh floral", "Japanese pepper"],
    ["Sichuan Pepper", "spice floral fresh"],
    ["Wasabi", "spice fresh"],
    ["Horseradish", "spice fresh savory"],
    ["Mustard Seed", "spice savory"],
    ["Fenugreek", "spice earthy bitter", "methi"],
    ["Nigella", "spice earthy savory", "kalonji"],
    ["Galangal", "spice fresh herbal"],
    ["Chipotle", "smoke spice", "smoked jalape\u00f1o"],
    ["Smoked Paprika", "smoke spice sweet"],
    ["Hing", "savory spice", "asafoetida"],
    ["Chaat Masala", "salty sour spice", "tangy spice blend"],
    ["Ginger","spice fresh warm"],
    ["Chili","spice"],
    ["Black Pepper","spice"],
    ["Pink Peppercorn","spice floral fruity"],
    ["Turmeric","earthy spice bitter"],
    ["Cumin","spice earthy savory"],
    ["Coriander Seed","spice floral"],
  ],
  "ROASTED, SMOKY & BITTER": [
    ["Darjeeling", "floral fruity bitter", "muscatel black tea"],
    ["Pu-erh", "earthy bitter smoke", "aged dark tea"],
    ["Yerba Mate", "bitter herbal earthy"],
    ["Kahwa", "spice floral warm", "Kashmiri saffron green tea"],
    ["Mugicha", "nutty sweet earthy", "roasted barley tea"],
    ["Cascara", "fruity sweet bitter", "coffee-cherry husk"],
    ["Mole", "spice bitter earthy", "chili-chocolate sauce"],
    ["Cacao Nib", "bitter nutty earthy"],
    ["Rooibos", "sweet earthy nutty"],
    ["Hojicha", "smoke nutty bitter", "roasted green tea"],
    ["Oolong", "floral earthy bitter"],
    ["Chicory", "bitter earthy", "roasted root"],
    ["Malt", "sweet nutty earthy"],
    ["Genmaicha", "nutty bitter herbal", "toasted-rice green tea"],
    ["Coffee","bitter warm earthy"],
    ["Chocolate","bitter sweet warm"],
    ["Earl Grey","bitter floral","bergamot tea"],
    ["Black Tea","bitter warm"],
    ["Lapsang Souchong","smoke bitter","smoked tea"],
  ],
  "NUTTY & TOASTED": [
    ["Pumpkin Seed", "nutty savory earthy", "pepita"],
    ["Poppy Seed", "nutty sweet", "khus khus"],
    ["Makhana", "nutty creamy", "fox nut"],
    ["Praline", "nutty sweet warm"],
    ["Chironji", "nutty sweet", "charoli"],
    ["Brazil Nut", "nutty creamy earthy"],
    ["Tahini", "nutty savory bitter"],
    ["Pecan", "nutty sweet warm"],
    ["Cashew", "nutty creamy sweet"],
    ["Chestnut", "nutty sweet earthy"],
    ["Macadamia", "nutty creamy"],
    ["Pine Nut", "nutty creamy savory"],
    ["Black Sesame", "nutty bitter earthy"],
    ["Oat", "nutty creamy sweet"],
    ["Buckwheat", "nutty earthy"],
    ["Corn", "sweet nutty earthy"],
    ["Almond","nutty sweet"],
    ["Pistachio","nutty sweet"],
    ["Hazelnut","nutty warm"],
    ["Walnut","nutty bitter earthy"],
    ["Peanut","nutty savory salty"],
    ["Sesame","nutty savory"],
    ["Boondi","sweet savory nutty","fried gram pearls"],
    ["Brown Butter","creamy nutty warm"],
    ["Ghee","creamy warm nutty","clarified butter"],
  ],
  "SWEET & CARAMEL": [
    ["Date Syrup", "sweet earthy fruity"],
    ["Golden Syrup", "sweet warm"],
    ["Muscovado", "sweet bitter warm"],
    ["Burnt Sugar", "bitter sweet smoke"],
    ["Molasses", "sweet bitter warm"],
    ["Butterscotch", "sweet creamy warm"],
    ["Dulce de Leche", "sweet creamy warm"],
    ["Palm Sugar", "sweet earthy warm"],
    ["Honey","sweet floral"],
    ["Maple","sweet warm earthy"],
    ["Caramel","sweet warm nutty"],
    ["Gud","sweet warm earthy","jaggery"],
  ],
  "CREAMY & CULTURED": [
    ["Coconut Cream", "creamy tropical sweet"],
    ["Labneh", "creamy sour salty"],
    ["Malai", "creamy sweet", "clotted milk cream"],
    ["Khoya", "creamy sweet nutty", "reduced milk solids"],
    ["Mishti Doi", "creamy sweet sour warm", "caramelised sweet yogurt"],
    ["Oat Milk", "creamy nutty sweet"],
    ["Almond Milk", "creamy nutty"],
    ["Cream Cheese", "creamy sour salty"],
    ["Sol Kadhi", "creamy sour savory", "kokum-coconut milk"],
    ["Cr\u00e8me Fra\u00eeche", "creamy sour"],
    ["Condensed Milk", "sweet creamy"],
    ["Kefir", "creamy sour fresh"],
    ["Butter", "creamy savory"],
    ["White Chocolate", "sweet creamy"],
    ["Mascarpone", "creamy sweet"],
    ["Rabri", "creamy sweet", "reduced sweetened milk"],
    ["Cream","creamy sweet"],
    ["Milk","creamy"],
    ["Yogurt","creamy sour"],
    ["Chhans","creamy sour salty savory","spiced buttermilk"],
  ],
  "EARTHY & SAVOURY": [
    ["Caramelised Onion", "sweet savory warm"],
    ["Sundried Tomato", "savory sweet sour"],
    ["Bitter Gourd", "bitter herbal", "karela"],
    ["Porcini", "earthy savory nutty", "dried cep"],
    ["Charred Corn", "smoke sweet nutty", "elote"],
    ["Rasam", "sour spice savory", "tamarind-pepper broth"],
    ["Celeriac", "earthy savory nutty"],
    ["Garlic", "savory spice"],
    ["Black Garlic", "sweet savory earthy", "aged, balsamic-sweet"],
    ["Shallot", "savory sweet"],
    ["Leek", "savory sweet fresh"],
    ["Eggplant", "earthy savory smoke"],
    ["Zucchini", "fresh herbal"],
    ["Asparagus", "herbal fresh savory"],
    ["Artichoke", "bitter herbal earthy"],
    ["Truffle", "earthy savory"],
    ["Mushroom", "earthy savory"],
    ["Sweet Potato", "sweet earthy"],
    ["Pumpkin", "sweet earthy creamy"],
    ["Avocado", "creamy fresh"],
    ["Fennel Bulb", "anise fresh sweet"],
    ["Radish", "spice fresh"],
    ["Parsnip", "sweet earthy"],
    ["Amchur", "sour fruity", "dried-mango powder"],
    ["Tomato","savory sour fruity"],
    ["Beetroot","earthy sweet"],
    ["Carrot","earthy sweet"],
  ],
  "SALT & BRINE": [
    ["Dashi", "salty savory smoke", "kombu-bonito broth"],
    ["Celery Salt", "salty savory herbal"],
    ["Chamoy", "sour salty sweet spice", "salted fruit chili sauce"],
    ["Taj\u00edn", "salty sour spice", "chili-lime salt"],
    ["Oyster", "salty fresh savory"],
    ["Clam", "salty savory", "as in clamato"],
    ["Fish Sauce", "salty savory"],
    ["Seaweed", "salty savory fresh"],
    ["Caper", "salty sour"],
    ["Pickle Brine", "salty sour"],
    ["Soy Sauce", "salty savory"],
    ["Smoked Salt", "salty smoke"],
    ["Sea Salt","salty"],
    ["Kala Namak","salty savory","black salt"],
    ["Olive","salty savory"],
    ["Miso","salty savory nutty"],
  ],
  "CHEESE": [
    ["Burrata", "creamy sweet"],
    ["Manchego", "salty nutty savory"],
    ["Gruy\u00e8re", "nutty salty sweet"],
    ["Goat Cheese", "creamy sour salty", "fresh ch\u00e8vre"],
    ["Parmesan", "salty savory nutty"],
    ["Blue Cheese", "salty creamy savory"],
    ["Feta", "salty sour creamy"],
    ["Ricotta", "creamy sweet"],
    ["Brie", "creamy earthy"],
    ["Cheddar", "salty savory nutty"],
    ["Paneer", "creamy savory"],
  ],
  "GRAINS & PULSES": [
    ["Ragi", "nutty earthy", "finger millet"],
    ["Poha", "nutty savory", "flattened rice"],
    ["Sattu", "nutty earthy salty", "roasted gram flour"],
    ["Graham Cracker", "sweet nutty warm", "the pie-crust note"],
    ["Black Rice", "nutty earthy sweet"],
    ["Rye Bread", "sour earthy nutty"],
    ["Puffed Rice", "nutty salty", "murmura, as in bhel"],
    ["Potato", "earthy creamy savory"],
    ["Tur Daal","savory earthy nutty","toasted lentil"],
    ["Rice", "sweet nutty creamy"],
    ["Barley", "nutty earthy sweet"],
    ["Sourdough", "sour nutty savory", "toasted bread"],
    ["Popcorn", "nutty salty savory"],
    ["Chickpea", "nutty earthy savory"],
    ["Green Pea", "sweet fresh"],
    ["Moong Daal", "nutty earthy", "split mung bean"],
    ["Besan", "nutty earthy savory", "toasted gram flour"],
  ],
  "FATS & CURES": [
    ["Mustard Oil", "spice bitter savory"],
    ["Chorizo", "smoke spice salty savory"],
    ["Smoked Salmon", "smoke salty savory"],
    ["Bone Marrow", "creamy savory", "for the bone luge"],
    ["Bacon", "smoke salty savory", "the classic fat-wash"],
    ["Prosciutto", "salty savory"],
    ["Olive Oil", "fresh herbal bitter", "for fat-washing"],
    ["Coconut Oil", "tropical creamy", "for fat-washing"],
    ["Sesame Oil", "nutty savory", "toasted, for fat-washing"],
  ],
  "FERMENTED & PICKLED": [
    ["Kanji", "sour salty spice earthy", "fermented black-carrot drink"],
    ["Sauerkraut", "sour salty savory"],
    ["Sherry Vinegar", "sour nutty"],
    ["Rice Vinegar", "sour sweet"],
    ["Kvass", "sour earthy sweet", "fermented rye-bread drink"],
    ["Amazake", "sweet creamy", "sweet fermented rice"],
    ["Kimchi", "sour spice salty savory"],
    ["Gochujang", "spice sweet savory", "Korean chili paste"],
    ["Kombucha", "sour fresh sweet"],
    ["Achaar", "sour salty spice", "Indian pickle"],
    ["Preserved Lemon", "sour salty savory"],
    ["Balsamic", "sour sweet fruity"],
    ["Apple Cider Vinegar", "sour fruity", "the shrub base"],
    ["Black Vinegar", "sour earthy sweet", "Chinkiang vinegar"],
    ["Yuzu Kosho", "sour spice salty", "yuzu-chili paste"],
    ["Pickled Onion", "sour salty savory", "the Gibson garnish"],
    ["Tepache", "sour tropical spice", "fermented pineapple"],
  ],
  "SWEETS & DESSERTS": [
    ["Jalebi", "sweet sour floral", "saffron syrup spirals"],
    ["Rasmalai", "creamy sweet floral", "saffron milk dumplings"],
    ["Kheer", "creamy sweet nutty", "rice pudding"],
    ["Gajar Halwa", "sweet warm creamy", "slow-cooked carrot pudding"],
    ["Baklava", "sweet nutty floral"],
    ["Cr\u00e8me Br\u00fbl\u00e9e", "creamy sweet bitter"],
    ["Churro", "sweet warm nutty"],
    ["Cheesecake", "creamy sweet sour"],
    ["Marzipan", "nutty sweet"],
    ["Halva", "nutty sweet"],
    ["Brioche", "sweet creamy nutty"],
    ["Honeycomb", "sweet nutty", "toffee crunch"],
    ["Cereal Milk", "sweet creamy nutty", "cornflake-steeped milk"],
    ["Horchata", "sweet creamy nutty", "rice-cinnamon milk"],
    ["Red Bean", "sweet earthy nutty", "sweet azuki"],
    ["Ube", "sweet earthy creamy", "purple yam"],
    ["Gulab Jamun", "sweet creamy floral", "rose-syrup milk dumplings"],
    ["Kulfi", "creamy sweet nutty"],
    ["Shrikhand", "creamy sour sweet", "sweet strained yogurt"],
    ["Marshmallow", "sweet creamy"],
  ],
  "SPIRITS": [
    ["Gin","herbal floral fresh","juniper"],
    ["Vodka","neutral","a clean base"],
    ["White Rum","sweet fresh tropical","light cane"],
    ["Aged Rum","sweet warm tropical spice","molasses and oak"],
    ["Rhum Agricole","herbal fresh earthy","grassy cane"],
    ["Cachaça","fresh fruity earthy","funky cane"],
    ["Tequila Blanco","fresh earthy spice","vegetal agave"],
    ["Tequila Reposado","earthy warm spice sweet","rested agave"],
    ["Mezcal","smoke earthy salty","roasted agave"],
    ["Bourbon","warm sweet spice","caramel and oak"],
    ["Rye","spice warm","peppery grain"],
    ["Scotch","warm sweet earthy nutty","malt"],
    ["Islay Scotch","smoke salty earthy","peat smoke"],
    ["Cognac","warm fruity sweet","grape brandy"],
    ["Apple Brandy","fruity warm","orchard brandy"],
    ["Pisco","floral fruity fresh","aromatic grape spirit"],
    ["Arak","anise herbal fresh","dry anise"],
  ],
  "FORTIFIED, AMARI & LIQUEURS": [
    ["Dry Vermouth","herbal bitter fresh"],
    ["Sweet Vermouth","sweet bitter spice"],
    ["Blanc Vermouth","floral sweet herbal"],
    ["Fino Sherry","salty nutty fresh","bone-dry, saline sherry"],
    ["Oloroso Sherry","nutty warm sweet","nutty, oxidised sherry"],
    ["Campari","bitter fruity"],
    ["Aperol","bitter fruity sweet"],
    ["Cynar","bitter herbal earthy","artichoke amaro"],
    ["Fernet","bitter herbal anise","menthol-bitter amaro"],
    ["Green Chartreuse","herbal spice","fierce herbal liqueur"],
    ["Yellow Chartreuse","herbal sweet floral","honeyed herbal liqueur"],
    ["Bénédictine","herbal sweet spice"],
    ["Maraschino","fruity nutty floral","funky cherry liqueur"],
    ["Elderflower Liqueur","floral sweet"],
    ["Orange Liqueur","fruity sweet"],
    ["Crème de Cassis","fruity sweet","blackcurrant liqueur"],
    ["Crème de Cacao","sweet warm","cocoa liqueur"],
    ["Falernum","spice sweet nutty","lime, clove and almond syrup"],
    ["Absinthe","anise herbal"],
  ],
  "LENGTHENERS": [
    ["Tonic","bitter fresh"],
    ["Soda","fresh neutral"],
    ["Ginger Beer","spice sweet fresh"],
    ["Sparkling Wine","fresh fruity sour"],
    ["Coconut Water","tropical fresh"],
  ],
  "BITTERS": [
    ["Angostura","bitter spice"],
    ["Orange Bitters","bitter fresh"],
    ["Creole Bitters","bitter anise spice"],
    ["Chocolate Bitters","bitter warm"],
  ],
  "BAR STAPLES": [
    ["Simple Syrup","sweet neutral"],
    ["Demerara","sweet warm"],
    ["Agave Syrup","sweet earthy"],
    ["Egg White","creamy neutral","egg-white foam"],
    ["Whole Egg","creamy"],
  ],
};
const BAR_CATS = ["SPIRITS", "FORTIFIED, AMARI & LIQUEURS", "LENGTHENERS", "BITTERS", "BAR STAPLES"];

// ---------- curated pairings. * = classic / strong ----------
const PAIRS = {
  "Gin": "Lime*, Lemon*, Tonic*, Dry Vermouth*, Cucumber*, Elderflower Liqueur*, Campari*, Orange Bitters*, Sparkling Wine*, Grapefruit, Rosemary, Basil, Maraschino*, Sweet Vermouth*, Green Chartreuse*, Mint, Earl Grey*, Lavender, Rose, Orange Blossom, Egg White, Honey, Raspberry, Blackberry, Celery, Thyme, Pink Peppercorn, Cardamom, Gulkand, Kokum, Khus, Kadi Patta, Ajwain, Violet, Lemongrass, Strawberry, Rhubarb, Olive, Coriander Seed, Saffron, Lychee, Crème de Cacao",
  "Vodka": "Lime, Lemon, Coffee*, Tomato*, Ginger Beer*, Cucumber, Watermelon, Passion Fruit*, Vanilla, Raspberry, Celery, Dill*, Kewra, Paan, Lychee*, Elderflower Liqueur, Grapefruit, Olive, Yogurt, Beetroot",
  "White Rum": "Lime*, Mint*, Simple Syrup*, Pineapple*, Coconut*, Banana, Passion Fruit, Strawberry, Grapefruit*, Maraschino*, Soda, Lemongrass, Basil, Watermelon, Guava, Falernum, Coconut Water*, Ginger, Papaya, Hibiscus",
  "Aged Rum": "Lime*, Demerara*, Angostura*, Pineapple*, Banana*, Coconut, Almond*, Falernum*, Allspice*, Cinnamon, Nutmeg*, Vanilla*, Coffee*, Chocolate*, Maple, Orange Liqueur*, Ginger Beer*, Sweet Vermouth, Brown Butter, Gud*, Chikoo*, Masala Chai*, Passion Fruit, Clove, Whole Egg*, Black Tea*, Aamras*, Imli, Hazelnut, Peanut, Sesame",
  "Rhum Agricole": "Lime*, Demerara*, Banana, Pineapple, Passion Fruit, Grapefruit, Thai Basil, Lemongrass, Green Chartreuse*, Coconut, Celery, Basil, Ginger",
  "Cachaça": "Lime*, Demerara*, Passion Fruit*, Strawberry, Pineapple, Mango, Basil, Cucumber, Coconut, Guava, Ginger, Cilantro, Coconut Water",
  "Tequila Blanco": "Lime*, Grapefruit*, Agave Syrup*, Orange Liqueur*, Sea Salt*, Chili*, Cucumber, Watermelon*, Pineapple, Mango*, Cilantro, Hibiscus*, Passion Fruit, Blackberry, Celery, Aam Panna*, Amla*, Strawberry, Elderflower Liqueur, Soda, Basil, Bell Pepper, Ginger Beer, Kala Namak*, Pink Peppercorn, Carrot, Turmeric, Blood Orange, Jamun, Kokum, Kadi Patta, Chhans, Khus, Pomegranate, Thai Basil, Shiso, Makrut Lime Leaf, Beetroot, Aperol, Cumin",
  "Tequila Reposado": "Lime, Agave Syrup*, Angostura, Grapefruit, Cinnamon, Chocolate, Coffee, Orange*, Vanilla, Pineapple, Sweet Vermouth, Green Chartreuse, Chili, Ginger, Honey, Imli, Orange Bitters, Chocolate Bitters, Black Pepper",
  "Mezcal": "Lime*, Grapefruit*, Pineapple*, Orange*, Agave Syrup, Chili*, Sea Salt, Mango, Passion Fruit, Cucumber, Campari*, Sweet Vermouth*, Green Chartreuse*, Yellow Chartreuse, Chocolate*, Coffee, Cinnamon, Hibiscus, Imli*, Jamun*, Kokum, Beetroot, Bell Pepper, Ginger, Honey, Lapsang Souchong*, Chocolate Bitters*, Celery, Tomato, Watermelon, Rosemary, Sage, Pomegranate, Blackberry, Black Pepper, Miso, Aam Panna, Carrot, Turmeric, Cumin, Kala Namak, Aperol, Cynar, Blood Orange, Cilantro, Orange Bitters, Fino Sherry",
  "Bourbon": "Demerara*, Angostura*, Orange*, Lemon*, Sweet Vermouth*, Mint*, Maple*, Honey*, Peach*, Cherry*, Apple, Pear, Vanilla*, Cinnamon*, Nutmeg, Clove, Coffee, Chocolate, Walnut*, Peanut*, Brown Butter*, Ginger, Masala Chai*, Ghee*, Fig, Tur Daal, Gud, Blackberry*, Almond, Aperol*, Black Tea*, Lapsang Souchong, Sage, Rosemary, Thyme, Bay Leaf, Chamomile, Earl Grey, Miso, Hazelnut, Chikoo, Orange Bitters, Creole Bitters, Chocolate Bitters, Ginger Beer, Soda, Imli, Egg White, Oloroso Sherry, Falernum, Allspice, Cream, Milk, Sesame, Banana, Whole Egg",
  "Rye": "Sweet Vermouth*, Angostura*, Creole Bitters*, Demerara*, Absinthe*, Bénédictine*, Lemon, Orange*, Cherry, Maraschino*, Campari*, Cynar*, Fernet, Apricot, Apple, Ginger, Pear, Black Pepper*, Chocolate Bitters, Clove, Green Chartreuse, Walnut, Maple, Lapsang Souchong, Black Tea, Cinnamon, Orange Bitters, Coffee",
  "Scotch": "Honey*, Ginger*, Lemon*, Sweet Vermouth*, Bénédictine*, Orange, Apple, Pear, Chocolate, Almond, Cherry, Oloroso Sherry*, Black Pepper, Vanilla, Earl Grey, Lapsang Souchong, Chamomile*, Soda*, Masala Chai, Black Tea, Fig, Walnut, Hazelnut, Brown Butter, Miso, Sesame, Coffee, Cream, Egg White, Angostura, Orange Bitters",
  "Islay Scotch": "Honey*, Ginger*, Lemon*, Lapsang Souchong*, Maple, Chocolate, Pineapple, Sea Salt, Orange, Oloroso Sherry, Black Pepper, Coffee, Miso, Brown Butter",
  "Cognac": "Orange Liqueur*, Lemon*, Sweet Vermouth*, Bénédictine*, Creole Bitters*, Absinthe*, Demerara, Honey, Apricot*, Peach, Pear, Fig, Vanilla, Chocolate, Coffee, Cream, Whole Egg*, Nutmeg*, Cinnamon, Black Tea*, Sparkling Wine*, Almond, Walnut, Saffron, Cardamom, Milk*, Gulkand, Chikoo, Masala Chai, Ghee, Aamras, Hazelnut, Oloroso Sherry, Raspberry, Quince, Pistachio, Earl Grey, Angostura, Star Anise, Clove, Boondi",
  "Apple Brandy": "Apple*, Lemon, Maple*, Cinnamon*, Ginger, Pear, Sweet Vermouth, Bénédictine, Yellow Chartreuse, Honey, Clove, Allspice, Pomegranate*, Sage, Walnut, Vanilla, Brown Butter, Quince, Thyme, Ginger Beer",
  "Pisco": "Lemon*, Lime*, Egg White*, Angostura*, Simple Syrup, Pineapple, Grapefruit, Passion Fruit, Ginger Beer*, Elderflower Liqueur, Grape*, Basil, Pear, Chamomile, Cucumber, Jasmine",
  "Arak": "Mint*, Cucumber*, Lemon, Grapefruit, Watermelon*, Pomegranate, Fennel*, Orange Blossom, Rose, Thyme, Pistachio, Dill, Yogurt*, Coconut Water, Fig, Apricot, Soda",

  "Dry Vermouth": "Olive*, Lemon, Orange Bitters*, Celery, Elderflower Liqueur, Fino Sherry*, Grapefruit, Thyme, Tarragon, Cucumber, Blanc Vermouth",
  "Sweet Vermouth": "Campari*, Orange*, Cherry*, Cynar, Chocolate, Coffee, Fernet, Fig, Cinnamon, Clove, Vanilla, Walnut, Soda*",
  "Blanc Vermouth": "Elderflower Liqueur, Pear, Peach, Grapefruit, Chamomile, Tequila Blanco, Fino Sherry, Lemon, Soda*, Apricot, Strawberry, Tonic",
  "Fino Sherry": "Almond*, Olive*, Lemon, Celery, Sea Salt*, Tonic*, Grapefruit, Cucumber, Apricot, Strawberry, Tomato, Miso, Walnut, Gin",
  "Oloroso Sherry": "Walnut*, Fig*, Chocolate, Coffee*, Orange, Cinnamon, Maple, Demerara, Brown Butter, Almond, Apricot, Masala Chai",
  "Campari": "Grapefruit*, Soda*, Sparkling Wine*, Pineapple*, Aged Rum*, Blood Orange*, Strawberry, Rhubarb, Passion Fruit, Cherry, Kokum",
  "Aperol": "Sparkling Wine*, Soda*, Orange*, Grapefruit, Lemon*, Passion Fruit, Strawberry, Rhubarb, Elderflower Liqueur, Peach, Blood Orange*, Gin",
  "Cynar": "Orange, Grapefruit, Soda*, Tonic, Lemon, Pineapple, Coffee, Mint, Sage*, Bourbon",
  "Fernet": "Coffee*, Mint*, Ginger*, Chocolate, Orange, Sweet Vermouth, Pineapple, Lime, Cinnamon, Clove, Ginger Beer*",
  "Green Chartreuse": "Lime*, Maraschino*, Pineapple*, Mint, Basil, Thyme, Cucumber, Celery, Grapefruit, Honey, Lemongrass, Chocolate*",
  "Yellow Chartreuse": "Gin, Lemon, Honey*, Saffron*, Pear, Chamomile*, Pineapple, Rye, Peach, Apricot, Thyme, Orange Blossom, Vanilla",
  "Bénédictine": "Gin, Lemon, Honey, Orange, Lime, Pineapple*, Cherry*, Sweet Vermouth*, Angostura, Creole Bitters*",
  "Maraschino": "Lime*, Lemon, Cherry*, Grapefruit*, Violet*, Pineapple, Sparkling Wine, Almond",
  "Elderflower Liqueur": "Sparkling Wine*, Lemon, Grapefruit*, Cucumber*, Pear*, Lychee*, Strawberry, Mint, Basil, Peach, Apricot, Rhubarb, Amla, Chamomile, Rose, Yuzu",
  "Orange Liqueur": "Lime*, Lemon*, Almond*, Chocolate, Coffee, Sparkling Wine, Blood Orange, Strawberry, Mango",
  "Crème de Cassis": "Sparkling Wine*, Gin, Tequila Blanco*, Ginger Beer*, Lemon, Blackberry, Raspberry, Rose, Violet, Mint, Chocolate",
  "Crème de Cacao": "Cream*, Cognac, Lemon, Mint*, Coffee, Banana, Hazelnut*, Orange, Vanilla, Coconut, Raspberry, Cherry, Chocolate Bitters",
  "Falernum": "Lime*, Pineapple*, Ginger, Clove*, Almond, Coconut, Passion Fruit, Allspice, Rhum Agricole, Gin",
  "Absinthe": "Lemon, Simple Syrup*, Mint, Cucumber, Sparkling Wine*, Pineapple, Fennel, Star Anise, Honey, Raspberry, Gin",

  "Lime": "Mint*, Ginger*, Coconut*, Chili*, Cilantro*, Basil, Thai Basil*, Lemongrass*, Makrut Lime Leaf*, Cucumber*, Watermelon*, Mango*, Pineapple*, Passion Fruit*, Guava*, Papaya*, Strawberry, Raspberry, Agave Syrup*, Simple Syrup*, Demerara*, Sea Salt, Kala Namak*, Jamun*, Kokum, Imli, Amla, Kadi Patta*, Khus*, Aam Panna, Hibiscus*, Lychee, Tonic, Soda*, Ginger Beer*, Honey, Pomegranate, Shiso, Turmeric, Cumin, Coconut Water, Peanut, Sesame, Cardamom, Allspice, Egg White, Tomato, Celery, Bell Pepper, Elderflower Liqueur",
  "Lemon": "Honey*, Ginger*, Thyme*, Rosemary*, Basil, Lavender*, Raspberry*, Strawberry, Blackberry*, Peach, Apricot, Rose, Chamomile*, Earl Grey*, Black Tea*, Egg White*, Simple Syrup*, Demerara, Maple, Sparkling Wine*, Soda*, Tonic, Cucumber, Almond, Pistachio, Saffron, Cardamom, Black Pepper, Ajwain*, Fennel, Dill, Tarragon, Celery, Yogurt, Mint, Violet, Matcha, Turmeric, Sage, Orange Blossom, Yuzu, Quince, Apple, Pear, Grape, Jasmine, Coriander Seed, Beetroot, Carrot, Tomato, Olive, Gulkand, Khus, Pomegranate, Amla, Cherry",
  "Grapefruit": "Rosemary*, Thyme, Basil, Tarragon, Pink Peppercorn*, Hibiscus, Honey, Mint, Cucumber, Ginger, Pomegranate, Vanilla, Cinnamon, Lapsang Souchong, Rose, Sea Salt*, Coriander Seed, Tonic*, Soda*, Sage, Earl Grey",
  "Orange": "Cinnamon*, Clove*, Chocolate*, Coffee*, Vanilla*, Star Anise*, Cardamom*, Saffron, Fennel*, Ginger, Rosemary, Thyme, Almond, Hazelnut, Pistachio, Fig, Pomegranate, Orange Blossom*, Honey, Maple, Demerara, Angostura*, Beetroot*, Carrot*, Masala Chai, Gud, Turmeric, Olive, Walnut, Coriander Seed*, Lapsang Souchong, Black Tea, Earl Grey, Quince, Bay Leaf, Allspice, Rhubarb, Passion Fruit, Mango, Orange Bitters, Chocolate Bitters, Creole Bitters",
  "Yuzu": "Honey*, Ginger*, Shiso*, Matcha*, Sesame, Miso, Sea Salt, Lemongrass, Mint, Jasmine*, Peach, Strawberry, Sparkling Wine, Gin, Vodka, Tequila Blanco",
  "Blood Orange": "Rosemary, Thyme, Vanilla, Cardamom, Chocolate, Sparkling Wine, Ginger, Pomegranate, Hibiscus, Cinnamon, Black Pepper",

  "Apple": "Cinnamon*, Clove, Nutmeg, Allspice, Ginger*, Vanilla, Maple*, Honey, Demerara, Brown Butter*, Walnut, Almond, Sage*, Thyme, Rosemary, Fennel, Celery, Cardamom, Star Anise, Pear, Quince, Blackberry*, Bourbon*, Rye, Scotch, Aged Rum, Cognac, Gin, Yellow Chartreuse, Elderflower Liqueur, Miso",
  "Pear": "Ginger*, Vanilla*, Cardamom*, Cinnamon, Clove, Star Anise*, Rosemary, Thyme, Sage, Chocolate*, Almond, Walnut, Hazelnut, Honey, Maple, Lemon, Black Pepper, Saffron, Chamomile, Jasmine, Cognac, Bourbon, Gin",
  "Quince": "Vanilla*, Cinnamon, Star Anise, Cardamom, Honey, Rose*, Apple, Pear, Orange, Almond, Oloroso Sherry",
  "Peach": "Vanilla*, Almond*, Raspberry*, Ginger, Basil, Thyme, Rosemary, Lavender, Mint, Honey, Cardamom, Cinnamon, Black Pepper, Sparkling Wine*, Orange Blossom, Cream, Yogurt, Jasmine, Black Tea*, Bay Leaf",
  "Apricot": "Almond*, Vanilla, Cardamom*, Saffron*, Rosemary, Thyme, Honey, Orange Blossom*, Pistachio*, Ginger, Chamomile, Lavender, Gin, Bourbon, Fino Sherry, Oloroso Sherry",
  "Cherry": "Almond*, Chocolate*, Vanilla*, Cinnamon, Black Pepper, Lemon, Lime, Mint, Basil, Thyme, Rose, Coffee, Pistachio, Crème de Cacao, Lapsang Souchong, Creole Bitters",
  "Plum": "Cinnamon, Star Anise*, Clove, Ginger*, Vanilla, Almond, Cardamom, Bay Leaf, Orange, Honey, Shiso*, Bourbon, Cognac, Gin, Rye",
  "Strawberry": "Basil*, Black Pepper*, Rhubarb*, Mint, Rose*, Vanilla*, Cream*, Chocolate, Lemon, Lime, Orange, Hibiscus, Pink Peppercorn, Thyme, Tarragon, Cucumber, Tomato, Sparkling Wine*, Yuzu, Coconut, Matcha*, Pistachio, Gulkand, Shiso",
  "Raspberry": "Rose*, Chocolate*, Vanilla, Almond, Peach*, Mint, Basil, Thyme, Lime, Sparkling Wine, Violet*, Lychee*, Pistachio*, Cream, Hibiscus, Coconut, Ginger, Black Pepper, Pink Peppercorn, Black Tea, Gulkand",
  "Blackberry": "Sage, Thyme, Mint, Basil, Ginger, Vanilla, Cinnamon, Bay Leaf, Black Pepper, Lime, Honey, Crème de Cassis",
  "Fig": "Walnut*, Honey*, Orange, Cinnamon, Cardamom*, Star Anise, Vanilla, Thyme, Rosemary, Bay Leaf*, Black Pepper, Almond, Pistachio, Rose, Chocolate, Coffee, Gud, Masala Chai, Sweet Vermouth, Chocolate Bitters*",
  "Rhubarb": "Ginger*, Rose, Orange, Vanilla*, Cardamom, Cream, Hibiscus, Lemon, Honey, Star Anise",
  "Grape": "Thyme, Rosemary, Lemon, Elderflower Liqueur, Sparkling Wine, Walnut, Fennel",
  "Pomegranate": "Mint*, Rose*, Orange Blossom*, Cinnamon, Cardamom, Pistachio*, Walnut*, Ginger, Chili, Yogurt, Hibiscus, Lime, Lemon, Sparkling Wine, Gin, Vodka",
  "Watermelon": "Mint*, Basil, Chili*, Sea Salt*, Cucumber*, Kala Namak*, Black Pepper, Lemongrass, Rose, Hibiscus, Shiso, Thai Basil, Coconut Water",

  "Pineapple": "Coconut*, Mint, Basil, Cilantro, Chili*, Ginger, Cinnamon, Clove, Vanilla, Star Anise, Black Pepper, Sage*, Rosemary, Almond, Passion Fruit, Mango, Banana, Lemongrass, Makrut Lime Leaf, Kala Namak*, Turmeric, Cynar, Absinthe, Islay Scotch, Pisco, Angostura*, Yogurt",
  "Mango": "Chili*, Cardamom*, Saffron, Coconut*, Ginger, Mint, Basil, Thai Basil, Cilantro, Lemongrass, Passion Fruit, Pineapple, Yogurt*, Kala Namak*, Black Pepper, Vanilla, Rose, Cumin, Aged Rum",
  "Passion Fruit": "Vanilla*, Coconut, Mango, Pineapple, Banana, Ginger, Mint, Basil, Chili, Raspberry, Orange, Sparkling Wine*, Cardamom, Falernum, Honey, Lemongrass",
  "Banana": "Coffee*, Chocolate*, Vanilla*, Cinnamon*, Nutmeg, Clove, Coconut, Peanut*, Walnut*, Hazelnut, Brown Butter*, Maple, Demerara*, Lime, Cardamom, Cream, Crème de Cacao, Gud, Chikoo, Miso, Sesame",
  "Coconut": "Lemongrass*, Makrut Lime Leaf*, Ginger, Kewra*, Cardamom*, Cinnamon, Vanilla*, Chocolate, Coffee, Mango, Banana, Passion Fruit, Lychee, Chili, Cilantro, Turmeric*, Gud*, Falernum, Almond, Peanut, Sesame, Thai Basil, Kokum*, Kadi Patta*, Paan",
  "Lychee": "Rose*, Ginger, Lemongrass, Mint, Coconut, Kewra*, Jasmine*, Shiso, Sparkling Wine",
  "Guava": "Chili*, Sea Salt, Pink Peppercorn, Cardamom, Ginger, Passion Fruit, Strawberry, Kala Namak*, Coconut, Lemongrass",
  "Papaya": "Chili, Ginger, Coconut, Passion Fruit, Mint, Lime",

  "Gulkand": "Paan*, Fennel*, Cardamom*, Earl Grey*, Pistachio*, Cream, Milk*, Yogurt, Saffron, Lychee, Chocolate, Vanilla, Egg White, Sparkling Wine, Vodka",
  "Kokum": "Kala Namak*, Cumin*, Ginger, Chili, Mint, Soda*, Gud*, Cilantro, Kadi Patta, Sea Salt",
  "Imli": "Gud*, Cumin*, Chili*, Kala Namak*, Ginger, Mint, Mango, Ginger Beer, Soda, Coriander Seed, Fennel, Demerara",
  "Paan": "Fennel*, Cardamom*, Rose, Mint, Chocolate, Cream, Milk, Clove, Kewra",
  "Kadi Patta": "Ginger, Chili, Cumin, Black Pepper, Chhans*, Pineapple, Mango, Ghee*, Tomato, Kala Namak",
  "Tur Daal": "Ghee*, Cumin, Turmeric, Gud*, Coconut, Sesame, Black Pepper, Aged Rum",
  "Chhans": "Mint*, Cumin*, Cilantro*, Ginger, Kala Namak*, Chili, Cucumber*, Ajwain, Gin, Vodka",
  "Aam Panna": "Mint*, Cumin*, Kala Namak*, Black Pepper, Ginger, Soda*, Lime, Chili, Gud, Gin, Vodka",
  "Khus": "Mint, Soda*, Rose, Kewra, Cucumber, Coconut Water, Vodka, Sparkling Wine",
  "Masala Chai": "Milk*, Ginger*, Cardamom*, Cinnamon, Clove, Black Pepper, Star Anise, Fennel, Gud*, Demerara, Honey, Vanilla, Scotch, Rye, Chocolate, Orange, Cream, Brown Butter, Banana, Coconut, Chocolate Bitters",
  "Gud": "Ghee, Ginger*, Cardamom, Sesame*, Peanut*, Black Pepper, Saffron, Chikoo, Cumin, Fennel, Lime, Lemon",
  "Ghee": "Cardamom, Saffron*, Black Pepper, Turmeric, Cumin, Pistachio, Almond, Aged Rum",
  "Kewra": "Rose*, Saffron*, Cardamom*, Milk, Cream, Pistachio, Gin, Lime, Sparkling Wine",
  "Ajwain": "Lime, Ginger, Gin*, Cumin, Black Pepper, Honey, Tonic, Celery, Kala Namak, Pineapple",
  "Boondi": "Saffron*, Cardamom*, Pistachio, Rose, Kewra, Milk, Cream, Yogurt*, Cumin, Kala Namak, Chili, Ghee",
  "Aamras": "Cardamom*, Saffron*, Ghee, Cream, Milk, Yogurt*, Ginger, Lime, Chili, Black Pepper, Coconut, Pistachio, Rose, White Rum",
  "Amla": "Kala Namak*, Ginger*, Honey*, Chili, Mint, Turmeric, Black Pepper, Gin, Lime, Soda, Gud, Cumin",
  "Jamun": "Kala Namak*, Cumin, Chili, Mint, Gin, Vodka, Black Pepper, Honey, Ginger",
  "Chikoo": "Cardamom*, Milk*, Cream, Vanilla, Cinnamon, Nutmeg, Coffee*, Chocolate, Coconut, Walnut, Almond, Bourbon",
  "Kala Namak": "Cumin*, Mint*, Pineapple, Mango, Tomato, Cucumber, Black Pepper, Gin, Chili",

  "Mint": "Cucumber*, Ginger*, Chocolate*, Yogurt*, Cumin, Lemon, Grapefruit, Peach, Lemongrass, Basil, Cilantro, Matcha, Cognac, Absinthe, Honey, Demerara*, Soda*, Imli, Paan, Chili, Simple Syrup*",
  "Basil": "Tomato*, Cucumber, Peach, Raspberry, Blackberry, Black Pepper, Elderflower Liqueur, Honey, Chili, Cherry",
  "Thai Basil": "Lemongrass*, Ginger, Chili, Coconut, Makrut Lime Leaf, Strawberry, Cucumber",
  "Rosemary": "Honey*, Maple, Fig, Ginger, Black Pepper, Olive, Sea Salt",
  "Thyme": "Honey*, Fig, Black Pepper, Dry Vermouth, Lemon",
  "Sage": "Honey, Maple, Brown Butter*, Ginger, Lemon",
  "Tarragon": "Peach, Tomato, Celery, Absinthe",
  "Dill": "Cucumber*, Celery, Tomato, Yogurt, Beetroot*, Fennel",
  "Cilantro": "Chili*, Cucumber, Ginger, Lemongrass, Tomato, Mint",
  "Shiso": "Ginger, Cucumber, Sesame, Lychee, Gin, Vodka",
  "Lemongrass": "Coconut*, Ginger*, Makrut Lime Leaf*, Chili, Honey, Gin, Vodka, White Rum",
  "Makrut Lime Leaf": "Ginger, Chili, Gin, Vodka, White Rum",
  "Bay Leaf": "Vanilla, Black Pepper, Clove, Gin, Cream",

  "Cinnamon": "Chocolate*, Coffee*, Vanilla*, Clove*, Nutmeg, Allspice, Star Anise, Cardamom, Ginger, Honey, Maple, Demerara, Masala Chai, Milk, Cream, Whole Egg, Walnut, Almond, Hibiscus*, Sweet Vermouth",
  "Clove": "Ginger, Allspice, Nutmeg, Star Anise, Vanilla, Honey, Falernum",
  "Nutmeg": "Whole Egg*, Cream*, Milk, Vanilla, Coffee",
  "Allspice": "Ginger, Demerara",
  "Star Anise": "Ginger, Vanilla, Chocolate, Coffee, Rhubarb, Gin",
  "Fennel": "Cardamom, Honey, Celery, Gin",
  "Cardamom": "Coffee*, Saffron*, Rose*, Pistachio*, Chocolate, Vanilla, Cinnamon, Ginger, Milk, Cream, Yogurt, Honey, Banana, Coconut, Guava, Blood Orange, Pomegranate, Rhubarb",
  "Black Pepper": "Pineapple, Cherry, Peach, Pear, Ginger, Honey, Maple, Chocolate, Vanilla, Tomato*, Celery, Turmeric*, Mango",
  "Pink Peppercorn": "Rose, Gin*, Vodka, Sparkling Wine, Lemon, Hibiscus",
  "Ginger": "Honey*, Turmeric*, Carrot*, Lemongrass*, Yuzu*, Pear*, Rhubarb*, Chili, Sesame, Miso, Chocolate, Matcha, Black Pepper",
  "Chili": "Chocolate*, Honey, Agave Syrup, Sea Salt, Tomato*, Cucumber, Bell Pepper",
  "Saffron": "Rose*, Orange Blossom, Honey, Pistachio*, Almond, Orange, Vanilla, Milk*, Cream, Yogurt, Lemon, Gin, Sparkling Wine",
  "Vanilla": "Hazelnut, Almond, Walnut, Maple, Honey, Demerara, Cream*, Milk, Whole Egg, Egg White, Brown Butter, Chocolate*, Coffee*, Rose, Lavender, Earl Grey, Chamomile, Black Pepper",
  "Cumin": "Tomato*, Cucumber, Yogurt*, Coriander Seed*, Carrot, Chili, Cilantro",
  "Coriander Seed": "Ginger, Carrot, Honey, Gin*",
  "Turmeric": "Honey, Milk*, Coconut*, Carrot, Ginger*, Black Pepper*",

  "Rose": "Pistachio*, Kewra*, Orange Blossom, Vanilla, Honey, Lemon, Pomegranate*, Rhubarb, Cherry, Watermelon, Mango, Chocolate, Almond, Cream, Milk, Yogurt, Sparkling Wine*, Pink Peppercorn, Hibiscus, Earl Grey, Khus, Elderflower Liqueur, Crème de Cassis, Fig",
  "Orange Blossom": "Apricot*, Almond*, Pistachio*, Honey*, Cream*, Egg White*, Gin*, Lemon, Lime, Soda",
  "Hibiscus": "Lime*, Ginger*, Cinnamon*, Orange, Pomegranate, Strawberry, Raspberry, Chili, Agave Syrup, Tequila Blanco*, Mezcal*, Gin, Rhubarb, Honey",
  "Lavender": "Lemon*, Honey*, Peach, Apricot, Vanilla, Earl Grey*, Chamomile, Gin*, Sparkling Wine",
  "Jasmine": "Lychee*, Peach, Pear, Yuzu, Lemon, Honey, Gin, Sparkling Wine",
  "Chamomile": "Honey*, Lemon*, Pear, Apricot, Vanilla, Lavender, Scotch*, Bourbon, Pisco, Gin, Elderflower Liqueur, Yellow Chartreuse",
  "Violet": "Maraschino*, Gin*, Lemon, Raspberry, Crème de Cassis, Sparkling Wine",

  "Almond": "Coffee, Honey, Fig, Pear, Coconut, Chikoo, Milk, Chocolate*, Fino Sherry*",
  "Pistachio": "Lemon, Honey, Chocolate, Vanilla, Milk, Cream, Yogurt, Matcha*",
  "Hazelnut": "Chocolate*, Coffee*, Vanilla, Pear, Banana, Orange, Maple, Brown Butter, Cream",
  "Walnut": "Maple*, Honey, Coffee, Chocolate, Cinnamon, Orange, Bourbon*",
  "Peanut": "Banana*, Chocolate*, Honey, Lime, Chili, Coconut, Maple, Sesame",
  "Sesame": "Honey*, Ginger, Yuzu, Miso*, Shiso, Matcha*, Chocolate, Banana, Coconut",

  "Earl Grey": "Gin*, Lemon*, Honey*, Lavender*, Vanilla, Milk, Cream, Egg White*, Rose, Orange, Cardamom, Chocolate, Scotch, Cognac, Sparkling Wine",
  "Black Tea": "Lemon*, Honey*, Milk, Orange, Cinnamon, Peach*, Demerara, Raspberry, Mint, Cardamom, Ginger",
  "Matcha": "Milk*, Cream, Honey, Yuzu*, Lemon, Mint, Ginger, Strawberry*, Sesame*, Pistachio*, Vanilla, Gin",
  "Lapsang Souchong": "Islay Scotch*, Mezcal*, Honey, Maple, Demerara, Orange, Grapefruit, Lemon, Cherry, Chocolate, Vanilla",
  "Coffee": "Chocolate*, Vanilla*, Cream*, Milk, Cinnamon*, Cardamom*, Orange*, Hazelnut*, Almond, Walnut, Banana*, Coconut, Chikoo, Maple, Demerara, Brown Butter, Vodka*, Aged Rum*, Fernet*, Crème de Cacao, Orange Liqueur, Whole Egg, Star Anise, Fig, Cherry, Nutmeg, Orange Bitters, Chocolate Bitters*, Miso",
  "Chocolate": "Orange*, Coffee*, Vanilla*, Cherry*, Raspberry*, Strawberry, Banana*, Pear*, Fig, Mint*, Chili*, Cinnamon, Cardamom, Star Anise, Ginger, Sea Salt*, Black Pepper, Hazelnut*, Almond, Peanut*, Walnut, Pistachio, Sesame, Coconut, Rose, Earl Grey, Lapsang Souchong, Mezcal*, Aged Rum*, Miso*, Maple, Brown Butter, Cream, Milk, Masala Chai, Chikoo, Gulkand, Paan, Green Chartreuse",

  "Simple Syrup": "Lime*, Lemon*, Mint, White Rum, Gin, Pisco, Absinthe, Egg White",
  "Demerara": "Aged Rum*, Bourbon*, Rye*, Angostura*, Lime, Lemon, Orange, Coffee, Banana, Cinnamon, Allspice, Cognac, Rhum Agricole, Cachaça*, Mint, Ginger, Black Tea, Lapsang Souchong, Imli, Masala Chai, Oloroso Sherry",
  "Honey": "Lemon*, Ginger*, Scotch*, Islay Scotch*, Bourbon*, Gin*, Chamomile*, Lavender*, Thyme*, Rosemary, Sage, Earl Grey*, Black Tea*, Yellow Chartreuse*, Bénédictine, Fig*, Apricot, Peach, Pear, Apple, Quince, Grapefruit, Orange, Yuzu*, Black Pepper, Saffron, Cardamom, Cinnamon, Clove, Orange Blossom, Rose, Walnut, Pistachio, Almond, Sesame*, Peanut, Chili, Turmeric, Amla*, Jamun, Ajwain, Masala Chai, Tequila Reposado, Mezcal, Apple Brandy, Cognac, Hibiscus, Lapsang Souchong, Matcha, Lemongrass, Yogurt*, Milk, Cream, Green Chartreuse, Jasmine, Blackberry, Fennel, Coriander Seed",
  "Maple": "Bourbon*, Rye, Apple Brandy*, Islay Scotch, Aged Rum, Apple*, Pear, Walnut*, Hazelnut, Banana, Coffee, Chocolate, Vanilla, Cinnamon, Ginger, Black Pepper, Brown Butter*, Sage, Rosemary, Lemon, Orange, Lapsang Souchong, Cream, Oloroso Sherry, Peanut, Angostura, Miso, Sea Salt",
  "Agave Syrup": "Tequila Blanco*, Tequila Reposado*, Mezcal, Lime*, Grapefruit, Chili, Hibiscus, Cucumber",

  "Cream": "Coffee*, Chocolate, Crème de Cacao*, Vanilla, Nutmeg*, Cinnamon, Cardamom, Saffron, Rose, Pistachio, Orange Blossom*, Strawberry*, Raspberry, Peach, Banana, Hazelnut, Maple, Earl Grey, Matcha, Masala Chai, Cognac, Gin, Aged Rum, Bourbon, Scotch, Chikoo, Aamras, Gulkand, Paan, Boondi, Kewra",
  "Milk": "Coffee, Masala Chai*, Saffron, Cardamom, Turmeric*, Cinnamon, Nutmeg, Vanilla, Chikoo*, Matcha*, Earl Grey, Rose, Pistachio, Kewra, Gulkand, Paan, Boondi, Aamras, Aged Rum, Bourbon, Cognac*, Gin, Honey, Chocolate",
  "Egg White": "Lemon*, Lime, Gin*, Pisco*, Bourbon, Scotch, Orange Blossom*, Earl Grey*, Raspberry, Honey, Simple Syrup, Angostura*, Gulkand",
  "Whole Egg": "Cognac*, Aged Rum*, Bourbon, Nutmeg*, Cinnamon, Vanilla, Coffee, Demerara, Cream, Maple",
  "Yogurt": "Mango*, Cardamom, Saffron, Rose, Honey*, Mint*, Cucumber*, Cumin*, Pistachio, Pomegranate, Peach, Strawberry, Dill, Lemon, Arak, Gin, Aamras, Boondi, Gulkand, Vodka",
  "Brown Butter": "Bourbon*, Aged Rum, Apple Brandy, Scotch, Maple*, Sage*, Apple, Pear, Banana, Vanilla, Hazelnut, Walnut, Coffee, Chocolate, Cinnamon, Sea Salt, Miso*",

  "Tomato": "Celery*, Lemon, Lime, Kala Namak, Dill, Cilantro, Olive, Fino Sherry, Gin, Bell Pepper, Cucumber, Sea Salt",
  "Cucumber": "Gin*, Lime*, Lemon, Basil, Shiso, Thai Basil, Celery, Tonic*, Soda, Chili, Sea Salt, Kala Namak, Khus, Tequila Blanco, Mezcal, Cachaça, Pisco, Green Chartreuse, Dry Vermouth, Fino Sherry, Tarragon, Lemongrass",
  "Celery": "Gin*, Black Pepper, Lemon, Lime, Apple, Cucumber, Fennel, Green Chartreuse, Mezcal, Tequila Blanco, Vodka, Dry Vermouth, Fino Sherry, Sea Salt, Rhum Agricole",
  "Beetroot": "Orange*, Ginger, Black Pepper, Mezcal, Gin, Vodka, Tequila Blanco, Lemon, Cumin, Blackberry",
  "Carrot": "Ginger*, Orange*, Cumin, Coriander Seed, Turmeric, Cardamom, Honey, Lemon, Tequila Blanco, Mezcal, Gin",
  "Bell Pepper": "Tequila Blanco, Mezcal, Gin, Chili, Tomato, Lime, Basil, Celery",
  "Olive": "Gin*, Vodka*, Dry Vermouth*, Fino Sherry*, Lemon, Orange, Rosemary, Thyme, Tomato",
  "Miso": "Chocolate*, Maple, Honey, Sesame*, Yuzu, Ginger, Banana, Coffee, Bourbon, Islay Scotch, Mezcal, Brown Butter*, Apple",
  "Sea Salt": "Chocolate*, Lime, Grapefruit*, Tequila Blanco*, Mezcal, Watermelon*, Guava, Maple, Brown Butter, Coffee, Cucumber, Celery, Tomato, Rosemary, Kokum, Chili, Islay Scotch",

  "Tonic": "Gin*, Lime, Lemon, Cucumber, Grapefruit*, Rosemary, Pink Peppercorn, Fino Sherry*, Cynar, Ajwain, Elderflower Liqueur, Orange",
  "Soda": "Campari*, Aperol*, Mint, Lime, Lemon, White Rum, Kokum*, Khus*, Aam Panna*, Imli, Amla, Cynar, Blanc Vermouth, Tequila Blanco, Scotch*, Bourbon",
  "Ginger Beer": "Vodka*, Aged Rum*, Lime*, Mint, Tequila Blanco, Mezcal, Bourbon, Pisco*, Crème de Cassis, Imli, Fernet, Apple Brandy, Cucumber",
  "Sparkling Wine": "Aperol*, Elderflower Liqueur*, Gin*, Cognac*, Peach*, Crème de Cassis*, Orange Liqueur, Campari, Lemon, Strawberry, Raspberry, Pomegranate, Absinthe*, Rose, Lavender, Jasmine, Saffron, Gulkand, Khus, Kewra, Yuzu, Maraschino, Pink Peppercorn, Violet, Earl Grey, Passion Fruit, Blood Orange, Grape",
  "Coconut Water": "White Rum*, Lime, Pineapple, Mint, Cachaça, Gin, Vodka, Khus, Ginger, Lemongrass, Watermelon, Arak",

  "Angostura": "Rye*, Bourbon*, Aged Rum*, Pisco*, Demerara*, Orange*, Lemon, Lime, Pineapple*, Sweet Vermouth*, Maple, Cinnamon, Clove, Tequila Reposado, Scotch, Cognac, Egg White, Bénédictine",
  "Orange Bitters": "Gin*, Dry Vermouth*, Orange, Rye, Tequila Reposado, Mezcal, Scotch, Fino Sherry, Grapefruit, Coffee, Chocolate, Bourbon",
  "Creole Bitters": "Rye*, Cognac*, Absinthe*, Bénédictine*, Lemon, Demerara, Star Anise, Cherry, Bourbon, Gin",
  "Chocolate Bitters": "Bourbon, Rye, Aged Rum, Tequila Reposado, Mezcal*, Coffee*, Orange, Cherry, Chili, Masala Chai, Fig, Sweet Vermouth, Cognac",
};

// added flavors
PAIRS["Juniper"] = "Lemon, Grapefruit*, Orange, Rosemary*, Thyme, Bay Leaf*, Black Pepper, Coriander Seed*, Cardamom, Cucumber, Apple, Blackberry*, Blackcurrant, Plum, Cherry, Pink Peppercorn, Sage, Lime, Gin*, Tonic*, Dry Vermouth";
PAIRS["Elderflower"] = "Lemon*, Amla, Strawberry*, Cucumber*, Pear*, Lychee, Mint, Rhubarb*, Peach, Apricot, Grapefruit, Rose, Chamomile, Raspberry, Lime, Honey, Yuzu, Gin*, Sparkling Wine*, Tequila Blanco";
PAIRS["Blackcurrant"] = "Mint*, Lemon, Rose, Violet*, Raspberry, Blackberry, Apple, Star Anise*, Vanilla, Chocolate, Ginger, Cream, Thyme, Sparkling Wine*, Gin, Tequila Blanco*";
PAIRS["Caramel"] = "Sea Salt*, Banana*, Apple*, Pear, Coffee*, Chocolate, Vanilla*, Cream*, Hazelnut, Walnut, Peanut*, Almond, Cinnamon, Ginger, Orange, Miso*, Brown Butter, Fig, Chikoo, Bourbon*, Aged Rum*, Cognac, Scotch";

// expanded flavors
PAIRS["Mandarin"] = "Ginger, Vanilla, Chocolate*, Cinnamon, Star Anise, Cardamom, Honey, Almond, Sichuan Pepper, Sparkling Wine, Gin, Aged Rum, Cognac, Campari";
PAIRS["Bergamot"] = "Black Tea*, Earl Grey*, Lavender, Honey, Vanilla, Rose, Gin*, Lemon, Orange Blossom, Chocolate";
PAIRS["Kumquat"] = "Ginger, Honey, Vanilla, Cinnamon, Star Anise, Cardamom, Chocolate, Lime, Gin, Bourbon, Aged Rum";
PAIRS["Calamansi"] = "Lime, Honey, Ginger, Lemongrass, Chili, Coconut, Mango, Pandan, Gin, White Rum, Tequila Blanco*";
PAIRS["Pomelo"] = "Chili, Mint, Cilantro, Coconut, Lime, Shiso, Ginger, Gin, Tequila Blanco";
PAIRS["Cranberry"] = "Orange*, Lime*, Cinnamon, Clove, Ginger, Apple, Pear, Maple, Vanilla, Rosemary, Pistachio, Vodka*, Gin, Bourbon, Orange Liqueur*";
PAIRS["Sumac"] = "Lemon, Pomegranate*, Mint, Cucumber, Yogurt, Strawberry, Watermelon, Sesame, Thyme, Gin, Mezcal, Tequila Blanco";
PAIRS["Sour Cherry"] = "Almond*, Chocolate*, Vanilla, Pistachio, Cardamom, Rose, Bourbon*, Rye, Cognac, Maraschino*";
PAIRS["Gooseberry"] = "Elderflower*, Cream, Ginger, Honey, Mint, Vanilla, Gin*, Sparkling Wine";
PAIRS["Verjus"] = "Grape, Honey, Thyme, Pear, Fennel, Gin, Pisco, Blanc Vermouth";
PAIRS["Umeboshi"] = "Shiso*, Plum, Honey, Sesame, Cucumber, Ginger, Yuzu, Gin, Vodka";
PAIRS["Sea Buckthorn"] = "Honey*, Orange, Ginger, Vanilla, Thyme, Juniper, Carrot, Gin, Vodka";
PAIRS["Barberry"] = "Saffron*, Pistachio, Rose, Orange Blossom, Pomegranate, Honey, Gin, Arak";
PAIRS["Parsley"] = "Lemon*, Mint, Cucumber, Celery, Tomato, Dill, Gin, Mezcal";
PAIRS["Lemon Verbena"] = "Peach*, Strawberry, Raspberry, Apricot, Honey, Mint, Cream, Gin*, Vodka, Pisco, Sparkling Wine";
PAIRS["Lemon Balm"] = "Peach, Strawberry, Honey, Mint, Elderflower, Cucumber, Gin, Vodka";
PAIRS["Sorrel"] = "Cucumber, Strawberry, Apple, Pear, Rhubarb, Honey, Gin*, Vodka";
PAIRS["Chervil"] = "Tarragon, Lemon, Cucumber, Gin";
PAIRS["Lovage"] = "Celery*, Tomato, Cucumber, Lemon, Gin, Vodka";
PAIRS["Angelica"] = "Rhubarb*, Juniper*, Gin*, Orange, Coriander Seed";
PAIRS["Pandan"] = "Coconut*, Gud, Palm Sugar*, Lime, Lemongrass, Mango, Banana, Vanilla, Milk, White Rum*, Aged Rum, Gin";
PAIRS["Oregano"] = "Tomato*, Lemon, Olive, Chili, Watermelon, Mezcal";
PAIRS["Marjoram"] = "Lemon, Orange, Tomato, Honey, Gin";
PAIRS["Pine"] = "Juniper*, Honey, Lemon, Grapefruit, Maple, Apple, Rosemary, Gin*, Scotch";
PAIRS["Hops"] = "Grapefruit*, Lemon, Orange, Honey, Ginger, Pine, Gin, Tequila Blanco";
PAIRS["Wormwood"] = "Fennel, Star Anise, Mint, Honey, Lemon, Sweet Vermouth*, Absinthe*, Gin";
PAIRS["Gentian"] = "Orange*, Grapefruit, Lemon, Honey, Dry Vermouth, Gin, Tequila Blanco";
PAIRS["Mastic"] = "Rose, Pistachio*, Orange Blossom, Cardamom, Honey, Lemon, Arak, Gin";
PAIRS["Cedar"] = "Maple, Honey, Apple, Orange, Bourbon*, Scotch, Mezcal";
PAIRS["Osmanthus"] = "Apricot*, Peach, Oolong*, Honey, Pear, Lychee, Gin, Vodka, Sparkling Wine";
PAIRS["Rose Geranium"] = "Raspberry*, Strawberry, Blackberry, Lemon, Rose, Cream, Gin";
PAIRS["Sakura"] = "Matcha*, Strawberry, Almond, White Chocolate, Yuzu, Gin, Vodka, Sparkling Wine";
PAIRS["Butterfly Pea"] = "Lemon*, Lime*, Lemongrass, Coconut, Honey, Gin*, Tonic*";
PAIRS["Heather"] = "Honey*, Oat, Apple, Blackberry, Scotch*";
PAIRS["Mahua"] = "Gud, Saffron, Cardamom, Honey, Lime, Ginger, Gin, Aged Rum";
PAIRS["Nectarine"] = "Basil, Thyme, Ginger, Raspberry, Almond, Vanilla, Honey, Lavender, Bourbon, Sparkling Wine*";
PAIRS["Persimmon"] = "Cinnamon, Ginger, Vanilla, Pomegranate, Pecan, Walnut, Maple, Cardamom, Bourbon, Rye";
PAIRS["Date"] = "Cardamom*, Orange, Coffee, Sesame, Sesame, Walnut, Almond, Cinnamon, Vanilla, Pecan, Bourbon*, Aged Rum, Scotch";
PAIRS["Prune"] = "Cognac, Cognac*, Earl Grey*, Black Tea, Orange, Chocolate, Walnut, Vanilla, Cinnamon, Bourbon";
PAIRS["Raisin"] = "Cinnamon, Aged Rum, Aged Rum*, Walnut, Oat, Orange, Saffron, Cardamom, Apple, Oloroso Sherry*";
PAIRS["Nashi Pear"] = "Ginger*, Shiso, Yuzu, Honey, Lemongrass, Gin, Vodka";
PAIRS["Blueberry"] = "Lemon*, Lavender, Vanilla, Cinnamon, Maple, Thyme, Basil, Mint, Ginger, Cream, Gin, Bourbon, Vodka";
PAIRS["Redcurrant"] = "Raspberry*, Mint, Rose, Vanilla, Cream, Sparkling Wine, Gin";
PAIRS["Mulberry"] = "Lemon, Vanilla, Rose, Cardamom, Mint, Gin, Vodka";
PAIRS["Elderberry"] = "Apple*, Blackberry, Lemon, Ginger, Clove, Cinnamon, Star Anise, Gin, Bourbon";
PAIRS["Sloe"] = "Almond*, Gin*, Lemon, Sparkling Wine, Vanilla, Cinnamon";
PAIRS["Lingonberry"] = "Apple, Cinnamon, Cardamom, Juniper*, Vanilla, Cream, Gin, Vodka";
PAIRS["Phalsa"] = "Kala Namak*, Cumin, Mint, Lime, Black Pepper, Gin, Tequila Blanco";
PAIRS["Cantaloupe"] = "Mint*, Basil, Lime, Ginger, Black Pepper, Lemon, Vanilla, Sea Salt, Gin, Tequila Blanco, Sparkling Wine";
PAIRS["Honeydew"] = "Mint*, Lime*, Cucumber, Ginger, Basil, Lemongrass, Gin, Vodka, Tequila Blanco";
PAIRS["Kiwi"] = "Lime, Mint, Strawberry, Banana, Ginger, Coconut, Vodka, White Rum, Tequila Blanco";
PAIRS["Dragon Fruit"] = "Lime*, Lychee, Coconut, Mint, Passion Fruit, Ginger, Vodka, Tequila Blanco, White Rum";
PAIRS["Jackfruit"] = "Coconut*, Cardamom, Gud, Banana, Pandan, Vanilla, White Rum, Aged Rum";
PAIRS["Starfruit"] = "Lime, Ginger, Chili, Mint, Kala Namak, Coconut, White Rum, Gin";
PAIRS["Sitaphal"] = "Cardamom*, Milk*, Cream, Vanilla, Lime, Pistachio, Rose, Coconut, White Rum, Cognac";
PAIRS["Soursop"] = "Lime*, Coconut, Vanilla, Cinnamon, Nutmeg, Milk, White Rum*, Aged Rum";
PAIRS["Feijoa"] = "Ginger, Lime, Vanilla, Honey, Mint, Gin, Vodka";
PAIRS["Bael"] = "Gud*, Cardamom, Kala Namak, Cumin, Mint, Milk, Lime, Aged Rum";
PAIRS["Mace"] = "Nutmeg, Cinnamon, Cream, Milk, Orange, Apple, Cognac, Aged Rum";
PAIRS["Anise Seed"] = "Fennel, Fig, Orange, Lemon, Almond, Chocolate, Coffee, Arak*, Absinthe*";
PAIRS["Caraway"] = "Apple, Orange, Rye, Dill, Juniper, Honey, Gin, Vodka";
PAIRS["Licorice"] = "Blackcurrant*, Chocolate, Mint, Lemon, Raspberry, Vanilla, Fennel, Star Anise, Gin, Bourbon";
PAIRS["Tonka Bean"] = "Chocolate*, Coffee*, Vanilla, Cherry, Apricot, Cream, Maple, Bourbon*, Aged Rum, Cognac";
PAIRS["Garam Masala"] = "Gud, Ghee, Chocolate, Apple, Pear, Orange, Coconut, Bourbon, Aged Rum";
PAIRS["Mahlab"] = "Cherry*, Almond, Orange Blossom, Rose, Pistachio, Apricot";
PAIRS["Thandai"] = "Milk*, Saffron*, Rose, Pistachio, Almond, Fennel, Cardamom, Black Pepper, Vodka, Cognac";
PAIRS["Long Pepper"] = "Honey, Ginger, Chocolate, Orange, Pear, Rye, Bourbon";
PAIRS["Grains of Paradise"] = "Lemon, Orange, Ginger, Cardamom, Gin*";
PAIRS["Sansho"] = "Yuzu*, Ginger, Sesame, Shiso, Plum, Miso, Gin, Vodka";
PAIRS["Sichuan Pepper"] = "Chili*, Orange, Ginger, Star Anise, Chocolate, Honey, Plum, Sesame, Mezcal, Gin";
PAIRS["Wasabi"] = "Cucumber*, Shiso, Ginger, Lime, Yuzu, Pickle Brine, Vodka, Gin";
PAIRS["Horseradish"] = "Tomato*, Beetroot*, Apple, Celery, Dill, Lemon, Vodka*";
PAIRS["Mustard Seed"] = "Kadi Patta*, Honey, Apple, Turmeric, Dill, Coconut, Lemon";
PAIRS["Fenugreek"] = "Gud, Maple, Coconut, Cumin, Turmeric, Ghee, Tomato";
PAIRS["Nigella"] = "Lemon, Cucumber, Yogurt, Honey, Orange, Sesame, Gin";
PAIRS["Galangal"] = "Lemongrass*, Makrut Lime Leaf*, Coconut*, Lime, Chili, Thai Basil, Gin, White Rum";
PAIRS["Chipotle"] = "Chocolate*, Lime, Orange, Pineapple, Mango, Honey, Agave Syrup, Mezcal*, Tequila Reposado, Bourbon";
PAIRS["Smoked Paprika"] = "Tomato, Orange, Honey, Chocolate, Sea Salt, Mezcal, Fino Sherry";
PAIRS["Hing"] = "Cumin*, Kala Namak*, Tur Daal*, Ghee, Chhans, Ginger";
PAIRS["Chaat Masala"] = "Kala Namak*, Amchur*, Cumin*, Guava*, Pineapple*, Watermelon, Mango, Lime, Tomato, Tequila Blanco, Gin, Mezcal";
PAIRS["Cacao Nib"] = "Coffee*, Vanilla, Orange, Cherry, Hazelnut, Banana, Chili, Bourbon*, Aged Rum, Mezcal, Rye";
PAIRS["Rooibos"] = "Vanilla*, Honey, Orange, Cinnamon, Cardamom, Milk, Bourbon, Aged Rum";
PAIRS["Hojicha"] = "Milk*, Honey, Vanilla, Maple, Chocolate, Sesame, Scotch, Bourbon, Aged Rum";
PAIRS["Oolong"] = "Peach*, Osmanthus*, Honey, Lychee, Ginger, Gin, Scotch, Cognac";
PAIRS["Chicory"] = "Coffee*, Orange, Chocolate, Milk, Honey, Bourbon, Aged Rum";
PAIRS["Malt"] = "Chocolate*, Banana, Vanilla, Milk, Coffee, Honey, Scotch*, Bourbon";
PAIRS["Genmaicha"] = "Honey, Milk, Sesame, Yuzu, Scotch, Scotch, Gin";
PAIRS["Pecan"] = "Maple*, Bourbon*, Caramel*, Vanilla, Cinnamon, Banana, Coffee, Chocolate, Apple, Pear, Sweet Potato, Aged Rum";
PAIRS["Cashew"] = "Coconut, Cardamom, Saffron, Rose, Mango, Lime, Chili, Gud, White Rum, Aged Rum";
PAIRS["Chestnut"] = "Chocolate*, Vanilla, Cream, Maple, Orange, Coffee, Pear, Apple, Cognac*, Bourbon, Aged Rum";
PAIRS["Macadamia"] = "Coconut*, Pineapple, White Chocolate, Mango, Banana, Vanilla, Aged Rum, White Rum";
PAIRS["Pine Nut"] = "Basil*, Honey, Raisin, Orange, Rosemary, Pear, Gin";
PAIRS["Black Sesame"] = "Honey*, Milk, Matcha, Banana, Chocolate, Vanilla, Coconut, Scotch, Aged Rum";
PAIRS["Oat"] = "Honey*, Cinnamon, Apple, Banana, Raisin, Maple, Milk, Scotch*, Bourbon";
PAIRS["Buckwheat"] = "Honey, Apple, Chocolate, Maple, Cream, Rye, Scotch";
PAIRS["Corn"] = "Lime*, Chili*, Butter, Honey, Coconut, Vanilla, Cilantro, Mezcal*, Bourbon*, Tequila Blanco";
PAIRS["Molasses"] = "Ginger*, Cinnamon, Clove, Allspice, Orange, Coffee, Aged Rum*, Bourbon, Rye";
PAIRS["Butterscotch"] = "Banana*, Apple, Pecan, Sea Salt, Vanilla, Coffee, Scotch*, Bourbon, Aged Rum";
PAIRS["Dulce de Leche"] = "Banana*, Coffee, Coconut, Chocolate, Cinnamon, Sea Salt, Aged Rum, Pisco, Bourbon";
PAIRS["Palm Sugar"] = "Coconut*, Pandan*, Lime, Lemongrass, Chili, Imli, Banana, Aged Rum, White Rum";
PAIRS["Cr\u00e8me Fra\u00eeche"] = "Strawberry, Raspberry, Peach, Apple, Vanilla, Honey, Cognac";
PAIRS["Condensed Milk"] = "Coffee*, Coconut, Lime, Cardamom, Chocolate, Banana, Aged Rum, Cognac";
PAIRS["Kefir"] = "Honey, Cucumber, Mint, Dill, Vodka";
PAIRS["Butter"] = "Honey, Maple, Cinnamon, Vanilla, Corn, Sea Salt, Aged Rum*, Bourbon";
PAIRS["White Chocolate"] = "Raspberry*, Matcha*, Passion Fruit, Lime, Cardamom, Pistachio, Coconut, Macadamia, Strawberry, Vodka, Gin";
PAIRS["Mascarpone"] = "Coffee*, Fig, Honey, Strawberry, Vanilla, Lemon, Cognac";
PAIRS["Rabri"] = "Saffron*, Cardamom*, Pistachio, Rose, Kewra, Almond, Cognac, Aged Rum";
PAIRS["Mushroom"] = "Thyme, Miso, Sage, Rosemary, Maple, Oloroso Sherry, Bourbon, Scotch, Mezcal";
PAIRS["Sweet Potato"] = "Cinnamon*, Maple*, Pecan, Ginger, Orange, Brown Butter, Vanilla, Bourbon*, Aged Rum";
PAIRS["Pumpkin"] = "Cinnamon*, Nutmeg*, Ginger, Clove, Maple, Brown Butter, Sage, Pecan, Cream, Bourbon*, Aged Rum, Apple Brandy";
PAIRS["Avocado"] = "Lime*, Cilantro, Chili, Cucumber, Coconut, Tequila Blanco*, Mezcal";
PAIRS["Fennel Bulb"] = "Orange*, Apple, Grapefruit, Lemon, Celery, Cucumber, Gin, Absinthe";
PAIRS["Radish"] = "Cucumber, Lime, Chili, Mint, Sea Salt, Butter, Gin, Mezcal";
PAIRS["Parsnip"] = "Maple, Honey, Ginger, Cardamom, Apple, Pear, Nutmeg, Bourbon";
PAIRS["Amchur"] = "Chaat Masala*, Kala Namak*, Cumin, Mango, Pineapple, Chili, Mint, Tequila Blanco";
PAIRS["Seaweed"] = "Miso*, Sesame, Ginger, Cucumber, Yuzu, Lime, Islay Scotch*, Mezcal, Gin";
PAIRS["Caper"] = "Lemon*, Olive, Tomato, Dill, Celery, Gin, Vodka";
PAIRS["Pickle Brine"] = "Dill*, Cucumber, Chili, Celery, Tomato, Vodka*, Gin, Mezcal";
PAIRS["Soy Sauce"] = "Ginger, Honey, Maple, Sesame, Chili, Caramel, Bourbon, Scotch";
PAIRS["Smoked Salt"] = "Chocolate*, Caramel*, Grapefruit, Lime, Watermelon, Mezcal*, Bourbon, Tequila Blanco";

// savoury kitchen
PAIRS["Goat Cheese"] = "Thyme*, Honey*, Fig*, Beetroot*, Lemon, Black Pepper, Walnut, Pear, Apple, Rosemary, Lavender, Cherry, Strawberry, Basil, Olive, Gin*, Vodka, Blanc Vermouth";
PAIRS["Parmesan"] = "Black Pepper*, Pear*, Fig, Honey, Tomato, Basil, Walnut, Mushroom, Olive, Fino Sherry*, Dry Vermouth, Gin, Vodka";
PAIRS["Blue Cheese"] = "Pear*, Honey*, Walnut*, Fig, Apple, Celery, Oloroso Sherry*, Bourbon, Scotch";
PAIRS["Feta"] = "Watermelon*, Mint*, Cucumber, Olive, Oregano, Tomato, Lemon, Honey, Gin, Arak";
PAIRS["Ricotta"] = "Honey*, Lemon, Fig, Pistachio, Orange Blossom, Strawberry, Vanilla, Cognac";
PAIRS["Brie"] = "Apple, Pear, Honey, Cranberry, Walnut, Fig, Sparkling Wine*, Apple Brandy";
PAIRS["Cheddar"] = "Apple*, Pear, Walnut, Maple, Bourbon, Scotch, Apple Brandy*";
PAIRS["Paneer"] = "Cumin, Chili, Kadi Patta, Mint, Lime, Tomato, Kala Namak, Gin";
PAIRS["Rice"] = "Coconut*, Cardamom, Saffron, Milk, Pandan, Vanilla, Mango*, Sesame, White Rum, Scotch";
PAIRS["Barley"] = "Lemon*, Honey, Orange, Miso, Mushroom, Scotch*, Bourbon";
PAIRS["Sourdough"] = "Butter*, Honey, Tomato, Olive, Miso, Rye, Scotch";
PAIRS["Popcorn"] = "Butter*, Caramel*, Sea Salt, Chili, Maple, Bourbon*, Aged Rum";
PAIRS["Chickpea"] = "Cumin*, Lemon, Sesame, Chili, Tomato, Coriander Seed, Turmeric, Gin";
PAIRS["Green Pea"] = "Mint*, Lemon, Basil, Butter, Cream, Shiso, Gin*, Vodka";
PAIRS["Moong Daal"] = "Ghee*, Cumin, Turmeric, Ginger, Coconut, Gud, Lime";
PAIRS["Besan"] = "Ghee*, Cardamom*, Gud, Saffron, Ajwain, Pistachio, Cognac";
PAIRS["Bacon"] = "Maple*, Bourbon*, Coffee, Chocolate, Apple, Demerara, Black Pepper, Mezcal, Rye";
PAIRS["Prosciutto"] = "Cantaloupe, Cantaloupe*, Fig*, Pear, Peach, Black Pepper, Fino Sherry, Gin";
PAIRS["Olive Oil"] = "Lemon*, Rosemary, Basil, Tomato, Orange, Sea Salt, Chocolate, Gin*, Vodka, Mezcal";
PAIRS["Coconut Oil"] = "Lime, Pineapple, Lemongrass, Banana, Aged Rum*, White Rum";
PAIRS["Sesame Oil"] = "Ginger, Honey, Soy Sauce, Yuzu, Lime, Scotch, Bourbon";
PAIRS["Garlic"] = "Tomato, Chili, Lemon, Olive Oil, Rosemary, Thyme, Vodka";
PAIRS["Black Garlic"] = "Chocolate, Coffee, Honey, Miso, Fig, Bourbon, Scotch";
PAIRS["Shallot"] = "Thyme, Tomato, Celery, Dry Vermouth, Vodka";
PAIRS["Leek"] = "Butter, Thyme, Cream, Mushroom, Miso";
PAIRS["Eggplant"] = "Miso*, Sesame, Tomato, Mint, Yogurt, Chili, Pomegranate, Mezcal";
PAIRS["Zucchini"] = "Mint, Basil, Lemon, Dill, Gin";
PAIRS["Asparagus"] = "Lemon*, Butter, Mint, Tarragon, Parmesan, Gin, Blanc Vermouth";
PAIRS["Artichoke"] = "Lemon*, Mint, Thyme, Olive Oil, Cynar*, Gin";
PAIRS["Truffle"] = "Honey*, Mushroom, Cream, Butter, Parmesan, Chocolate, Cognac, Bourbon, Scotch";
PAIRS["Fish Sauce"] = "Lime*, Palm Sugar*, Chili, Lemongrass, Cilantro, Mango, Pineapple, Tequila Blanco, Mezcal";
PAIRS["Tur Daal"] += ", Tonic*, Gin, Kadi Patta";

// kitchen round two
PAIRS["Kimchi"] = "Gochujang*, Sesame, Ginger, Pear, Apple, Lime, Cucumber, Vodka*, Gin, Tequila Blanco";
PAIRS["Gochujang"] = "Honey*, Sesame, Ginger, Pear, Lime, Pineapple, Mango, Mezcal, Bourbon, Tequila Blanco";
PAIRS["Kombucha"] = "Ginger*, Lemon, Hibiscus, Raspberry, Mint, Turmeric, Gin, Vodka, Tequila Blanco";
PAIRS["Achaar"] = "Mango*, Lime*, Mustard Seed*, Fenugreek, Chili, Kala Namak, Gin, Tequila Blanco, Mezcal";
PAIRS["Preserved Lemon"] = "Olive*, Honey, Thyme, Cumin, Mint, Saffron, Cucumber, Gin*, Vodka, Tequila Blanco";
PAIRS["Balsamic"] = "Strawberry*, Fig*, Black Pepper, Basil, Cherry, Parmesan, Tomato, Peach, Bourbon, Gin";
PAIRS["Apple Cider Vinegar"] = "Apple*, Honey*, Ginger, Maple, Cinnamon, Blackberry, Peach, Thyme, Bourbon, Apple Brandy*";
PAIRS["Black Vinegar"] = "Ginger*, Sichuan Pepper, Sesame, Chili, Honey, Plum, Scotch, Rye";
PAIRS["Yuzu Kosho"] = "Yuzu*, Cucumber, Honey, Shiso, Lime, Gin, Tequila Blanco, Vodka";
PAIRS["Pickled Onion"] = "Dry Vermouth*, Gin*, Vodka, Celery, Black Pepper, Dill";
PAIRS["Tepache"] = "Pineapple*, Cinnamon*, Clove, Demerara, Lime, Chili, Mezcal*, Tequila Blanco, Aged Rum";
PAIRS["Marzipan"] = "Cherry*, Orange, Apricot, Chocolate, Rose, Plum, Cognac, Aged Rum, Maraschino";
PAIRS["Halva"] = "Pistachio, Date, Coffee, Chocolate, Orange Blossom, Cardamom, Arak, Bourbon";
PAIRS["Brioche"] = "Butter, Vanilla, Orange, Caramel, Chocolate, Cognac, Bourbon";
PAIRS["Honeycomb"] = "Chocolate, Vanilla, Sea Salt, Scotch, Bourbon";
PAIRS["Cereal Milk"] = "Vanilla, Honey, Banana, Malt, Bourbon, Aged Rum";
PAIRS["Horchata"] = "Cinnamon*, Vanilla, Coffee, Almond, Aged Rum*, Tequila Reposado, Mezcal";
PAIRS["Red Bean"] = "Matcha*, Sesame, Coconut, Milk, Vanilla, Chestnut, Scotch, Aged Rum";
PAIRS["Ube"] = "Coconut*, Condensed Milk, Vanilla, Pandan, White Rum, Aged Rum";
PAIRS["Gulab Jamun"] = "Rose*, Cardamom*, Saffron, Pistachio, Kewra, Cognac, Aged Rum, Bourbon";
PAIRS["Kulfi"] = "Pistachio*, Cardamom*, Saffron, Rose, Mango, Kewra, Cognac, Aged Rum";
PAIRS["Shrikhand"] = "Saffron*, Cardamom*, Mango, Pistachio, Nutmeg, Gin, Vodka";
PAIRS["Marshmallow"] = "Chocolate*, Vanilla, Coffee, Bourbon, Aged Rum";
PAIRS["Tomatillo"] = "Cilantro*, Lime*, Chili, Avocado, Cucumber, Mezcal*, Tequila Blanco*";
PAIRS["Pomegranate Molasses"] = "Walnut*, Sumac, Mint, Orange, Rose, Bourbon, Rye, Arak";
PAIRS["Jaljeera"] = "Mint*, Cumin*, Kala Namak*, Lime, Imli, Ginger, Soda*, Gin, Tequila Blanco, Vodka";
PAIRS["Epazote"] = "Corn, Chili, Lime, Tomato, Mezcal*, Tequila Blanco";
PAIRS["Hoja Santa"] = "Chocolate, Corn, Lime, Mezcal*, Tequila Blanco";
PAIRS["Za'atar"] = "Lemon*, Olive Oil, Honey, Yogurt, Tomato, Cucumber, Gin*, Arak";
PAIRS["Mole"] = "Chocolate*, Chipotle, Cinnamon, Orange, Sesame, Mezcal*, Tequila Reposado, Bourbon";
PAIRS["Tahini"] = "Date*, Honey*, Chocolate, Lemon, Banana, Coffee, Halva, Bourbon, Aged Rum";
PAIRS["Puffed Rice"] = "Imli, Chaat Masala*, Cilantro, Lime, Chili, Gud, Tequila Blanco, Scotch";
PAIRS["Potato"] = "Dill, Butter, Sea Salt, Rosemary, Vodka*";
PAIRS["Rasam"] = "Imli*, Tomato*, Black Pepper*, Cumin, Kadi Patta*, Garlic, Hing, Gin, Mezcal, Vodka";
PAIRS["Celeriac"] = "Apple, Truffle, Walnut, Hazelnut, Brown Butter, Gin";
PAIRS["Sol Kadhi"] = "Kokum*, Coconut*, Garlic, Chili, Cilantro, Gin, Vodka, White Rum";
PAIRS["Oyster"] = "Lemon*, Cucumber, Seaweed, Black Pepper, Fino Sherry*, Dry Vermouth, Gin*, Vodka, Islay Scotch*";
PAIRS["Clam"] = "Tomato*, Celery, Lime, Chili, Vodka*, Tequila Blanco, Mezcal";
PAIRS["Bone Marrow"] = "Fino Sherry*, Oloroso Sherry, Bourbon, Scotch, Mezcal";

// round four
PAIRS["Key Lime"] = "Coconut*, Graham Cracker*, Condensed Milk*, Vanilla, Mint, Ginger, White Rum*, Tequila Blanco, Gin";
PAIRS["Meyer Lemon"] = "Thyme*, Rosemary, Honey*, Lavender, Vanilla, Ginger, Olive Oil, Ricotta, Gin*, Vodka, Sparkling Wine";
PAIRS["Finger Lime"] = "Oyster*, Cucumber, Coconut, Chili, Gin*, Tequila Blanco, Sparkling Wine";
PAIRS["Sudachi"] = "Shiso, Soy Sauce, Ginger, Honey, Sansho, Gin, Vodka";
PAIRS["Bitter Orange"] = "Clove, Cinnamon, Demerara, Scotch, Scotch*, Bourbon, Rye*, Campari*, Gin, Chocolate";
PAIRS["Citron"] = "Honey, Ginger, Vanilla, Gin, Vodka, Sparkling Wine";
PAIRS["Mosambi"] = "Kala Namak*, Mint*, Ginger, Cumin, Chaat Masala, Soda, Gin, Vodka";
PAIRS["Gondhoraj"] = "Kala Namak, Mint, Ginger, Coconut, Soda*, Gin*, Vodka";
PAIRS["Loomi"] = "Cardamom*, Saffron, Honey, Black Tea*, Date, Mezcal*, Rye, Gin";
PAIRS["Kairi"] = "Kala Namak*, Chili*, Cumin, Mint, Gud, Gud, Mustard Seed, Tequila Blanco*, Gin, Mezcal";
PAIRS["Aloo Bukhara"] = "Saffron, Cardamom, Rose, Gud, Black Pepper, Cognac, Aged Rum";
PAIRS["Rosehip"] = "Hibiscus*, Honey, Apple, Orange, Cinnamon, Vanilla, Gin";
PAIRS["Hawthorn"] = "Honey, Apple, Ginger, Cinnamon, Aged Rum, Cognac";
PAIRS["Tamarillo"] = "Chili, Vanilla, Honey, Ginger, Cinnamon, Aged Rum, Tequila Blanco";
PAIRS["Karonda"] = "Kala Namak, Gud, Chili, Mint, Gin, Vodka";
PAIRS["Pani Puri Water"] = "Imli*, Mint*, Cumin*, Kala Namak*, Chili, Cilantro, Boondi, Tequila Blanco*, Gin, Vodka*";
PAIRS["Shikanji"] = "Lemon*, Kala Namak*, Cumin*, Mint*, Ginger, Soda*, Gin*, Vodka, White Rum";
PAIRS["Tulsi"] = "Ginger*, Honey*, Lemon, Black Pepper, Cardamom, Black Tea, Gin, White Rum";
PAIRS["Kasuri Methi"] = "Butter, Cream, Tomato, Ghee, Cumin, Garam Masala";
PAIRS["Vietnamese Mint"] = "Lime*, Chili, Lemongrass, Fish Sauce, Cucumber, Gin, White Rum";
PAIRS["Culantro"] = "Lime*, Chili, Tomato, Mango, Tequila Blanco, Aged Rum";
PAIRS["Lemon Thyme"] = "Honey*, Peach, Apricot, Blueberry, Lemon, Gin*, Vodka";
PAIRS["Pineapple Sage"] = "Pineapple*, Lime, Honey, Mezcal, White Rum, Gin";
PAIRS["Hyssop"] = "Apricot, Honey, Lemon, Absinthe*, Gin*, Green Chartreuse";
PAIRS["Woodruff"] = "Strawberry*, Sparkling Wine*, Lemon, Vanilla, Gin";
PAIRS["Nettle"] = "Honey, Lemon, Elderflower, Mint, Gin, Vodka";
PAIRS["Green Chili"] = "Lime*, Cilantro*, Mango, Cucumber, Pineapple, Kala Namak, Coconut, Tequila Blanco*, Mezcal, Gin";
PAIRS["Sandalwood"] = "Rose, Saffron, Cardamom, Milk, Vanilla, Honey, Kewra, Gin, Cognac";
PAIRS["Oak"] = "Vanilla*, Caramel, Maple, Cherry, Bourbon*, Scotch, Cognac";
PAIRS["Cinchona"] = "Orange*, Lemon, Lemongrass, Allspice, Gin*, Tonic";
PAIRS["Birch"] = "Maple, Honey, Juniper, Lingonberry, Vodka, Gin";
PAIRS["Sarsaparilla"] = "Vanilla*, Licorice, Cream, Bourbon*, Aged Rum";
PAIRS["Tobacco"] = "Vanilla*, Maple, Coffee, Chocolate, Cherry, Bourbon*, Rye, Aged Rum, Cognac";
PAIRS["Honeysuckle"] = "Peach, Lemon, Strawberry, Honey, Gin*, Vodka, Sparkling Wine";
PAIRS["Linden"] = "Honey*, Pear, Peach, Chamomile, Lemon, Gin, Apple Brandy, Sparkling Wine";
PAIRS["Lotus"] = "Jasmine, Pandan, Coconut, Lychee, Matcha, Gin, Vodka";
PAIRS["Chrysanthemum"] = "Honey*, Goji, Pear, Ginger, Gin";
PAIRS["Meadowsweet"] = "Strawberry, Rhubarb, Honey, Cream, Elderflower, Gin";
PAIRS["Marigold"] = "Saffron, Turmeric, Orange, Honey, Mezcal, Gin";
PAIRS["Loquat"] = "Ginger, Vanilla, Almond, Honey, Cardamom, Gin, Pisco";
PAIRS["Greengage"] = "Almond, Vanilla, Ginger, Elderflower, Gin, Cognac";
PAIRS["Damson"] = "Almond, Cinnamon, Gin*, Chocolate";
PAIRS["Mirabelle"] = "Vanilla, Almond, Honey, Thyme, Cognac, Sparkling Wine";
PAIRS["Jujube"] = "Ginger, Honey, Cinnamon, Kala Namak, Gud, Chili";
PAIRS["White Peach"] = "Sparkling Wine*, Jasmine, Rose, Lemon Verbena, Vanilla, Gin";
PAIRS["Cloudberry"] = "Cream, Vanilla, Honey, Gin, Vodka";
PAIRS["Bilberry"] = "Vanilla, Cream, Lemon, Juniper, Gin, Vodka";
PAIRS["Aronia"] = "Apple, Honey, Cinnamon, Vanilla, Gin, Vodka";
PAIRS["Goji"] = "Chrysanthemum, Ginger, Honey, Rose, Vodka";
PAIRS["Schisandra"] = "Honey*, Ginger, Lemon, Gin*, Vodka";
PAIRS["Acai"] = "Banana, Strawberry, Honey, Cacha\u00e7a*, Vodka";
PAIRS["Wild Strawberry"] = "Cream, Vanilla, Black Pepper, Woodruff, Rose, Sparkling Wine*, Gin";
PAIRS["Rambutan"] = "Lime, Lemongrass, Coconut, Ginger, Gin, White Rum";
PAIRS["Mangosteen"] = "Lime, Coconut, Ginger, Lychee, Gin, White Rum";
PAIRS["Longan"] = "Ginger, Goji, Jasmine, Coconut, White Rum, Vodka";
PAIRS["Plantain"] = "Cinnamon, Brown Butter, Lime, Chili, Coconut, Aged Rum*";
PAIRS["Sugarcane"] = "Lime*, Ginger*, Mint*, Kala Namak*, Lemongrass, Rhum Agricole*, Cacha\u00e7a*, White Rum";
PAIRS["Toddy"] = "Coconut, Gud, Lime, Ginger, Arak, White Rum";
PAIRS["Nungu"] = "Rose, Coconut Water, Lime, Milk, White Rum, Gin";
PAIRS["Jabuticaba"] = "Lime, Cinnamon, Cacha\u00e7a*, Vodka";
PAIRS["Black Cardamom"] = "Cinnamon, Clove, Chocolate, Coffee, Gud, Mezcal*, Scotch*, Bourbon";
PAIRS["Saunth"] = "Gud*, Black Pepper, Cardamom, Ghee, Honey, Milk, Aged Rum, Bourbon";
PAIRS["Five Spice"] = "Plum*, Orange, Honey, Chocolate, Bourbon, Aged Rum";
PAIRS["Ras el Hanout"] = "Date, Apricot, Honey, Orange, Rose, Aged Rum, Bourbon";
PAIRS["Mukhwas"] = "Fennel*, Paan, Rose, Cardamom, Coconut, Gin, Vodka";
PAIRS["Fennel Pollen"] = "Lemon, Lemon, Orange, Honey, Gin*, Anise Seed";
PAIRS["Jalape\u00f1o"] = "Lime*, Cucumber, Pineapple*, Watermelon, Cilantro, Agave Syrup, Tequila Blanco*, Mezcal";
PAIRS["Habanero"] = "Mango*, Pineapple*, Passion Fruit, Lime, Honey, Aged Rum*, Mezcal, Tequila Blanco";
PAIRS["Kashmiri Chili"] = "Tomato, Gud, Ghee, Imli, Kala Namak, Mezcal, Tequila Blanco";
PAIRS["Aleppo Pepper"] = "Lemon, Honey, Pomegranate, Tomato, Yogurt, Mezcal, Gin";
PAIRS["Timur"] = "Grapefruit*, Lime, Ginger, Tomato, Gin*, Vodka";
PAIRS["Cubeb"] = "Gin*, Orange, Juniper, Honey, Grapefruit";
PAIRS["Green Peppercorn"] = "Strawberry, Pineapple, Cream, Lime, Gin, Vodka";
PAIRS["Darjeeling"] = "Peach*, Lemon, Honey, Bergamot, Elderflower, Gin*, Cognac, Sparkling Wine";
PAIRS["Pu-erh"] = "Orange, Ginger, Date, Chocolate, Scotch*, Aged Rum, Mezcal";
PAIRS["Yerba Mate"] = "Lemon, Mint, Honey, Orange, Grapefruit, Cacha\u00e7a, Gin*, Pisco";
PAIRS["Kahwa"] = "Saffron*, Cardamom*, Almond*, Cinnamon, Honey, Rose, Gin, Cognac";
PAIRS["Mugicha"] = "Honey, Milk, Brown Butter, Scotch*, Bourbon";
PAIRS["Cascara"] = "Hibiscus, Orange, Cinnamon, Honey, Aged Rum*, Bourbon, Tequila Reposado";
PAIRS["Pumpkin Seed"] = "Chili, Lime, Mole, Maple, Mezcal*, Tequila Reposado";
PAIRS["Poppy Seed"] = "Lemon*, Orange, Honey, Almond, Milk, Vodka";
PAIRS["Makhana"] = "Ghee, Kala Namak, Black Pepper, Milk, Cardamom, Saffron";
PAIRS["Praline"] = "Chocolate*, Coffee, Vanilla, Cream, Banana, Cognac*, Bourbon, Aged Rum";
PAIRS["Chironji"] = "Saffron, Cardamom, Milk, Rose, Pistachio, Kewra";
PAIRS["Brazil Nut"] = "Chocolate, Coffee, Banana, Coconut, Cacha\u00e7a, Aged Rum";
PAIRS["Date Syrup"] = "Tahini*, Cardamom, Coffee, Orange, Sesame, Bourbon*, Aged Rum, Rye";
PAIRS["Golden Syrup"] = "Ginger, Oat, Lemon, Butter, Scotch, Scotch*, Bourbon";
PAIRS["Muscovado"] = "Coffee*, Banana, Ginger, Lime, Aged Rum*, Bourbon";
PAIRS["Burnt Sugar"] = "Cream, Vanilla, Orange, Coffee, Sea Salt, Bourbon, Aged Rum, Cognac";
PAIRS["Coconut Cream"] = "Pineapple*, Lime, Pandan, Mango, Banana, Nutmeg, Aged Rum*, White Rum*";
PAIRS["Labneh"] = "Za'atar*, Olive Oil, Honey, Mint, Cucumber, Pomegranate, Gin, Arak";
PAIRS["Malai"] = "Saffron*, Cardamom*, Pistachio, Rose, Kewra, Mango, Cognac, Aged Rum";
PAIRS["Khoya"] = "Cardamom*, Saffron, Ghee, Gud, Pistachio, Almond, Cognac";
PAIRS["Mishti Doi"] = "Gud*, Cardamom, Cashew, Cream, Aged Rum, Cognac";
PAIRS["Oat Milk"] = "Coffee*, Maple, Cinnamon, Banana, Vanilla, Scotch, Bourbon";
PAIRS["Almond Milk"] = "Rose, Saffron, Cardamom, Orange Blossom, Honey, Cognac, Gin";
PAIRS["Cream Cheese"] = "Strawberry, Blueberry, Lemon, Graham Cracker*, Vanilla, Vodka";
PAIRS["Caramelised Onion"] = "Thyme, Balsamic, Cheddar, Oloroso Sherry, Bourbon, Scotch";
PAIRS["Sundried Tomato"] = "Basil*, Olive Oil, Parmesan, Oregano, Vodka, Gin, Mezcal";
PAIRS["Bitter Gourd"] = "Lime, Kala Namak, Honey, Ginger, Gin, Tonic";
PAIRS["Porcini"] = "Thyme, Sage, Brown Butter, Parmesan, Oloroso Sherry*, Bourbon, Scotch";
PAIRS["Charred Corn"] = "Lime*, Chili*, Butter, Cilantro, Feta, Mezcal*, Bourbon";
PAIRS["Dashi"] = "Shiso, Yuzu, Ginger, Soy Sauce, Vodka, Gin";
PAIRS["Celery Salt"] = "Tomato*, Lemon, Horseradish, Black Pepper, Vodka*, Gin";
PAIRS["Chamoy"] = "Mango*, Watermelon, Pineapple, Lime, Chili, Tequila Blanco*, Mezcal";
PAIRS["Taj\u00edn"] = "Mango*, Watermelon*, Pineapple*, Cucumber, Lime, Tequila Blanco*, Mezcal";
PAIRS["Burrata"] = "Tomato*, Peach*, Basil, Olive Oil, Fig, Strawberry, Gin";
PAIRS["Manchego"] = "Quince*, Fig, Olive, Almond, Honey, Fino Sherry*, Oloroso Sherry";
PAIRS["Gruy\u00e8re"] = "Apple, Pear, Walnut, Caramelised Onion, Caramelised Onion, Bourbon, Apple Brandy";
PAIRS["Ragi"] = "Gud*, Cardamom, Ghee, Milk, Coconut, Aged Rum";
PAIRS["Poha"] = "Kadi Patta, Mustard Seed, Lime, Peanut, Green Chili, Gin";
PAIRS["Sattu"] = "Kala Namak*, Cumin*, Lime, Mint, Green Chili, Gud, Gin, Vodka";
PAIRS["Graham Cracker"] = "Key Lime*, Marshmallow*, Chocolate, Cream Cheese, Cinnamon, Vanilla, Aged Rum, Bourbon";
PAIRS["Black Rice"] = "Coconut*, Pandan, Mango, Palm Sugar, White Rum";
PAIRS["Rye Bread"] = "Caraway*, Dill, Butter, Honey, Rye, Vodka";
PAIRS["Mustard Oil"] = "Kala Namak, Green Chili, Lime, Mustard Seed, Gin";
PAIRS["Chorizo"] = "Smoked Paprika, Orange, Fino Sherry*, Mezcal*, Bourbon";
PAIRS["Smoked Salmon"] = "Dill*, Lemon, Caper, Cream Cheese, Horseradish, Vodka*, Gin";
PAIRS["Kanji"] = "Beetroot*, Carrot*, Mustard Seed*, Kala Namak, Chili, Vodka, Gin, Mezcal";
PAIRS["Sauerkraut"] = "Caraway*, Apple, Juniper, Dill, Vodka*, Gin";
PAIRS["Sherry Vinegar"] = "Fig, Strawberry, Honey, Tomato, Olive Oil, Fino Sherry, Gin";
PAIRS["Rice Vinegar"] = "Ginger, Cucumber, Sesame, Yuzu, Shiso, Gin, Vodka";
PAIRS["Kvass"] = "Rye Bread*, Raisin, Mint, Honey, Vodka*, Rye";
PAIRS["Amazake"] = "Ginger*, Yuzu, Matcha, Coconut, White Rum";
PAIRS["Jalebi"] = "Saffron*, Cardamom, Rabri*, Rose, Kewra, Lemon, Aged Rum, Cognac";
PAIRS["Rasmalai"] = "Saffron*, Cardamom*, Pistachio*, Rose, Kewra, Cognac, Aged Rum";
PAIRS["Kheer"] = "Cardamom*, Saffron*, Rose, Pistachio, Almond, Raisin, Gud, Aged Rum, Cognac";
PAIRS["Gajar Halwa"] = "Cardamom*, Ghee*, Khoya, Pistachio, Almond, Raisin, Bourbon, Aged Rum, Cognac";
PAIRS["Baklava"] = "Pistachio*, Walnut, Honey*, Rose, Orange Blossom, Cinnamon, Arak*, Cognac, Bourbon";
PAIRS["Cr\u00e8me Br\u00fbl\u00e9e"] = "Vanilla*, Burnt Sugar*, Lavender, Raspberry, Orange, Cognac, Aged Rum";
PAIRS["Churro"] = "Cinnamon*, Chocolate*, Dulce de Leche, Orange, Tequila Reposado, Aged Rum, Mezcal";
PAIRS["Cheesecake"] = "Graham Cracker*, Strawberry, Blueberry, Lemon, Vanilla, Vodka, Aged Rum";

PAIRS["Bone Marrow"] += ", Parsley*, Sourdough*, Sea Salt, Shallot, Caper, Lemon, Black Pepper, Garlic, Smoked Salt";

// possible pairings inferred from the references' own network: two or more partners of a flavor share the link
const INFERRED = {"Key Lime": ["Papaya", "Honey", "Pineapple"], "Meyer Lemon": ["Tomato", "Pear"], "Finger Lime": ["Cilantro", "Basil", "Pineapple", "Mango", "Lemon", "Mint"], "Sudachi": ["Basil", "Mint", "Lime", "Imli", "Yuzu"], "Bitter Orange": ["Pear", "Honey", "Raisin", "Peach", "Apple", "Plum", "Blueberry"], "Citron": ["Pear", "Peach", "Date", "Raisin", "Papaya", "Quince", "Almond"], "Mosambi": ["Imli", "Yogurt", "Tur Daal", "Honey", "Mandarin"], "Gondhoraj": ["Honey", "Cucumber", "Mango", "Papaya", "Pineapple", "Imli"], "Loomi": ["Cinnamon", "Orange", "Ginger", "Imli", "Smoked Paprika"], "Calamansi": ["Pineapple", "Banana"], "Pomelo": ["Papaya", "Mango", "Imli"], "Kairi": ["Imli", "Papaya", "Honey", "Tur Daal"], "Aloo Bukhara": ["Orange", "Pineapple", "Apple", "Vanilla", "Lemon"], "Rosehip": ["Pear", "Quince", "Plum", "Peach"], "Hawthorn": ["Quince", "Raisin", "Pear", "Cranberry", "Plum", "Date"], "Tamarillo": ["Papaya", "Cranberry", "Date", "Imli", "Mango"], "Karonda": ["Mango", "Papaya", "Imli", "Cilantro", "Cucumber", "Zucchini"], "Pani Puri Water": ["Tur Daal", "Ginger", "Chickpea"], "Shikanji": ["Imli", "Mandarin", "Tur Daal", "Papaya", "Honey"], "Tomatillo": ["Corn"], "Pomegranate Molasses": ["Apple", "Honey", "Pear"], "Jaljeera": ["Honey", "Tur Daal", "Date", "Papaya"], "Sour Cherry": ["Honey", "Peach", "Pear", "Raisin"], "Umeboshi": ["Orange", "Lemon", "Date"], "Sea Buckthorn": ["Plum", "Raisin", "Papaya"], "Barberry": ["Orange", "Vanilla", "Peach", "Apple"], "Aam Panna": ["Imli", "Tur Daal"], "Tulsi": ["Quince", "Pear", "Apple", "Cranberry"], "Kasuri Methi": ["Corn", "Mushroom", "Potato", "Cinnamon"], "Vietnamese Mint": ["Ginger", "Cilantro", "Verjus", "Imli", "Mint"], "Culantro": ["Cilantro", "Basil", "Zucchini", "Imli", "Pineapple", "Tomatillo"], "Pineapple Sage": ["Mango", "Orange", "Vanilla", "Imli", "Pomegranate", "Lemon", "Banana"], "Woodruff": ["Peach", "Raspberry", "Rhubarb", "Plum", "Quince", "Cranberry"], "Nettle": ["Oregano", "Corn", "Sage", "Zucchini", "Tur Daal"], "Hoja Santa": ["Basil", "Tarragon", "Lemon", "Honey", "Ginger", "Avocado", "Matcha"], "Za'atar": ["Garlic", "Eggplant", "Dill"], "Sandalwood": ["Cream", "Cinnamon", "Pistachio"], "Oak": ["Pecan", "Cinnamon", "Banana", "Coffee", "Hazelnut", "Date"], "Cinchona": ["Cinnamon", "Ginger", "Pistachio", "Beetroot", "Carrot", "Vanilla"], "Birch": ["Cinnamon", "Plum", "Fenugreek", "Cranberry", "Corn", "Lemon"], "Sarsaparilla": ["Caramel", "Date", "Honey", "Pineapple", "Almond", "Pecan"], "Tobacco": ["Pecan", "Cinnamon", "Date", "Hazelnut", "Caramel"], "Pine": ["Yogurt", "Plum"], "Hops": ["Pear", "Yuzu", "Cranberry", "Lime"], "Wormwood": ["Fennel Bulb", "Imli", "Pear", "Ginger", "Zucchini"], "Gentian": ["Pistachio", "Pecan", "Ginger", "Cinnamon", "Cashew", "Beetroot"], "Mastic": ["Date", "Yogurt", "Hyssop", "Vanilla"], "Cedar": ["Cinnamon", "Cranberry", "Carrot", "Plum", "Date", "Pecan"], "Khus": ["Yogurt", "Zucchini", "Sorrel", "Tarragon"], "Honeysuckle": ["Orange", "Raspberry", "Vanilla", "Blueberry", "Pistachio", "Cream"], "Linden": ["Orange", "Vanilla", "Quince", "Cranberry", "Blueberry"], "Lotus": ["Lime", "Vanilla", "Honey", "Mango", "Pineapple"], "Chrysanthemum": ["Vanilla", "Quince", "Lemon", "Orange", "Cinnamon", "Lime"], "Meadowsweet": ["Vanilla", "Lemon", "Raspberry", "Ginger", "Apple"], "Marigold": ["Cinnamon", "Ginger", "Vanilla", "Carrot", "Peach", "Pear"], "Osmanthus": ["Orange", "Lemon", "Vanilla", "Cranberry"], "Rose Geranium": ["Peach", "Vanilla", "Honey", "Lychee"], "Sakura": ["Raspberry", "Orange", "Pomegranate", "Lime", "Vanilla"], "Butterfly Pea": ["Banana", "Ginger", "Pineapple", "Lychee", "Date"], "Heather": ["Cinnamon", "Cream", "Lemon", "Pecan", "Yogurt", "Orange"], "Mahua": ["Imli", "Date", "Orange", "Pineapple"], "Jasmine": ["Orange"], "Violet": ["Orange", "Blueberry", "Vanilla", "Strawberry", "Pineapple"], "Loquat": ["Peach", "Pear", "Plum", "Orange"], "Greengage": ["Cranberry", "Quince", "Honey", "Plum", "Peach", "Apple"], "Damson": ["Honey", "Raisin", "Peach", "Pear", "Plum", "Pecan", "Vanilla"], "Mirabelle": ["Cranberry", "Quince", "Plum", "Peach", "Orange", "Pear"], "Jujube": ["Imli", "Cranberry", "Papaya", "Date"], "White Peach": ["Raspberry", "Strawberry", "Lemon", "Orange", "Blueberry"], "Nashi Pear": ["Lemon", "Lime", "Cranberry", "Orange", "Lychee"], "Cloudberry": ["Peach", "Pear", "Quince", "Strawberry", "Apple", "Plum", "Raspberry"], "Bilberry": ["Plum", "Peach", "Strawberry", "Pear", "Honey", "Apple"], "Aronia": ["Pear", "Quince", "Plum", "Raisin", "Peach", "Date"], "Goji": ["Imli", "Date", "Almond", "Pistachio", "Cinnamon"], "Schisandra": ["Cinnamon", "Pistachio", "Papaya", "Pear", "Raisin", "Date", "Carrot"], "Acai": ["Orange", "Cream", "Date", "Lemon", "Mango", "Pineapple", "Chocolate"], "Wild Strawberry": ["Apple", "Quince", "Raspberry", "Peach", "Cranberry"], "Redcurrant": ["Strawberry", "Blueberry"], "Mulberry": ["Yogurt", "Honey", "Plum", "Raspberry", "Pear"], "Sloe": ["Peach", "Plum", "Honey", "Raisin", "Pear", "Quince"], "Lingonberry": ["Plum", "Quince", "Peach"], "Phalsa": ["Imli", "Pineapple", "Mango", "Tur Daal", "Papaya"], "Jamun": ["Imli", "Tur Daal"], "Rambutan": ["Pineapple", "Banana", "Mango", "Honey", "Lychee", "Imli"], "Mangosteen": ["Pineapple", "Mango", "Orange", "Honey", "Papaya", "Plum"], "Longan": ["Turmeric", "Imli", "Pineapple", "Date", "Mango", "Banana"], "Sugarcane": ["Imli", "Hyssop", "Honey", "Pineapple", "Lemon"], "Toddy": ["Pineapple", "Mango", "Imli", "Date", "Papaya", "Honey"], "Nungu": ["Vanilla", "Mango", "Corn", "Honey"], "Jabuticaba": ["Blueberry", "Mango", "Pineapple", "Peach", "Pear", "Papaya", "Date", "Honey"], "Dragon Fruit": ["Lemon", "Pineapple", "Papaya", "Mango"], "Jackfruit": ["Pineapple", "Mango", "Guava", "Date"], "Starfruit": ["Papaya", "Mango", "Pineapple", "Imli"], "Sitaphal": ["Honey", "Pineapple"], "Soursop": ["Mango", "Papaya", "Honey", "Peach"], "Feijoa": ["Papaya", "Date", "Pear", "Pineapple", "Imli"], "Bael": ["Imli", "Tur Daal", "Yogurt"], "Black Cardamom": ["Pecan", "Date", "Vanilla", "Maple", "Turmeric"], "Saunth": ["Cinnamon", "Nutmeg", "Ginger", "Cumin"], "Five Spice": ["Raisin", "Date", "Vanilla", "Pecan"], "Ras el Hanout": ["Vanilla"], "Mukhwas": ["Lemon", "Hyssop", "Pineapple", "Imli", "Honey"], "Fennel Pollen": ["Pear", "Apple", "Quince", "Plum", "Peach"], "Licorice": ["Pear"], "Tonka Bean": ["Pecan", "Cinnamon", "Banana"], "Mahlab": ["Vanilla", "Peach", "Honey", "Date"], "Thandai": ["Vanilla", "Rice"], "Jalapeño": ["Basil", "Lemon", "Olive Oil"], "Habanero": ["Banana", "Orange", "Vanilla", "Papaya", "Lemon"], "Kashmiri Chili": ["Date", "Fenugreek", "Honey", "Allspice", "Cumin"], "Aleppo Pepper": ["Eggplant", "Apple", "Orange", "Pistachio", "Vanilla"], "Timur": ["Honey", "Pineapple", "Olive Oil", "Lemon", "Vanilla", "Imli"], "Cubeb": ["Ginger", "Vanilla", "Cinnamon", "Cardamom", "Cashew", "Plum"], "Green Peppercorn": ["Vanilla", "Ginger", "Lemon", "Rhubarb", "Honey", "Banana"], "Long Pepper": ["Cinnamon", "Vanilla", "Clove", "Cranberry", "Date"], "Grains of Paradise": ["Honey", "Pear", "Carrot", "Plum", "Cranberry", "Date"], "Sansho": ["Honey", "Vanilla", "Lemon"], "Galangal": ["Imli", "Cilantro", "Ginger", "Pineapple"], "Hing": ["Turmeric", "Black Pepper", "Potato"], "Pink Peppercorn": ["Vanilla", "Honey"], "Darjeeling": ["Vanilla", "Strawberry", "Apple", "Pistachio", "Blueberry"], "Pu-erh": ["Cinnamon", "Pecan", "Honey", "Pistachio", "Raisin", "Imli"], "Yerba Mate": ["Ginger", "Papaya", "Artichoke", "Fennel Bulb", "Pear"], "Kahwa": ["Vanilla", "Cream", "Chocolate", "Rice"], "Mugicha": ["Vanilla", "Parsnip", "Pear", "Banana", "Lavender"], "Cascara": ["Pear", "Cranberry", "Quince", "Plum", "Peach", "Date"], "Cacao Nib": ["Date", "Pecan", "Caramel"], "Rooibos": ["Date", "Pear", "Chocolate", "Plum"], "Hojicha": ["Cinnamon", "Pecan", "Pistachio", "Banana"], "Oolong": ["Orange", "Vanilla", "Cream", "Cinnamon", "Lemon"], "Genmaicha": ["Ginger", "Vanilla", "Cashew", "Chocolate", "Cinnamon", "Pistachio"], "Lapsang Souchong": ["Pecan", "Cinnamon"], "Pumpkin Seed": ["Corn", "Cinnamon", "Tur Daal", "Pecan", "Chickpea"], "Poppy Seed": ["Cranberry"], "Makhana": ["Corn", "Vanilla", "Rice", "Nutmeg"], "Praline": ["Caramel", "Honey", "Pecan"], "Chironji": ["Vanilla", "Rice", "Yogurt", "Orange"], "Brazil Nut": ["Pecan", "Vanilla", "Caramel", "Date", "Almond", "Honey"], "Black Sesame": ["Almond", "Pistachio", "Date"], "Date Syrup": ["Date", "Pomegranate", "Chickpea", "Vanilla", "Honey"], "Golden Syrup": ["Corn", "Apple", "Turmeric", "Cinnamon", "Carrot", "Pecan"], "Muscovado": ["Date", "Pecan", "Caramel", "Honey", "Maple", "Vanilla"], "Burnt Sugar": ["Pecan", "Date", "Cranberry", "Almond"], "Butterscotch": ["Caramel"], "Dulce de Leche": ["Pecan", "Date", "Oat"], "Labneh": ["Pineapple", "Watermelon", "Ginger", "Almond"], "Malai": ["Rice", "Vanilla", "Coconut", "Orange"], "Khoya": ["Vanilla", "Rice", "Chocolate"], "Mishti Doi": ["Almond", "Cinnamon", "Vanilla", "Honey", "Nutmeg", "Ginger"], "Almond Milk": ["Rice", "Vanilla", "Cream", "Cinnamon", "Pistachio"], "Sol Kadhi": ["Mango", "Papaya", "Tur Daal", "Corn", "Clam"], "Kefir": ["Basil", "Pear", "Ginger", "Papaya", "Watermelon", "Cilantro"], "Rabri": ["Vanilla", "Rice", "Chocolate"], "Caramelised Onion": ["Blue Cheese", "Potato", "Tomato", "Pear"], "Sundried Tomato": ["Tomato", "Garlic", "Zucchini", "Mushroom", "Artichoke", "Rosemary"], "Bitter Gourd": ["Imli", "Mint", "Date", "Cream", "Rhubarb", "Lemon"], "Porcini": ["Parsnip", "Potato", "Artichoke", "Mushroom", "Asparagus", "Carrot"], "Charred Corn": ["Corn", "Imli", "Tur Daal", "Chickpea", "Beetroot"], "Rasam": ["Chickpea", "Tur Daal", "Fenugreek"], "Black Garlic": ["Vanilla", "Pecan", "Banana", "Date", "Eggplant"], "Amchur": ["Imli", "Papaya", "Orange"], "Dashi": ["Corn", "Imli", "Mushroom", "Clam", "Oyster"], "Celery Salt": ["Corn", "Asparagus", "Garlic", "Eggplant", "Tur Daal", "Zucchini"], "Chamoy": ["Imli", "Orange", "Banana", "Papaya", "Vanilla"], "Tajín": ["Orange", "Blueberry", "Mint", "Tomato", "Honey"], "Smoked Salt": ["Pecan", "Raspberry", "Vanilla", "Pineapple"], "Burrata": ["Vanilla", "Almond", "Ginger", "Corn"], "Manchego": ["Lemon", "Raisin", "Vanilla", "Pistachio", "Cranberry"], "Gruyère": ["Cinnamon", "Beetroot", "Pecan", "Caramel", "Plum"], "Brie": ["Cinnamon", "Ginger", "Pecan", "Almond"], "Cheddar": ["Pecan", "Beetroot", "Cinnamon", "Plum"], "Paneer": ["Tur Daal", "Chickpea", "Corn"], "Ragi": ["Vanilla", "Banana", "Mango", "Honeydew", "Hyssop"], "Poha": ["Turmeric", "Tur Daal", "Cumin", "Imli", "Garlic"], "Sattu": ["Tur Daal", "Imli", "Corn", "Chickpea"], "Graham Cracker": ["Pecan", "Hazelnut"], "Black Rice": ["Banana", "Pineapple", "Lime"], "Puffed Rice": ["Tur Daal", "Corn", "Mango", "Papaya"], "Popcorn": ["Corn", "Apple", "Pecan", "Cinnamon"], "Moong Daal": ["Tur Daal", "Imli", "Chickpea"], "Besan": ["Rice", "Carrot", "Date", "Chocolate"], "Mustard Oil": ["Garlic", "Cumin", "Honey", "Maple", "Tur Daal"], "Smoked Salmon": ["Tomato", "Garlic", "Celery", "Parsley"], "Bone Marrow": ["Mushroom"], "Coconut Oil": ["Coconut", "Mango", "Honey", "Vanilla", "Papaya", "Cream"], "Kanji": ["Leek", "Tur Daal", "Cumin", "Maple", "Imli"], "Sherry Vinegar": ["Lemon"], "Rice Vinegar": ["Mango", "Pomegranate"], "Kvass": ["Ginger", "Plum", "Orange", "Chocolate", "Apple", "Cinnamon"], "Amazake": ["Honey", "Lychee", "Vanilla", "Banana", "Turmeric", "Mango"], "Kimchi": ["Date", "Sweet Potato", "Cinnamon"], "Gochujang": ["Vanilla", "Imli"], "Kombucha": ["Papaya", "Honey", "Peach", "Mandarin"], "Achaar": ["Imli", "Tomato", "Tur Daal", "Garlic"], "Preserved Lemon": ["Garlic"], "Black Vinegar": ["Cinnamon", "Date", "Imli", "Vanilla"], "Yuzu Kosho": ["Ginger", "Orange", "Pineapple", "Imli", "Corn"], "Pickled Onion": ["Tomato", "Tur Daal", "Leek", "Cucumber", "Corn", "Parsley", "Beetroot"], "Tepache": ["Mango", "Papaya", "Imli", "Peach", "Banana"], "Jalebi": ["Lychee", "Peach", "Orange", "Pineapple"], "Rasmalai": ["Rice", "Vanilla", "Honey", "Yogurt", "Cream"], "Gajar Halwa": ["Chocolate", "Vanilla", "Cinnamon", "Ginger"], "Baklava": ["Date", "Pear", "Vanilla", "Peach"], "Crème Brûlée": ["Honey", "Peach", "Pistachio", "Cream", "Strawberry"], "Churro": ["Pecan", "Pear", "Hazelnut", "Date", "Honey", "Raisin"], "Cheesecake": ["Peach", "Raspberry", "Pear", "Cinnamon", "Honey"], "Marzipan": ["Almond", "Pistachio", "Vanilla", "Cinnamon"], "Halva": ["Vanilla", "Honey", "Pecan"], "Brioche": ["Pecan", "Pear", "Almond", "Cinnamon"], "Honeycomb": ["Pecan", "Almond", "Cashew", "Pear", "Cranberry", "Hazelnut", "Raspberry"], "Cereal Milk": ["Chocolate", "Caramel", "Cream", "Cinnamon", "Cashew", "Coffee"], "Horchata": ["Pecan", "Cashew", "Chocolate", "Caramel", "Date", "Honey"], "Red Bean": ["Chocolate", "Caramel", "Honey", "Coffee"], "Ube": ["Almond", "Cashew", "Pistachio", "Pineapple", "Banana", "Date"], "Gulab Jamun": ["Rice", "Vanilla", "Honey", "Yogurt", "Cream"], "Kulfi": ["Rice", "Vanilla", "Coconut", "Cream"], "Shrikhand": ["Orange", "Rice", "Vanilla", "Pineapple", "Banana"], "Marshmallow": ["Pecan", "Hazelnut", "Cinnamon", "Almond", "Caramel", "Cashew"]};
