import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuHighlights from "./components/MenuHighlights";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from "./components/ui/sonner";
import withAnimatedSection from "./components/withAnimatedSection";

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
