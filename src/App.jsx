import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Sluzby from "./components/Sluzby"
import Gallery from "./components/Gallery"
import AboutMe from "./components/AboutMe"
import Hody from "./components/Hody"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="max-w-[2000px] mx-auto">
      <Header />
      <Sluzby />
      <Gallery />
      <AboutMe />
      <Hody />
      <ContactMe />
    </main>
  )
}

export default App