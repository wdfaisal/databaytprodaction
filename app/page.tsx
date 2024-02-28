import Image from 'next/image'
import {motion} from "framer-motion"
import Hedear from '@/components/shared/Hedear'
import HeroSection from '@/components/Sections/Home/HeroSection'
import Cards from '@/components/Cards'
import Experience from '@/components/Experience'

import MabSection from '@/components/Sections/Home/MabSection'
import PackagesSaction from '@/components/Sections/Home/PackagesSaction'
import Footer from '@/components/shared/Footer'
import AboutSection from '@/components/Sections/Home/AboutSection'
import Libarry from '@/components/Sections/Home/Libarry'
import AccountSection from '@/components/Sections/Home/AccountSection'
import WebDesign from '@/components/Sections/Home/WebDesign'
import Badges from '@/components/Sections/Home/badges'
import FooterDoc from '@/components/Sections/Home/FooterDoc'

export default function Home() {
  return (
    <div>
      <Hedear/>
      <HeroSection />
      <AboutSection/>
      <PackagesSaction/>
      <Badges />
      <WebDesign/>
      <AccountSection/>
      <Badges />
      <MabSection/>
      <FooterDoc/>
      <Footer/>
      
      
    </div>
   
  )
}
