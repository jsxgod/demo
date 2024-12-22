import { FC } from "react";

import S from "./CompactCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import CardBackground from "../../CardBackground/CardBackground";
import MotionImage from "@/1_Components/MotionImage/MotionImage";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export interface CompactCardProps
  extends Omit<
    CmsComponentCard,
    | "variant"
    | "heading"
    | "isShifted"
    | "primaryMediaVerticalAlignment"
    | "gradient"
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
        <div
          className={S[`PrimaryMediaWrapper${isReversed ? "Reversed" : ""}`]}
        >
          <MotionImage
            className={S.Media}
            fill
            src={primaryMedia?.url}
            alt=""
            variants={isReversed ? fadeInRight : fadeInLeft}
            initial="initial"
            whileInView="animate"
            exit="initial"
            viewport={{ once: true, amount: 0.25 }}
          />
        </div>
      )}

      {secondaryMedia?.url && (
        <div
          className={S[`SecondaryMediaWrapper${isReversed ? "Reversed" : ""}`]}
        >
          <MotionImage
            className={S.SecondaryMedia}
            fill
            src={secondaryMedia.url}
            alt=""
            variants={isReversed ? fadeInLeft : fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
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
