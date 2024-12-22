import { FC } from "react";

import S from "./MaterialListItem.module.scss";
import { CmsMedia } from "@/types/cms/System.types";
import Image from "next/image";

export interface MaterialListItemProps {
  catalogId: string;
  name: string;
  media: CmsMedia;
}

const MaterialListItem: FC<MaterialListItemProps> = ({
  catalogId,
  media,
  name,
}) => {
  return (
    <li className={S.MaterialListItem}>
      <Image
        className={S.BackgroundImage}
        src={media.url}
        alt=""
        width={200}
        height={200}
      />

      <div className={S.TextWrapper}>
        <span>{catalogId}</span>
        <span>{"|"}</span>
        <span>{name}</span>
      </div>
    </li>
  );
};
export default MaterialListItem;
