import { CmsEnumCardVariant, CmsEnumVerticalAlignment } from "../Enum.types";
import {
  CmsComponentButton,
  CmsComponentDownloadButton,
  CmsComponentGradient,
} from "../Misc.types";
import { CmsMedia, CmsRichText } from "../System.types";

export interface CmsComponentCardHeading {
  title: string;
  description: string;
}

export interface CmsComponentCardContent {
  title: string;
  description: CmsRichText;
  isNarrowDescription: boolean;
  ctaComponents: (CmsComponentButton | CmsComponentDownloadButton)[];
}

export interface CmsComponentCard {
  heading?: CmsComponentCardHeading;
  variant: CmsEnumCardVariant;
  isReversed: boolean;
  mainContent: CmsComponentCardContent;
  showBackground: boolean;
  gradient: CmsComponentGradient;
  backgroundColumnWidth?: 2 | 3 | 4;
  isShifted?: boolean;
  primaryMedia?: CmsMedia;
  primaryMediaVerticalAlignment?: CmsEnumVerticalAlignment;
  secondaryMedia?: CmsMedia;
}
