import styles from './how-it-works.module.scss'

const steps = [
  { title: '1. Regístrate', description: 'Crea tu cuenta gratis en minutos.' },
  { title: '2. Publica tu aviso', description: 'Describe tu producto o servicio y publícalo.' },
  { title: '3. Recibe contactos', description: 'Personas interesadas se comunicarán contigo.' }
]

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
