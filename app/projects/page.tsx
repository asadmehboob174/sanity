import Heading from '@/components/Heading'
import { client} from '@/lib/sanity'
import Image from 'next/image'
import React from 'react'

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;

}

export const revalidate = 60;

const Projects = async () => {
  const query = `
  *[_type=='project'] {
  title,
    overview,
    link,
    _id,
    "imageUrl" : image.asset -> url
}`

  const data : Data[] = await client.fetch(query);

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-2 pb-8 md:space-y-5'>
          <Heading>All Projects</Heading>
      </div>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-5 pt-8 sm:gap-y-8'>
         {data.map((project : any) => {
            return (
              <article key={project._id} className='overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 cursor-pointer
               bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100'>
                <div className='h-48 w-full relative'>
                 <Image src={project.imageUrl} fill alt={project.title} className='h-full w-full object-cover' />
                </div>
                <div className='p-4 sm:p-4'>
                  <a href={project.link} target='_blank' rel='noreferrer' className=''>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>{project.title}</h3>
                  </a>

                  <p className='mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2'>{project.overview}</p>

                  <a href={project.link} target='_blank' rel='noreferrer' className=' group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'>
                    Learn More
                    <span className='block text-xl transition-all group-hover:ms-0.5 -translate-y-[0.9px]'>
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>

            )
         })}
            
      </div>
    </div>
  )
}

export default Projects