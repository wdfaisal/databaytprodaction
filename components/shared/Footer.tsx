import { Souq_logo, logo, hight_q } from '@/public/assets';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../../constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className=" bg-[#FBF8F3] min-h-[50vh] ">
      <div className='max-container mt-10 flex flex-col '>
        <div className=' grid grid-cols-2 lg:grid-cols-5 gap-10 h-full items-center justify-center py-20 '>
          <div className=' flex flex-col items-center  justify-center'>
            <Image src={Souq_logo} width={250} height={100} alt='logo'></Image>
          </div>
          <div className='flex flex-col items-center  justify-center '>
            <h1 className=' text-2xl tracking-wider'>الخدمات</h1>
            <ul className=' text-start'>
              <li className='mt-2 text-md font-medium'> الطباعه</li>
              <li className='mt-3 text-md'> التصوير</li>
              <li className='mt-3 text-md'> التصميم</li>
              <li className='mt-3 text-md'> التسويق</li>
              <li className='mt-3 text-md'>تطوير المواقع</li>

            </ul>
          </div>


          <div className='flex flex-col items-center justify-center '>
            <h1 className=' text-2xl tracking-wider '>الحملات التسويقيه</h1>
            <ul className=' text-start'>
              <li className='mt-3 text-md'>خدمات الطباعه</li>
              <li className='mt-3 text-md'>خدمات التصوير</li>
              <li className='mt-3 text-md'>خدمات التصميم</li>
              <li className='mt-3 text-md'>خدمات التسويق</li>
              <li className='mt-3 text-md'>خدمات تطوير المواقع</li>

            </ul>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <h1 className=' text-2xl tracking-wider '>تواصل معنا</h1>
            <ul className=' text-start'>
              <li className='mt-3 text-md'>خدمات الطباعه</li>
              <li className='mt-3 text-md'>خدمات التصوير</li>
              <li className='mt-3 text-md'>خدمات التصميم</li>
              <li className='mt-3 text-md'>خدمات التسويق</li>
              <li className='mt-3 text-md'>خدمات تطوير المواقع</li>

            </ul>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <h1 className=' text-2xl tracking-wider '>تواصل معنا</h1>
          
          </div>


        </div>
        <div className=' flex flex-row justify-around items-center border-t-[1px] py-5 h-20'>
          <p className=' w-1/2'>جميع الحقوق محفوظه ل
            <span className='text-[#9E276A] text-lg'>
              souq.media
            </span>
          </p>
          <div  className=' w-1/4 md:w-40'>
          <SocialIcons/>
          </div>

        </div>
      </div>
    </footer>
  )
  }
export default Footer