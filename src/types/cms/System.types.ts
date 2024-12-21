export interface CmsColor {
  hex: string;
}

export interface CmsMedia {
  url: string;
  width?: number;
  height?: number;
  mimeType?: string;
}

export interface CmsRichText {
  html: string;
  markdown: string;
  text: string;
}
