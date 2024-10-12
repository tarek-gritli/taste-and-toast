import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
  children: (inView: boolean) => React.ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children(inView)}
    </motion.div>
  );
}
