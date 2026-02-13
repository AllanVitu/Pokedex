export interface Saga {
  id: string;
  title: string;
  series: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  color: string;
  arcs: string[];
}

export const sagas: Saga[] = [
  {
    id: 'db',
    title: 'Dragon Ball',
    series: 'DB',
    yearStart: 1986,
    yearEnd: 1989,
    description:
      "L'aventure commence ! Le jeune Goku, un garçon à la queue de singe doté d'une force surhumaine, part à la recherche des Dragon Balls avec Bulma. Des tournois d'arts martiaux aux combats contre l'armée du Ruban Rouge et le démon Piccolo, c'est ici que tout commence.",
    color: '#f5a623',
    arcs: [
      'Saga de Pilaf',
      "21e Tenkaichi Budokai",
      'Armée du Ruban Rouge',
      "22e Tenkaichi Budokai",
      'Piccolo Daimao',
      "23e Tenkaichi Budokai",
    ],
  },
  {
    id: 'dbz',
    title: 'Dragon Ball Z',
    series: 'DBZ',
    yearStart: 1989,
    yearEnd: 1996,
    description:
      "Goku découvre ses origines Saiyan et affronte les menaces les plus terrifiantes de l'univers. Des Saiyans aux Namekiens, de Freezer à Cell en passant par Buu, l'enjeu est désormais la survie de l'univers tout entier.",
    color: '#ef233c',
    arcs: [
      'Saga des Saiyans',
      'Saga de Namek / Freezer',
      'Saga des Cyborgs',
      'Saga de Cell',
      'Saga de Buu',
    ],
  },
  {
    id: 'dbgt',
    title: 'Dragon Ball GT',
    series: 'DBGT',
    yearStart: 1996,
    yearEnd: 1997,
    description:
      "Goku est transformé en enfant par les Dragon Balls à étoiles noires. Un voyage spatial s'impose pour les récupérer, suivi d'affrontements contre Baby, Super C-17 et les Dragons maléfiques.",
    color: '#7b2cbf',
    arcs: [
      'Saga des Dragon Balls à étoiles noires',
      'Saga de Baby',
      'Saga de Super C-17',
      'Saga des Dragons maléfiques',
    ],
  },
  {
    id: 'dbs',
    title: 'Dragon Ball Super',
    series: 'DBS',
    yearStart: 2015,
    yearEnd: 2018,
    description:
      "Après la défaite de Buu, de nouveaux défis cosmiques émergent. Beerus, le Dieu de la Destruction, puis le tournoi entre univers poussent Goku et Vegeta à atteindre des niveaux de puissance divins inédits.",
    color: '#00b4d8',
    arcs: [
      'Saga de Beerus',
      'Saga de Golden Freezer',
      'Saga de l\'Univers 6',
      'Saga de Goku Black / Trunks du Futur',
      'Saga du Tournoi du Pouvoir',
    ],
  },
];
