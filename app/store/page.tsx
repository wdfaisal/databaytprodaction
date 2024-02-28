"use client"
import React from 'react'
import Hedear from '@/components/shared/Hedear'
import Image from 'next/image'
import { back_photo,back_photo2 } from '@/public/assets'
import Link from 'next/link'

function page() {
  return (
<>
   <Hedear/>
   <main className='bg-[#FBF8F3]'>
    <div className='max-container relative flex flex-col w-full justify-center items-center  lg:overflow-hidden h-[80vh] pt-10 lg:pt-0 px-10 '>
        <div><Image className='absolute hidden lg:block top-0 lg:right-0'  src={back_photo} alt='back'/></div>
        <div><Image className=' absolute -right-20 top-0 lg:right-0'  src={back_photo2} alt='back'/></div>

        <div className=' flex flex-col '>
          <div className=' mr-5 lg:text-center'>
            <h1 className=' text-7xl font-bold mb-5 text-[#9E276A]'>أكثر من 500 خدمة في انتظارك</h1>
            <p className=' text-center bg-slate-100'>خصومات تصل الى 50%</p>
            <p className=' lg:text-lg text-md text-gray-500 font-light '>تمتع بالعديد من الخدمات التسويقيه الابداعيه في عالم من الابداع يحوي العديد من الخدمات من طباعه ,تصوير,حملات تسويقية والعديد</p>
           <div className=' mt-2 pt-1 flex gap-2  flex-wrap'>
            <p  className=' border-2 py-1 text-md px-4 hover:bg-[#9E276A] cursor-pointer hover:text-white rounded-full'>تصميم</p>
            <p  className=' border-[1px] text-md  shadow-sm py-1 px-3 border-[#9E276A] hover:bg-[#9E276A] cursor-pointer hover:text-white  rounded-full'>حملات تسويقيه</p>
            <p  className=' border-2 py-1 text-md px-4 hover:bg-[#9E276A] cursor-pointer hover:text-white  rounded-full'>إداره حسابات</p>
            <p  className=' border-2 py-1 text-md  px-4 hover:bg-[#9E276A] cursor-pointer hover:text-white  rounded-full'>تصميم اعلانات</p>
            <p  className=' border-2 py-1 text-md  px-4 hover:bg-[#9E276A] cursor-pointer hover:text-white  rounded-full'>طباعه</p>
            <p  className=' border-2 py-1 text-md  px-4  hover:bg-[#9E276A] cursor-pointer hover:text-white rounded-full'>تصوير</p>
            <p  className=' border-2 py-1 text-md  px-4 hover:bg-[#9E276A] cursor-pointer hover:text-white  rounded-full'>اعلانات الطرق </p>

           </div>
          
          
          </div>
        </div> 
       
    </div>
    </main>





    <section>

      <div className=''>

      </div>




    </section>

      </>
  )
}

export default page