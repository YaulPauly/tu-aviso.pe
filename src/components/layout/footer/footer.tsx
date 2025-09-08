import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const categories = [
    { name: "Vehículos", href: "/anuncios?category=vehiculos" },
    { name: "Inmuebles", href: "/anuncios?category=inmuebles" },
    { name: "Empleos", href: "/anuncios?category=empleos" },
    { name: "Electrónicos", href: "/anuncios?category=electronica" },
    { name: "Servicios", href: "/anuncios?category=servicios" },
    { name: "Hogar y Jardín", href: "/anuncios?category=hogar" },
  ];

  const cities = [
    { name: "Lima", href: "/anuncios?department=lima" },
    { name: "Arequipa", href: "/anuncios?department=arequipa" },
    { name: "Cusco", href: "/anuncios?department=cusco" },
    { name: "Trujillo", href: "/anuncios?department=la_libertad" },
    { name: "Piura", href: "/anuncios?department=piura" },
    { name: "Chiclayo", href: "/anuncios?department=lambayeque" },
  ];

  const helpLinks = [
    { name: "Centro de Ayuda", href: "/ayuda" },
    { name: "Consejos de Seguridad", href: "/seguridad" },
    { name: "Cómo Publicar", href: "/como-publicar" },
    { name: "Términos de Uso", href: "/terminos" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">tu-aviso.pe</h3>
              <p className="text-slate-300 mt-2">
                La plataforma gratuita de anuncios clasificados más fácil de
                usar en Perú.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} />
                <span>Lima, Perú</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={16} />
                <span>hola@tu-aviso.pe</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={16} />
                <span>+51 1 234-5678</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ciudades */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ciudades</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda y soporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ayuda y Soporte</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 tu-aviso.pe. Todos los derechos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/terminos"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Términos de Uso
              </Link>
              <Link
                href="/privacidad"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center text-slate-400 text-sm">
            <p>
              Hecho con ❤️ para conectar a las personas de Perú.
              <br className="sm:hidden" />
              Publicar anuncios es y siempre será gratuito.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
