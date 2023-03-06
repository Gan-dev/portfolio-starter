import React from 'react';
//count up

import CountUp from 'react-countup';
// inteseccion observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row'>
          {/*img */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          {/*text*/}
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 1 year of experience</h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nisl sed nulla efficitur interdum. Cras eget hendrerit ex. Ut porta et massa a molestie.</p>
            {/*Stats */}
            <div className='flex  gap-x-6 lg:gap-x-10 mb-13'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br />Experience
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                  <div className='font-primary text-sm tracking-[2px]'>
                    Proyects <br />Completed
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                  <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied <br /> Clients
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My portafolio
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>);

};

export default About;
