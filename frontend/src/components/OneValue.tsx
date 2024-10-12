import { ElementType } from "react";
import { motion } from "framer-motion";
type Props = {
  Icon: ElementType;
  title: string;
  description: string;
};

const OneValue = ({ Icon, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
          {title}
        </p>
      </div>
      <div className="mt-2 ml-16 text-base text-gray-500">{description}</div>
    </motion.div>
  );
};

export default OneValue;
