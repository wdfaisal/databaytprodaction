import React from 'react'

function AboutSection() {
  return (
    <div className='max-container flex flex-col  md:mt-10 py-10 items-center lg:min-h-[80vh] '>
        <div className=' flex flex-col items-center justify-center gap-2 lg:mx-5'>
            <h1 className=' text-3xl tracking-tighter text-wrap text-center font-bold lg:text-5xl text-[#9E276A]'>أَكبَر مِنَصة لِخدْمَات الميديَّه <br/>فِي الوطن العرَبيِّ</h1>
            <p className=' text-gray-500 text-sm mt-1'>اكثر من 100 خدمة مختلفه</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5 items-center justify-center mt-12  mr-3'>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>خدمات تسويقيه</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px]  py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>خدمات تصميم</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>خدمات تصوير</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px]  py-5 px-5 shadow-sm'>
                <h1 className=' text-lg md:text-xl'>خدمات طباعه</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 lg:w-60 border-[1px] shadow-sm py-5 px-5'>
                <h1 className=' text-lg md:text-xl'>أعلانات المشاهير</h1>
                <p className='text-[10px] md:text-md text-center text-gray-500 mt-1 shadow-sm'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>
            <div className=' flex flex-col rounded-md justify-center items-center w-40 bg-[#9E276A] lg:w-60 border-[1px] shadow-lg py-5 px-5'>
                <h1 className=' text-lg md:text-xl tracking-tighter text-white'>والعديد من الخدمات الاخرى </h1>
                <p className='text-[10px] md:text-md text-center text-white mt-1'>أطلق حملاتك التسويقيه عبر مختلف المنصات بمختلف الميزانيات تبدء بأخل من 5دينار </p>

            </div>

        
        </div>
        
        
    
    
  </div>
  )
}

export default AboutSection