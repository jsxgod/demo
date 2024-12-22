import { FC } from "react";

import S from "./CardBackground.module.scss";
import { CmsComponentGradient } from "@/types/cms/Misc.types";

export interface CardBackgroundProps {
  isReversed: boolean;
  size: number;
  gradient?: CmsComponentGradient;
  paddingSize?: number;
}

const CardBackground: FC<CardBackgroundProps> = ({
  isReversed,
  size = 0,
  gradient,
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
        background: gradient
          ? `linear-gradient(
            ${gradient?.angle}deg,
            ${gradient?.firstColor.hex} 0%,
            ${gradient?.secondColor.hex} 90%
          )`
          : `linear-gradient(
            130deg,
            #DAD3B7 0%,
            rgba(255, 255, 255, 1) 90%
          )`,
      }}
    />
  );
};
export default CardBackground;
