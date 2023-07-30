'use client'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { menu } from '@/utils/data';
import Themebutton from './Themebutton';


const Navbar = () => {

  let pathname = usePathname()

  return (
    <Disclosure as="nav">
        {({ open }) => (
            <>
             <div className='border-b-1 sm:border-b-2 border-gray-200 dark:border-gray-700 shadow-sm sm:h-20 pt-1'>
                 
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex justify-between w-full'>
                            <div className='flex items-center'>
                                 <Link href='/'>
                                    <h1 className='text-3xl font-bold text-gray-700 dark:text-white'>
                                        Asad <span className='text-teal-500'>Mehboob</span>
                                    </h1>
                                 </Link>
                            </div>
                            <ul className='hidden 
                                sm:flex 
                                sm:ml-6 
                                sm:space-x-6 
                                sm:items-center'>

                                {menu.map((item, index) => {
                                    return (
                                        <li className='' key={index}>
                                            <Link 
                                                href={item.href} 
                                                className={`${pathname === item.href ? `
                                                border-teal-500
                                                dark:text-white
                                                items-center
                                                inline-flex
                                                border-b-2
                                                text-sm 
                                                font-medium
                                                pt-3
                                                pb-3
                                                text-gray-700
                                                ` : `
                                                border-transparent
                                                text-gray-500
                                                dark:text-gray-300
                                                dark:hover:text-white
                                                items-center
                                                inline-flex
                                                border-b-2
                                                text-sm 
                                                font-medium
                                                pt-3
                                                pb-3
                                                `}`}>
                                            {item.name}
                                          </Link>
                                        </li>
                                    )
                                })
                                }
                                <span className='w-10'>
                                    <Themebutton />   
                                    </span> 
                            </ul>
                            
                            <div className='-mr-2 flex space-x-2 items-center sm:hidden'>
                                <Themebutton />    
                                <Disclosure.Button className="
                                   inline-flex
                                   items-center
                                   justify-center
                                   h-9
                                   w-9
                                   rounded-md
                                   text-gray-400
                                   hover:text-gray-500
                                   hover:bg-gray-100
                                   focus:outline-none
                                   focus:ring-2
                                   focus:ring-inset
                                   focus:ring-teal-500
                                   dark:hover:text-gray-800
                                   dark:hover:bg-gray-600
                                ">
                                   {
                                    open ? (
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                                    ) : (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                                    )
                                   }
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                     <ul className='pt-2 pb-3 space-y-1'>
                        {
                            menu.map((item, index) => {
                                return (
                                    <li className='' key={index}>
                                        <Link 
                                            href={item.href} 
                                            className={`${pathname === item.href ? `
                                            border-teal-500
                                            bg-teal-50
                                            text-teal-500
                                            block
                                            pl-3
                                            pr-4
                                            py-2
                                            border-l-4
                                            text-base
                                            font-medium
                                            dark:bg-gray-700
                                            ` : `
                                            border-transparent
                                            text-gray-500
                                            hover:bg-gay-50
                                            hover:border-gray-500
                                            hover:text-gray-500
                                            dark:hover:bg-gray-700
                                            block
                                            text-base 
                                            font-medium
                                            pl-3
                                            pr-4
                                            py-2
                                            border-l-4
                                            dark:text-white
                                            hover:bg-gray-50
                                            `}`}>
                                        {item.name}
                                      </Link>
                                    </li>
                                )})}
                        
                     </ul>
                </Disclosure.Panel>
             </div>
            </>

           
        )}
         
    </Disclosure>
  )
}

export default Navbar