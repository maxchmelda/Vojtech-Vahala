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
        <title>
          Fotograf Brno – Vojtěch Vahala | Svatební & portrétní focení
        </title>

        <meta
          name="description"
          content="Profesionální fotograf Brno a Jižní Morava. Svatební, portrétní a firemní focení, hody a festivaly."
        />

        <link rel="canonical" href="https://vojtechvahala.cz/" />

        {/* Open Graph */}
        <meta property="og:title" content="Fotograf Brno – Vojtěch Vahala" />
        <meta
          property="og:description"
          content="Svatební, portrétní a firemní focení v Brně a okolí."
        />
        <meta
          property="og:image"
          content="https://vojtechvahala.cz/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="cs_CZ" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vojtěch Vahala – Fotograf",
            "image": "https://vojtechvahala.cz/og-image.png",
            "url": "https://vojtechvahala.cz",
            "telephone": "+420123456789",
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