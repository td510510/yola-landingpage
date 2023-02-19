import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src='/images/logo.png' alt='logo' fill />
        </div>
        <div className={styles.menu}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.signIn}></div>
        <div className={styles.signUp}></div>
        <div></div>
      </div>
    </div>
  )
}

export default Header