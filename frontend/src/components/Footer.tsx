import { Facebook, Instagram, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type FooterProps = {
  inView?: boolean;
};

export default function Footer({ inView }: FooterProps) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
    <motion.footer
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gray-900"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("footer.about.title")}
            </h3>
            <p className="text-gray-400 mb-4">
              {t("footer.about.description")}
            </p>
            <img
              src="/src/assets/logo.webp"
              alt="Taste&Toast Logo"
              className="w-auto h-[150px]"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white"
                  aria-label={t("footer.quickLinks.home")}
                >
                  {t("footer.quickLinks.home")}
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-white"
                  aria-label={t("footer.quickLinks.menu")}
                >
                  {t("footer.quickLinks.menu")}
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  className="text-gray-400 hover:text-white"
                  aria-label={t("footer.quickLinks.reservation")}
                >
                  {t("footer.quickLinks.reservation")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                  aria-label={t("footer.quickLinks.contact")}
                >
                  {t("footer.quickLinks.contact")}
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("footer.followUs")}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label={t("footer.follow", { social: "Facebook" })}
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label={t("footer.follow", { social: "Instagram" })}
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label={t("footer.follow", { social: "Twitter" })}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {t("footer.copyright")}. {t("footer.allRightsReserved")}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {t("footer.termsOfService")}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
