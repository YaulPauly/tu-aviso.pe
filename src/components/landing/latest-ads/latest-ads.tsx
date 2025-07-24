
import Link from 'next/link'
import { Card, CardContent } from '../../ui/card'
import styles from './latest-ads.module.scss'
import { Button } from '../../ui/button'

const latestAds = [
  { title: 'Auto Toyota Yaris 2020', price: 'USD 9,500' },
  { title: 'Laptop Lenovo i7', price: 'S/ 2,500' },
  { title: 'Casa en San Miguel', price: 'USD 120,000' },
  { title: 'Se busca mozo en Miraflores', price: 'USD 120,000' }
]

const LatestAds = () => {
  return (
    <section className={styles.section}>
      <h2>Últimos avisos publicados</h2>
      <div className={styles.grid}>
        {latestAds.map((ad, i) => (
          <Card key={i}>
            <CardContent className={styles.card}>
              <p className={styles.title}>{ad.title}</p>
              <span className={styles.price}>{ad.price}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className={styles.buttonAnuncio}>
        <Link href="/anuncios">
          <Button variant="outline">Ver todos los anuncios</Button>
        </Link>
      </div>
    </section>
  )
}

export default LatestAds
