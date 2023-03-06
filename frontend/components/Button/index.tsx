import { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string,
  classStyles?: string,
  onClick?: Function,
}

const Button: FC<ButtonProps> = ({ text, classStyles, onClick }) => {
  const handleClick = (e: any) => {
    e.preventDefault()
    if (onClick) onClick()
  }
  return (
    <button className={`
    ${styles.button}
    ${classStyles ? classStyles : ''}
    `}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button