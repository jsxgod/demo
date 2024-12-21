import { FC } from "react";

import S from "./DoubleCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import Image from "next/image";

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
}) => {
  console.log(mainContent);
  return (
    <div
      className={S.DoubleCard}
      style={{ marginBottom: secondaryMedia?.url ? 164 : 0 }}
    >
      {showBackground && backgroundColumnWidth && (
        <span
          className={S.Background}
          style={{ width: `calc(${25 * backgroundColumnWidth}% + 144px)` }}
        />
      )}

      <div className={S.ContentWrapper}>
        <CardContent {...mainContent} />
      </div>

      {primaryMedia?.url && (
        <div className={S.PrimaryImageWrapper}>
          <Image className={S.Media} fill src={primaryMedia?.url} alt="" />
        </div>
      )}

      {secondaryMedia?.url && (
        <div className={S.SecondaryImageWrapper}>
          <Image className={S.Media} fill src={secondaryMedia.url} alt="" />
        </div>
      )}
    </div>
  );
};
export default DoubleCard;
