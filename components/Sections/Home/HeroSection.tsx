  import React from 'react'
  import Image from 'next/image'
  import back_absolute_photo2 from '@/public/assets/back-photo2.png'
  import back_absolute_photo from "@/public/assets/back-photo.png"
  import storePhoto from "@/public/assets/store.png"
  import prefix from '@/public/assets/512.gif'
  import AnimatedPhoto from '../../shared/AnimatedPhoto'
  import Link from 'next/link'
  import {motion} from 'framer-motion'

function HeroSection() {

  const qouts ={

    initial:{
      y:-100,
      opacity:0,
    },

   animate:{
      y:0,
      opacity:1,
      transition:{
        staggerChildren: 0.05,
      }
  }
  }

  
  return (
    <main className='bg-[#FBF8F3]'>
        <div className='max-container relative flex flex-col w-full justify-between items-center lg:flex-row lg:overflow-hidden lg:min-h-screen pt-10 lg:pt-0 px-10 '>
         
             {/**absolute to Photos in right corner */}
            <div><Image className='absolute hidden lg:block top-0 lg:right-0'  src={back_absolute_photo} alt='back'/></div>
            <div><Image className=' absolute -right-20 top-0 lg:right-0'  src={back_absolute_photo2} alt='back'/></div>


             {/**Text header Section */}
            <div className=' flex flex-col lg:w-2/3'>
                <div className=' lg:w-[80%] lg:mr-7 mr-5 lg:text-start '>

                    <p  className=' text-center bg-slate-100'>خصومات تصل الى 50%</p>
                    <h1 className='text-wrap w-full mt-10 mr-0 font-bold tracking-tighter  text-6xl lg:text-7xl text-[#9E276A]'>خيارك الأول</h1>
                    <h1 className='text-wrap w-full  mr-0 font-bold mt-4 md:tracking-tight tracking-tighter md:mb-8  text-[1.7em] lg:text-[3.12em] '> كل خدماتك في مكان واحد</h1>
                    <p className=' lg:text-lg text-sm font-medium text-gray-500 mt-2 '>تمتع بالعديد من الخدمات التسويقيه الابداعيه في عالم من الابداع </p>

                    <div className=' mt-2 pt-1 flex gap-2  flex-wrap'>
                      <p  className=' border-2 py-1 text-md px-4 text-center rounded-full'>تصميم</p>
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>طباعه</p>
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>تصوير</p>
                      <p  className=' border-[1px] lg:text-md   shadow-sm text-center items-center py-1 px-3 border-[#9E276A] rounded-full'>حملات تسويقيه</p>
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>إداره حسابات</p>
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>تصميم اعلانات</p>
                      
                      
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>اعلانات الطرق</p>
                      <p  className=' border-2 py-1 lg:text-md px-4 rounded-full'>اعلانات المشاهير</p>
                      
                    </div>
                      
                    <div className=' mt-7 flex flex-col  lg:flex-row  justify-start gap-2 lg:gap-10 w-full '>
                      <Link href="/store" className=' tracking-tighter text-center border-[1px] text-lg rounded-full hover:bg-[#9E276A] text-[#9E276A] hover:text-white border-[#9E276A] py-2 px-8 '>
                         احجز استشارتك
                      </Link>
                      <Link href="/store" className=' flex gap-2 rounded-full bg-[#9E276A] border-2 border-[#9E276A] justify-center items-center py-2 px-8 '>
                      <p className=' text-md  text-[white] tracking-tighter'>متجر الخدمات </p>
                      <Image 
                        src={storePhoto}
                        alt='store'
                        width={20} 
                        height={20}

                        />
                      </Link>
                    </div>

                </div>

            </div>


            <div className=' relative border-gray-100 border-[1px] py-0 shadow-sm mt-14 items-start lg:w-1/2 flex justify-end'>
                <div className='  flex  justify-center h-full w-full'>

                  <div className=' hidden absolute bg-transparent  border-2 px-10 py-2 flex-row text-center rounded-md shadow-md -right-10 top-10 w-46 lg:w-fit text-sm lg:-right-16 lg:top-16'>
                    <p className='text-lg font-extralight text-[#9E276A]  '>حقق اهدافك التسويقيه بدقه </p>
                    <Image
                      src={prefix}
                      width={20}
                      height={25} 
                      className=' mr-2' 
                      alt='hello'
                      />
                  </div>

                  <div className='absolute font-bold bg-white px-10 py-2 text-center rounded-md shadow-md -left-10 bottom-16 w-46 '>
                    <p className='tracking-tighter'>حملات تصيب الهدف دائما</p>
                  </div>
                  
                  <AnimatedPhoto />
                  

                </div>

            </div>

          
              
              
          
        </div>
    </main>
  )
}

export default HeroSection