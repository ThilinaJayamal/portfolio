"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from 'next/link'
import Image from 'next/image';
import WorkSliderBtn from '@/components/WorkSliderBtn';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam eos pariatur culpa, maiores nostrum.",
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full-stack",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam eos pariatur culpa, maiores nostrum.",
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
    image: '/assets/work/thumb2.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam eos pariatur culpa, maiores nostrum.",
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
    image: '/assets/work/thumb3.png',
    live: "",
    github: "",
  }
]


function page() {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);

  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 ,transition:{delay:0,duration:0.4,ease:'easeIn'}}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          
          <div className='w-full xl:w-[50%] flex flex-col gap-[30px] order-2'>
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
              {project.num}
            </div>
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
            <p className='text-white/60'>{project.description}</p>
            <ul className='flex gap-4'>
              {
                project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-accent text-xl'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })
              }
            </ul>

            <div className='border border-white/20'></div>

            <div className='flex flex-row items-center gap-4'>
              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='h-[50px] w-[50px] rounded-full bg-white/5 flex justify-center items-center'>
                    <BsArrowUpRight className='text-xl text-white group-hover:text-accent'/>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>

              <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='h-[50px] w-[50px] rounded-full bg-white/5 flex justify-center items-center'>
                    <BsGithub className='text-xl text-white group-hover:text-accent'/>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div> 
          </div>

          <div className='w-full xl:w-[50%] order-1 xl:order-none'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:max-w-[450px] mb-12' onSlideChange={handleSlideChange}>
              {
                projects.map((item,index)=>{
                  return(
                    <SwiperSlide key={index}>
                      <div className='h-[400px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      <div className='relative w-full h-full'>
                        <Image src={project.image} fill className='object-cover' alt=""/>
                      </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              <WorkSliderBtn containerStyle="flex px-2 gap-2 absolute right-0 bottom-0 z-20 w-full justify-between items-center h-full"
              btnStyle='bg-accent hover:bg-accent-hover text-primary w-[44px] h-[44px] text-[22px] flex justify-center items-center transition-all rounded-full'
              />
            </Swiper>
          </div>
        
        </div>
      </div>
    </motion.div>
  )
}

export default page