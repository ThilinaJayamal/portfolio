import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

function page() {
  return (
    <div className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Helo I'm<br /><span className='text-accent'>Thilina Jayamal</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/90'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size='lg' className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload />
              </Button>

              <div className='mb-8 xl:mb-0'>
                <Social containerStyle='flex gap-8' iconStyles='h-9 w-9 border-2 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
              </div>
            </div>

          </div>

          <div className='mb-8 xl:mb-auto'>
            <Photo className='order-1 xl:order-none'/>
          </div>
        </div>
      </div>
      <Stats/>
    </div>
  )
}

export default page