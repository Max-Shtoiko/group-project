const games = [
  {
    id: "1",
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    releaseDate: "2024-11-20",
    developer: "GSC Game World",
    genres: ["Відкритий світ", "Бойовик", "Пригоди", "Виживання"],
    ageRating: "18+",
    locale: "uk-UA",
    description:
      "Відкрийте для себе Чорнобильську Зону Відчуження з небезпечними ворогами, смертельними аномаліями та потужними артефактами. Напишіть власну епічну історію, прокладаючи шлях до Серця Чорнобиля.",
    editions: [
      { sku: "standard", name: "Standard", priceUAH: null, discount: null },
      { sku: "deluxe", name: "Deluxe Edition", priceUAH: 1329, discount: null },
      { sku: "ultimate", name: "Ultimate Edition", priceUAH: 1748, discount: null }
    ],
    store: {
      // якщо треба показувати бейдж знижки/ціну — підставляйте сюди актуальні значення
      hasDiscount: true,
      discountPercent: 30,
      discountedPriceUAH: 979
    },
    // за потреби можна доповнити
    platforms: ["PC (Windows)"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "story-rich", "post-apocalypse"]
  },

  {
  id: "2",
  title: "Fortnite",
  releaseDate: "2017-07-21",
  developer: "Epic Games",
  genres: ["Бойовик", "Королівська битва", "Виживання", "Онлайн"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "Fortnite — популярна онлайн-гра у жанрі королівської битви, де гравці змагаються за виживання, будують укріплення та борються з суперниками у динамічних боях.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "crew", name: "Fortnite Crew Subscription", priceUAH: 339, discount: null },
    { sku: "vbucks", name: "V-Bucks Packs", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch", "Android", "iOS (обмежено)"],
  languages: ["Українська", "Англійська", "Іспанська", "Французька", "інші"],
  tags: ["multiplayer", "battle-royale", "shooter", "building"]
},

{
  id: "3",
  title: "Subnautica: Below Zero",
  releaseDate: "2021-05-14",
  developer: "Unknown Worlds Entertainment",
  genres: ["Пригоди", "Виживання", "Відкритий світ"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "Subnautica: Below Zero — пригодницька гра на виживання у відкритому світі під водою. Досліджуйте крижаний океан планети 4546B, будуйте бази, взаємодійте з дивовижними створіннями та розкрийте таємниці замерзлого світу.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 449, discount: null },
    { sku: "deluxe", name: "Deluxe Edition", priceUAH: 569, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 25,
    discountedPriceUAH: 337
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Німецька", "Французька", "інші"],
  tags: ["singleplayer", "survival", "exploration", "underwater", "open-world"]
},

{
  id: "4",
  title: "Cities: Skylines – Snowfall",
  releaseDate: "2016-02-18",
  developer: "Colossal Order",
  genres: ["Симулятор", "Стратегія", "Будівництво міста", "DLC"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "Snowfall — це доповнення для Cities: Skylines, яке додає зимові карти, погодні умови зі снігом, нові системи обігріву та громадського транспорту, включно з трамваями. Воно робить управління містом ще складнішим та цікавішим.",
  editions: [
    { sku: "dlc", name: "DLC Snowfall", priceUAH: 189, discount: null },
    { sku: "bundle", name: "Snowfall + Cities: Skylines Bundle", priceUAH: 449, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 95
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Німецька", "Французька", "Іспанська", "інші"],
  tags: ["singleplayer", "city-builder", "simulation", "strategy", "dlc"]
},

{
  id: "5",
  title: "Mortal Kombat 11",
  releaseDate: "2019-04-23",
  developer: "NetherRealm Studios",
  genres: ["Бойовик", "Файтинг", "Онлайн"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Mortal Kombat 11 — один із найпопулярніших файтингів сучасності з кінематографічною кампанією, кастомізацією персонажів та жорстокими бійками. Гра пропонує як сюжетний режим, так і мультиплеєрні змагання.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 699, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 1199, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: 1399, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 60,
    discountedPriceUAH: 279
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch"],
  languages: ["Англійська", "Іспанська", "Французька", "Німецька", "інші"],
  tags: ["fighting", "multiplayer", "story-rich", "competitive"]
},

{
  id: "6",
  title: "Mortal Kombat 1",
  releaseDate: "2023-09-19",
  developer: "NetherRealm Studios",
  genres: ["Бойовик", "Файтинг", "Онлайн"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Mortal Kombat 1 — перезапуск культової серії файтингів. У грі представлено нову історію, оновлених персонажів та унікальну систему допоміжних бійців (Kameo Fighters), що додає нові тактичні можливості у боях.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 2099, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 2799, discount: null },
    { sku: "kollector", name: "Kollector’s Edition", priceUAH: 5499, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 5", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Англійська", "Іспанська", "Французька", "Німецька", "інші"],
  tags: ["fighting", "multiplayer", "story-rich", "next-gen"]
},

{
  id: "7",
  title: "Dota 2",
  releaseDate: "2013-07-09",
  developer: "Valve",
  genres: ["MOBA", "Стратегія", "Онлайн"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "Dota 2 — одна з найпопулярніших MOBA-ігор у світі, де дві команди по п'ять гравців борються за контроль над картою. Гравці обирають героїв з унікальними здібностями та змагаються за знищення ворожого трону.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "battlepass", name: "Battle Pass (сезонний)", priceUAH: null, discount: null },
    { sku: "dlc", name: "Cosmetics & Bundles", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Українська (фанатський переклад)", "Російська", "Китайська", "інші"],
  tags: ["multiplayer", "competitive", "moba", "esports", "free-to-play"]
},

{
  id: "8",
  title: "EA Sports FC 25",
  releaseDate: "2024-09-27",
  developer: "EA Canada, EA Romania",
  genres: ["Спортивний симулятор", "Футбол", "Онлайн"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "EA Sports FC 25 — футбольний симулятор, який прийшов на зміну серії FIFA. Гра пропонує більш реалістичний підхід до тактики, розвиток клубної кар’єри та нові режими, зокрема 5 на 5 Rush.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: null,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Українська (частково, фанатський переклад)", "Англійська", "інші"],
  tags: ["football", "simulation", "sports", "multiplayer", "tactical"]
},

{
  id: "9",
  title: "EA Sports FC 24",
  releaseDate: "2023-09-29",
  developer: "EA Vancouver, EA Romania",
  genres: ["Спортивний симулятор", "Футбол", "Онлайн"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "EA Sports FC 24 — перша гра серії EA Sports FC після завершення партнерства з FIFA. Вона зберігає улюблені режими та ліцензії і вводить нові технології: HyperMotion V, PlayStyles (powered by Opta) та покращений Frostbite-двигун.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Українська (неофіційна)", "Англійська", "інші"],
  tags: ["football", "simulation", "sports", "multiplayer", "new-era"]
},

{
  id: "10",
  title: "Counter-Strike: Global Offensive",
  releaseDate: "2012-08-21",
  developer: "Valve, Hidden Path Entertainment",
  genres: ["Шутер", "Тактичний", "Онлайн", "Кіберспорт"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Counter-Strike: Global Offensive — багатокористувацький тактичний шутер від першої особи, у якому дві команди (терористи та спецпризначенці) змагаються у виконанні завдань або знищенні суперників. Одна з найпопулярніших кіберспортивних дисциплін у світі.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "prime", name: "Prime Status Upgrade", priceUAH: 419, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Російська", "інші"],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical"]
},

{
  id: "11",
  title: "Counter-Strike 2",
  releaseDate: "2023-09-27",
  developer: "Valve",
  genres: ["Шутер", "Тактичний", "Онлайн", "Кіберспорт"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Counter-Strike 2 — нове покоління легендарного тактичного шутера на рушії Source 2. Гра отримала покращену графіку, динамічні димові гранати, оновлену фізику та мережеві технології. CS2 замінила CS:GO та стала основною платформою для кіберспорту.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "prime", name: "Prime Status Upgrade", priceUAH: 419, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "Linux"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Російська", "інші"],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical", "source2"]
},

{
  id: "12",
  title: "Destiny 2",
  releaseDate: "2017-09-06",
  developer: "Bungie",
  genres: ["Шутер від першої особи", "MMO", "РПГ", "Кооперативний", "PvP"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "Destiny 2 — безкоштовна онлайн-гра в жанрі шутера від першої особи з елементами MMO та РПГ. Гравці беруть на себе роль Стража, захисника людства, у боротьбі проти інопланетних загроз. Гра пропонує захопливу кампанію, кооперативні місії, різноманітні PvP-режими та регулярні оновлення контенту.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "forsaken", name: "Forsaken Pack", priceUAH: null, discount: null },
    { sku: "shadowkeep", name: "Shadowkeep Pack", priceUAH: null, discount: null },
    { sku: "legacy", name: "Legacy Collection (2025)", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Stadia"],
  languages: ["Англійська", "Французька", "Німецька", "Італійська", "Японська", "Корейська", "Польська", "Португальська (Бразилія)", "Російська", "Іспанська", "Іспанська (Латинська Америка)", "Китайська (спрощена)", "Китайська (традиційна)"],
  tags: ["PvE", "PvP", "MMO", "RPG", "кооператив", "кросплатформенний", "онлайн"
  ]
},

{
  id: "13",
  title: "Apex Legends",
  releaseDate: "2019-02-04",
  developer: "Respawn Entertainment",
  genres: ["Battle Royale", "Hero Shooter", "Онлайн", "Кооперативний", "PvP"],
  ageRating: "13+",
  locale: "uk-UA",
  description:
    "Apex Legends — безкоштовна гра в жанрі battle royale, де гравці обирають унікальних героїв (Легенд) з різними здібностями та змагаються у командних боях. Розроблена Respawn Entertainment, гра пропонує динамічний геймплей, кросплатформенний матчмейкінг та регулярні оновлення.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "battlePass", name: "Battle Pass", priceUAH: 999, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: [
    "PC (Windows)",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox One",
    "Xbox Series X|S",
    "Nintendo Switch",
    "iOS",
    "Android"
  ],
  languages: [
    "Англійська",
    "Французька",
    "Німецька",
    "Італійська",
    "Японська",
    "Корейська",
    "Польська",
    "Португальська (Бразилія)",
    "Російська",
    "Іспанська (Іспанія)",
    "Іспанська (Латинська Америка)",
    "Китайська (спрощена)",
    "Китайська (традиційна)",
    "Арабська"
  ],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical", "crossplay"]
},

{
  id: "14",
  title: "S.T.A.L.K.E.R.: Тінь Чорнобиля",
  releaseDate: "2007-03-20",
  developer: "GSC Game World",
  genres: ["Шутер від першої особи", "Сурвайвал-хорор", "Відкритий світ", "РПГ", "Пригоди"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "S.T.A.L.K.E.R.: Тінь Чорнобиля — культовий шутер від першої особи з елементами сурвайвал-хорору та РПГ, дія якого відбувається в альтернативній реальності Чорнобильської зони після другого катастрофічного вибуху на ЧАЕС. Гравець виступає в ролі сталкера, який досліджує зону, стикається з аномаліями, мутантами та іншими сталкерами, виконуючи різноманітні місії.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "enhanced", name: "Enhanced Edition", priceUAH: 499, discount: null },
    { sku: "trilogy", name: "Legends of the Zone Trilogy", priceUAH: 999, discount: 33 }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 33,
    discountedPriceUAH: 999
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Англійська", "Російська", "Українська (частково)", "Інші"],
  tags: ["open-world", "survival-horror", "RPG", "post-apocalypse", "immersive-sim"]
},

{
  id: "15",
  title: "Euro Truck Simulator 2",
  releaseDate: "2012-10-18",
  developer: "SCS Software",
  genres: ["Симулятор", "Відкритий світ", "Інді", "Реалістичний", "Керування бізнесом"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "Euro Truck Simulator 2 — реалістичний симулятор вантажних перевезень, де гравець бере на себе роль водія вантажівки, доставляючи вантажі по Європі. Гра пропонує детальну карту, ліцензовані вантажівки, можливість керувати власною транспортною компанією та багатий вибір модифікацій.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 249, discount: null },
    { sku: "gold", name: "Gold Edition", priceUAH: 349, discount: null },
    { sku: "complete", name: "Complete Edition", priceUAH: 499, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 599, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 249
  },
  platforms: ["PC (Windows)", "Linux", "macOS", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Англійська", "Російська", "Українська", "Німецька", "Французька", "Іспанська", "Італійська", "Польська", "Чеська", "Португальська", "Грецька", "Турецька", "Китайська (спрощена)", "Японська", "Корейська", "Арабська"],
  tags: ["симулятор", "відкритий світ", "реалістичний", "керування бізнесом", "модифікації", "європейські дороги"]
},

{
  id: "16",
  title: "God of War (2018)",
  releaseDate: "2018-04-20",
  developer: "Santa Monica Studio",
  genres: ["Екшн-пригода", "РПГ", "Сурвайвал", "Пригоди"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "God of War (2018) — це перезавантаження культової серії, де Кратос, колишній бог війни, разом зі своїм сином Атреєм вирушають у подорож через міфологічний світ Півночі. Гра поєднує інтенсивний бойовий процес, глибоку емоційну історію та відкритий світ, що вражає деталями.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 1299, discount: null },
    { sku: "collector", name: "Collector's Edition", priceUAH: 2499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 599
  },
  platforms: ["PlayStation 4", "PlayStation 5", "PC (Windows)"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "mythology", "action-adventure", "father-son"]
},

{
  id: "17",
  title: "DREDGE",
  releaseDate: "2023-03-30",
  developer: "Black Salt Games",
  genres: ["Пригоди", "РПГ", "Хорор", "Інді", "Виживання", "Острівний світ"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "DREDGE — це пригодницька гра з елементами жахів, у якій ви граєте роль рибалки, що досліджує темні таємниці затонулого архіпелагу. Керуйте своїм кораблем, закидайте волосінь і витягайте з глибини дивних і жахливих істот. Продавайте свою здобич, покращуйте свій корабель і відкривайте нові секрети.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 257, discount: null },
    { sku: "deluxe", name: "Deluxe Edition", priceUAH: 499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 257
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch", "Android", "iOS", "macOS"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "psychological-horror", "fishing", "open-world", "exploration"]
},

{
  "id": "18",
  "title": "S.T.A.L.K.E.R.: Call of Pripyat",
  "releaseDate": "2009-10-02",
  "developer": "GSC Game World",
  "genres": ["Шутер від першої особи", "Сурвайвал-хорор", "РПГ", "Пригоди"],
  "ageRating": "18+",
  "locale": "uk-UA",
  "description": "S.T.A.L.K.E.R.: Call of Pripyat — це продовження культової серії, де ви граєте за майора Дегтярьова, який розслідує зникнення військової експедиції в Чорнобильській зоні. Гра поєднує відкритий світ, атмосферу постапокаліпсису та елементи виживання.",
  "editions": [
    { "sku": "standard", "name": "Standard Edition", "priceUAH": 415, "discount": null },
    { "sku": "enhanced", "name": "Enhanced Edition", "priceUAH": 415, "discount": null },
    { "sku": "legendsTrilogy", "name": "S.T.A.L.K.E.R.: Legends of the Zone Trilogy", "priceUAH": 415, "discount": null }
  ],
  "store": {
    "hasDiscount": true,
    "discountPercent": 80,
    "discountedPriceUAH": 83
  },
  "platforms": ["PC (Windows)", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series X|S"],
  "languages": ["Англійська", "Російська", "Українська", "Інші"],
  "tags": ["singleplayer", "story-rich", "post-apocalypse", "open-world", "survival-horror"]
},

{
  "id": "19",
  "title": "S.T.A.L.K.E.R.: Call of Pripyat",
  "releaseDate": "2009-10-02",
  "developer": "GSC Game World",
  "genres": ["Шутер від першої особи", "Сурвайвал-хорор", "РПГ", "Пригоди"],
  "ageRating": "18+",
  "locale": "uk-UA",
  "description": "S.T.A.L.K.E.R.: Call of Pripyat — це продовження культової серії, де ви граєте за майора Дегтярьова, який розслідує зникнення військової експедиції в Чорнобильській зоні. Гра поєднує відкритий світ, атмосферу постапокаліпсису та елементи виживання.",
  "editions": [
    { "sku": "standard", "name": "Standard Edition", "priceUAH": 415, "discount": null },
    { "sku": "enhanced", "name": "Enhanced Edition", "priceUAH": 415, "discount": null },
    { "sku": "legendsTrilogy", "name": "S.T.A.L.K.E.R.: Legends of the Zone Trilogy", "priceUAH": 415, "discount": null }
  ],
  "store": {
    "hasDiscount": true,
    "discountPercent": 80,
    "discountedPriceUAH": 83
  },
  "platforms": ["PC (Windows)", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series X|S"],
  "languages": ["Англійська", "Російська", "Українська", "Інші"],
  "tags": ["singleplayer", "story-rich", "post-apocalypse", "open-world", "survival-horror"]
},

{
  id: "20",
  title: "The Sims 4",
  releaseDate: "2014-09-02",
  developer: "Maxis",
  genres: ["Симулятор життя", "Пісочниця", "Креативний", "Сімейний"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "The Sims 4 — це симулятор життя, де ви створюєте та контролюєте персонажів, формуєте їхні характери, кар'єри та взаємини. Гра поєднує глибокий редактор персонажів, будівництво будинків та відкритий світ без чітко визначених цілей.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 0, discount: null },
    { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 0,
    discountedPriceUAH: 0
  },
  platforms: ["PC (Windows)", "PlayStation 4", "Xbox One", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Українська", "Англійська", "Російська", "інші"],
  tags: ["singleplayer", "sandbox", "creative", "family-friendly"]
},

{
    id: "21",
    title: "Cyberpunk 2077",
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    genres: ["Рольова гра", "Відкритий світ", "Пригоди", "Екшн"],
    ageRating: "18+",
    locale: "uk-UA",
    description:
      "Cyberpunk 2077 — це рольова гра в відкритому світі майбутнього, де ви керуєте персонажем на ім’я В, виконуєте місії, взаємодієте з персонажами та приймаєте рішення, які впливають на сюжет. Гра поєднує глибоку систему кастомізації, бойову механіку та багатий сюжет.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 1499, discount: null },
      { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 1999, discount: null }
    ],
    store: {
      hasDiscount: true,
      discountPercent: 20,
      discountedPriceUAH: 1199
    },
    platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "rpg", "open-world", "action", "story-driven"]
  },

  {
    id: "22",
    title: "Subnautica",
    releaseDate: "2018-01-23",
    developer: "Unknown Worlds Entertainment",
    genres: ["Виживання", "Пригоди", "Відкритий світ", "Пісочниця"],
    ageRating: "12+",
    locale: "uk-UA",
    description:
      "Subnautica — це гра про виживання на незвіданій океанічній планеті. Гравець досліджує підводний світ, будує бази, збирає ресурси та досліджує таємниці планети. Гра поєднує захоплюючий сюжет із відкритим світом та креативними елементами будівництва.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 499, discount: null },
      { sku: "deluxe", name: "Deluxe Edition", priceUAH: 699, discount: null }
    ],
    store: {
      hasDiscount: true,
      discountPercent: 10,
      discountedPriceUAH: 449
    },
    platforms: ["PC (Windows)", "Mac", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "survival", "open-world", "adventure", "underwater"]
  },

  {
    id: "23",
    title: "Team Fortress 2",
    releaseDate: "2007-10-10",
    developer: "Valve",
    genres: ["Шутер від першої особи", "Мультиплеєр", "Тактичний", "Геройський"],
    ageRating: "16+",
    locale: "uk-UA",
    description:
      "Team Fortress 2 — це командний шутер від першої особи, де гравці обирають одну з дев'яти унікальних класів, кожен з яких має свої особливості та роль у команді. Гра пропонує різноманітні режими, карти та постійні оновлення, включаючи нові предмети та косметичні елементи.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 0, discount: null }
    ],
    store: {
      hasDiscount: false,
      discountPercent: 0,
      discountedPriceUAH: 0
    },
    platforms: ["PC (Windows)", "Xbox 360", "PlayStation 3", "macOS", "Linux"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["free-to-play", "multiplayer", "FPS", "team-based", "hero shooter"]
  }
];