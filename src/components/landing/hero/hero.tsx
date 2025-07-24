import { Button } from '../../ui/button'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Encuentra y publica avisos fácilmente</h1>
        <p>Tu plataforma para vender, comprar o promocionar cualquier producto o servicio.</p>
        <Button variant='outline'>Publicar mi aviso</Button>
      </div>
    </section>
  )
}

export default Hero
