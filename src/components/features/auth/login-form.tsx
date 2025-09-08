import { Label } from "@radix-ui/react-label";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import styles from "./login-form.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader>
          <h1 className={styles.title}>Ingresa a tu cuenta</h1>
        </CardHeader>
        <CardContent>
          <form className={styles.form}>
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" />
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className={styles.button}>
              Iniciar sesión
            </Button>
          </form>
          <div className={styles.registerPrompt}>
            <span>¿No tienes una cuenta?</span>
            <Link href="/registro-usuario" className={styles.registerLink}>
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
