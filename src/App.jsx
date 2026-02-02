import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Sluzby from "./components/Sluzby"
import Gallery from "./components/Gallery"
import AboutMe from "./components/AboutMe"
import Hody from "./components/Hody"
import ContactMe from "./components/ContactMe"
import { Helmet } from "react-helmet"

const App = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vojtěch Vahala – Fotograf",
            "image": "https://vojtechvahala.cz/og-image.jpg", // Opravit
            "url": "https://vojtechvahala.cz", // Opravit
            "telephone": "+420123456789", // Doplnit reálné číslo pokud chcete
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brno",
              "addressCountry": "CZ"
            },
            "areaServed": "Jihomoravský kraj",
            "sameAs": [
              "https://www.instagram.com/vahyn_/",
              "https://www.facebook.com/Vahyn/"
            ]
          })}
        </script>
      </Helmet>

      <main className="max-w-[2000px] mx-auto">
        <h1 className="sr-only">
          Fotograf Brno – svatební, portrétní a firemní focení
        </h1>

        <Header />
        <Sluzby />
        <Gallery />
        <AboutMe />
        <Hody />
        <ContactMe />
      </main>
    </>
  )
}

export default App