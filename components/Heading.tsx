import React from 'react'

const Heading = ({children} : {children : React.ReactNode}) => {
  return (
    <h1 className='
            text-3xl 
            font-extrabold 
            leading-9 
            tracking-tight 
            text-gray-900 
            dark:text-gray-100 
            sm:text-4xl 
            sm:leading-10 
            md:text-6xl 
            md:leading-14'>
          {children}
         </h1>
        
  )
}

export default Heading