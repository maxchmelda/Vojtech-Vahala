import ContactMe from "./components/ContactMe"
import GalleryComponent from "./components/GalleryComponent"
import { Helmet } from "react-helmet"

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galerie fotografií – Vojtěch Vahala</title>

        <meta
          name="description"
          content="Galerie fotografií – svatby, portréty, firemní focení, moravské hody a akce. Prohlédněte si mou práci."
        />

        <link rel="canonical" href="https://vojtechvahala.cz/gallery" /> {/* Opravit */}
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