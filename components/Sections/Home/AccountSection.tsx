import React from 'react'
import Image from 'next/image'
import photo7 from "@/public/assets/photo7.png"
function AccountSection() {
  return (
    <div className=' max-container flex flex-col lg:flex-row justify-center items-center min-h-screen pt-10 '>
        <div className='flex items-center justify-center w-1/2'>
            <div className='flex flex-col justify-start w-full'>
              <h1 className='text-2xl font-bold'>لم يكتمل هذا القسم بعد</h1>
              <p>إداره حسابات</p>
            <h1 className=' text-5xl tracking-tighter font-semibold text-[#9E276A] '>ريح راسك سيبها علينا</h1>
            <ul className=' mt-10'>
              <li className=' text-xl'>منشورات يوميه لزيادة المتابعين</li>
              <li className='text-xl mt-3'>أطلاق حملات تسويقيه لزياده المتابعين</li>
              <li className=' text-xl mt-3'>متابعه التعليقات واراء الجمهور </li>
              <li className=' text-xl mt-3'>متابعه التعليقات واراء الجمهور </li>
              <li className=' text-xl mt-3'>متابعه التعليقات واراء الجمهور </li>
            </ul>
           
            </div>
           
           
        </div>
        <div className=' flex justify-center items-centerw-1/2'>
            <Image src={photo7} alt='photo'/>
        </div>
    </div>
  )
}

export default AccountSection