import { FC } from 'react'
import CloseIcon from '../../public/svg/close-menu.svg'
import styles from './Styles.module.scss'

interface SuccessProps {
  onClick: () => void
}

const Success: FC<SuccessProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.closeIcon} onClick={onClick}>
          <CloseIcon />
        </div>
        <div className={styles.notification}>Register successfully! Please Login.</div>
      </form>
    </div>
  )
}

export default Success