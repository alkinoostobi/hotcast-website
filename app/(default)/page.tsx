export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}
import Link from 'next/link'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Contactus from '@/components/contactus'
export default function Home() {
  
  return (
    <>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Contactus/>
    </>
  )
}
