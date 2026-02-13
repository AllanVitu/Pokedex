export interface Technique {
  id: string;
  name: string;
  japaneseName?: string;
  user: string;
  type: 'ki_blast' | 'physical' | 'support' | 'special';
  description: string;
  color: string;
  power: number; // 1-10
  iconic: boolean;
}

export const techniques: Technique[] = [
  {
    id: 'kamehameha',
    name: 'Kamehameha',
    japaneseName: 'かめはめ波',
    user: 'Goku / Gohan / Maître Roshi',
    type: 'ki_blast',
    description:
      "La technique signature de l'école de la Tortue. Une concentration de ki projetée en un puissant rayon d'énergie. Inventée par Maître Roshi après 50 ans d'entraînement, Goku l'a apprise en la voyant une seule fois.",
    color: '#00b4d8',
    power: 9,
    iconic: true,
  },
  {
    id: 'final_flash',
    name: 'Final Flash',
    japaneseName: 'ファイナルフラッシュ',
    user: 'Vegeta',
    type: 'ki_blast',
    description:
      "L'attaque signature de Vegeta. Un rayon d'énergie massif lancé après une longue charge. Utilisé de manière mémorable contre Cell, il a démontré la puissance brute du prince Saiyan.",
    color: '#ffd700',
    power: 9,
    iconic: true,
  },
  {
    id: 'makankosappo',
    name: 'Makankosappo',
    japaneseName: '魔貫光殺砲',
    user: 'Piccolo',
    type: 'ki_blast',
    description:
      "Le Rayon Perforant. Un faisceau de ki concentré en spirale capable de percer n'importe quoi. Développé par Piccolo spécifiquement pour vaincre Goku, il a été utilisé pour le premier combat contre Raditz.",
    color: '#06d6a0',
    power: 8,
    iconic: true,
  },
  {
    id: 'genki_dama',
    name: 'Genki Dama',
    japaneseName: '元気玉',
    user: 'Goku',
    type: 'special',
    description:
      "Le Spirit Ball / Boule d'énergie vitale. Goku collecte l'énergie de tous les êtres vivants pour former une sphère d'énergie colossale. L'arme ultime contre le mal pur.",
    color: '#87ceeb',
    power: 10,
    iconic: true,
  },
  {
    id: 'galick_gun',
    name: 'Galick Gun',
    japaneseName: 'ギャリック砲',
    user: 'Vegeta',
    type: 'ki_blast',
    description:
      "L'une des premières techniques emblématiques de Vegeta, utilisée lors de son premier combat contre Goku. Un puissant rayon violet lancé depuis une posture similaire au Kamehameha.",
    color: '#7b2cbf',
    power: 8,
    iconic: true,
  },
  {
    id: 'kaioken',
    name: 'Kaioken',
    japaneseName: '界王拳',
    user: 'Goku',
    type: 'support',
    description:
      "Technique enseignée par Kaio du Nord. Elle multiplie temporairement toutes les capacités du combattant, mais au prix d'un stress intense sur le corps. Goku l'a combinée avec le Blue dans Super.",
    color: '#ef233c',
    power: 7,
    iconic: true,
  },
  {
    id: 'solar_flare',
    name: 'Taiyoken (Solar Flare)',
    japaneseName: '太陽拳',
    user: 'Tenshinhan / Krillin',
    type: 'support',
    description:
      "Un flash de lumière aveuglant émis depuis les mains. Technique de diversion par excellence, utilisée par de nombreux combattants pour gagner un avantage tactique.",
    color: '#ffd700',
    power: 3,
    iconic: false,
  },
  {
    id: 'destructo_disc',
    name: 'Kienzan (Destructo Disc)',
    japaneseName: '気円斬',
    user: 'Krillin',
    type: 'ki_blast',
    description:
      "Un disque d'énergie tranchant capable de couper presque n'importe quoi. La technique signature de Krillin, elle a prouvé que même les combattants moins puissants peuvent être dangereux.",
    color: '#f5a623',
    power: 7,
    iconic: true,
  },
  {
    id: 'death_beam',
    name: 'Death Beam',
    japaneseName: 'デスビーム',
    user: 'Freezer',
    type: 'ki_blast',
    description:
      "Un fin rayon d'énergie tiré du doigt avec une précision mortelle. L'attaque favorite de Freezer, rapide et dévastatrice. C'est avec cette technique qu'il a tué de nombreux guerriers.",
    color: '#9d4edd',
    power: 8,
    iconic: true,
  },
  {
    id: 'hakai',
    name: 'Hakai (Destruction)',
    japaneseName: '破壊',
    user: 'Beerus / Vegeta',
    type: 'special',
    description:
      "Le pouvoir de destruction absolu des Dieux de la Destruction. Peut effacer de l'existence n'importe quel être ou objet. Vegeta a appris une version de cette technique sous la tutelle de Beerus.",
    color: '#4a0e78',
    power: 10,
    iconic: true,
  },
  {
    id: 'instant_transmission',
    name: 'Instant Transmission',
    japaneseName: '瞬間移動',
    user: 'Goku',
    type: 'support',
    description:
      "Téléportation instantanée en se concentrant sur un ki. Apprise sur la planète Yardrat, cette technique permet à Goku de se déplacer instantanément n'importe où dans l'univers.",
    color: '#00b4d8',
    power: 5,
    iconic: true,
  },
  {
    id: 'big_bang',
    name: 'Big Bang Attack',
    japaneseName: 'ビッグバンアタック',
    user: 'Vegeta',
    type: 'ki_blast',
    description:
      "Une sphère d'énergie concentrée tirée d'une seule main. Vegeta l'a utilisée pour la première fois contre C-19 après avoir atteint le Super Saiyan.",
    color: '#f5a623',
    power: 8,
    iconic: true,
  },
];
