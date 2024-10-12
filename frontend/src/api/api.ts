import axios from "axios";
import { CheckoutItem } from "@/models/models";
const API_URL = import.meta.env.VITE_API_URL;
const api = {
  checkoutSession: async (items: CheckoutItem[]) =>
    axios.post(`${API_URL}/api/create-checkout-session`, { items }),
};

export default api;
