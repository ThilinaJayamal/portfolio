import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'g'
  },
  {
    icon: <FaLinkedin />,
    path: 'h'
  },
  {
    icon: <FaYoutube />,
    path: 'g'
  },
  {
    icon: <FaTwitter />,
    path: 'f'
  }
];

function Social({ containerStyle, iconStyles }) {
  return (
    <div className={containerStyle}>
      {
        socials.map((item, index) => {
          return (
            <Link href={item.path} className={iconStyles} key={index}>
              {item.icon}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Social