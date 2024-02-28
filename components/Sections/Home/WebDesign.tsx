import React from 'react'
import { HeroParallax } from '../../ui/hero-parallax';
import Link from 'next/link';

function WebDesign() {
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cursor.png",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },
       
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
      ];
  return (
    <div className=' bg-gray-50 md:mt-10 w-full h-full'>
        <HeroParallax products={products} />

        <div className=' flex justify-center item-center pb-10 md:py-10'>
           <Link href='/' className=' flex justify-center items-center text-[#9E276A] font-medium text-3xl border-2 py-3 px-5 text-center rounded-xl bg-white shadow-sm'>
            اطلب تصميمك الان 
            </Link>
        </div>
    </div>
  )
}

export default WebDesign