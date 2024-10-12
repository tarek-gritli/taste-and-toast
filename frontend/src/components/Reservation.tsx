import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn, formatNumber, formatTime } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { motion } from "framer-motion";

type ReservationProps = {
  inView?: boolean;
};

export default function Reservation({ inView }: ReservationProps) {
  const { t, i18n } = useTranslation();
  const reservationFormSchema = z.object({
    name: z.string().min(3, { message: t("reservation.form.errors.name") }),
    email: z.string().email({ message: t("reservation.form.errors.email") }),
    date: z.date({ message: t("reservation.form.errors.date") }),
    time: z.string({ message: t("reservation.form.errors.time") }),
    guests: z.string({ message: t("reservation.form.errors.guests") }),
    note: z.string().optional(),
  });
  const form = useForm<z.infer<typeof reservationFormSchema>>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      guests: "1",
      note: "",
    },
  });

  const onSubmit = (values: z.infer<typeof reservationFormSchema>) => {
    console.log(values);
    toast.success(t("reservation.form.success"), {
      description: t("reservation.form.successDescription"),
    });
    form.reset();
  };

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
      id="reservation"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {t("reservation.title")}
          </motion.h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("reservation.description")}
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6"
            >
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.name")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.email")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t("reservation.form.date")}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              aria-label={t("reservation.form.date")}
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>{t("reservation.form.pickDate")}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.time")}</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          name="time"
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("reservation.form.selectTime")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {["18:00", "19:00", "20:00", "21:00", "22:00"].map(
                              (time) => (
                                <SelectItem key={time} value={time}>
                                  {formatTime(time, i18n.language)}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.guests")}</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value.toString()}
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("reservation.form.selectGuests")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">
                              {formatNumber("1", i18n.language)}
                            </SelectItem>
                            <SelectItem value="2">
                              {formatNumber("2", i18n.language)}
                            </SelectItem>
                            <SelectItem value="3">
                              {formatNumber("3", i18n.language)}
                            </SelectItem>
                            <SelectItem value="4">
                              {formatNumber("4", i18n.language)}
                            </SelectItem>
                            <SelectItem value="5">
                              {formatNumber("5", i18n.language)}
                            </SelectItem>
                            <SelectItem value="6">
                              {formatNumber("6", i18n.language)}
                            </SelectItem>
                            <SelectItem value="7">
                              {formatNumber("7", i18n.language)}
                            </SelectItem>
                            <SelectItem value="8">
                              {formatNumber("8", i18n.language)}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("reservation.form.note")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("reservation.form.note")}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t("reservation.form.noteDescription")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                aria-label={t("reservation.form.bookTable")}
                type="submit"
                className="w-full"
              >
                {t("reservation.form.bookTable")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </motion.div>
  );
}
