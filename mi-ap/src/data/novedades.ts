export type Novedad = {
  id: string
  title: string
  image: string
  summary: string
  paragraphs: string[]
  tips?: string[]
}

export const novedadesData: Novedad[] = [
  {
    id: '1',
    title: 'Llegó el nuevo Set de Parlantes Torre',
    image: '/imagenes/paginaPrincipal/parlantes3.jpg',
    summary: 'Ya está disponible nuestro nuevo set de torres de sonido, ideal para fiestas y eventos grandes.',
    paragraphs: [
      'Después de meses de pruebas, por fin sumamos a nuestro catálogo el nuevo Set de Parlantes Torre: dos torres activas con graves profundos, conexión Bluetooth estable y entradas auxiliares.',
      'Están pensadas para fiestas, eventos familiares o pequeñas presentaciones en vivo, donde se necesita volumen y claridad sin perder calidad de sonido.',
    ],
  },
  {
    id: '2',
    title: '5 consejos para cuidar tus equipos de sonido',
    image: '/imagenes/paginaPrincipal/equipodesonido1.webp',
    summary: 'Algunas recomendaciones simples para que tus parlantes y equipos duren muchos años más.',
    paragraphs: ['Un buen equipo de sonido dura años si le das los cuidados básicos. Aquí van cinco recomendaciones simples:'],
    tips: [
      'Evita el volumen al máximo por tiempos prolongados.',
      'Protégelos de la humedad.',
      'Desconéctalos durante tormentas eléctricas.',
      'Limpia el polvo regularmente.',
      'Guarda los cables enrollados sin forzar.',
    ],
  },
]
