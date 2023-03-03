import { useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.scss'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      image: '/images/avatar-1.png',
      comment: 'This is the great and best platform for yoga and meditation. I got a very good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.',
      name: 'Trent Boult',
      job: 'Web Designer',
    },
    {
      id: 2,
      image: '/images/avatar-2.png',
      comment: 'This is the great and best platform for yoga and meditation. I got a very good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.',
      name: 'Jonathan David',
      job: 'UX/UI Designer',
    },
    {
      id: 3,
      image: '/images/avatar-3.png',
      comment: 'This is the great and best platform for yoga and meditation. I got a very good body at body now, my body shapes is fine now. I am very grateful to them. They are providing a great service.',
      name: 'Charlotte Mia',
      job: 'Graphic Designer',
    },
  ]

  useEffect(() => {
    let randomSlideInterval: any
    randomSlideInterval = setInterval(
      () => getRandomCurrentSlide(0, 2),
      3000
    );
    return () => clearInterval(randomSlideInterval)
  }, [])

  const goToSlide = (currentSlide: number) => {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`
    })
    setCurrentSlide(currentSlide)
  }

  function getRandomCurrentSlide(min: number, max: number) {
    let slide = Math.floor(Math.random() * (max - min + 1) + min);
    setCurrentSlide(slide)
    goToSlide(slide)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} section section--hidden`}>
        <div className={styles.slides}>
          <h2>What People Say About Us</h2>
          <div className={styles.slideBox}>
            {
              testimonials.map((testimonial: { id: number, image: string, comment: string, name: string, job: string }, i) => (
                <div className={`${styles.slide} slide`} style={{
                  transform: `translateX(${i * 100}%)`
                }} key={`user-${i + 1}`}>
                  <div className={styles.avatar}>
                    <img src={testimonial.image} alt={`Avatar-${i + 1}`} />
                  </div>
                  <p>{testimonial.comment}</p>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.job}>{testimonial.job}</div>
                </div>
              ))
            }
          </div>
          <div className={styles.dots}>
            {[...Array(3)].map((_, i) => (
              <div className={`${styles.dot} ${i === currentSlide ? styles.active : ''}`} key={`dot-${i + 1}`} onClick={() => {
                goToSlide(i)
              }} />
            )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials