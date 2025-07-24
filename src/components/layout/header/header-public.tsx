"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Input } from "../../ui/input";
import styles from "./header.module.scss";

const HeaderPublic = () => {
  const pathname = usePathname();

  const isButtonLoginActive = pathname === "/iniciar-sesion";
  const isButtonRegisterActive = pathname === "/registro-usuario";

  const ButtonLogin = () => (
    <Link href="/iniciar-sesion" className={styles.login}>
      Iniciar sesión
    </Link>
  );
  const ButtonRegister = () => (
    <Link href="/registro-usuario" className={styles.register}>
      Regístrate
    </Link>
  );

  if (isButtonLoginActive || isButtonRegisterActive) {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">tu-aviso.pe</Link>
        </div>
        <Link href="/" className={styles.back}>
          Volver al inicio
        </Link>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">tu-aviso.pe</Link>
      </div>

      <div className={styles.search}>
        <Input type="text" placeholder="Busca avisos..." />
      </div>

      <div className={styles.actions}>
        <ButtonLogin />
        <ButtonRegister />
      </div>
    </header>
  );
};

export default HeaderPublic;
