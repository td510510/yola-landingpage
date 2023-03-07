import Head from 'next/head'
import Hero from '@/containers/Hero'
import Countdown from '@/containers/Countdown'
import Features from '@/containers/Features'
import Courses from '@/containers/Courses'
import Pricing from '@/containers/Pricing'
import Testimonials from '@/containers/Testimonials'
import Newsletter from '@/containers/Newsletter'
import Footer from '@/containers/Footer'
import { useLayoutEffect } from 'react'
import Loading from '@/components/Loading'

export default function Home() {
  useLayoutEffect(() => {
    // Section effect with scrolling
    const sections = document.querySelectorAll('.section');

    function sectionObserverFunc(entries: any, observer: any) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }

    const sectionObserver = new IntersectionObserver(sectionObserverFunc, {
      root: null,
      threshold: 0.15,
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }, [])

  return (
    <>
      <Head>
        <title>Yola Yoga</title>
        <meta name="description" content="Yoga to Release Stress. Join now!" />
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
