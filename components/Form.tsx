'use client'

import postEntry from '@/action'
import React, { useRef } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import Button from './Button';

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
   const { pending } = useFormStatus();

   console.log('pender', pending);

  const handleSubmit = async (formData : FormData) => {
    await postEntry(formData);
    formRef.current?.reset();
  }
  
  return (
    <form ref={formRef} action={handleSubmit}
          className={`${pending ? 'opacity-30' : 'opacity-100'}
          relative 
          flex 
          items-center 
          text-sm 
          mb-5`}>
      <input
      disabled={pending} 
      type="text" 
      name='entry'
      placeholder='Your message ...' 
      required
      className='
        w-full 
        pl-4 pr-32 py-2
        block
        rounded-md
        border-neutral-300
        focus:border-teal-500
        focus:ring-teal-500 
        bg-gray-100 
        dark:bg-neutral-800
        text-neutral-900 
        dark:text-neutral-100' 
         />
      <Button>Send</Button>
      
    </form>
  )
}

export default Form