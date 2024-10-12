import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  item: {
    name: string;
    description: string;
    price: string;
    image: string;
  };
};

export default function MenuItem({ item }: Props) {
  return (
    <Card>
      <CardHeader>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <p className="mt-2 text-xl font-semibold text-primary">{item.price}</p>
      </CardContent>
    </Card>
  );
}
