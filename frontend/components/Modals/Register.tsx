import { useRef } from 'react'
import Button from '../Button'
import axiosClient from '../../apis/axiosClient'
import styles from './Styles.module.scss'
import CloseIcon from '../../public/svg/close-menu.svg'

const Register = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const register = async () => {
    // alert(process.env.HOST_API)
    await axiosClient.post<any, any>('/register', {
      username: usernameRef, password: passwordRef
    })
      .then((data) => {
        alert(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className={styles.container}>
      <div className={styles.closeIcon}>
        <CloseIcon />
      </div>
      <form>
        <input type="text" name="" placeholder='Username' maxLength={256} ref={usernameRef} />
        <input type="password" name="" placeholder='Password' maxLength={256} ref={passwordRef} />
        <Button onClick={register} classStyles={styles.button} text='Sign Up' />
      </form>
    </div>
  )
}

export default Register