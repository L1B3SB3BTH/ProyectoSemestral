import type { Pelicula } from "../tipos/pelicula";

export const peliculas: Pelicula[] = [
    {
        id: 1,
        titulo: "Interestelar",
        descripcion:
            "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad, cuya Tierra se encuentra al borde del colapso.",
        genero: "Ciencia ficción",
        anio: 2014,
        imagen: "/img/interestelar.jpg",
    },
    {
        id: 2,
        titulo: "Coco",
        descripcion:
            "Miguel, un niño que sueña con ser músico, viaja al mundo de los muertos para descubrir la historia de su familia en plena celebración del Día de Muertos.",
        genero: "Animación",
        anio: 2017,
        imagen: "/img/coco.jpg",
    },
    {
        id: 3,
        titulo: "Gladiador",
        descripcion:
            "Un general romano traicionado y reducido a la esclavitud se convierte en gladiador y busca vengar la muerte de su familia y del emperador.",
        genero: "Acción / Drama",
        anio: 2000,
        imagen: "/img/Gladiador.jpg",
    },
    {
        id: 4,
        titulo: "Jurassic Park",
        descripcion:
            "En un parque temático con dinosaurios clonados, los sistemas de seguridad fallan y los visitantes deben luchar por sobrevivir.",
        genero: "Aventura",
        anio: 1993,
        imagen: "/img/dinosaurio.jpg",
    },
];