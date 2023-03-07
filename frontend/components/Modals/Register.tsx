import { useState, FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '@/store/userSlice'
import Button from '../Button'
import axiosClient from '../../apis/axiosClient'
import styles from './Styles.module.scss'
import CloseIcon from '../../public/svg/close-menu.svg'

interface RegisterProps {
  closeRegisterModal: () => void
  showSuccessModal: () => void
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Register: FC<RegisterProps> = ({ closeRegisterModal, showSuccessModal, setIsLoading }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isActiveButton, setIsActiveButton] = useState(false)
  const dispatch = useDispatch()

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

  const register = async () => {
    setIsLoading(true)
    await axiosClient.post<any, any>(`/register`, {
      username, password
    })
      .then((data) => {
        Cookies.set('user', JSON.stringify(data))
        setErrorMessage('')
        closeRegisterModal()
        showSuccessModal()
        dispatch(loginAction(data))
        Cookies.set('user', JSON.stringify(data));
        setIsLoading(false)
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
        setIsLoading(false)
      })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.closeIcon} onClick={closeRegisterModal}>
          <CloseIcon />
        </div>
        <input type="text" name="" placeholder='Username' maxLength={256} onChange={handleUsernameChange} />
        <input type="password" name="" placeholder='Password' maxLength={256} onChange={handlePasswordChange} />
        <div className={styles.error}>{errorMessage}</div>
        <Button classStyles={`${styles.button} ${isActiveButton ? styles.active : styles.disable}`} text='Sign Up' onClick={register} />
      </form>
    </div>
  )
}

export default Register