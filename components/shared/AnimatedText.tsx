'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { cn } from "@/lib/utils"

  interface props{
  text:string
  }

  const quote ={
    initial:{
      opacity:0,
    },
   animate:{
      opacity:1,
      transition:{
        
        staggerChildren: 0.05,
      }
  }
  }

const singleword={
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.8
    }
  }
  

}
function AnimatedText({text}:props) {

  return (
    <div className=' w-full flex items-center justify-center self-center'>
     <motion.h1 
     className={"text-wrap w-full my-4 mr-0 font-bold tracking-tighter  text-5xl lg:text-7xl text-[#9E276A]" }
      
     variants={quote}
     initial='initial'
     animate="animate"
     
     >
      {
        text
      }
      
    </motion.h1>

    </div>
  )
}

export default AnimatedText