"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Photo() {
    return (
        <div className='w-full h-full relative'>
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: 'easeIn' }
            }}>
                <motion.div className='w-[258px] h-[258px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute'
                    initial={{ opacity: 0 }} animate={{
                        opacity: 1,
                        transition: { delay: 1.4, duration: 0.4, ease: 'easeInOut' }
                    }}
                >
                    <Image src={"/assets/thilina.png"} fill priority quality={100} alt='' className='object-contain rounded-full'></Image>
                </motion.div>

                <motion.svg className={'w-[260px] h-[260px] xl:w-[358px] xl:h-[358px]'}
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="6" strokeLinecap='round' strokeLinejoin='round' initial={{ strokeDasharray: ["24 18 0 0"] }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    >
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo