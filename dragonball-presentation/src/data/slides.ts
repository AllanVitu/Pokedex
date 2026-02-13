export interface SlideData {
  id: string;
  title: string;
  chapter: string;
  chapterId: string;
  searchText: string;
}

export const slideList: SlideData[] = [
  // Chapter: Accueil
  { id: 'welcome', title: 'Bienvenue', chapter: 'Accueil', chapterId: 'home', searchText: 'Dragon Ball présentation bienvenue accueil' },

  // Chapter: Histoire & Sagas
  { id: 'sagas-intro', title: 'Histoire & Sagas', chapter: 'Histoire & Sagas', chapterId: 'sagas', searchText: 'histoire sagas dragon ball chronologie timeline' },
  { id: 'sagas-timeline', title: 'La Timeline', chapter: 'Histoire & Sagas', chapterId: 'sagas', searchText: 'timeline chronologie DB DBZ DBS DBGT années' },

  // Chapter: Personnages
  { id: 'characters-intro', title: 'Les Personnages', chapter: 'Personnages', chapterId: 'characters', searchText: 'personnages héros combattants guerriers' },
  { id: 'characters-gallery', title: 'Galerie des Héros', chapter: 'Personnages', chapterId: 'characters', searchText: 'galerie héros Goku Vegeta Gohan Piccolo fiches stats' },

  // Chapter: Transformations
  { id: 'transformations-intro', title: 'Les Transformations', chapter: 'Transformations', chapterId: 'transformations', searchText: 'transformations super saiyan évolution puissance' },
  { id: 'transformations-gallery', title: 'Échelle de Puissance', chapter: 'Transformations', chapterId: 'transformations', searchText: 'SSJ SSJ2 SSJ3 God Blue Ultra Instinct puissance échelle' },

  // Chapter: Univers & Concepts
  { id: 'concepts-intro', title: 'Univers & Concepts', chapter: 'Univers & Concepts', chapterId: 'concepts', searchText: 'univers concepts ki dragon balls capsules tournois' },
  { id: 'concepts-details', title: 'Les Concepts Clés', chapter: 'Univers & Concepts', chapterId: 'concepts', searchText: 'ki scouter senzu salle du temps concepts clés' },

  // Chapter: Techniques
  { id: 'techniques-intro', title: 'Techniques Cultes', chapter: 'Techniques', chapterId: 'techniques', searchText: 'techniques attaques cultes kamehameha final flash' },
  { id: 'techniques-showcase', title: 'Arsenal des Guerriers', chapter: 'Techniques', chapterId: 'techniques', searchText: 'arsenal guerriers techniques puissance ranking' },

  // Chapter: Quiz
  { id: 'quiz-intro', title: 'Quiz Dragon Ball', chapter: 'Quiz', chapterId: 'quiz', searchText: 'quiz questions test connaissances dragon ball' },

  // Chapter: Fin
  { id: 'end', title: 'Merci !', chapter: 'Fin', chapterId: 'end', searchText: 'fin merci remerciements conclusion' },
];

export const chapters = [
  { id: 'home', title: 'Accueil', icon: '🏠' },
  { id: 'sagas', title: 'Histoire & Sagas', icon: '📜' },
  { id: 'characters', title: 'Personnages', icon: '👥' },
  { id: 'transformations', title: 'Transformations', icon: '⚡' },
  { id: 'concepts', title: 'Univers & Concepts', icon: '🌍' },
  { id: 'techniques', title: 'Techniques', icon: '💥' },
  { id: 'quiz', title: 'Quiz', icon: '🧠' },
  { id: 'end', title: 'Fin', icon: '🎬' },
];
