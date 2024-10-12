import { useTranslation } from "react-i18next";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

import usFlag from "../assets/usa.webp";
import saFlag from "../assets/saudi.webp";
import frFlag from "../assets/france.webp";
import itFlag from "../assets/italy.webp";
import deFlag from "../assets/germany.webp";
import esFlag from "../assets/spain.webp";
import { Languages } from "@/models/models";

type Props = {
  mobile?: boolean;
};

const languages: Languages = {
  en: { name: "English", flag: usFlag },
  ar: { name: "العربية", flag: saFlag },
  fr: { name: "Français", flag: frFlag },
  it: { name: "Italiano", flag: itFlag },
  de: { name: "Deutsch", flag: deFlag },
  es: { name: "Español", flag: esFlag },
};

const LanguageSwitcher = ({ mobile }: Props) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Select onValueChange={changeLanguage} value={i18n.language}>
        <SelectTrigger className={mobile ? "w-full" : ""}>
          <SelectValue>
            {i18n.language && (
              <>
                <img
                  src={languages[i18n.language as keyof typeof languages].flag}
                  alt={`${
                    languages[i18n.language as keyof typeof languages].name
                  } flag`}
                  className="w-5 h-[15px} mr-2 inline-block"
                />
                {languages[i18n.language as keyof typeof languages].name}
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.entries(languages).map(([code, { name, flag }]) => (
            <SelectItem key={code} value={code}>
              <div className="flex items-center">
                <img
                  src={flag}
                  alt={`${name} flag`}
                  className="w-5 h-[15px} mr-2 inline-block"
                />
                {name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
