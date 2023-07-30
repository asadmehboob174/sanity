import Heading from '@/components/Heading'
import ProfileImage from '@/components/ProfileImage'
import SocialMediaIcons from '@/components/SocialMediaIcons'
import { Introduction, LightIntro } from '@/utils/data'

export default function Home() {
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-2 pb-8 md:space-y-5'>
          <Heading>Home</Heading>
      </div>  
      <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <ProfileImage />
          <h1 className='text-2xl font-bold pt-4 pb-2 leading-8 tracking-tight'>{LightIntro.title}</h1>
          <p className='text-gray-500 dark:text-gray-400 text-center'>
            {LightIntro.description}
          </p>
          <div className='flex space-x-5 pt-6'>
               <SocialMediaIcons />
          </div>
         </div>
         <div className='prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2'>
             {
              Introduction.map((item, index) => {
                return (
                   <p key={index}>{item.description}</p>
                )
              })
             }
         </div>
      </div>
    </div>
  )
}
