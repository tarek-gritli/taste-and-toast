import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/order-success`,
      cancel_url: `${process.env.FRONTEND_URL}/order-canceled`,
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the checkout session.",
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
