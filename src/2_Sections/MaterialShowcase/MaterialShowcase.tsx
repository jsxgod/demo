import { FC } from "react";

import S from "./MaterialShowcase.module.scss";
import MaterialListItem from "./MaterialListItem/MaterialListItem";
import { getMaterialsCmsData } from "./MaterialShowcase.data";

export interface MaterialShowcaseProps {
  limit: number;
}

const MaterialShowcase: FC<MaterialShowcaseProps> = async ({ limit }) => {
  const materials = await getMaterialsCmsData();
  const LIMIT = Math.min(Math.max(0, limit), materials.length);

  return (
    <div className={S.MaterialShowcase}>
      <ul className={S.List}>
        {materials.slice(0, LIMIT).map((material, index) => (
          <MaterialListItem key={index} {...material} />
        ))}
      </ul>
    </div>
  );
};
export default MaterialShowcase;
