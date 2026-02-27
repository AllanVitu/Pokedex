export interface Region {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    type: string;
    rarity?: string;
    weight?: string;
    height?: string;
    talents?: string[];
}
