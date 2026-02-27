import type { Region } from '../types';

export const mockRegions: Region[] = [
    {
        id: "001",
        name: "Juracron",
        category: "Mountain Spirit",
        description: "Guardian of the lakes, forests, and mountains. It seamlessly balances the elements of water and rock across the region.",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        type: "Nature",
        rarity: "Legendary",
        weight: "450 kg",
        height: "3.0 m",
        talents: ["Cascades Breath", "Mountain's Wrath", "Jura's Eternity"]
    },
    {
        id: "090",
        name: "Belforion",
        category: "Bastion Lion",
        description: "Protector of the ancient ramparts and a symbol of courage. Its roar alone can set the very stones ablaze.",
        imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800",
        type: "Fire",
        rarity: "Mythical",
        weight: "310 kg",
        height: "2.0 m",
        talents: ["Triumphant Roar", "Bastion's Aegis", "Flaming Guard"]
    },
    {
        id: "165",
        name: "Vogsrâl",
        category: "Mist Stag",
        description: "The spirit of the Vosges. It watches over the deep forests and guides lost travelers through the dense morning mist.",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
        type: "Nature",
        rarity: "Rare",
        weight: "310 kg",
        height: "1.6 m",
        talents: ["Enchanting Mist", "Vosges' Breath", "Sylvan Gaze"]
    },
    {
        id: "067",
        name: "Alsace",
        category: "Historical Realm",
        description: "A region characterized by its picturesque villages and rich culinary heritage. It breathes history and tradition.",
        imageUrl: "https://images.unsplash.com/photo-1558299834-3158c3a7fcc3?auto=format&fit=crop&q=80&w=800",
        type: "Heritage",
        rarity: "Epic",
        weight: "Unknown",
        height: "Vast",
        talents: ["Stork's Blessing", "Pretzel Shield", "Vineyard Aura"]
    },
    {
        id: "075",
        name: "Île-de-France",
        category: "Metropolitan Core",
        description: "The bustling heart of the country, radiating culture, power, and architectural wonders. It never sleeps.",
        imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
        type: "Urban",
        rarity: "Epic",
        weight: "Dense",
        height: "Monumental",
        talents: ["City Lights", "Metro Network", "Architect's Vision"]
    }
];
