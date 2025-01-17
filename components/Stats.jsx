"use client"
import React from 'react'
import CountUp from 'react-countup'

const stats =[
  {
    num:12,
    text:"Years of experience"
  },
  {
    num:26,
    text:"Projects completed"
  },
  {
    num:8,
    text:"Technologies mastered"
  },
  {
    num:500,
    text:"Code commits"
  }
];

function Stats() {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {
            stats.map((item,index)=>{
              return(
                <div key={index} className='flex flex-1 justify-center gap-4 items-center xl:justify-start'>
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className='text-4xl xl:text-6xl font-semibold'
                  />
                  <p className={`${item.text.length>15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stats