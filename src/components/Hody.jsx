import React from 'react'
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. In rutrum. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nulla non lectus sed nisl molestie malesuada. Quisque porta. Fusce nibh. Mauris tincidunt sem sed arcu. Integer tempor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Hody = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full">

      {/* TEXT BLOCK */}
      <div className="w-full lg:w-1/2 bg-[#00171F] text-white px-8 py-10 sm:py-16 flex items-center">
        <div className="flex flex-col items-start justify-center gap-8 sm:gap-10 w-full lg:w-[80%] mx-auto font-lexend">
          
          <h2 className="text-2xl md:text-3xl font-lexendMega font-semibold">
            Moravské hody
          </h2>

          <p className="text-sm md:text-base text-[#838383] leading-relaxed">
            {text}
          </p>

          <HashLink to='/gallery#gallery' className="max-sm:text-sm py-2 px-6 rounded-full bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer">
            Zobrazit v galerii
          </HashLink>

        </div>
      </div>

      {/* IMAGE */}
      <img
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto object-cover"
        src="/hody.png"
      />

    </div>
  );
};

export default Hody;
