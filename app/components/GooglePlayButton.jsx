import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CLEIN_CUSTOMER_APP_URL } from '@/consts/socials'


const GooglePlayButton = () => {
  return (
    <motion.a
      href={CLEIN_CUSTOMER_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl hover:scale-105 transition-all duration-300 max-sm:flex-1">

      <Image
        src="/assets/playstore.png"
        alt="Google Play"
        width={150}
        height={45}
        className="h-auto w-full sm:h-16 xl:h-15 sm:w-auto" />
        
    </motion.a>

    // className="h-auto w-32 sm:h-16 xl:h-15 sm:w-auto"/>

  )
}

export default GooglePlayButton
