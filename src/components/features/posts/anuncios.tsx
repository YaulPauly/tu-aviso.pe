import { ANUNCIOS } from "@/src/base/constants/anuncios";
import AnuncioCard from "./anuncio-card";
import AnunciosFilters from "./anuncios-filters";
import styles from "./anuncios.module.scss";

const Anuncios = () => {
  return (
    <section className={styles.anunciosPage}>
      <h1 className={styles.title}>Todos los anuncios</h1>

      <AnunciosFilters />

      <div className={styles.list}>
        {ANUNCIOS.map(({ id, title, description, phone }) => (
          <AnuncioCard
            key={id}
            id={id}
            title={title}
            description={description}
            phone={phone}
          />
        ))}
      </div>
    </section>
  );
};

export default Anuncios;
