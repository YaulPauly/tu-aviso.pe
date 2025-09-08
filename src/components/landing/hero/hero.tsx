import Link from "next/link";
import styles from "./hero.module.scss";
import { Plus, Search, Shield, Users, Zap } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: <Zap />,
      title: "Publicación Gratuita",
      description:
        "Publica tus anuncios sin costo alguno. Sin comisiones ni tarifas ocultas.",
    },
    {
      icon: <Users />,
      title: "Fácil de Usar",
      description:
        "Interfaz simple y amigable, diseñada para personas de todas las edades.",
    },
    {
      icon: <Shield />,
      title: "Seguro y Confiable",
      description:
        "Moderación de anuncios y consejos de seguridad para transacciones seguras.",
    },
    {
      icon: <Search />,
      title: "Búsqueda Inteligente",
      description:
        "Encuentra exactamente lo que buscas con nuestros filtros avanzados.",
    },
  ];

  const categories = [
    {
      icon: "🚗",
      name: "Vehículos",
      description: "Autos, motos, camiones",
      count: "1,234 anuncios",
      slug: "vehiculos",
    },
    {
      icon: "🏠",
      name: "Inmuebles",
      description: "Casas, departamentos, terrenos",
      count: "856 anuncios",
      slug: "inmuebles",
    },
    {
      icon: "💼",
      name: "Empleos",
      description: "Ofertas de trabajo",
      count: "692 anuncios",
      slug: "empleos",
    },
    {
      icon: "📱",
      name: "Electrónicos",
      description: "Celulares, computadoras, TV",
      count: "1,456 anuncios",
      slug: "electronica",
    },
    {
      icon: "🛒",
      name: "Servicios",
      description: "Limpieza, reparaciones, más",
      count: "523 anuncios",
      slug: "servicios",
    },
    {
      icon: "🏡",
      name: "Hogar y Jardín",
      description: "Muebles, decoración, jardinería",
      count: "789 anuncios",
      slug: "hogar",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Compra y vende todo lo que necesitas</h1>
          <p className={styles.subtitle}>
            La plataforma más simple y gratuita para anuncios clasificados en
            Perú. Encuentra oportunidades únicas o da una segunda vida a tus
            objetos.
          </p>

          <div className={styles.actions}>
            <Link href="/crear-anuncio" className={styles.primaryButton}>
              <Plus size={20} />
              Publicar anuncio gratis
            </Link>
            <Link href="/anuncios" className={styles.secondaryButton}>
              <Search size={20} />
              Ver anuncios
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>5,000+</span>
              <span className={styles.label}>Anuncios activos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>2,500+</span>
              <span className={styles.label}>Usuarios registrados</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>Gratuito</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>¿Por qué elegir tu-aviso.pe?</h2>
            <p>
              Hemos diseñado la plataforma pensando en la simplicidad y
              seguridad de nuestros usuarios.
            </p>
          </div>

          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Explora por categorías</h2>
            <p>
              Encuentra exactamente lo que buscas en nuestras categorías más
              populares
            </p>
          </div>

          <div className={styles.grid}>
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/anuncios?category=${category.slug}`}
                className={styles.category}
              >
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.name}</h3>
                <p className={styles.count}>{category.count}</p>
              </Link>
            ))}
          </div>

          <div className={styles.viewAll}>
            <Link href="/anuncios" className={styles.secondaryButton}>
              Ver todos los anuncios
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>¿Cómo funciona?</h2>
            <p>Publicar o encontrar lo que necesitas es muy simple</p>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Crea tu anuncio</h3>
              <p>
                Completa el formulario con la información de tu producto o
                servicio. Añade fotos para atraer más compradores.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Publica gratis</h3>
              <p>
                Tu anuncio se publicará inmediatamente sin costo alguno.
                Aparecerá en los resultados de búsqueda al instante.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Recibe contactos</h3>
              <p>
                Los interesados te contactarán directamente por teléfono,
                WhatsApp o email. Tú decides cómo prefieren que te contacten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>¿Listo para comenzar?</h2>
          <p>
            Únete a miles de personas que ya están comprando y vendiendo en
            tu-aviso.pe. ¡Es completamente gratuito!
          </p>
          <Link href="/crear-anuncio" className={styles.button}>
            <Plus size={20} />
            Publicar mi primer anuncio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
