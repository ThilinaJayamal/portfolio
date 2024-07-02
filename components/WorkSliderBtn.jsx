"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi'

function WorkSliderBtn({containerStyle,iconStyle,btnStyle}) {
    const swiper = useSwiper();

  return (
    <div className={containerStyle}>
        <button className={btnStyle}>
            <PiCaretLeftBold className={iconStyle} onClick={()=>swiper.slidePrev()}/>
        </button>
        <button className={btnStyle}>
            <PiCaretRightBold className={iconStyle} onClick={()=>swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtn