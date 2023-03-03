import styles from './Pricing.module.scss'
import TickIcon from '../../public/svg/tick.svg'
import ArrowIcon from '../../public/svg/arrow.svg'

const Pricing = () => {
  const pricingPlans = [
    {
      subTitle: '',
      title: 'Single yoga class',
      price: '$15.',
      descriptionSub: 'Discover your favorite class!',
      benefits: [
        'Pay as you go',
        'Perfect for non-residence',
        'Access to all classes',
      ]
    },
    {
      subTitle: 'RECOMMENDED',
      title: '1 month membership',
      price: '$60.',
      descriptionSub: 'Discover your favorite class!',
      benefits: [
        'Pay as you go',
        'Perfect for non-residence',
        'Access to all classes',
        'Access to all mentors',
      ]
    },
    {
      subTitle: '',
      title: '3 month membership',
      price: '$150.',
      descriptionSub: 'Discover your favorite class!',
      benefits: [
        'Pay as you go',
        'Perfect for non-residence',
        'Access to all classes',
        'Access to all mentors',
      ]
    },
  ]

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} section section--hidden`}>
        <h2>Pick a Pricing Plan</h2>
        <p>Pick a pricing plan and get started your journey with us for build your body and mind</p>
        <div className={styles.cards}>
          {
            pricingPlans.map((item: { subTitle: string, title: string, price: string, descriptionSub: string, benefits: string[] }, i) => (
              <div className={styles.card} key={`card-${i}`}>
                <div className={`${styles.detail} ${item.subTitle ? styles.recommend : ''}`}>
                  <div className={styles.subTitle}>{item.subTitle}</div>
                  <h5>{item.title}</h5>
                  <div className={styles.price}>{item.price}</div>
                </div>
                <div className={styles.description}>
                  <div className={styles.subTitle}>{item.descriptionSub}</div>
                  <ul role='list'>
                    {
                      item.benefits.map((benefit: string, y) => (
                        <li key={`benefit-${i}-${y}`}>
                          <span className={styles.tickIcon}><TickIcon /></span>
                          <span>{benefit}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <div className={styles.button}>
                    Book now
                    <div className={styles.arrowBox}>
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing