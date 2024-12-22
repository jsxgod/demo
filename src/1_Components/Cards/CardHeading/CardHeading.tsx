import { FC } from "react";

import S from "./CardHeading.module.scss";

export interface CardHeadingProps {
  title: string;
  description: string;
  isReversed?: boolean;
}

const CardHeading: FC<CardHeadingProps> = ({
  title,
  description,
  isReversed,
}) => {
  return (
    <div className={S.CardHeading}>
      <h2 className={S[`Title${isReversed ? "Reversed" : ""}`]}>{title}</h2>

      <p className={S[`Description${isReversed ? "Reversed" : ""}`]}>
        {description}
      </p>
    </div>
  );
};
export default CardHeading;
