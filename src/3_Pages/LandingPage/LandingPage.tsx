import { FC } from "react";

import S from "./LandingPage.module.scss";

import { getLandingPageCmsData } from "./LandingPage.data";

const LandingPage: FC = async () => {
  await getLandingPageCmsData();

  return (
    <div className={S.LandingPage}>
      <>hi</>
    </div>
  );
};
export default LandingPage;
