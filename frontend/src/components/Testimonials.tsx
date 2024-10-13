import { useTranslation } from "react-i18next";
import OneTestimonial from "./OneTestimonial";
import { Testimonial } from "@/models/models";
import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";

type TestimonialsProps = {
  inView?: boolean;
};

export default function TestimonialsSection({ inView }: TestimonialsProps) {
  const { t } = useTranslation();
  const testimonials = t("testimonials.testimonials", {
    returnObjects: true,
  }) as Testimonial[];
  const testimonialImages = [testimonial1, testimonial2, testimonial3];

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
      className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
        >
          {t("testimonials.title")}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <OneTestimonial
                testimonial={{
                  ...testimonial,
                  image: testimonialImages[index],
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
