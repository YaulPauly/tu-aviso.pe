"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import styles from "./header.module.scss"

const HeaderPrivate = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">tu-aviso.pe</Link>
      </div>

      {/* Buscador */}
      <div className={styles.search}>
        <Input type="text" placeholder="Busca avisos..." />
      </div>

      {/* Acciones */}
      <div className={styles.actions}>
        {/* Botón para crear anuncio */}
        {pathname !== "/crear-anuncio" && (
          <Link href="/crear-anuncio">
            <Button>Crear anuncio</Button>
          </Link>
        )}

        {/* Menú de usuario */}
        <div className={styles.userMenu}>
          <Link href="/mi-perfil" className={styles.profile}>
            Mi perfil
          </Link>
          <Link href="/api/auth/signout" className={styles.logout}>
            Cerrar sesión
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderPrivate
