import React from 'react';

import Image from '../assets/group.svg';

import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';


const Banner = () => {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[25px] font-medium leading-[0.8] lg:text-[40px]'
            >
              Somos una agencia de <span>software</span>
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary
             font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Expertos en</span>
              <TypeAnimation sequence={[
                'Web apps',
                2000,
                'eCommerce',
                2000,
                'Análisis de datos',
                2000,
                'Apps móviles',
                2000,
              ]}
              speed={50}
              className='text-emerald-400'
              wrapper='span'
              repeat={Infinity} />
            </motion.div>
            
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Dattapro are a Software Development House. We especialize in Cloud Software Sevelopment and User Experience Design. We are always ready to help you to grow your brand or product.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg text-gray-900'>Contáctanos</button>
            </motion.div>
            {/* socials */}
            {/* <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </div> */}
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default Banner;
