import { FC } from "react";

import S from "./NotFoundPage.module.scss";
import Image from "next/image";

export interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <a href={"/"} className={S.Page}>
      <Image
        className={S.Image}
        src="/logo.jpg"
        alt="<3"
        width={120}
        height={105}
        priority
      />
    </a>
  );
};
export default NotFoundPage;
