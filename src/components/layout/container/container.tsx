import styles from './container.module.scss'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

export default Container
