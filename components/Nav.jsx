"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react';

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
        name: 'contact',
        path: '/contact'
    }
];

function Nav() {
    return (
        <nav className='flex gap-8'>
            {
                links.map((link, index) => {
                    const pathname = usePathname();
                    return (
                        <Link href={link.path} key={index} className={`${pathname === link.path ? "text-accent border-accent  border-b-2" : "border-primary  border-b-2"} capitalize font-medium hover:text-accent transition-all border-b-2`}>
                            <div>{link.name}</div>
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav