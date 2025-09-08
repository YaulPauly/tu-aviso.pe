"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  MapPin,
  Calendar,
  Share2,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { AdDetail } from "@/src/base/types/ad-detail";
import { Badge } from "@/src/components/ui/badge";
import Container from "@/src/components/layout/container/container";

const AdDetailPage = ({ adId }: { adId: string }) => {
  const [ad, setAd] = useState<AdDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Datos de ejemplo (en producción vendría de tu API)
  useEffect(() => {
    const mockAd: AdDetail = {
      id: parseInt(adId),
      title: "Toyota Yaris 2020 - Excelente estado",
      description: `Auto en perfectas condiciones, mantenimiento al día, único dueño. 
      
      El vehículo cuenta con:
      • Motor 1.5L VVT-i de 4 cilindros
      • Transmisión CVT automática
      • Sistema de aire acondicionado
      • Dirección electro asistida
      • Frenos ABS con EBD
      • Airbags frontales y laterales
      • Sistema de audio con Bluetooth
      • Llantas de aleación
      • Cristales eléctricos
      • Seguros eléctricos centralizados
      
      Incluye todos los documentos en regla:
      • Tarjeta de propiedad
      • SOAT vigente
      • Revisión técnica al día
      • Manual del propietario
      • Llaves originales (2 unidades)
      
      El auto ha sido mantenido en concesionario oficial Toyota. Perfecto para uso familiar o trabajo. Listo para transferir.
      
      Precio ligeramente negociable para venta al contado.`,
      price: 9500,
      currency: "USD",
      category: "vehiculos",
      subcategory: "autos",
      condition: "seminuevo",
      location: {
        department: "Lima",
        province: "Lima",
        district: "San Isidro",
      },
      contact: {
        name: "Carlos Mendoza",
        phone: "987654321",
        email: "carlos@email.com",
      },
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
      ],
      createdAt: "2025-01-10",
      featured: true,
      views: 247,
      specifications: {
        Año: "2020",
        Marca: "Toyota",
        Modelo: "Yaris",
        Kilómetros: "45,000 km",
        Combustible: "Gasolina",
        Transmisión: "CVT Automática",
        Color: "Blanco",
        Puertas: "5",
        Cilindros: "4",
        Motor: "1.5L",
      },
    };

    setTimeout(() => {
      setAd(mockAd);
      setLoading(false);
    }, 1000);
  }, [adId]);

  const formatPrice = (price: number, currency: string) => {
    const formatted = new Intl.NumberFormat("es-PE").format(price);
    return currency === "USD" ? `$${formatted}` : `S/ ${formatted}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareAd = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: ad?.title,
          text: ad?.description.substring(0, 100) + "...",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert("URL copiada al portapapeles");
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-96 bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-20 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (!ad) {
    return (
      <Container>
        <div className="py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Anuncio no encontrado</h1>
          <p className="text-gray-600 mb-6">
            El anuncio que buscas no existe o ha sido eliminado.
          </p>
          <Link href="/anuncios">
            <Button>Ver todos los anuncios</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
          <Link
            href="/anuncios"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Volver a anuncios
          </Link>
          <span>/</span>
          <span className="capitalize">{ad.category}</span>
          <span>/</span>
          <span className="text-gray-900 truncate">{ad.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Imágenes */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="relative">
                <img
                  src={
                    ad.images[currentImageIndex] || "/api/placeholder/800/600"
                  }
                  alt={ad.title}
                  className="w-full h-96 md:h-[500px] object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/800/600";
                  }}
                />

                {ad.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? ad.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === ad.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {currentImageIndex + 1} / {ad.images.length}
                    </div>
                  </>
                )}

                {ad.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-black">
                      ⭐ Destacado
                    </Badge>
                  </div>
                )}
              </div>

              {/* Miniaturas */}
              {ad.images.length > 1 && (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {ad.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index
                          ? "border-blue-500"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${ad.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/api/placeholder/150/150";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Descripción detallada */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Descripción</h2>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {ad.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Especificaciones */}
            {ad.specifications && (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Especificaciones</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(ad.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100"
                      >
                        <span className="font-medium text-gray-600">
                          {key}:
                        </span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Columna derecha - Información y contacto */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Información principal */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {ad.title}
                      </h1>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Eye size={14} />
                        <span>{ad.views} visualizaciones</span>
                        <span>•</span>
                        <Calendar size={14} />
                        <span>Publicado el {formatDate(ad.createdAt)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-green-600">
                        {formatPrice(ad.price, ad.currency)}
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {ad.category.replace("_", " ")}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {ad.condition}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>
                        {ad.location.district}, {ad.location.province},{" "}
                        {ad.location.department}
                      </span>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="flex-1"
                      >
                        <Heart
                          size={16}
                          className={
                            isFavorite ? "fill-red-500 text-red-500" : ""
                          }
                        />
                        {isFavorite ? "Guardado" : "Guardar"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={shareAd}>
                        <Share2 size={16} />
                        Compartir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Información de contacto */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Contactar al vendedor
                  </h3>

                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold text-xl">
                          {ad.contact.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900">
                        {ad.contact.name}
                      </div>
                      <div className="text-sm text-gray-500">Vendedor</div>
                    </div>

                    {!showContactInfo ? (
                      <Button
                        onClick={() => setShowContactInfo(true)}
                        className="w-full"
                        size="lg"
                      >
                        Ver información de contacto
                      </Button>
                    ) : (
                      <div className="space-y-3">
                        <a
                          href={`tel:${ad.contact.phone}`}
                          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                        >
                          <Phone size={18} />
                          {ad.contact.phone}
                        </a>

                        <a
                          href={`https://wa.me/51${ad.contact.phone.replace(
                            /\s/g,
                            ""
                          )}?text=Hola, me interesa tu anuncio: ${ad.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
                        >
                          <MessageCircle size={18} />
                          WhatsApp
                        </a>

                        {ad.contact.email && (
                          <a
                            href={`mailto:${ad.contact.email}?subject=Consulta sobre: ${ad.title}`}
                            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
                          >
                            <Mail size={18} />
                            Enviar email
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Consejos de seguridad */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-orange-600">
                    💡 Consejos de seguridad
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Reúnete con el vendedor en un lugar público</p>
                    <p>• Inspecciona el producto antes de pagar</p>
                    <p>• No hagas pagos por adelantado</p>
                    <p>• Verifica la documentación si corresponde</p>
                    <p>• Confía en tu instinto</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Anuncios relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Anuncios similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aquí irían anuncios relacionados - simulado */}
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200"></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    Anuncio relacionado {i}
                  </h3>
                  <div className="text-green-600 font-bold">S/ 1,500</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Lima, Miraflores
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdDetailPage;
