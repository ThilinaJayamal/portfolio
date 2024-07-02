"use client"
import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'

import { motion } from 'framer-motion'

const about = {
  titile: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto numquam illo libero distinctio impedit autem sequi facilis dolor expedita!',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Thilina Jayamal'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+94) 75-9622-397'
    },
    {
      fieldName: 'Experience',
      fieldValue: '12+'
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Thilina_Jayamal_2002'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Sri Lankan'
    },
    {
      fieldName: 'Email',
      fieldValue: 'jayamalt398@gmail.com'
    },
    {
      fieldName: 'Frelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'English & Sinhala'
    }
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  titile: 'My experience',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto numquam illo libero distinctio impedit autem sequi facilis dolor expedita!',
  Items: [
    {
      company: 'Tech solusion Inc.',
      position: 'Full-stack developer',
      duration: '2022 - 2023'
    },
    {
      company: 'Web Studio',
      position: 'Frontend developer',
      duration: '2022 - Present'
    },
    {
      company: 'Tech solusion Intern.',
      position: 'Full-stack developer',
      duration: '2022 - 2023'
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  titile: 'My education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto numquam illo libero distinctio impedit autem sequi facilis dolor expedita!',
  Items: [
    {
      institution: 'Linkedin',
      degree: 'Full-stack developer',
      duration: '2022 - 2023'
    },
    {
      institution: 'Udemy',
      degree: 'Full-stack developer',
      duration: '2022 - 2023'
    },
    {
      institution: 'Tech solusion Inc.',
      degree: 'Full-stack developer',
      duration: '2022 - 2023'
    },
  ]
}

const skills = {
  titile: 'My skills',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto numquam illo libero distinctio impedit autem sequi facilis dolor expedita!',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js'
    },
    {
      icon: <FaFigma />,
      name: 'figma'
    }
  ]

}
function page() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0, duration: 0.4, ease: 'easeIn' } }}
      className='flex justify-center items-center min-h-[80vh] py-12 xl:py-8'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px] '>
          <TabsList className='flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.titile}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid xl:grid-cols-2 grid-cols-1 gap-[30px]'>
                    {
                      experience.Items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl mx-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              <span className='h-[6px] w-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="education" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.titile}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[300px]'>
                  <ul className='grid xl:grid-cols-2 grid-cols-1 gap-[30px]'>
                    {
                      education.Items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl mx-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                            <div className='flex items-center gap-3'>
                              <span className='h-[6px] w-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institution}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="skills" className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.titile}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {
                    skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>

                              <TooltipTrigger className='w-full h-[130px] flex justify-center items-center bg-[#232329] rounded-xl'>
                                <div className='text-6xl hover:text-accent transition-all duration-300'>{item.icon}</div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className='capitalize'>{item.name}</p>
                              </TooltipContent>

                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>


            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.titile}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[600px] mx-auto xl:mx-0 gap-x-6'>
                  {
                    about.info.map((item, index) => {
                      return (
                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4 bg-[#232329] p-4 rounded-xl'>
                          <span className='text-white/60 text-sm'>{item.fieldName}</span>
                          <span className='text-sm'>{item.fieldValue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>


          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default page