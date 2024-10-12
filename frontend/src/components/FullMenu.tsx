import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import { X, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CartItem, CheckoutItem, FullMenuItem } from "@/models/models";
import api from "@/api/api";
import { toast } from "sonner";

type FullMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FullMenu: React.FC<FullMenuProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [cart, setCart] = useState<CartItem[]>([]);
  const menuItems = t("menu.fullMenu.menuItems", {
    returnObjects: true,
  }) as FullMenuItem[];

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  const addToCart = (item: FullMenuItem) => {
    const price = parseFloat(item.price);
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [
        ...prevCart,
        { name: item.name, priceId: item.priceId, quantity: 1, price },
      ];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    try {
      const values: CheckoutItem[] = cart.map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      }));
      const response = await api.checkoutSession(values);
      const { url } = response.data as { url: string };

      window.location.href = url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error(t("menu.fullMenu.cart.checkoutError"));
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={menuRef}
        className="bg-white p-8 rounded-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{t("menu.fullMenu.title")}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            aria-label={t("menu.fullMenu.closeMenu")}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            {categories.map((category) => (
              <div key={category} className="mb-10">
                <h3 className="text-2xl font-semibold text-primary mb-5 font-serif">
                  {category}
                </h3>
                <div className="grid gap-8 md:grid-cols-2">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="bg-secondary rounded-lg p-5 shadow-md"
                      >
                        <h4 className="text-xl font-medium text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center mt-3">
                          <p className="text-primary font-semibold text-lg">
                            ${formatNumber(item.price, i18n.language)}
                          </p>
                          <Button
                            onClick={() => addToCart(item)}
                            size="sm"
                            aria-label={t("menu.fullMenu.cart.addToCart", {
                              item: item.name,
                            })}
                          >
                            {t("menu.fullMenu.cart.addToCart")}
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-secondary rounded-lg p-5 shadow-md sticky top-4">
              <h3 className="text-2xl font-semibold text-primary mb-5 font-serif">
                {t("menu.fullMenu.cart.title")}
              </h3>
              {cart.length === 0 ? (
                <p>{t("menu.fullMenu.cart.emptyCart")}</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-3"
                    >
                      <span>{item.name}</span>
                      <span>
                        {item.quantity} x $
                        {formatNumber(item.price.toString(), i18n.language)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-gray-300 my-5"></div>
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>{t("menu.fullMenu.cart.total")}</span>
                    <span>
                      ${formatNumber(getTotalPrice().toString(), i18n.language)}
                    </span>
                  </div>
                  <Button
                    className="w-full mt-5 text-lg py-2"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    aria-label={t("menu.fullMenu.cart.checkout")}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {t("menu.fullMenu.cart.checkout")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
