import Header from '@/components/Header'
import styles from './Hero.module.scss'
import Shape from '../../public/svg/shape.svg'
import Ellipse1 from '../../public/svg/ellipse-1.svg'
import Ellipse2 from '../../public/svg/ellipse-2.svg'
import Ellipse3 from '../../public/svg/ellipse-3.svg'
import Ellipse4 from '../../public/svg/ellipse-4.svg'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.shape}>
        <Shape />
      </div>
      <div className={styles.ellipse1}>
        <Ellipse1 />
      </div>
      <div className={styles.ellipse2}>
        <Ellipse2 />
      </div>
      <div className={styles.ellipse3}>
        <Ellipse3 />
      </div>
      <div className={styles.ellipse4}>
        <Ellipse4 />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.introduce}>
          <h1>Yoga to Release Stress</h1>
          <p>Yoga is a way of life, rather than a chore. Counteract the stresses of modern life by becoming more mindful and compassionate.</p>
          <div className={styles.buttons}>
            <Button classStyles={styles.getStarted} text='Get Started' />
            <Button classStyles={styles.learnMore} text='Learn More' />
          </div>
        </div>
        <img className={styles.man} src='/images/man-sitting.png' alt='Man sitting' />
      </div>
      <div className={styles.effectMobile}>
        <div className={styles.shapeMobile}>
          <Shape />
        </div>
        <img className={styles.manMobile} src='/images/man-sitting.png' alt='Man sitting' />
      </div>
      <div className={styles.steps}>
        <div className={styles.cards}>
          <div className={styles.step}>
            <div className={styles.title}>
              <h5>Make Your Own Plan For Yoga.</h5>
              <div className={styles.number}>1</div>
            </div>
            <img src="/images/man-standing.png" alt="Standing man" />
          </div>
          <div className={styles.step}>
            <div className={styles.title}>
              <h5>Find a Yoga Mentor For You.</h5>
              <div className={styles.number}>2</div>
            </div>
            <img src="/images/young-couple-standing.png" alt="Standing man" />
          </div>
          <div className={`${styles.step} ${styles.step3}`}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5>Every-Day Open Master Classes.</h5>
                <div className={styles.number}>3</div>
              </div>
              <p>
                We’re boosting online yoga by enabling anyone in the world to learn from the best
              </p>
              <div className={styles.readMore}>READ MORE</div>
            </div>
            <img src="/images/lady-sitting.png" alt="Standing man" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero