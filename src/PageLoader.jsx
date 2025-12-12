import { motion } from "framer-motion"
import LinearProgress from "@mui/material/LinearProgress"

const PageLoader = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
      className="
        fixed inset-0 z-[9999]
        bg-[#00171F]
        flex flex-col items-center justify-center
        overflow-hidden
      "
    >
      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0.05em" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          text-white
          font-lexendMega
          text-2xl sm:text-4xl md:text-5xl
          mb-10
        "
      >
        Vojtěch Vahala
      </motion.h1>

      {/* LOADING BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-[220px]"
      >
        <LinearProgress
          sx={{
            height: 4,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.15)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ffffff",
            },
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default PageLoader
