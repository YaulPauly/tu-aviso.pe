"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Separator } from "@radix-ui/react-select";
import { Label } from "@radix-ui/react-label";

import styles from "./register-form.module.scss";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Crea tu cuenta</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameFields}>
          <div>
            <Label className={styles.label} htmlFor="name">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label className={styles.label} htmlFor="surname">
              Apellido
            </Label>
            <Input
              id="surname"
              name="surname"
              placeholder="Apellido"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label className={styles.label} htmlFor="email">
            Correo electrónico
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Correo electrónico"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className={styles.label} htmlFor="password">
            Contraseña
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Contraseña"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className={styles.label} htmlFor="confirmPassword">
            Confirmar contraseña
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            type="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className={styles.registerButton}>
          Registrarse
        </Button>
      </form>

      <Separator className={styles.separator} />
      <Button variant="outline" className={styles.googleButton}>
        <FcGoogle className={styles.googleIcon} />
        Registrarse con Google
      </Button>
    </div>
  );
}
