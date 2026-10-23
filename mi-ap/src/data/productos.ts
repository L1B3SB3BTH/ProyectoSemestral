export type Producto = {
  id: number
  nombre: string
  precio: number
  imagen: string
  descripcion: string
}

export const productosData: Producto[] = [
  {
    id: 1,
    nombre: 'Parlante Bluetooth XR200',
    precio: 29990,
    imagen: '/imagenes/paginaPrincipal/parlantes.webp',
    descripcion: 'Parlante portátil con sonido potente y batería de larga duración.',
  },
  {
    id: 2,
    nombre: 'Set de Parlantes Torre',
    precio: 89990,
    imagen: '/imagenes/paginaPrincipal/parlantes3.jpg',
    descripcion: 'Torre de sonido ideal para fiestas y eventos, con graves profundos.',
  },
  {
    id: 3,
    nombre: 'Mini Parlante Portátil',
    precio: 19990,
    imagen: '/imagenes/paginaPrincipal/parlantes2.webp',
    descripcion: 'Compacto y liviano, perfecto para llevarlo a todos lados.',
  },
]

export const formatMoney = (value: number) => `$${value.toLocaleString('es-CL')}`
