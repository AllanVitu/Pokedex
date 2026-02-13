import { slideList } from '../../data/slides';
import { WelcomeSlide } from './WelcomeSlide';
import { SagasIntroSlide } from './SagasIntroSlide';
import { SagasTimelineSlide } from './SagasTimelineSlide';
import { CharactersIntroSlide } from './CharactersIntroSlide';
import { CharactersGallerySlide } from './CharactersGallerySlide';
import { TransformationsIntroSlide } from './TransformationsIntroSlide';
import { TransformationsGallerySlide } from './TransformationsGallerySlide';
import { ConceptsIntroSlide } from './ConceptsIntroSlide';
import { ConceptsDetailsSlide } from './ConceptsDetailsSlide';
import { TechniquesIntroSlide } from './TechniquesIntroSlide';
import { TechniquesShowcaseSlide } from './TechniquesShowcaseSlide';
import { QuizIntroSlide } from './QuizIntroSlide';
import { EndSlide } from './EndSlide';

const slideComponentMap: Record<string, React.FC> = {
  welcome: WelcomeSlide,
  'sagas-intro': SagasIntroSlide,
  'sagas-timeline': SagasTimelineSlide,
  'characters-intro': CharactersIntroSlide,
  'characters-gallery': CharactersGallerySlide,
  'transformations-intro': TransformationsIntroSlide,
  'transformations-gallery': TransformationsGallerySlide,
  'concepts-intro': ConceptsIntroSlide,
  'concepts-details': ConceptsDetailsSlide,
  'techniques-intro': TechniquesIntroSlide,
  'techniques-showcase': TechniquesShowcaseSlide,
  'quiz-intro': QuizIntroSlide,
  end: EndSlide,
};

interface SlideRendererProps {
  slideIndex: number;
}

export function SlideRenderer({ slideIndex }: SlideRendererProps) {
  const slide = slideList[slideIndex];
  if (!slide) return null;

  const Component = slideComponentMap[slide.id];
  if (!Component) return null;

  return <Component />;
}
