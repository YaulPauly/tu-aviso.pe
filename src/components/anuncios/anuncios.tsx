import AnuncioCard from './anuncio-card'
import AnunciosFilters from './anuncios-filters'
import styles from './anuncios.module.scss'

const Anuncios = () => {
  return (
    <section className={styles.anunciosPage}>
      <h1 className={styles.title}>Todos los anuncios</h1>

      <AnunciosFilters />

      <div className={styles.list}>
        {[1, 2, 3, 4].map((id) => (
          <AnuncioCard key={id} />
        ))}
      </div>
    </section>
  )
}

export default Anuncios
