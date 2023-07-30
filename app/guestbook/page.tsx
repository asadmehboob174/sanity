import Form from '@/components/Form'
import Heading from '@/components/Heading'
import { prisma } from '@/db'
import React from 'react'

export const revalidate = 60;
const Guestbook = async () => {
    const data = await prisma.guestBook.findMany({
      take: 50,
      orderBy: {
        created_at : 'desc'
      }
    })
  
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-2 pb-8 md:space-y-5'>
          <Heading>Guestbook</Heading>
      </div>
      <div className='w-full'>
         <div className='max-w-[500px] mx-auto mt-8'>
            <Form />

            <div className='flex flex-col items-center space-y-2'>
              {data.map((item, index) => {
                return (
                  <div key={index} className='w-full text-sm break-words'>
                     {item.message}
                  </div>
                )
            })}
            </div>
         </div>
      </div>
    </div>
  )
}

export default Guestbook