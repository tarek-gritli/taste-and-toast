import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatTime } from "@/lib/utils";
import { motion } from "framer-motion";

type ContactInfoProps = {
  inView?: boolean;
};

export default function ContactInfo({ inView }: ContactInfoProps) {
  const { t, i18n } = useTranslation();

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
      id="contact"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gray-100 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.address.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              {t("contact.address.address")}
              <br />
              {t("contact.address.city")}, {t("contact.address.zip")}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <Phone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.phone.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500">
              {t("contact.phone.phone")}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              {t("contact.hours.title")}
            </h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              {t("contact.hours.monday")} - {t("contact.hours.friday")}:{" "}
              {formatTime("11:00", i18n.language)} -{" "}
              {formatTime("23:00", i18n.language)}
              <br />
              {t("contact.hours.saturday")} - {t("contact.hours.sunday")}:{" "}
              {formatTime("13:00", i18n.language)} -{" "}
              {formatTime("23:00", i18n.language)}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}
