import {
  CmsEnumDynamicGridCardMediaType,
  CmsEnumHorizontalAlignment,
  CmsEnumMultipleComponentDirection,
  CmsEnumVerticalAlignment,
} from "./Enum.types";
import { CmsColor, CmsMedia } from "./Misc.types";

export interface CmsComponentDynamicSection {
  title: string;
  cards: CmsComponentDynamicGridCard[];
}

export interface CmsComponentDynamicGridCard {
  cardColumns: number;
  cardAlignment: CmsEnumHorizontalAlignment;
  alignToTitle: boolean;

  title: string;
  titleStartColumn?: number;
  titleColumns?: number;

  description: string;
  descriptionStartColumn?: number;
  descriptionColumns?: number;

  ctaComponents: (CmsComponentButton | CmsComponentDownloadButton)[];
  ctaDirection: CmsEnumMultipleComponentDirection;

  dynamicMedia?: CmsComponentDynamicGridCardMedia;
}

export interface CmsComponentDynamicGridCardMedia {
  type: CmsEnumDynamicGridCardMediaType;
  verticalAlignment: CmsEnumVerticalAlignment;
  horizontalAlignment: CmsEnumHorizontalAlignment;
  largeMedia: CmsMedia;
  smallMedia?: CmsMedia;
}

export interface CmsComponentButton {
  __typename: "Button";
  label: string;
  url?: string;
  color: CmsColor;
}

export interface CmsComponentDownloadButton {
  __typename: "DownloadButton";
  label: string;
  url?: string;
  color: CmsColor;
}
