export const allPokemon = [
    {
        id: "001",
        name: "Juracron",
        image: "./assets/imgs/Juracron_card.webp",
        accent: "#b6dde0",
        types: ["Nature", "Water", "Rock"],
        rarity: "Legendary",
        weight: "450 kg",
        height: "3.0 m",
        category: "Mountain Spirit",
        habitat: "Jura",
        summary:
            "Guardian of the lakes, forests, and mountains. It seamlessly balances the elements of water and rock across the region.",
        talents: ["Cascades Breath", "Mountain's Wrath", "Jura's Eternity"],
    },
    {
        id: "090",
        name: "Belforion",
        image: "./assets/imgs/Belforion_card.webp",
        accent: "#f1c58e",
        types: ["Fire", "Rock"],
        rarity: "Mythical",
        weight: "310 kg",
        height: "2.0 m",
        category: "Bastion Lion",
        habitat: "Belfort",
        summary:
            "Protector of the ancient ramparts and a symbol of courage. Its roar alone can set the very stones ablaze.",
        talents: ["Triumphant Roar", "Bastion's Aegis", "Flaming Guard"],
    },
    {
        id: "165",
        name: "Vogsrâl",
        image: "./assets/imgs/Vogsrâl_card.webp",
        accent: "#b8d9b2",
        types: ["Nature", "Mystic"],
        rarity: "Rare",
        weight: "310 kg",
        height: "1.6 m",
        category: "Mist Stag",
        habitat: "Vosges",
        summary:
            "The spirit of the Vosges. It watches over the deep forests and guides lost travelers through the dense morning mist.",
        talents: ["Enchanting Mist", "Vosges' Breath", "Sylvan Gaze"],
    },
    {
        id: "067",
        name: "Alsace",
        image: "./assets/imgs/Alsace_card.webp",
        accent: "#f4a261",
        types: ["Heritage", "Gastronomy"],
        rarity: "Epic",
        weight: "Unknown",
        height: "Vast",
        category: "Historical Realm",
        habitat: "Eastern Border",
        summary:
            "A region characterized by its picturesque villages and rich culinary heritage. It breathes history and tradition.",
        talents: ["Stork's Blessing", "Pretzel Shield", "Vineyard Aura"],
    },
    {
        id: "029",
        name: "Bretagne",
        image: "./assets/imgs/Bretagne_card.webp",
        accent: "#457b9d",
        types: ["Ocean", "Legend"],
        rarity: "Epic",
        weight: "Oceanic",
        height: "Coastal",
        category: "Maritime Land",
        habitat: "Western Peninsula",
        summary:
            "A land forged by the sea and ancient Celtic legends. Its stormy coasts hide secrets of times long past.",
        talents: ["Ocean's Roar", "Granite Will", "Celtic Magic"],
    },
    {
        id: "034",
        name: "Espagne",
        image: "./assets/imgs/Espagne_card.webp",
        accent: "#e9c46a",
        types: ["Sun", "Passion"],
        rarity: "Legendary",
        weight: "Continental",
        height: "Vast",
        category: "Southern Kingdom",
        habitat: "Iberian Peninsula",
        summary:
            "A sun-drenched land of passion, history, and vibrant cultures. It radiates a warm, unyielding energy.",
        talents: ["Solar Flare", "Flamenco Rhythm", "Tapas Feast"],
    },
    {
        id: "075",
        name: "Île-de-France",
        image: "./assets/imgs/Ile_de_France_card.webp",
        accent: "#1d3557",
        types: ["Urban", "Culture"],
        rarity: "Epic",
        weight: "Dense",
        height: "Monumental",
        category: "Metropolitan Core",
        habitat: "Central Basin",
        summary:
            "The bustling heart of the country, radiating culture, power, and architectural wonders. It never sleeps.",
        talents: ["City Lights", "Metro Network", "Architect's Vision"],
    },
    {
        id: "039",
        name: "Italie",
        image: "./assets/imgs/Italie_card.webp",
        accent: "#2a9d8f",
        types: ["Art", "History"],
        rarity: "Legendary",
        weight: "Peninsular",
        height: "Alpine to Coastal",
        category: "Ancient Empire",
        habitat: "Mediterranean",
        summary:
            "A majestic long land bridging Europe and the sea, overflowing with timeless art, history, and romance.",
        talents: ["Renaissance Masterpiece", "Colosseum Echo", "Dolce Vita"],
    },
    {
        id: "064",
        name: "Pays Basque",
        image: "./assets/imgs/Pays_Basque_card.webp",
        accent: "#e76f51",
        types: ["Tradition", "Ocean"],
        rarity: "Rare",
        weight: "Rugged",
        height: "Mountainous",
        category: "Proud Domain",
        habitat: "Pyrenees & Coast",
        summary:
            "A proud and ancient region nestled between the mountains and the ocean, preserving an enigmatic culture.",
        talents: ["Oceanic Surf", "Mountain Echo", "Espelette Spice"],
    },
    {
        id: "035",
        name: "Portugal",
        image: "./assets/imgs/Portugal_card.webp",
        accent: "#8ecae6",
        types: ["Ocean", "Discovery"],
        rarity: "Legendary",
        weight: "Continental",
        height: "Coastal",
        category: "Explorer's Land",
        habitat: "Western Edge",
        summary:
            "A coastal nation of explorers and beautiful tiled streets, forever gazing out into the vast Atlantic.",
        talents: ["Atlantic Breeze", "Explorer's Compass", "Golden Tile"],
    }
];

export async function buildPokedexFromAssets(probeFunction) {
    const checks = await Promise.all(
        allPokemon.map(async (item) => {
            let available = true;
            if (probeFunction) {
                available = await probeFunction(item.image);
            }
            return { item, available };
        })
    );
    const available = checks.filter(c => c.available).map(c => c.item);
    return available.length > 0 ? available : allPokemon.map(i => ({ ...i, image: "" }));
}
