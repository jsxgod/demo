import { FC } from "react";

import S from "./DoubleCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import CardBackground from "../../CardBackground/CardBackground";
import { fadeInUp } from "@/utils/animations";
import MotionImage from "@/1_Components/MotionImage/MotionImage";

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
          <MotionImage
            className={S.Media}
            fill
            src={primaryMedia?.url}
            alt=""
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      )}

      {secondaryMedia?.url && (
        <div
          className={S[`SecondaryMediaWrapper${isReversed ? "Reversed" : ""}`]}
        >
          <MotionImage
            className={S.Media}
            fill
            src={secondaryMedia.url}
            alt=""
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "some" }}
          />
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
