export interface Transformation {
  id: string;
  name: string;
  shortName: string;
  level: number;
  description: string;
  multiplier: string;
  firstUser: string;
  firstAppearance: string;
  color: string;
  gradient: [string, string];
  auraColors: string[];
}

export const transformations: Transformation[] = [
  {
    id: 'oozaru',
    name: 'Oozaru (Singe Géant)',
    shortName: 'Oozaru',
    level: 1,
    description:
      "La transformation originelle des Saiyans. En regardant la pleine lune, un Saiyan avec une queue se transforme en singe géant d'une puissance décuplée.",
    multiplier: 'x10',
    firstUser: 'Goku (enfant)',
    firstAppearance: 'Dragon Ball',
    color: '#8B4513',
    gradient: ['#8B4513', '#D2691E'],
    auraColors: ['#8B4513', '#A0522D'],
  },
  {
    id: 'ssj1',
    name: 'Super Saiyan',
    shortName: 'SSJ',
    level: 2,
    description:
      "La transformation légendaire. Déclenchée par une rage intense, elle confère cheveux dorés, yeux verts et une puissance multipliée par 50. Goku l'a atteinte pour la première fois face à Freezer sur Namek.",
    multiplier: 'x50',
    firstUser: 'Goku',
    firstAppearance: 'Saga Freezer (DBZ)',
    color: '#ffd700',
    gradient: ['#ffd700', '#f5a623'],
    auraColors: ['#ffd700', '#ffed4a'],
  },
  {
    id: 'ssj2',
    name: 'Super Saiyan 2',
    shortName: 'SSJ2',
    level: 3,
    description:
      "L'évolution du SSJ, reconnaissable à ses éclairs d'énergie. Gohan est le premier à l'atteindre lors du Cell Game, dans l'une des scènes les plus marquantes de la série.",
    multiplier: 'x100',
    firstUser: 'Gohan',
    firstAppearance: 'Saga Cell (DBZ)',
    color: '#f5a623',
    gradient: ['#f5a623', '#ffd700'],
    auraColors: ['#ffd700', '#ffffff', '#87ceeb'],
  },
  {
    id: 'ssj3',
    name: 'Super Saiyan 3',
    shortName: 'SSJ3',
    level: 4,
    description:
      "Le stade ultime du SSJ classique. Reconnaissable à ses cheveux extrêmement longs et l'absence de sourcils. Extrêmement puissant mais très énergivore.",
    multiplier: 'x400',
    firstUser: 'Goku',
    firstAppearance: 'Saga Buu (DBZ)',
    color: '#f5a623',
    gradient: ['#daa520', '#f5a623'],
    auraColors: ['#ffd700', '#ff8c00', '#ffffff'],
  },
  {
    id: 'ssj4',
    name: 'Super Saiyan 4',
    shortName: 'SSJ4',
    level: 5,
    description:
      "Transformation unique à GT, combinant la forme Oozaru et le Super Saiyan. Le combattant gagne une fourrure rouge et une puissance colossale tout en gardant sa conscience.",
    multiplier: 'x4000',
    firstUser: 'Goku',
    firstAppearance: 'Dragon Ball GT',
    color: '#ef233c',
    gradient: ['#ef233c', '#8B0000'],
    auraColors: ['#ef233c', '#ff4500', '#ffd700'],
  },
  {
    id: 'ssjgod',
    name: 'Super Saiyan God',
    shortName: 'SSG',
    level: 6,
    description:
      "Le ki divin. Obtenu par un rituel de 5 Saiyans au cœur pur, cette forme confère un ki divin indétectable et une puissance rivalisant avec les Dieux de la Destruction.",
    multiplier: 'Divin',
    firstUser: 'Goku',
    firstAppearance: 'Dragon Ball Super',
    color: '#ef233c',
    gradient: ['#ef233c', '#ff69b4'],
    auraColors: ['#ef233c', '#ff6347', '#ff69b4'],
  },
  {
    id: 'ssjblue',
    name: 'Super Saiyan Blue',
    shortName: 'SSB',
    level: 7,
    description:
      "La combinaison du Super Saiyan et du ki divin. Un contrôle parfait du ki offrant puissance et précision. La transformation signature de Goku et Vegeta dans Super.",
    multiplier: 'SSG x50',
    firstUser: 'Goku & Vegeta',
    firstAppearance: 'DBS - Saga Golden Freezer',
    color: '#00b4d8',
    gradient: ['#0077b6', '#00b4d8'],
    auraColors: ['#00b4d8', '#0077b6', '#ffffff'],
  },
  {
    id: 'ui',
    name: 'Ultra Instinct',
    shortName: 'UI',
    level: 8,
    description:
      "Le corps réagit de lui-même, sans que l'esprit ait besoin de penser. Technique des anges, l'Ultra Instinct sépare la conscience du mouvement, atteignant la perfection martiale.",
    multiplier: '∞',
    firstUser: 'Goku',
    firstAppearance: 'DBS - Tournoi du Pouvoir',
    color: '#c0c0c0',
    gradient: ['#c0c0c0', '#e8e8e8'],
    auraColors: ['#c0c0c0', '#e8e8e8', '#87ceeb'],
  },
  {
    id: 'ue',
    name: 'Ultra Ego',
    shortName: 'UE',
    level: 8,
    description:
      "L'antithèse de l'Ultra Instinct. Où l'UI esquive, l'Ultra Ego absorbe et riposte. Plus Vegeta subit de dégâts, plus il devient puissant. La voie du Dieu de la Destruction.",
    multiplier: '∞',
    firstUser: 'Vegeta',
    firstAppearance: 'DBS Manga - Saga Granolah',
    color: '#7b2cbf',
    gradient: ['#4a0e78', '#7b2cbf'],
    auraColors: ['#7b2cbf', '#9d4edd', '#4a0e78'],
  },
  {
    id: 'beast',
    name: 'Gohan Beast',
    shortName: 'Beast',
    level: 8,
    description:
      "L'éveil ultime de Gohan, libérant tout son potentiel latent. Cheveux blancs/gris, yeux rouges : une puissance brute dépassant toutes les formes précédentes.",
    multiplier: '∞',
    firstUser: 'Gohan',
    firstAppearance: 'DBS: Super Hero',
    color: '#ef233c',
    gradient: ['#8B0000', '#ef233c'],
    auraColors: ['#ef233c', '#ffffff', '#ff4500'],
  },
];
