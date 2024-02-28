

import type { Metadata } from 'next'

import { Cairo, Tajawal } from 'next/font/google';

import './globals.css'


const tajawal = Cairo({
  weight: ['200','300','400','500','700'],
  subsets: ['arabic'],

})

const cairo = Tajawal({
  weight: ['200','300','400','500','700'],
  subsets: ['arabic'],

})




export const metadata: Metadata = {
  title: 'Souq Media| سوق ميديا ',
  description: ' ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html  lang="ar" dir='rtl'>
    
      <body className={tajawal.className} >
        {children}</body>
    </html>
    </>
  )
}
