import Button from '@/components/Button'
import EmailIcon from '../../public/svg/email.svg'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} section section--hidden`}>
        <div className={styles.box}>
          <h4>Subscribe Our Newsletter</h4>
          <p>Subscribe our newsletter for further updates about us</p>
          <div className={styles.emailBox}>
            <div className={styles.input}>
              <div className={styles.emailIcon}>
                <EmailIcon />
              </div>
              <input type="email" placeholder='Enter your email address' />
            </div>
            <Button classStyles={styles.button} text='Get Started' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter