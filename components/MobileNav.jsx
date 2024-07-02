"use client"

import { Sheet,SheetTrigger,SheetContent } from './ui/sheet'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {CiMenuFries} from 'react-icons/ci'

function MobileNav() {
    const links = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'services',
            path: '/services'
        },
        {
            name: 'resume',
            path: '/resume'
        },
        {
            name: 'work',
            path: '/work'
        },
        {
            name:'contact',
            path:'/contact'
        }
    ]

  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'></CiMenuFries>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href={'/'}>
                <h1 className='text-center font-semibold'>
                    TJ<span className='text-accent'>.</span>
                </h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {
                    links.map((link,index)=>{
                        const pathname = usePathname();
                        return(
                            <Link href={link.path} key={index} className={`text-xl hover:text-accent capitalize transition-all ${pathname === link.path && 'text-accent border-b-2 border-accent'}`}>{link.name}</Link>
                        )
                    })
                }
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav