"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import { motion } from 'framer-motion'

const Info = [{
  icon: <FaPhoneAlt />,
  title: "Phone",
  description: "+94-759622-397"
},
{
  icon: <FaEnvelope />,
  title: "Email",
  description: "youremail@gmail.com"
},
{
  icon: <FaMapMarkerAlt />,
  title: "Address",
  description: "Matara, Sri Lanaka"
}
]

function page() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0, duration: 0.4, ease: 'easeIn' } }} className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[50%] order-2 xl:order-none'>
            <form className='flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-2xl text-accent'>Let's work together</h3>
              <p className='text-white/60 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate iste reiciendis assumenda deserunt!</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectContent placeholder="select a service">
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem vlaue="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>

              <Textarea placeholder='Type your message here...'></Textarea>
              <Button size="md" className="max-w-48 py-2">Send message</Button>
            </form>
          </div>
          <div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {
                Info.map((item, index) => {
                  return (
                    <li key={index} className='flex flex-row items-center gap-6'>
                      <div className='w-[56px] h-[56px] flex justify-center items-center rounded-xl text-accent bg-[#27272c]'>
                        <div className='text-[24px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page