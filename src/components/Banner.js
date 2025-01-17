import React from 'react';
//Images
import Image from '../assets/avatar.svg'
//icons
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants'

const Banner = () => {
  return( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/**Text */}
        <div className='flex-1 text-center font-secondary  lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'>Gustavo <span>Cevallos</span></motion.h1>

          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className=' text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Social Media',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nisl sed nulla efficitur interdum.</motion.p>
            <motion.div  variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex justify-center gap-x-6 items-center mb-12 mx-auto lg:justify-start '>
              <button className='btn btn-lg'>Contact me</button>
              <a href='https://parlamentoeuropeo.netlify.app/dist/perfil.html' className='text-gradient btn-link'>My portafolio</a>
            </motion.div>
            {/*Socials */}
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='flex text-[20px] gap-x-6  max-auto justify-center lg:max-w-max'>
              <a href='https://www.facebook.com/GanCDev/?paipv=0&eav=AfY43ARchIuiGssprPfSYmP_iJlfAb5qhPPYKhKg1qpo76unNWHIw37ERV5KeISlEFg&_rdr'>
                <FaFacebook/>
              </a>
              <a href='https://github.com/Gan-dev'>
                <FaGithub/>
              </a>
              <a href='https://www.instagram.com/gustaavo.cj/'>
                <FaInstagram/>
              </a>
            </motion.div>
        </div>

        {/*Imagine */}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='hidden lg:hidden flex-1 max-w
        w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt=''></img>
        </motion.div>

      </div>

    </div>
  </section>
  );
  
};

export default Banner;
