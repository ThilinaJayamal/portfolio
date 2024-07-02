"use client"
import Link from 'next/link';
import React from 'react'

function Notfound() {
  return (
    <section className='mt-5'>
      <div className="container flex items-center px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-white/60 text-xl">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-accent md:text-3xl xl:text-4xl">We can’t find that page</h1>
          <p className="mt-4 text-white text-[18px]">Sorry, the page you are looking for doesn't exist or has been moved.</p>

          <div className="flex flex-col items-start mt-6 gap-6 md:flex-row">

            <button className="rounded-full flex items-center justify-center w-[160px] px-5 py-3 text-sm text-primary transition-colors duration-200 bg-white border gap-x-2 hover:bg-gray-100 " onClick={()=>{}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Go back</span>
            </button>

            <Link href={'/'}>
              <button className="w-[160px] px-5 py-3 text-sm tracking-wide text-primary transition-colors duration-200 bg-accent rounded-full shrink-0 hover:bg-accent-hover">
                Take me home
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Notfound