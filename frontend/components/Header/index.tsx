import Image from 'next/image'
import Button from '../Button'
import styles from './Header.module.scss'
import HamBurger from '../../public/svg/menu.svg'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src='/images/logo.png' alt='logo' fill />
          </div>
          <ul className={styles.menu} role='list'>
            <li>Home</li>
            <li>Classes</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.signIn}>Sign In</div>
          <Button classStyles={styles.signUp} text='Sign Up' />
          <div className={styles.hamburger}>
            <HamBurger />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header