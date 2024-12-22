import { FC } from "react";

import S from "./MaterialShowcase.module.scss";
import MaterialListItem from "./MaterialListItem/MaterialListItem";
import { getMaterialsCmsData } from "./MaterialShowcase.data";

export interface MaterialShowcaseProps {}

const MaterialShowcase: FC<MaterialShowcaseProps> = async () => {
  const materials = await getMaterialsCmsData();

  return (
    <div className={S.MaterialShowcase}>
      <ul className={S.List}>
        {materials.map((material, index) => (
          <MaterialListItem key={index} {...material} />
        ))}
      </ul>
    </div>
  );
};
export default MaterialShowcase;
