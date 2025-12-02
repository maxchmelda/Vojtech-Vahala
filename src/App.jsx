import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Sluzby from "./components/Sluzby"
import Gallery from "./components/Gallery"
import AboutMe from "./components/AboutMe"
import Hody from "./components/Hody"
import ContactMe from "./components/ContactMe"

const App = () => {
  return (
    <main className="max-w-[2000px] mx-auto">
      <Navbar />
      <Header />
      <Sluzby />
      <Gallery />
      <AboutMe />
      <Hody />
      <ContactMe />
      <div className="h-[200px]">

      </div>
    </main>
  )
}

export default App