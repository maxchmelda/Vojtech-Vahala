import ContactMe from "./components/ContactMe"
import GalleryComponent from "./components/GalleryComponent"
import { Helmet } from "react-helmet"

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galerie fotografií – Vojtěch Vahala | Brno</title>

        <meta
          name="description"
          content="Galerie fotografií – svatby, portréty, firemní focení, moravské hody a akce."
        />

        <link rel="canonical" href="https://vojtechvahala.cz/gallery" />

        <meta property="og:title" content="Galerie – Fotograf Vojtěch Vahala" />
        <meta
          property="og:description"
          content="Ukázky fotografií ze svateb, portrétů, hodů a akcí."
        />
        <meta
          property="og:image"
          content="https://vojtechvahala.cz/og-image.png"
        />
      </Helmet>

      <h1 className="sr-only">
        Galerie fotografií – svatby, portréty, firemní focení, moravské hody a akce
      </h1>

      <GalleryComponent />
      <ContactMe />
    </>
  )
}

export default GalleryPage