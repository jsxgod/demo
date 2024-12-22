import { CmsColor } from "./System.types";

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

export interface CmsComponentGradient {
  firstColor: CmsColor;
  secondColor: CmsColor;
  angle: number;
}
