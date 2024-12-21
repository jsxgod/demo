import { FC } from "react";

import S from "./SingleCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import Image from "next/image";
import clsx from "clsx";
import CardBackground from "../../CardBackground/CardBackground";

export interface SingleCardProps
  extends Omit<CmsComponentCard, "heading" | "variant" | "secondaryMedia"> {}

const SingleCard: FC<SingleCardProps> = ({
  mainContent,
  isReversed,
  showBackground,
  backgroundColumnWidth,
  primaryMedia,
  primaryMediaVerticalAlignment,
}) => {
  const content = (
    <div className={S.ContentWrapper}>
      <CardContent {...mainContent} />
    </div>
  );

  const media = primaryMedia?.url && (
    <div
      className={clsx(
        S.PrimaryMediaWrapper,
        primaryMediaVerticalAlignment === "top" ? S.Top : S.Bottom
      )}
    >
      <Image className={S.Media} fill src={primaryMedia?.url} alt="" />
    </div>
  );

  return (
    <div className={S.SingleCard}>
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
export default SingleCard;
