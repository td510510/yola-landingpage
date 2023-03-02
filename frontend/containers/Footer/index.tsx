import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.contents}>
            <h2>Get in Touch With Us for Yoga Course.</h2>
            <p>Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your yoga course.</p>
          </div>
          <form>
            <input type="text" name="" placeholder='First name' maxLength={256} />
            <input type="text" name="" placeholder='Last name' maxLength={256} />
            <input type="email" name="" placeholder='Email address' maxLength={256} />
            <textarea placeholder='Message' maxLength={256} />
            <div className={styles.checkboxGroup}>
              <input type="checkbox" name='policy' id='policy' />
              <label htmlFor="policy">by clicking here you agree to our <span>terms and policy.</span></label>
            </div>
          </form>
        </div>
        <div className={styles.information}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className={styles.copyright}>© 2022 UI HUT. All rights reserved. </div>
          <div className={styles.social}>
            <div className={styles.socialLogo}>
              <img src="/images/facebook.png" alt="Logo facebook" />
            </div>
            <div className={styles.socialLogo}>
              <img src="/images/instagram.png" alt="Logo instagram" />
            </div>
            <div className={styles.socialLogo}>
              <img src="/images/twitter.png" alt="Logo twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer