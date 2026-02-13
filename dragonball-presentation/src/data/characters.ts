export interface CharacterStat {
  label: string;
  value: number; // 0..100
}

export interface Character {
  id: string;
  name: string;
  alias?: string;
  race: string;
  description: string;
  stats: CharacterStat[];
  color: string;
  gradient: [string, string];
  emoji: string;
  techniques: string[];
}

export const characters: Character[] = [
  {
    id: 'goku',
    name: 'Son Goku',
    alias: 'Kakarot',
    race: 'Saiyan',
    description:
      "Héros principal de la saga. Envoyé sur Terre bébé, Goku est devenu le plus puissant guerrier de l'univers grâce à son amour du combat et sa détermination sans limite.",
    stats: [
      { label: 'Force', value: 98 },
      { label: 'Vitesse', value: 95 },
      { label: 'Ki', value: 100 },
      { label: 'Endurance', value: 90 },
      { label: 'Technique', value: 85 },
      { label: 'Intelligence', value: 60 },
    ],
    color: '#f5a623',
    gradient: ['#f5a623', '#ff6b35'],
    emoji: '🟠',
    techniques: ['Kamehameha', 'Genki Dama', 'Instant Transmission', 'Kaioken'],
  },
  {
    id: 'vegeta',
    name: 'Vegeta',
    alias: 'Prince des Saiyans',
    race: 'Saiyan',
    description:
      "Prince de la race Saiyan, rival éternel de Goku. Sa fierté et sa détermination l'ont poussé à dépasser constamment ses limites pour atteindre le sommet.",
    stats: [
      { label: 'Force', value: 96 },
      { label: 'Vitesse', value: 93 },
      { label: 'Ki', value: 97 },
      { label: 'Endurance', value: 92 },
      { label: 'Technique', value: 88 },
      { label: 'Intelligence', value: 78 },
    ],
    color: '#0077b6',
    gradient: ['#0077b6', '#00b4d8'],
    emoji: '🔵',
    techniques: ['Final Flash', 'Galick Gun', 'Big Bang Attack', 'Ultra Ego'],
  },
  {
    id: 'gohan',
    name: 'Son Gohan',
    race: 'Demi-Saiyan',
    description:
      "Fils aîné de Goku, Gohan possède un potentiel latent immense. C'est lui qui a vaincu Cell en atteignant le SSJ2, marquant l'un des moments les plus iconiques de la série.",
    stats: [
      { label: 'Force', value: 94 },
      { label: 'Vitesse', value: 88 },
      { label: 'Ki', value: 95 },
      { label: 'Endurance', value: 80 },
      { label: 'Technique', value: 82 },
      { label: 'Intelligence', value: 95 },
    ],
    color: '#ef233c',
    gradient: ['#ef233c', '#d90429'],
    emoji: '🔴',
    techniques: ['Kamehameha', 'Masenko', 'Beast Mode', 'Special Beam Cannon'],
  },
  {
    id: 'piccolo',
    name: 'Piccolo',
    alias: 'Ma Junior',
    race: 'Namekien',
    description:
      "Ancien ennemi de Goku devenu mentor et protecteur de Gohan. Stratège redoutable et combattant d'élite, Piccolo est le cœur tactique de l'équipe.",
    stats: [
      { label: 'Force', value: 82 },
      { label: 'Vitesse', value: 80 },
      { label: 'Ki', value: 85 },
      { label: 'Endurance', value: 88 },
      { label: 'Technique', value: 92 },
      { label: 'Intelligence', value: 95 },
    ],
    color: '#06d6a0',
    gradient: ['#06d6a0', '#00a878'],
    emoji: '🟢',
    techniques: ['Makankosappo', 'Makkankosappo', 'Hellzone Grenade', 'Orange Form'],
  },
  {
    id: 'freezer',
    name: 'Freezer',
    alias: 'Empereur de l\'Univers',
    race: 'Mutant / Frost Demon',
    description:
      "Tyran galactique et l'un des antagonistes les plus emblématiques. Sa cruauté et sa puissance ont marqué à jamais l'histoire de Dragon Ball lors de la saga Namek.",
    stats: [
      { label: 'Force', value: 95 },
      { label: 'Vitesse', value: 90 },
      { label: 'Ki', value: 96 },
      { label: 'Endurance', value: 85 },
      { label: 'Technique', value: 80 },
      { label: 'Intelligence', value: 88 },
    ],
    color: '#7b2cbf',
    gradient: ['#7b2cbf', '#9d4edd'],
    emoji: '🟣',
    techniques: ['Death Beam', 'Death Ball', 'Golden Form', 'Black Freezer'],
  },
  {
    id: 'cell',
    name: 'Cell',
    alias: 'Forme Parfaite',
    race: 'Bio-Androïde',
    description:
      "Création ultime du Dr. Gero, Cell combine l'ADN des plus grands combattants. Sa quête de perfection l'a mené à absorber les cyborgs C-17 et C-18 pour atteindre sa forme parfaite.",
    stats: [
      { label: 'Force', value: 92 },
      { label: 'Vitesse', value: 88 },
      { label: 'Ki', value: 93 },
      { label: 'Endurance', value: 95 },
      { label: 'Technique', value: 90 },
      { label: 'Intelligence', value: 85 },
    ],
    color: '#06d6a0',
    gradient: ['#38b000', '#06d6a0'],
    emoji: '🦎',
    techniques: ['Kamehameha', 'Régénération', 'Cell Junior', 'Solar Flare'],
  },
  {
    id: 'buu',
    name: 'Majin Buu',
    alias: 'Buu',
    race: 'Majin',
    description:
      "Créature ancestrale d'une puissance incommensurable, Buu existe depuis des millions d'années. Sous ses multiples formes, il représente l'une des plus grandes menaces de l'univers.",
    stats: [
      { label: 'Force', value: 96 },
      { label: 'Vitesse', value: 85 },
      { label: 'Ki', value: 98 },
      { label: 'Endurance', value: 100 },
      { label: 'Technique', value: 70 },
      { label: 'Intelligence', value: 40 },
    ],
    color: '#ff69b4',
    gradient: ['#ff69b4', '#ff1493'],
    emoji: '🩷',
    techniques: ['Absorption', 'Candy Beam', 'Régénération', 'Vice Shout'],
  },
  {
    id: 'beerus',
    name: 'Beerus',
    alias: 'Dieu de la Destruction',
    race: 'Divin',
    description:
      "Dieu de la Destruction de l'Univers 7, Beerus est l'un des êtres les plus puissants de tout le multivers. Son introduction a ouvert l'ère des dieux dans Dragon Ball.",
    stats: [
      { label: 'Force', value: 100 },
      { label: 'Vitesse', value: 98 },
      { label: 'Ki', value: 100 },
      { label: 'Endurance', value: 95 },
      { label: 'Technique', value: 95 },
      { label: 'Intelligence', value: 90 },
    ],
    color: '#7b2cbf',
    gradient: ['#4a0e78', '#7b2cbf'],
    emoji: '😼',
    techniques: ['Hakai', 'Sphere of Destruction', 'Ultra Instinct (partiel)'],
  },
  {
    id: 'trunks',
    name: 'Trunks',
    alias: 'Trunks du Futur',
    race: 'Demi-Saiyan',
    description:
      "Fils de Vegeta venu du futur pour prévenir la menace des cyborgs. Son courage et sa détermination face à un avenir apocalyptique en font l'un des personnages les plus appréciés.",
    stats: [
      { label: 'Force', value: 88 },
      { label: 'Vitesse', value: 86 },
      { label: 'Ki', value: 90 },
      { label: 'Endurance', value: 85 },
      { label: 'Technique', value: 84 },
      { label: 'Intelligence', value: 82 },
    ],
    color: '#00b4d8',
    gradient: ['#0077b6', '#00b4d8'],
    emoji: '⚔️',
    techniques: ['Burning Attack', 'Épée de lumière', 'Final Flash', 'Galick Gun'],
  },
  {
    id: 'jiren',
    name: 'Jiren',
    alias: 'Jiren the Gray',
    race: 'Alien (Univers 11)',
    description:
      "Le combattant le plus puissant de l'Univers 11 et adversaire principal du Tournoi du Pouvoir. Sa force transcende même celle d'un Dieu de la Destruction.",
    stats: [
      { label: 'Force', value: 99 },
      { label: 'Vitesse', value: 97 },
      { label: 'Ki', value: 99 },
      { label: 'Endurance', value: 96 },
      { label: 'Technique', value: 88 },
      { label: 'Intelligence', value: 75 },
    ],
    color: '#ef233c',
    gradient: ['#d90429', '#ef233c'],
    emoji: '💥',
    techniques: ['Power Impact', 'Méditation de Force', 'Glare', 'Full Power'],
  },
];
