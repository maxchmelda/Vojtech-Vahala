import { Header, Sluzby, Gallery, AboutMe, Hody, ContactMe } from "./components";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vojtěch Vahala – Fotograf",
            image: `${import.meta.env.VITE_SITE_URL}/og-image.jpg`,
            url: import.meta.env.VITE_SITE_URL,
            telephone: "+420734597119", // TODO: doplnit realne cislo
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brno",
              addressCountry: "CZ",
            },
            areaServed: "Jihomoravský kraj",
            sameAs: [
              "https://www.instagram.com/vahyn_/",
              "https://www.facebook.com/Vahyn/",
            ],
          })}
        </script>
      </Helmet>

      <main className="max-w-[2000px] mx-auto">
        {/* SEO h1 pro vyhledavace */}
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
  );
};

export default App;
