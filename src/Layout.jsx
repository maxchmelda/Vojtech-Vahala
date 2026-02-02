import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PageLoader from "./PageLoader"
import { Outlet } from "react-router"

export default function Layout() {
  const [showLoader, setShowLoader] = useState(true)
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    const MIN_DURATION = 1500
    const start = Date.now()

    const finish = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DURATION - elapsed)

      setTimeout(() => {
        setShowLoader(false)
      }, remaining)
    }

    if (document.readyState === "complete") {
      setPageReady(true)
      finish()
    } else {
      window.addEventListener("load", () => {
        setPageReady(true)
        finish()
      })
    }

    return () => window.removeEventListener("load", finish)
  }, [])

  return (
    <div className="max-w-[2000px] mx-auto">
      <AnimatePresence>
        {showLoader && <PageLoader />}
      </AnimatePresence>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
