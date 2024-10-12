import { useTranslation } from "react-i18next";
import { MapPinned, ChefHat, Sparkles, HeartHandshake } from "lucide-react";
import OneValue from "./OneValue";
import { motion } from "framer-motion";

type OurStoryProps = {
  inView?: boolean;
};
export default function OurStory({ inView }: OurStoryProps) {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={itemVariants} className="lg:text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          {t("about.ourStory.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {t("about.ourStory.description")}
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="mt-10">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={MapPinned}
              title={t("about.ourStory.localIngredients.title")}
              description={t("about.ourStory.localIngredients.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={ChefHat}
              title={t("about.ourStory.culinaryExcellence.title")}
              description={t("about.ourStory.culinaryExcellence.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={Sparkles}
              title={t("about.ourStory.customerExperience.title")}
              description={t("about.ourStory.customerExperience.description")}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OneValue
              Icon={HeartHandshake}
              title={t("about.ourStory.communityInvolvement.title")}
              description={t("about.ourStory.communityInvolvement.description")}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
