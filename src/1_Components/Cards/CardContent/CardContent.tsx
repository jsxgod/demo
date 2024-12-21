import { FC } from "react";

import S from "./CardContent.module.scss";
import Markdown from "markdown-to-jsx";
import {
  CmsComponentButton,
  CmsComponentDownloadButton,
} from "@/types/cms/Misc.types";
import { CmsRichText } from "@/types/cms/System.types";
import Button from "@/1_Components/CTAs/Button/Button";
import clsx from "clsx";

export interface CardContentData {
  title: string;
  description: CmsRichText;
  isNarrowDescription: boolean;
  ctaComponents: (CmsComponentButton | CmsComponentDownloadButton)[];
}

export interface CardContentProps extends CardContentData {}

const CardContent: FC<CardContentProps> = ({
  title,
  description,
  ctaComponents,
  isNarrowDescription,
}) => {
  return (
    <div className={S.CardContentWrapper}>
      <div className={S.TextWrapper}>
        <h2 className={S.Title}>{title}</h2>

        <Markdown
          className={clsx({
            [S.Description]: true,
            [S.DescriptionNarrow]: isNarrowDescription,
          })}
        >
          {description.markdown}
        </Markdown>
      </div>

      {ctaComponents.length > 0 && (
        <div className={S.CtaWrapper}>
          {ctaComponents.map(({ __typename, label, url, color }, index) => {
            return __typename === "Button" ? (
              <Button key={index} label={label} url={url} color={color.hex} />
            ) : __typename === "DownloadButton" ? (
              <Button key={index} label={label} url={url} color={color.hex} />
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};
export default CardContent;
