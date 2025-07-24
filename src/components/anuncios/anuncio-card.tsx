

import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import styles from './anuncios.module.scss'

const AnuncioCard = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <h3 className={styles.cardTitle}>Título del anuncio</h3>
        <p className={styles.cardText}>Descripción breve del anuncio.</p>
        <p className={styles.cardPhone}>📞 987 654 321</p>
        <Button variant="outline" size="sm">
          Ver más
        </Button>
      </CardContent>
    </Card>
  )
}

export default AnuncioCard
