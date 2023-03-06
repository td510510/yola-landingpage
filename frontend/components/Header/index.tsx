import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import toggleScroll from '@/utils/toggleScroll'
import Button from '../Button'
import HamBurger from '../../public/svg/menu.svg'
import CloseIcon from '../../public/svg/close-menu.svg'
import styles from './Header.module.scss'
import Register from '../Modals/Register'
import Login from '../Modals/Login'

const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false)
  const [isShowLogIn, setIsShowLogIn] = useState(false)
  const mobileMenuRef = useRef(null)
  useOnClickOutside(mobileMenuRef, () => setIsShowMobileMenu(false))

  useEffect(() => {
    toggleScroll(isShowMobileMenu)
  }, [isShowMobileMenu])

  const showMobileMenu = () => {
    setIsShowMobileMenu(true)
  }

  const closeMobileMenu = () => {
    setIsShowMobileMenu(false)
  }

  return (
    <header className={styles.container}>
      {/* <Register /> */}
      {/* <Login /> */}
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
          <div className={styles.hamburger} onClick={showMobileMenu}>
            <HamBurger />
          </div>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${isShowMobileMenu ? styles.show : styles.hide}`} ref={mobileMenuRef}>
        <div className={styles.closeIcon} onClick={closeMobileMenu}>
          <CloseIcon />
        </div>
        <ul role='list'>
          <li>Home</li>
          <li>Classes</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header