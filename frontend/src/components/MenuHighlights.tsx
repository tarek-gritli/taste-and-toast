import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
import FullMenu from "./FullMenu";
import { Button } from "./ui/button";
import { MenuHighlightsItem } from "@/models/models";
import { motion } from "framer-motion";

type MenuHighlightsProps = {
  inView?: boolean;
};

export default function MenuHighlights({ inView }: MenuHighlightsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const menuItems = t("menu.menuHighlights.menuItems", {
    returnObjects: true,
  }) as MenuHighlightsItem[];

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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      id="menu"
      className="bg-gray-100 py-16 sm:py-24"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("menu.menuHighlights.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("menu.menuHighlights.description")}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MenuItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Button variant="default" onClick={() => setIsMenuOpen(true)}>
            {t("menu.menuHighlights.viewFullMenu")}
          </Button>
        </motion.div>
        <FullMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </div>
    </motion.div>
  );
}
