import { FC } from "react";

import S from "./CompactCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import Image from "next/image";
import CardBackground from "../../CardBackground/CardBackground";

export interface CompactCardProps
  extends Omit<
    CmsComponentCard,
    "variant" | "heading" | "isShifted" | "primaryMediaVerticalAlignment"
  > {}

const CompactCard: FC<CompactCardProps> = ({
  mainContent,
  isReversed,
  showBackground,
  backgroundColumnWidth,
  primaryMedia,
  secondaryMedia,
}) => {
  const content = (
    <div className={S.ContentWrapper}>
      <CardContent {...mainContent} />
    </div>
  );

  const media = (
    <>
      {primaryMedia?.url && (
        <div className={S.PrimaryMediaWrapper}>
          <Image className={S.Media} fill src={primaryMedia?.url} alt="" />
        </div>
      )}

      {secondaryMedia?.url && (
        <div
          className={S.SecondaryMediaWrapper}
          style={{ transform: `translateX(${isReversed ? -24 : 24}px)` }}
        >
          <Image
            className={S.SecondaryMedia}
            fill
            src={secondaryMedia.url}
            alt=""
          />
        </div>
      )}
    </>
  );

  return (
    <div className={S.CompactCard}>
      {showBackground && backgroundColumnWidth && (
        <CardBackground isReversed={isReversed} size={backgroundColumnWidth} />
      )}

      {isReversed ? (
        <>
          {media}
          {content}
        </>
      ) : (
        <>
          {content}
          {media}
        </>
      )}
    </div>
  );
};
export default CompactCard;
