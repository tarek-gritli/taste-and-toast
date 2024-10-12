import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

type Props = {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
  };
};

export default function TeamMember({ member }: Props) {
  return (
    <Card key={member.name} className="bg-background">
      <CardHeader className="flex flex-col items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Avatar className="w-24 h-24">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <CardTitle className="mt-4 text-xl">{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">{member.description}</p>
      </CardContent>
    </Card>
  );
}
