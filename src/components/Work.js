import React from 'react';
//motion
import { motion } from 'framer-motion'
//variable
import { fadeIn } from '../variants'
//img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import { BsUiRadios } from 'react-icons/bs';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Lastest <br />Work</h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices turpis malesuada magna mattis, et posuere lorem condimentum. Sed volutpat eu ex sit amet elementum.</p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* Imagen */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=' '></img>
              {/* pretite */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UX/UI Desing</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Tittle</span>
              </div>
            </div>

          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-16'>
            {/* imagne */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=' '></img>
              {/* pretite */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UX/UI Desing</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Tittle</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=' '></img>
              {/* pretite */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UX/UI Desing</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Tittle</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
};

export default Work;
