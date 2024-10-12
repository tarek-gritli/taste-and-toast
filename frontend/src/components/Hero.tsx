import { useState } from "react";
import { Button } from "@/components/ui/button";
import FullMenu from "./FullMenu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
type HeroProps = {
  inView?: boolean;
};

export default function Hero({ inView }: HeroProps) {
  const [isShowMenu, setShowFullMenu] = useState(false);
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const handleCloseMenu = () => {
    setShowFullMenu(false);
  };

  return (
    <div id="home" className="relative bg-secondary h-screen">
      <div className="absolute inset-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
          src="/src/assets/interior.webp"
          alt="Cozy restaurant interior"
        />
        <div className="absolute inset-0 bg-primary opacity-20"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl text-white max-w-3xl font-sans"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10 flex space-x-4">
          <Button
            size="lg"
            onClick={() => setShowFullMenu(true)}
            aria-label={t("hero.viewMenu")}
          >
            {t("hero.viewMenu")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => (window.location.href = "#reservation")}
            aria-label={t("hero.makeReservation")}
          >
            {t("hero.makeReservation")}
          </Button>
        </motion.div>
      </motion.div>
      <FullMenu isOpen={isShowMenu} onClose={handleCloseMenu} />
    </div>
  );
}
