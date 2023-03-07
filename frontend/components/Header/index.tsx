import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '@/store/userSlice'
import Cookies from 'js-cookie'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import toggleScroll from '@/utils/toggleScroll'
import Button from '../Button'
import HamBurger from '../../public/svg/menu.svg'
import CloseIcon from '../../public/svg/close-menu.svg'
import Register from '../Modals/Register'
import Login from '../Modals/Login'
import Success from '../Modals/Success'
import styles from './Header.module.scss'
import Loading from '../Loading'

const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false)
  const [isShowLoginModal, setIsShowLoginModal] = useState(false)
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)
  const [isShowLogOutButton, setIsShowLogOutButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const mobileMenuRef = useRef(null)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useOnClickOutside(mobileMenuRef, () => setIsShowMobileMenu(false))

  useEffect(() => {
    toggleScroll(isShowMobileMenu || isShowLoginModal || isShowRegisterModal || isShowSuccessModal)
  }, [isShowMobileMenu, isShowLoginModal, isShowRegisterModal, isShowSuccessModal])

  const showMobileMenu = () => {
    setIsShowMobileMenu(true)
  }

  const closeMobileMenu = () => {
    setIsShowMobileMenu(false)
  }

  const showRegisterModal = () => {
    setIsShowRegisterModal(true)
  }

  const closeRegisterModal = () => {
    setIsShowRegisterModal(false)
  }

  const showLoginModal = () => {
    setIsShowLoginModal(true)
  }

  const closeLoginModal = () => {
    setIsShowLoginModal(false)
  }

  const showSuccessModal = () => {
    setIsShowSuccessModal(true)
  }

  const closeSuccessModal = () => {
    setIsShowSuccessModal(false)
  }

  const toggleLogOutButton = () => {
    setIsShowLogOutButton(prev => !prev)
  }

  const removeUser = () => {
    setIsShowLogOutButton(false)
    dispatch(logout())
    Cookies.remove('user')
  }

  return (
    <header className={styles.container}>
      {isShowRegisterModal && <Register closeRegisterModal={closeRegisterModal} showSuccessModal={showSuccessModal} setIsLoading={setIsLoading} />}
      {isShowLoginModal && <Login closeLoginModal={closeLoginModal} setIsLoading={setIsLoading} />}
      {isShowSuccessModal && <Success onClick={closeSuccessModal} />}
      {isLoading && <Loading />}
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
          {
            user ?
              <>
                <div className={styles.userDesktop} onClick={toggleLogOutButton}>
                  <span>{user.username}</span>
                  <div className={styles.userIcon}>
                    <img src="/images/avatar-1.png" alt="User" />
                  </div>
                </div>
              </>
              :
              <>
                <div className={styles.signIn} onClick={showLoginModal}>Sign In</div>
                <Button classStyles={styles.signUp} text='Sign Up' onClick={showRegisterModal} />
              </>
          }
          {isShowLogOutButton && <Button classStyles={styles.logoutButton} text='Log out' onClick={removeUser} />}
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