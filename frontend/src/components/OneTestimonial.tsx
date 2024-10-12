import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
  testimonial: {
    name: string;
    role: string;
    content: string;
    image: string;
  };
};

export default function OneTestimonial({ testimonial }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage
            src={testimonial.image}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full"
          />
          <AvatarFallback>
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
