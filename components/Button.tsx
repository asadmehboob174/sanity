import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { twMerge } from 'tailwind-merge'


const Button = ({children} : { children: React.ReactNode}) => {
  const { pending } = useFormStatus();
  console.log('pending',pending);
  return (
    <button 
        type='submit' 
        disabled={pending} 
        className={twMerge(
        'flex',
        'items-center',
        'justify-center',
        'absolute',
        'right-2',
        'mt-1',
        'font-medium',
        'h-7',
        'bg-teal-500/30',
        'text-neutral-900',
        'dark:text-white',
        'rounded',
        'w-16',
        'disabled:opacity-50',
        'dark:disabled:opacity-50'
    )}>
      {children}
    </button>
  )
}

export default Button