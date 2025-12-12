import React, { useEffect } from "react"

export default function AlbumModal({ album, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  if (!album) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl max-h-full bg-neutral-900 rounded-2xl p-6 overflow-y-auto">
        
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:opacity-70"
        >
          ×
        </button>

        {/* title */}
        <h2 className="text-white text-2xl font-semibold mb-6">
          {album.name}
        </h2>

        {/* photos */}
        <div className="grid grid-cols-3 gap-3 
                        max-md:grid-cols-2 
                        max-sm:grid-cols-1">
          {album.imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt=""
              loading="lazy"
              onClick={() => window.open(url, "_blank")}
              className="w-full h-full object-cover rounded-xl cursor-pointer
                         transition-transform duration-200 hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
