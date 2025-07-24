import { Card, CardContent } from '../../ui/card'
import styles from './featured-categories.module.scss'

const categories = ['Empleos', 'Vehículos', 'Inmuebles', 'Servicios']

const FeaturedCategories = () => {
  return (
    <section className={styles.section}>
      <h2>Categorías destacadas</h2>
      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <Card key={i}>
            <CardContent className={styles.card}>{cat}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
