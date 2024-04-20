
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import page from '../../app/Docs/page';

const Footer = () => {
  return (
    <footer className=" text-white bg-[#0C0B10] justify-between min-h-[50vh] w-full flex flex-col  ">
      <div className='h-2/3 flex flex-row items-center justify-between'>
        <div className=' w-1/4'>
          <p>page</p>
          <ul>
            <li>page</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
          </ul>

        </div>

        <div className=' w-1/4'>
          <p>page</p>
          <ul>
            <li>page</li>
            <li>page</li>
            <li>page</li>
            <li>page</li>
          </ul>

        </div>
       
      </div>
      <div className=' py-5 px-10 border-t-[1px] border-white w-full'>
        <p>@copy <span className=' text-[#fe0]'>Databayt</span></p>
      </div>

    
    </footer>
  )
  }
export default Footer