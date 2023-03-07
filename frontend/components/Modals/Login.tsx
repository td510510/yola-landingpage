import { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../Button'
import CloseIcon from '../../public/svg/close-menu.svg'
import styles from './Styles.module.scss'
import axiosClient from '@/apis/axiosClient'
import Cookies from 'js-cookie'

interface LoginProps {
  closeLoginModal: () => void
}

const Login: FC<LoginProps> = ({ closeLoginModal }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isActiveButton, setIsActiveButton] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (username.trim().length > 0) {
      setIsActiveButton(true)
    } else {
      setIsActiveButton(false)
    }
  }, [username])

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    await axiosClient.post<any, any>(`/login`, {
      username, password
    })
      .then((data) => {
        Cookies.set('user', JSON.stringify(data))
        setErrorMessage('')
        closeLoginModal()
        router.reload()
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
      })
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.closeIcon} onClick={closeLoginModal}>
          <CloseIcon />
        </div>
        <input type="text" name="" placeholder='Username' maxLength={256} onChange={handleUsernameChange} />
        <input type="password" name="" placeholder='Password' maxLength={256} onChange={handlePasswordChange} />
        <div className={styles.error}>{errorMessage}</div>
        <Button classStyles={`${styles.button} ${isActiveButton ? styles.active : styles.disable}`} text='Log In' onClick={handleLogin} />
      </form>
    </div>
  )
}

export default Login