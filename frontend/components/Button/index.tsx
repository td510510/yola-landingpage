import { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string,
  classStyles?: string,
}

const Button: FC<ButtonProps> = ({ text, classStyles }) => {
  return (
    <button className={`
    ${styles.button}
    ${classStyles ? classStyles : ''}
    `}>
      {text}
    </button>
  )
}

export default Button