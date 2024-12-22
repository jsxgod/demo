import { FC } from "react";

import S from "./LandingPage.module.scss";

import { getLandingPageCmsData } from "./LandingPage.data";
import DynamicCard from "@/1_Components/Cards/DynamicCard";

const LandingPage: FC = async () => {
  const { cards } = await getLandingPageCmsData();

  return (
    <div className={S.LandingPage}>
      {cards.map((card, index) => (
        <section key={index} className={S.CardSection}>
          <div className={S.CardWrapper}>
            <DynamicCard {...card} />
          </div>
        </section>
      ))}
    </div>
  );
};
export default LandingPage;
