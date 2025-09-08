"use client";

import { useState, useRef } from "react";

import { Upload, X } from "lucide-react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

import { FormData } from "@/src/base/types/form-ad";

import { CATEGORIES } from "@/src/base/constants/categories";
import { DEPARTMENTS } from "@/src/base/constants/departments";

import styles from "./create-ad.module.scss";

const CreateAdForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    currency: "PEN",
    negotiable: false,
    condition: "",
    department: "",
    province: "",
    district: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    images: [],
  });

  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;

    const newImages = Array.from(files).slice(0, 8 - formData.images.length);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del anuncio:", formData);
    // Aquí harás la llamada a tu API de Spring Boot
  };

  return (
    <div className={styles.createAdPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Publicar mi anuncio</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Información básica */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Información básica</h2>

            <div className={styles.fieldGroup}>
              <Label className={styles.label}>
                Título del anuncio <span className={styles.required}>*</span>
              </Label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Ej: Vendo auto Toyota Corolla 2018"
                required
              />
              <p className={styles.fieldHelper}>
                Máximo 60 caracteres. Sé descriptivo y específico.
              </p>
            </div>

            <div className={styles.fieldGroup}>
              <Label className={styles.label}>
                Descripción <span className={styles.required}>*</span>
              </Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Describe tu producto o servicio con detalles..."
                className={styles.textarea}
                required
              />
              <p className={styles.fieldHelper}>
                Incluye características importantes, estado del producto y
                cualquier detalle relevante.
              </p>
            </div>

            <div className={styles.twoColumns}>
              <div className={styles.fieldGroup}>
                <Label className={styles.label}>
                  Categoría <span className={styles.required}>*</span>
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("category", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vehiculos">Vehículos</SelectItem>
                    <SelectItem value="inmuebles">Inmuebles</SelectItem>
                    <SelectItem value="servicios">Servicios</SelectItem>
                    <SelectItem value="empleos">Empleos</SelectItem>
                    <SelectItem value="electronica">Electrónicos</SelectItem>
                    <SelectItem value="hogar">Hogar y Jardín</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={styles.fieldGroup}>
                <Label className={styles.label}>Subcategoría</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("subcategory", value)
                  }
                  disabled={!formData.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona subcategoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.category &&
                    (
                      Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>
                    ).includes(formData.category as keyof typeof CATEGORIES)
                      ? CATEGORIES[
                          formData.category as keyof typeof CATEGORIES
                        ].map((sub) => (
                          <SelectItem
                            key={sub}
                            value={sub.toLowerCase().replace(" ", "_")}
                          >
                            {sub}
                          </SelectItem>
                        ))
                      : null}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Precio y condición */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Precio y condición</h2>

            <div className={styles.twoColumns}>
              <div className={styles.fieldGroup}>
                <Label className={styles.label}>Precio</Label>
                <div className={styles.priceContainer}>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("currency", value)
                    }
                    defaultValue="PEN"
                  >
                    <SelectTrigger className={styles.currencySelect}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PEN">S/ Soles</SelectItem>
                      <SelectItem value="USD">$ Dólares</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                <p className={styles.fieldHelper}>
                  Deja vacío si es gratis o precio a consultar.
                </p>
              </div>

              <div className={styles.fieldGroup}>
                <Label className={styles.label}>Estado del producto</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("condition", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nuevo">Nuevo</SelectItem>
                    <SelectItem value="seminuevo">Seminuevo</SelectItem>
                    <SelectItem value="usado">Usado</SelectItem>
                    <SelectItem value="refaccionado">Refaccionado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Ubicación</h2>

            <div className={styles.twoColumns}>
              <div className={styles.fieldGroup}>
                <Label className={styles.label}>
                  Departamento <span className={styles.required}>*</span>
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("department", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTMENTS.map((dept) => (
                      <SelectItem key={dept} value={dept.toLowerCase()}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className={styles.fieldGroup}>
                <Label className={styles.label}>Provincia</Label>
                <Input
                  value={formData.province}
                  onChange={(e) =>
                    handleInputChange("province", e.target.value)
                  }
                  placeholder="Ej: Lima"
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <Label className={styles.label}>Distrito</Label>
              <Input
                value={formData.district}
                onChange={(e) => handleInputChange("district", e.target.value)}
                placeholder="Ej: Miraflores"
              />
            </div>
          </div>

          {/* Imágenes */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Imágenes (Máximo 8)</h2>

            <div
              className={`${styles.imageUpload} ${
                dragOver ? styles.dragOver : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={48} color="#6b7280" />
              <p className={styles.uploadText}>
                Arrastra las imágenes aquí o haz clic para seleccionar
              </p>
              <Button
                type="button"
                variant="outline"
                className={styles.uploadButton}
              >
                Seleccionar imágenes
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleImageUpload(e.target.files)}
              />
            </div>

            {formData.images.length > 0 && (
              <div className={styles.imagePreview}>
                {formData.images.map((image, index) => (
                  <div key={index} className={styles.imageItem}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className={styles.image}
                    />
                    <button
                      type="button"
                      className={styles.removeImage}
                      onClick={() => removeImage(index)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Información de contacto */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Información de contacto</h2>

            <div className={styles.contactInfo}>
              <div className={styles.twoColumns}>
                <div className={styles.fieldGroup}>
                  <Label className={styles.label}>
                    Nombre de contacto{" "}
                    <span className={styles.required}>*</span>
                  </Label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) =>
                      handleInputChange("contactName", e.target.value)
                    }
                    placeholder="Tu nombre o empresa"
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <Label className={styles.label}>
                    Teléfono <span className={styles.required}>*</span>
                  </Label>
                  <Input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) =>
                      handleInputChange("contactPhone", e.target.value)
                    }
                    placeholder="987 654 321"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <Label className={styles.label}>Email</Label>
                <Input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) =>
                    handleInputChange("contactEmail", e.target.value)
                  }
                  placeholder="tu@email.com"
                />
                <p className={styles.fieldHelper}>
                  El email es opcional, pero ayuda a recibir más contactos.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.submitSection}>
            <Button type="submit" className={styles.submitButton} size="lg">
              Publicar anuncio gratis
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdForm;
