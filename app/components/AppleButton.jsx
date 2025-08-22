import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IOS_URL } from '@/consts/socials'


const AppleButton = () => {
  return (
    <motion.a
      href={IOS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden hover:scale-105 transition-all duration-300 max-sm:flex-1">

      <Image
        src="/assets/appstore.png"
        alt="App Store"
        width={150}
        height={45}
        className="h-auto w-full sm:h-16 xl:h-15 sm:w-auto"/>
    </motion.a>
    
    // className="h-auto w-full sm:h-16 xl:h-15 sm:w-auto"/>

   

  )
}

export default AppleButton
