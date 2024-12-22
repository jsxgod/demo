"use client";
import { FC } from "react";

import S from "./HeroSection.module.scss";
import { CmsMedia } from "@/types/cms/System.types";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export interface HeroSectionProps {
  backgroundMedia?: CmsMedia;
}

const HeroSection: FC<HeroSectionProps> = ({ backgroundMedia }) => {
  return (
    <section className={S.HeroSection}>
      <motion.div {...fadeIn} className={S.BackgroundMediaWrapper}>
        <Image src={backgroundMedia?.url || ""} alt="" fill quality={100} />
      </motion.div>
    </section>
  );
};
export default HeroSection;
