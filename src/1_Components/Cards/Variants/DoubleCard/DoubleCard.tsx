import { FC } from "react";

import S from "./DoubleCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import Image from "next/image";
import CardBackground from "../../CardBackground/CardBackground";

export interface DoubleCardProps
  extends Omit<
    CmsComponentCard,
    "heading" | "variant" | "primaryMediaVerticalAlignment" | "isShifted"
  > {}

const DoubleCard: FC<DoubleCardProps> = ({
  mainContent,
  isReversed,
  showBackground,
  backgroundColumnWidth,
  primaryMedia,
  secondaryMedia,
  gradient,
}) => {
  const content = (
    <div className={S.ContentWrapper}>
      <CardContent {...mainContent} />
    </div>
  );

  const media = (
    <>
      {primaryMedia?.url && (
        <div
          className={S[`PrimaryMediaWrapper${isReversed ? "Reversed" : ""}`]}
        >
          <Image className={S.Media} fill src={primaryMedia?.url} alt="" />
        </div>
      )}

      {secondaryMedia?.url && (
        <div
          className={S[`SecondaryMediaWrapper${isReversed ? "Reversed" : ""}`]}
        >
          <Image className={S.Media} fill src={secondaryMedia.url} alt="" />
        </div>
      )}
    </>
  );
  return (
    <div
      className={S.DoubleCard}
      style={{ marginBottom: secondaryMedia?.url ? 164 : 0 }}
    >
      {showBackground && backgroundColumnWidth && (
        <CardBackground
          size={backgroundColumnWidth}
          isReversed={isReversed}
          gradient={gradient}
        />
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
export default DoubleCard;
