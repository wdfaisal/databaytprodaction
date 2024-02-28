"use client"

import React from 'react'
import Image from 'next/image'
import photo from "../../../public/assets/photo 1.png"
import  icon2  from '@/public/assets/idea.png'
import icon from '@/public/assets/laptop.png'


function Packagesection() {
  return (
    <section className='bg-[#957DC7] py-10 px-5 '>
        <div className=' max-container w-full h-full flex flex-col lg:flex-row justify-between items-center mx-auto '>
            <div className='flex justify-center items-center w-[70%] lg:w-1/2'>
                <Image 
                  src={photo} 
                  alt="hero"
                   />
            </div>
            <div className=' items-start mt-10 mr-5 lg:w-1/2'>
              <h1 className=' text-xl font-bold mb-2 text-[#9E276A]'>باقات التسويق</h1>
              <h1 className=' text-white font-bold md:text-4xl text-2xl tracking-tighter'>صمم باقتك التسويقيقيه على كيفك ؟</h1>
              <p className=' text-sm font-medium text-gray-700  mt-1 tracking-tighter '>اختار من مختلف الخيارات لتصميم باقتك على كيفك  </p>
              <div className=' flex flex-col mt-4 w-2/3'>
                  <div className=' flex flex-row items-start gap-2 py-3 '> 
                      <Image
                       src={icon}
                        className=' w-8'
                         alt='icon'
                      />
                      <div>
                        <h2 className='text-white text-md tracking-tighter font-bold'>اختار المنصه اللي تناسبك ؟</h2>
                        <p className=' text-sm tracking-tighter md:font-medium text-gray-700 md:w-96 '>اختار من مختلف المنصات فيسبوك انستقرام تيك توك المنصه اللي تناسبك عملك</p>
                      </div>
                   </div>

                    <div className=' flex flex-row items-start gap-2 py-3 '> 
                      <Image src={icon2} className=' w-8' alt='icon'/>
                      <div>
                        <h2 className=' text-white  text-md tracking-tighter font-bold'>اختار جمهورك المستهدف</h2>
                        <p className=' text-sm tracking-tighter md:font-medium text-gray-700 md:w-96 '>اختار من مختلف المنصات فيسبوك انستقرام تيك توك المنصه اللي تناسبك عملك</p>
                      </div>

                    </div>
                    <div className=' flex flex-row justify-center items-start '>
  
                      <button className=' shadow-sm mt-5 ml-2 text-md text-[#9E276A] text-center font-bold py-2 px-5 tracking-tighter rounded-full'>
                        اطلق حملتك الأن
                      </button>
                      
                     </div>
                 </div>
                 

                 
            </div>

        </div>

    </section>
  )
}

export default Packagesection