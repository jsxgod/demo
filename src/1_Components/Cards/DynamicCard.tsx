import { FC, JSX } from "react";
import { CmsComponentCard } from "@/types/cms/Card/Card.types";
import DoubleCard from "./Variants/DoubleCard/DoubleCard";
import CompactCard from "./Variants/CompactCard/CompactCard";
import SingleCard from "./Variants/SingleCard/SingleCard";
import CardHeading from "./CardHeading/CardHeading";
import S from "./DynamicCard.module.scss";

export interface DynamicCardProps extends CmsComponentCard {}

const DynamicCard: FC<DynamicCardProps> = ({ ...rest }) => {
  const { variant, heading, isReversed, isShifted } = rest || {};

  const withShift = (element: JSX.Element | null) => {
    return isShifted ? (
      <span className={isReversed ? S.ReverseShift : S.Shift}>{element}</span>
    ) : (
      element
    );
  };

  const withHeading = (element: JSX.Element | null) => {
    return (
      <>
        {heading && <CardHeading isReversed={!isReversed} {...heading} />}

        {withShift(element)}
      </>
    );
  };

  const getCardComponent = () => {
    switch (variant) {
      case "compact":
        return <CompactCard {...rest} />;
      case "single":
        return <SingleCard {...rest} />;
      case "double":
        return <DoubleCard {...rest} />;
      default:
        return null;
    }
  };

  return withHeading(getCardComponent());
};
export default DynamicCard;
