"use client"
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [{
  num: "01",
  title: "Web Development",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni!",
  href: ""
},
{
  num: "02",
  title: "UI/UX Design",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni!",
  href: ""
},
{
  num: "03",
  title: "Logo Design",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni!",
  href: ""
},
{
  num: "04",
  title: "SEO",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni!",
  href: ""
}
];


function page() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py:8'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay:0, duration: 0.4, ease: 'easeIn' } }}
          className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
          >
          {
            services.map((item, index) => {
              return (
                <div key={index} className='flex flex-1 flex-col justify-center gap-1 group'>
                  <div className='w-full flex flex-1 justify-between items-center'>
                    <div className='text-4xl font-semibold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500'>{item.num}</div>
                    <Link href={item.href} className='h-[50px] w-[50px] bg-white rounded-full flex justify-center items-center group-hover:bg-accent hover:-rotate-45 duration-500 transition-all'>
                    <BsArrowDownRight className='text-primary text-2xl'/>
                    </Link>
                  </div>
                  <h2 className='text-[36px] font-semibold text-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>
                  <p className='text-white/80'>{item.description}</p>
                  <div className='border-b border-white/80 w-full'></div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default page