import React from 'react'
import Image from 'next/image'
import mab from '@/public/assets/Map_wrap.png'

function MabSection() {
  return (
    <div className='max-container flex flex-col justify-center items-center mt-10 min-h-screen'>
        <div className=' flex flex-col justify-center items-center lg:w-1/2 '>
          <h1 className=' text-3xl font bold'>لم يكتمل هذا القسم بعد </h1>
            <h1 className=' text-5xl text-[#9E276A] font-bold'>عملائنا من حول العالم </h1>
            <p className=' text-sm mt-2'>عملاء وثقو بنا من حول العالم</p>
           <div>
            <p></p>
           </div>
        </div>
        <div className=' relative flex justify-center items-center mt-5 lg:w-1/2'>
          <div className=' absolute bg-white border-[1px] rounded-sm w-52 h-20 top-28 text-center flex justify-center items-center  '>
            <p className=' text-xl'>اكثر من عميل 100Kمن حول العالم</p>
          </div>
            <Image className='w-full' src={mab} alt='mab'></Image>
        </div>
    </div>
  )
}

export default MabSection