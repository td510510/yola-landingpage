import styles from './Countdown.module.scss'
import Ellipse3 from '../../public/svg/ellipse-3.svg'

const Countdown = () => {
  const values = [
    {
      number: '05+',
      title: 'Years of Experience',
      description: 'We are 05 years of experienced in this yoga field. Giving the best instructions.'
    },
    {
      number: '05+',
      title: 'Years of Experience',
      description: 'We are 05 years of experienced in this yoga field. Giving the best instructions.'
    },
    {
      number: '05+',
      title: 'Years of Experience',
      description: 'We are 05 years of experienced in this yoga field. Giving the best instructions.'
    },
    {
      number: '05+',
      title: 'Years of Experience',
      description: 'We are 05 years of experienced in this yoga field. Giving the best instructions.'
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.counts}>
          {
            values.map((value: { number: string, title: string, description: string }, i) => (
              <div className={styles.count} key={`countdown-${i}`}>
                <div className={styles.number}>{value.number}</div>
                <div className={styles.title}>{value.title}</div>
                <div className={styles.description}>{value.description}</div>
              </div>
            ))
          }
        </div>
        <div className={styles.signatureBox}>
          <h2>Relaxe And Enjoy a Personalized Day Yoga With Us.</h2>
          <div className={styles.sign}>John Cena</div>
          <div className={styles.name}>
            <span className={styles.fullName}>John Cena </span>
            <span>/Founder</span>
          </div>
          <div className={styles.ellipse3}>
            <Ellipse3 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown