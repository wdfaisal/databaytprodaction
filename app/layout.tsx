

import type { Metadata } from 'next'

import {Roboto, Inter } from 'next/font/google';

import './globals.css'


const inter = Inter({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],

})


export const metadata: Metadata = {
  title: 'Databayt | داتابيت ',
  description: 'business automation software companie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en" >
      <body className={inter.className} >
        {children}
      </body>
    </html>
    </>
  )
}
