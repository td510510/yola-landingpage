import Button from '../Button'
import CloseIcon from '../../public/svg/close-menu.svg'
import styles from './Styles.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.closeIcon}>
        <CloseIcon />
      </div>
      <form>
        <input type="text" name="" placeholder='Username' maxLength={256} />
        <input type="password" name="" placeholder='Password' maxLength={256} />
        <Button classStyles={styles.button} text='Log In' />
      </form>
    </div>
  )
}

export default Login