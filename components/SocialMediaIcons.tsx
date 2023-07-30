import { socialIcons } from '@/utils/data'
import React from 'react'

const SocialMediaIcons = () => {
  return (
    <>
        {
          socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.href} aria-label={item.name} className='hover:scale-110 hover:-translate-y-1 transition duration-300'>
                 <item.icon className='w-8 h-8 text-teal-500 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-600' />
               </a>
            )
          })
        }
    </>
  )
}

export default SocialMediaIcons