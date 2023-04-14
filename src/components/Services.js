import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    descripion:
      'Dattapro are a Software Development House. We especialize in Cloud Software Sevelopment and User Experience Design. We are always ready to help you to grow your brand or product.',
    link: 'Learn more'
  },
  {
    name: 'Development',
    descripion:
      'Dattapro are a Software Development House. We especialize in Cloud Software Sevelopment and User Experience Design. We are always ready to help you to grow your brand or product.',
    link: 'Learn more'
  },
  {
    name: 'eCommerce',
    descripion:
      'Dattapro are a Software Development House. We especialize in Cloud Software Sevelopment and User Experience Design. We are always ready to help you to grow your brand or product.',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-emerald-400'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Dattapro are a Software Development House</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <div className='flex-1'>
            {/* services list */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            >
              { services.map( (service, index) => {
                const { name, descripion, link } = service;
                return (
                  <div key={index} className='border-b border-emerald-400/20 h-[146px] mb-[38px] flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{descripion}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center text-black'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
