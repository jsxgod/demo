import { FC } from "react";

import S from "./LandingPage.module.scss";
import { CmsModelLandingPage } from "@/types/cms/Model.types";
import { getLandingPageCmsData } from "./LandingPage.data";

export interface LandingPageProps {
  cmsData: CmsModelLandingPage;
}

const LandingPage: FC<LandingPageProps> = async () => {
  await getLandingPageCmsData();

  return (
    <div className={S.LandingPage}>
      <>hi</>
    </div>
  );
};
export default LandingPage;
