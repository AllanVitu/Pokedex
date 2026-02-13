export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Quel est le vrai nom Saiyan de Goku ?',
    options: ['Bardock', 'Kakarot', 'Raditz', 'Turles'],
    correctIndex: 1,
    explanation:
      'Goku a été envoyé sur Terre sous le nom de Kakarot. Bardock est son père, Raditz son frère.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Qui est le premier personnage à atteindre le Super Saiyan 2 dans la série ?',
    options: ['Goku', 'Vegeta', 'Gohan', 'Trunks du Futur'],
    correctIndex: 2,
    explanation:
      "Gohan atteint le SSJ2 lors du Cell Game, déclenché par la rage après la destruction de C-16.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Combien de Dragon Balls faut-il réunir pour invoquer Shenron ?',
    options: ['5', '6', '7', '9'],
    correctIndex: 2,
    explanation:
      "Il faut réunir les 7 Dragon Balls de la Terre pour invoquer Shenron. Porunga (Namek) nécessite également 7 boules.",
    difficulty: 'easy',
  },
  {
    id: 4,
    question: "Quelle technique Piccolo a-t-il développée spécialement pour vaincre Goku ?",
    options: ['Hellzone Grenade', 'Makankosappo', 'Masenko', 'Light Grenade'],
    correctIndex: 1,
    explanation:
      "Le Makankosappo (Special Beam Cannon) a été créé par Piccolo pour tuer Goku, mais il l'a finalement utilisé contre Raditz.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "Qui organise le Tournoi du Pouvoir dans Dragon Ball Super ?",
    options: ['Beerus', 'Whis', 'Grand Zeno', 'Grand Prêtre'],
    correctIndex: 2,
    explanation:
      "Le Grand Zeno (Zen'ō) organise le Tournoi du Pouvoir après que Goku lui en a donné l'idée. Les univers perdants sont effacés.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "Quel est le nom de l'attaque signature de Vegeta lancée à deux mains ?",
    options: ['Big Bang Attack', 'Galick Gun', 'Final Flash', 'Final Explosion'],
    correctIndex: 2,
    explanation:
      "Le Final Flash est la technique la plus puissante de Vegeta, lancée avec les deux mains après une longue charge. Il l'utilise notamment contre Cell.",
    difficulty: 'medium',
  },
  {
    id: 7,
    question: "Quelle planète Freezer a-t-il détruite, forçant les Saiyans à la dispersion ?",
    options: ['Namek', 'Vegeta', 'Sadala', 'Kanassa'],
    correctIndex: 1,
    explanation:
      'Freezer a détruit la planète Vegeta par peur de la légende du Super Saiyan, éliminant presque toute la race Saiyan.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: "Dans la Salle du Temps (Hyperbolic Time Chamber), combien de temps s'écoule à l'intérieur pour 1 jour réel ?",
    options: ['1 mois', '6 mois', '1 an', '10 ans'],
    correctIndex: 2,
    explanation:
      "1 jour à l'extérieur = 1 an à l'intérieur de la Salle du Temps. Goku et Gohan y ont séjourné pour se préparer au Cell Game.",
    difficulty: 'medium',
  },
  {
    id: 9,
    question: "Quelle est la particularité de l'Ultra Instinct ?",
    options: [
      'Augmente la force brute',
      'Le corps bouge de lui-même sans pensée',
      'Permet de voyager dans le temps',
      "Double l'énergie Ki",
    ],
    correctIndex: 1,
    explanation:
      "L'Ultra Instinct sépare la conscience du mouvement. Le corps réagit et esquive automatiquement, sans que l'esprit ait besoin de commander.",
    difficulty: 'medium',
  },
  {
    id: 10,
    question: "Quel personnage a absorbé C-17 et C-18 pour atteindre sa forme parfaite ?",
    options: ['Buu', 'Cell', 'Baby', 'Mira'],
    correctIndex: 1,
    explanation:
      'Cell, le bio-androïde du Dr. Gero, devait absorber C-17 puis C-18 pour atteindre sa forme parfaite.',
    difficulty: 'easy',
  },
  {
    id: 11,
    question: "Qui a enseigné la technique du Kaioken à Goku ?",
    options: ['Maître Roshi', 'Kaio du Nord', 'Whis', 'Maître Karin'],
    correctIndex: 1,
    explanation:
      "Kaio du Nord (King Kai) a enseigné le Kaioken et le Genki Dama à Goku lors de son séjour dans l'au-delà.",
    difficulty: 'easy',
  },
  {
    id: 12,
    question: "Comment s'appelle la transformation exclusive à Dragon Ball GT ?",
    options: ['Super Saiyan God', 'Ultra Instinct', 'Super Saiyan 4', 'Gohan Beast'],
    correctIndex: 2,
    explanation:
      'Le Super Saiyan 4 est exclusif à GT. Il combine la forme Oozaru avec le Super Saiyan, donnant une fourrure rouge au combattant.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: "Quel est le pouvoir de destruction de Beerus appelé ?",
    options: ['Death Beam', 'Hakai', 'Spirit Bomb', 'Omega Blaster'],
    correctIndex: 1,
    explanation:
      "Le Hakai (破壊 = Destruction) est le pouvoir exclusif des Dieux de la Destruction. Il peut effacer de l'existence n'importe quoi.",
    difficulty: 'hard',
  },
  {
    id: 14,
    question: "Quelle est la transformation ultime de Vegeta dans le manga Dragon Ball Super ?",
    options: ['Ultra Instinct', 'Super Saiyan Blue Evolution', 'Ultra Ego', 'Beast Mode'],
    correctIndex: 2,
    explanation:
      "L'Ultra Ego est l'antithèse de l'Ultra Instinct. Vegeta l'obtient grâce à l'entraînement de Beerus sur la voie de la Destruction.",
    difficulty: 'hard',
  },
  {
    id: 15,
    question: "Combien d'univers participent au Tournoi du Pouvoir ?",
    options: ['4', '8', '12', '10'],
    correctIndex: 1,
    explanation:
      "8 univers participent au Tournoi du Pouvoir. Les 4 univers restants (1, 5, 8, 12) sont exemptés car leur niveau moyen de mortels est trop élevé.",
    difficulty: 'hard',
  },
];
