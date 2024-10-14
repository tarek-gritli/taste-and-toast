import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import FullMenu from "./FullMenu";
import logo from "@/assets/logo.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleBodyOverflow();
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleOrderOnline = () => {
    setIsFullMenuOpen(true);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#home">
              <span className="sr-only">Taste & Toast</span>
              <img
                className="w-20 h-auto"
                src={logo}
                alt="Taste & Toast logo"
                loading="lazy"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
              }
            >
              <span className="sr-only">
                {isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#home"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              aria-label={t("header.home")}
            >
              {t("header.home")}
            </a>
            <a
              href="#menu"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              aria-label={t("header.menu")}
            >
              {t("header.menu")}
            </a>
            <a
              href="#reservation"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              aria-label={t("header.reservation")}
            >
              {t("header.reservation")}
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              aria-label={t("header.contact")}
            >
              {t("header.contact")}
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 md:gap-x-6 lg:w-0">
            <LanguageSwitcher />
            <Button
              onClick={handleOrderOnline}
              aria-label={t("header.orderOnline")}
            >
              {t("header.orderOnline")}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background divide-y-2 divide-secondary">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-[100px] w-auto"
                    src={logo}
                    alt="Taste & Toast logo"
                    loading="lazy"
                  />
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={t("header.closeMenu")}
                  >
                    <span className="sr-only">{t("header.closeMenu")}</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#home"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-secondary"
                    aria-label={t("header.home")}
                  >
                    <span className="ml-3 text-base font-medium text-foreground">
                      {t("header.home")}
                    </span>
                  </a>
                  <a
                    href="#menu"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-secondary"
                    aria-label={t("header.menu")}
                  >
                    <span className="ml-3 text-base font-medium text-foreground">
                      {t("header.menu")}
                    </span>
                  </a>
                  <a
                    href="#reservation"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-secondary"
                    aria-label={t("header.reservation")}
                  >
                    <span className="ml-3 text-base font-medium text-foreground">
                      {t("header.reservation")}
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-secondary"
                    aria-label={t("header.contact")}
                  >
                    <span className="ml-3 text-base font-medium text-foreground">
                      {t("header.contact")}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <LanguageSwitcher mobile={true} />
              <Button
                className="w-full"
                onClick={handleOrderOnline}
                aria-label={t("header.orderOnline")}
              >
                {t("header.orderOnline")}
              </Button>
            </div>
          </div>
        </div>
      )}

      <FullMenu
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />
    </header>
  );
}
