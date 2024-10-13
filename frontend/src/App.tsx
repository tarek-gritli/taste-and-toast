import Header from "./components/Header";
import Hero from "./components/Hero";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from "./components/ui/sonner";
import withAnimatedSection from "./components/withAnimatedSection";
import { lazy } from "react";

const About = lazy(() => import("./components/About"));
const MenuHighlights = lazy(() => import("./components/MenuHighlights"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Reservation = lazy(() => import("./components/Reservation"));
const ContactInfo = lazy(() => import("./components/ContactInfo"));
const Footer = lazy(() => import("./components/Footer"));

const AnimatedAbout = withAnimatedSection(About);
const AnimatedHero = withAnimatedSection(Hero);
const AnimatedMenuHighlights = withAnimatedSection(MenuHighlights);
const AnimatedTestimonials = withAnimatedSection(Testimonials);
const AnimatedReservation = withAnimatedSection(Reservation);
const AnimatedContactInfo = withAnimatedSection(ContactInfo);
const AnimatedFooter = withAnimatedSection(Footer);

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <main>
          <AnimatedHero />
          <AnimatedAbout />
          <AnimatedMenuHighlights />
          <AnimatedTestimonials />
          <AnimatedReservation />
          <AnimatedContactInfo />
        </main>
        <AnimatedFooter />
        <Toaster />
      </I18nextProvider>
    </>
  );
}

export default App;
