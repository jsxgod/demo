import { CmsComponentCard } from "./Card/Card.types";
import { CmsComponentHeroSection } from "./HeroSection/HeroSection.types";
import { CmsMedia } from "./System.types";

export interface CmsModelLandingPage {
  heroSection?: CmsComponentHeroSection;
  cards: CmsComponentCard[];
}

export interface CmsModelMaterial {
  catalogId: string;
  name: string;
  media: CmsMedia;
}
