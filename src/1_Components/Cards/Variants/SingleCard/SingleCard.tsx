import { FC } from "react";

import S from "./SingleCard.module.scss";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import CardContent from "../../CardContent/CardContent";
import clsx from "clsx";
import CardBackground from "../../CardBackground/CardBackground";
import MaterialShowcase from "@/2_Sections/MaterialShowcase/MaterialShowcase";
import MotionImage from "@/1_Components/MotionImage/MotionImage";
import { fadeInUp } from "@/utils/animations";

export interface SingleCardProps
  extends Omit<CmsComponentCard, "heading" | "variant" | "secondaryMedia"> {}

const SingleCard: FC<SingleCardProps> = ({
  mainContent,
  isReversed,
  showBackground,
  backgroundColumnWidth,
  primaryMedia,
  primaryMediaVerticalAlignment,
  isShadowUnderPrimaryMedia,
  gradient,
  withProductShowcase,
}) => {
  const content = (
    <div className={S.ContentWrapper}>
      <CardContent {...mainContent} />
    </div>
  );

  const media = primaryMedia?.url && (
    <div
      className={clsx({
        [S.PrimaryMediaWrapper]: true,
        [S.Top]: primaryMediaVerticalAlignment === "top",
        [S.Bottom]: primaryMediaVerticalAlignment === "bottom",
        [S.Shadow]: isShadowUnderPrimaryMedia,
      })}
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
  );

  return (
    <div className={S.SingleCard}>
      {showBackground && backgroundColumnWidth && (
        <CardBackground
          isReversed={isReversed}
          size={backgroundColumnWidth}
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

      {withProductShowcase && (
        <div className={S.ProductShowcaseWrapper}>
          <MaterialShowcase limit={2} />
        </div>
      )}
    </div>
  );
};
export default SingleCard;
