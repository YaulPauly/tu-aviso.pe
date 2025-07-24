'use client'

import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import styles from './anuncios.module.scss'


const AnunciosFilters = () => {
  return (
    <div className={styles.filters}>
      <Select>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vehiculos">Vehículos</SelectItem>
          <SelectItem value="inmuebles">Inmuebles</SelectItem>
          <SelectItem value="servicios">Servicios</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="Departamento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lima">Lima</SelectItem>
          <SelectItem value="cusco">Cusco</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="Distrito" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="miraflores">Miraflores</SelectItem>
          <SelectItem value="san_isidro">San Isidro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AnunciosFilters
