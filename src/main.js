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

];