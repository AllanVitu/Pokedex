export interface Concept {
  id: string;
  name: string;
  category: 'energy' | 'item' | 'event' | 'place';
  description: string;
  icon: string;
  color: string;
}

export const concepts: Concept[] = [
  {
    id: 'ki',
    name: 'Le Ki',
    category: 'energy',
    description:
      "L'énergie vitale qui habite chaque être vivant. Les combattants de Dragon Ball apprennent à contrôler et projeter leur Ki pour voler, lancer des attaques d'énergie et décupler leur puissance. Le Ki peut être ressenti, supprimé ou amplifié.",
    icon: '⚡',
    color: '#f5a623',
  },
  {
    id: 'dragon_balls',
    name: 'Les Dragon Balls',
    category: 'item',
    description:
      "Sept sphères magiques dispersées sur Terre (et Namek). Réunies, elles invoquent le dragon Shenron (ou Porunga) capable d'exaucer des vœux. Elles se dispersent et deviennent inertes pendant un an après utilisation.",
    icon: '🟠',
    color: '#f5a623',
  },
  {
    id: 'capsules',
    name: 'Les Capsules Hoi Poi',
    category: 'item',
    description:
      "Invention révolutionnaire de Capsule Corporation (famille de Bulma). Ces petites capsules peuvent stocker des objets gigantesques : maisons, véhicules, laboratoires entiers. Technologie omniprésente dans l'univers DB.",
    icon: '💊',
    color: '#00b4d8',
  },
  {
    id: 'tenkaichi',
    name: 'Tenkaichi Budokai',
    category: 'event',
    description:
      "Le tournoi mondial d'arts martiaux, événement majeur de Dragon Ball. C'est l'arène où les meilleurs combattants du monde s'affrontent. Lieu de rencontres iconiques et de combats légendaires.",
    icon: '🏆',
    color: '#f5a623',
  },
  {
    id: 'tournament_power',
    name: 'Tournoi du Pouvoir',
    category: 'event',
    description:
      "Organisé par le Grand Zeno, ce tournoi met en compétition 8 univers. Les perdants voient leur univers effacé. 80 combattants, 48 minutes, une survie. L'événement le plus grand de DBS.",
    icon: '🌌',
    color: '#7b2cbf',
  },
  {
    id: 'scouter',
    name: 'Le Scouter',
    category: 'item',
    description:
      "Appareil porté sur l'œil permettant de mesurer le niveau de puissance (power level) d'un adversaire. Rendu célèbre par la réplique \"It's over 9000!\" de Vegeta. Devenu obsolète face aux guerriers qui masquent leur Ki.",
    icon: '📡',
    color: '#06d6a0',
  },
  {
    id: 'hyperbolic_time',
    name: 'Salle du Temps (Hyperbolic Time Chamber)',
    category: 'place',
    description:
      "Une dimension spéciale au Palais de Dieu où 1 jour réel = 1 an à l'intérieur. Environnement extrême (gravité intense, température variable) idéal pour un entraînement accéléré. Utilisé avant le Cell Game.",
    icon: '⏳',
    color: '#e8e8e8',
  },
  {
    id: 'senzu',
    name: 'Le Senzu',
    category: 'item',
    description:
      "Haricot magique cultivé par Maître Karin. Un seul Senzu guérit toutes les blessures et restaure toute l'énergie instantanément. Ressource rare et précieuse, souvent le facteur décisif dans les batailles.",
    icon: '🫘',
    color: '#06d6a0',
  },
];
