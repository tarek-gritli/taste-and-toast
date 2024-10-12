import { useTranslation } from "react-i18next";
import TeamMember from "./TeamMember";
import { OneTeamMember } from "@/models/models";
import { motion } from "framer-motion";

type MeetOurTeamProps = {
  inView?: boolean;
};

export default function MeetOurTeam({ inView }: MeetOurTeamProps) {
  const { t } = useTranslation();
  const teamMembers = t("about.meetOurTeam.teamMembers", {
    returnObjects: true,
  }) as OneTeamMember[];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t("about.meetOurTeam.title")}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="flex"
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
