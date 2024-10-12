export interface CartItem {
  name: string;
  priceId: string;
  quantity: number;
  price: number;
}

interface MenuItemBase {
  priceId: string;
  name: string;
  description: string;
  price: string;
}

export interface Languages {
  en: LanguageItem;
  ar: LanguageItem;
  fr: LanguageItem;
  it: LanguageItem;
  de: LanguageItem;
  es: LanguageItem;
}

interface LanguageItem {
  name: string;
  flag: string;
}

export interface OneTeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface MenuHighlightsItem extends MenuItemBase {
  image: string;
}
export interface FullMenuItem extends MenuItemBase {
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface CheckoutItem {
  price: string;
  quantity: number;
}
