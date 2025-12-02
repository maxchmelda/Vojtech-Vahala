import React from 'react'

const data = [
  {
    id: 1,
    title: 'Moravské hody',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: '/servicesImgs/1.png'
  },
  {
    id: 2,
    title: 'Akce a festivaly',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: null
  },
  {
    id: 3,
    title: 'Portréty',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: '/servicesImgs/3.png'
  },
  {
    id: 4,
    title: 'Firemní portréty',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: null
  },
  {
    id: 5,
    title: 'Svatby a oslavy',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: '/servicesImgs/2.png'
  },
  {
    id: 6,
    title: 'Reklamní focení',
    text: 'Vivamus porttitor turpis ac leo. Integer rutrum, orci vestibulum ullamcorper.',
    imageUrl: null
  }
]

const Sluzby = () => {
  return (
    <section className="bg-[#111111] min-h-[300px] w-full py-20 relative flex justify-center z-100">
      
      <div className="lg:absolute lg:bottom-[-100px] w-[80%] gap-4 sm:gap-0 sm:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(({ id, title, text, imageUrl }) => (
          <div 
            key={id}
            className="relative group overflow-hidden h-[180px] sm:h-40"
          >
              <img 
                src={imageUrl ? imageUrl : "/servicesImgs/default.png"}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 w-full h-full object-cover text-white z-20 p-8 flex flex-col justify-center gap-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm max-w-[90%]">{text}</p>
              </div>
          </div>

        ))}
      </div>
    </section>
  )
}

export default Sluzby
