import Head from 'next/head'
import Hero from '@/containers/Hero'
import Countdown from '@/containers/Countdown'
import Features from '@/containers/Features'
import Courses from '@/containers/Courses'
import Pricing from '@/containers/Pricing'
import Testimonials from '@/containers/Testimonials'
import Newsletter from '@/containers/Newsletter'
import Footer from '@/containers/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yola Yoga</title>
        <meta name="description" content="Yoga to Release Stress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Countdown />
      <Features />
      <Courses />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
