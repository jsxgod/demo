import { CmsComponentCard } from "./Card/Card.types";
import { CmsMedia } from "./System.types";

export interface CmsModelLandingPage {
  cards: CmsComponentCard[];
}

export interface CmsModelMaterial {
  catalogId: string;
  name: string;
  media: CmsMedia;
}
