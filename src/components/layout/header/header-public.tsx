"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Plus, Menu, X, ArrowLeft } from "lucide-react";

import { Input } from "../../ui/input";
import styles from "./header.module.scss";

const HeaderPublic = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthPage =
    pathname === "/iniciar-sesion" || pathname === "/registro-usuario";
  const isHomePage = pathname === "/";
  const isAnunciosPage = pathname === "/anuncios";
  const isCreateAdPage = pathname === "/crear-anuncio";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/anuncios?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { href: "/", label: "Inicio", active: isHomePage },
    { href: "/anuncios", label: "Ver anuncios", active: isAnunciosPage },
  ];

  // Header simplificado para páginas de autenticación
  if (isAuthPage) {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">tu-aviso.pe</Link>
        </div>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">tu-aviso.pe</Link>
      </div>

      {/* Navegación y búsqueda */}
      <div className={styles.navigation}>
        {/* Enlaces de navegación */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                link.active ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buscador */}
        {!isCreateAdPage && (
          <div className={styles.search}>
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className={styles.searchIcon} size={20} />
                <Input
                  type="text"
                  placeholder="Buscar anuncios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Acciones */}
      <div className={styles.actions}>
        {/* Botón publicar anuncio */}
        <Link href="/crear-anuncio" className={styles.publishButton}>
          <Plus size={16} />
          Publicar anuncio
        </Link>

        {/* Botones de autenticación */}
        <Link href="/iniciar-sesion" className={styles.login}>
          Iniciar sesión
        </Link>
        <Link href="/registro-usuario" className={styles.register}>
          Regístrate
        </Link>

        {/* Botón de menú móvil */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          {/* Enlaces de navegación móvil */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                link.active ? styles.active : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Buscador móvil */}
          {!isCreateAdPage && (
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <Input
                  type="text"
                  placeholder="Buscar anuncios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>
          )}

          {/* Acciones móvil */}
          <div className="flex flex-col gap-2">
            <Link
              href="/crear-anuncio"
              className={styles.publishButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Plus size={16} />
              Publicar anuncio
            </Link>
            <div className="flex gap-2">
              <Link
                href="/iniciar-sesion"
                className={`${styles.login} flex-1 justify-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/registro-usuario"
                className={`${styles.register} flex-1 justify-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Regístrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPublic;
