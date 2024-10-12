import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { enUS, ar, es, it, fr, de } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get the appropriate date-fns locale
export const getLocale = (language: string) => {
  switch (language) {
    case "ar":
      return ar;
    case "es":
      return es;
    case "it":
      return it;
    case "fr":
      return fr;
    case "de":
      return de;
    default:
      return enUS;
  }
};

// Function to format time based on locale
export const formatTime = (time: string, language: string) => {
  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));

  if (language === "ar") {
    // For Arabic, use Arabic-Indic numerals and add صباحًا/مساءً
    const arabicTime = format(date, "h:mm", { locale: ar });
    const period = parseInt(hours, 10) < 12 ? "صباحًا" : "مساءً";
    return (
      arabicTime.replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d as any]) + " " + period
    );
  } else {
    // For other languages, use the appropriate format
    return format(date, language === "en" ? "h:mm a" : "HH:mm", {
      locale: getLocale(language),
    });
  }
};

export const formatNumber = (number: string, language: string) => {
  return language === "ar"
    ? number.replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d as any])
    : number;
};
