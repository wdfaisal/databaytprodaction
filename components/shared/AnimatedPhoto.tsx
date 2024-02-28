"use client"

import React from 'react'
import hero_Photo from '@/public/assets/design.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

const qout ={

}

function AnimatedPhoto() {
  return (
    <motion.div 
     initial = {{y:50 ,opacity:0}}
     animate = {{y:0,opacity:1, transition:{duration:0.5 ,}}}
     className='w-full h-full'>
        <Image src={hero_Photo}  alt='photo' />
        
    </motion.div>
  )
}

export default AnimatedPhoto