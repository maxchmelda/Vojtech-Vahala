import { ContactMe, GalleryComponent } from "./components";
import { Helmet } from "react-helmet";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galerie fotografií – Vojtěch Vahala</title>

        <meta
          name="description"
          content="Galerie fotografií – svatby, portréty, firemní focení, moravské hody a akce. Prohlédněte si mou práci."
        />

        <link
          rel="canonical"
          href={`${import.meta.env.VITE_SITE_URL}/gallery`}
        />
      </Helmet>

      <h1 className="sr-only">
        Galerie fotografií – svatby, portréty, firemní focení, moravské hody a
        akce
      </h1>

      <GalleryComponent />
      <ContactMe />
    </>
  );
};

export default GalleryPage;
