import { FC } from "react";

import S from "./CardBackground.module.scss";

export interface CardBackgroundProps {
  isReversed: boolean;
  size: number;
  paddingSize?: number;
}

const CardBackground: FC<CardBackgroundProps> = ({
  isReversed,
  size = 0,
  paddingSize = 72,
}) => {
  return (
    <span
      className={S.Background}
      style={{
        width: `calc(${25 * size}% + ${paddingSize * 2}px)`,
        ...(isReversed
          ? { left: "unset", right: `-${paddingSize}px` }
          : { left: `-${paddingSize}px`, right: "unset" }),
      }}
    />
  );
};
export default CardBackground;
