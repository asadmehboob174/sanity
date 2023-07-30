import React from 'react';
import profileimage from "@/public/profile-pic.png"
import Image from 'next/image';

const ProfileImage = () => {
  return (
      <Image src={profileimage} alt='asad mehboob' className='h-48 w-48 rounded-full object-cover object-top' />
  )
}

export default ProfileImage