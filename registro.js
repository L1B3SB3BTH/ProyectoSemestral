
const regiones = [

    {
        nombre: "Arica y Parinacota",
        comunas: [
            "Arica",
            "Camarones",
            "General Lagos",
            "Putre"
        ]
    },

    {
        nombre: "Tarapacá",
        comunas: [
            "Alto Hospicio",
            "Camiña",
            "Colchane",
            "Huara",
            "Iquique",
            "Pica",
            "Pozo Almonte"
        ]
    },

    {
        nombre: "Antofagasta",
        comunas: [
            "Antofagasta",
            "Calama",
            "María Elena",
            "Mejillones",
            "Ollagüe",
            "San Pedro de Atacama",
            "Sierra Gorda",
            "Taltal",
            "Tocopilla"
        ]
    },

    {
        nombre: "Atacama",
        comunas: [
            "Alto del Carmen",
            "Caldera",
            "Chañaral",
            "Copiapó",
            "Diego de Almagro",
            "Freirina",
            "Huasco",
            "Tierra Amarilla",
            "Vallenar"
        ]
    },

    {
        nombre: "Coquimbo",
        comunas: [
            "Andacollo",
            "Canela",
            "Combarbalá",
            "Coquimbo",
            "Illapel",
            "La Higuera",
            "La Serena",
            "Los Vilos",
            "Monte Patria",
            "Ovalle",
            "Paiguano",
            "Punitaqui",
            "Río Hurtado",
            "Salamanca",
            "Vicuña"
        ]
    },

    {
        nombre: "Valparaíso",
        comunas: [
            "Algarrobo",
            "Cabildo",
            "Calera",
            "Cartagena",
            "Casablanca",
            "Catemu",
            "Concón",
            "El Quisco",
            "El Tabo",
            "Hijuelas",
            "Isla de Pascua",
            "Juan Fernández",
            "La Cruz",
            "La Ligua",
            "Limache",
            "Llay-Llay",
            "Los Andes",
            "Nogales",
            "Olmué",
            "Panquehue",
            "Papudo",
            "Petorca",
            "Puchuncaví",
            "Putaendo",
            "Quillota",
            "Quilpué",
            "Quintero",
            "Rinconada",
            "San Antonio",
            "San Esteban",
            "San Felipe",
            "Santa María",
            "Santo Domingo",
            "Valparaíso",
            "Villa Alemana",
            "Viña del Mar",
            "Zapallar"
        ]
    },

    {
        nombre: "Región Metropolitana de Santiago",
        comunas: [
            "Alhué",
            "Buin",
            "Calera de Tango",
            "Cerrillos",
            "Cerro Navia",
            "Colina",
            "Conchalí",
            "Curacaví",
            "El Bosque",
            "El Monte",
            "Estación Central",
            "Huechuraba",
            "Independencia",
            "Isla de Maipo",
            "La Cisterna",
            "La Florida",
            "La Granja",
            "La Pintana",
            "La Reina",
            "Lampa",
            "Las Condes",
            "Lo Barnechea",
            "Lo Espejo",
            "Lo Prado",
            "Macul",
            "Maipú",
            "María Pinto",
            "Melipilla",
            "Ñuñoa",
            "Padre Hurtado",
            "Paine",
            "Pedro Aguirre Cerda",
            "Peñaflor",
            "Peñalolén",
            "Pirque",
            "Providencia",
            "Pudahuel",
            "Puente Alto",
            "Quilicura",
            "Quinta Normal",
            "Recoleta",
            "Renca",
            "San Bernardo",
            "San Joaquín",
            "San José de Maipo",
            "San Miguel",
            "San Pedro",
            "San Ramón",
            "Santiago",
            "Talagante",
            "Tiltil",
            "Vitacura"
        ]
    },

    {
        nombre: "O'Higgins",
        comunas: [
            "Codegua",
            "Coinco",
            "Coltauco",
            "Doñihue",
            "Graneros",
            "La Estrella",
            "Las Cabras",
            "Litueche",
            "Lolol",
            "Machalí",
            "Malloa",
            "Marchigüe",
            "Mostazal",
            "Nancagua",
            "Navidad",
            "Olivar",
            "Palmilla",
            "Paredones",
            "Peralillo",
            "Peumo",
            "Pichidegua",
            "Pichilemu",
            "Placilla",
            "Pumanque",
            "Quinta de Tilcoco",
            "Rancagua",
            "Rengo",
            "Requínoa",
            "San Fernando",
            "San Francisco de Mostazal",
            "San Vicente"
        ]
    },

    {
        nombre: "Maule",
        comunas: [
            "Cauquenes",
            "Chanco",
            "Colbún",
            "Constitución",
            "Curepto",
            "Curicó",
            "Empedrado",
            "Hualañé",
            "Licantén",
            "Linares",
            "Longaví",
            "Maule",
            "Molina",
            "Parral",
            "Pelarco",
            "Pelluhue",
            "Pencahue",
            "Rauco",
            "Retiro",
            "Río Claro",
            "Romeral",
            "Sagrada Familia",
            "San Clemente",
            "San Javier",
            "San Rafael",
            "Talca",
            "Teno",
            "Vichuquén",
            "Villa Alegre",
            "Yerbas Buenas"
        ]
    },

    {
        nombre: "Ñuble",
        comunas: [
            "Bulnes",
            "Chillán",
            "Chillán Viejo",
            "Cobquecura",
            "Coelemu",
            "Coihueco",
            "El Carmen",
            "Ninhue",
            "Ñiquén",
            "Pemuco",
            "Pinto",
            "Portezuelo",
            "Quillón",
            "Quirihue",
            "Ránquil",
            "San Carlos",
            "San Fabián",
            "San Ignacio",
            "San Nicolás",
            "Treguaco",
            "Yungay"
        ]
    },

    {
        nombre: "Biobío",
        comunas: [
            "Alto Biobío",
            "Antuco",
            "Arauco",
            "Cabrero",
            "Cañete",
            "Chiguayante",
            "Concepción",
            "Contulmo",
            "Curanilahue",
            "Florida",
            "Hualpén",
            "Hualqui",
            "Laja",
            "Lebu",
            "Los Álamos",
            "Los Ángeles",
            "Lota",
            "Mulchén",
            "Nacimiento",
            "Negrete",
            "Penco",
            "Quilaco",
            "Quilleco",
            "San Pedro de la Paz",
            "San Rosendo",
            "Santa Bárbara",
            "Santa Juana",
            "Talcahuano",
            "Tirúa",
            "Tomé",
            "Tucapel",
            "Yumbel"
        ]
    },

    {
        nombre: "La Araucanía",
        comunas: [
            "Angol",
            "Carahue",
            "Cholchol",
            "Collipulli",
            "Cunco",
            "Curacautín",
            "Curarrehue",
            "Ercilla",
            "Freire",
            "Galvarino",
            "Gorbea",
            "Lautaro",
            "Loncoche",
            "Lonquimay",
            "Los Sauces",
            "Lumaco",
            "Melipeuco",
            "Nueva Imperial",
            "Padre Las Casas",
            "Perquenco",
            "Pitrufquén",
            "Pucón",
            "Purén",
            "Renaico",
            "Saavedra",
            "Temuco",
            "Teodoro Schmidt",
            "Toltén",
            "Traiguén",
            "Victoria",
            "Vilcún",
            "Villarrica"
        ]
    },

    {
        nombre: "Los Ríos",
        comunas: [
            "Corral",
            "Futrono",
            "La Unión",
            "Lago Ranco",
            "Lanco",
            "Los Lagos",
            "Máfil",
            "Mariquina",
            "Paillaco",
            "Panguipulli",
            "Río Bueno",
            "Valdivia"
        ]
    },

    {
        nombre: "Los Lagos",
        comunas: [
            "Ancud",
            "Calbuco",
            "Castro",
            "Chaitén",
            "Chonchi",
            "Cochamó",
            "Curaco de Vélez",
            "Dalcahue",
            "Fresia",
            "Frutillar",
            "Futaleufú",
            "Hualaihué",
            "Llanquihue",
            "Los Muermos",
            "Maullín",
            "Osorno",
            "Palena",
            "Puerto Montt",
            "Puerto Octay",
            "Puerto Varas",
            "Puqueldón",
            "Purranque",
            "Puyehue",
            "Queilén",
            "Quellón",
            "Quemchi",
            "Quinchao",
            "Río Negro",
            "San Juan de la Costa",
            "San Pablo"
        ]
    },

    {
        nombre: "Aysén",
        comunas: [
            "Aysén",
            "Chile Chico",
            "Cisnes",
            "Cochrane",
            "Coyhaique",
            "Guaitecas",
            "Lago Verde",
            "O'Higgins",
            "Río Ibáñez"
        ]
    },

    {
        nombre: "Magallanes y de la Antártica Chilena",
        comunas: [
            "Antártica",
            "Cabo de Hornos",
            "Laguna Blanca",
            "Natales",
            "Porvenir",
            "Primavera",
            "Punta Arenas",
            "Río Verde",
            "San Gregorio",
            "Timaukel",
            "Torres del Paine"
        ]
    }

];




const formulario = document.getElementById("formularioRegistro");

const run = document.getElementById("run");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");


const correo = document.getElementById("correo");

const tipoUsuario = document.getElementById("tipoUsuario");
const region = document.getElementById("region");
const comuna = document.getElementById("comuna");




regiones.forEach(function (regionActual, indice) {

    const opcion = document.createElement("option");

    opcion.value = indice;
    opcion.textContent = regionActual.nombre;

    region.appendChild(opcion);

});




region.addEventListener("change", function () {

    comuna.innerHTML =
        '<option value="">Seleccione una comuna</option>';

   
    if (region.value === "") {
        return;
    }

  
    const regionSeleccionada = regiones[region.value];

  
    regionSeleccionada.comunas.forEach(function (nombreComuna) {

        const opcion = document.createElement("option");

        opcion.value = nombreComuna;
        opcion.textContent = nombreComuna;

        comuna.appendChild(opcion);

    });

});




function validarRUN(runIngresado) {

  
    if (
        runIngresado.includes(".") ||
        runIngresado.includes("-")
    ) {
        return false;
    }

   
    if (!/^[0-9]+[0-9Kk]$/.test(runIngresado)) {
        return false;
    }

  
    const cuerpo = runIngresado.slice(0, -1);

    const dv = runIngresado
        .slice(-1)
        .toUpperCase();

    let suma = 0;

    let multiplicador = 2;


  
    for (
        let i = cuerpo.length - 1;
        i >= 0;
        i--
    ) {

        suma +=
            parseInt(cuerpo[i]) *
            multiplicador;

        multiplicador++;

        if (multiplicador > 7) {
            multiplicador = 2;
        }

    }


   
    const resto = suma % 11;

    const resultado = 11 - resto;

    let dvCalculado;


    if (resultado === 11) {

        dvCalculado = "0";

    }
    else if (resultado === 10) {

        dvCalculado = "K";

    }
    else {

        dvCalculado = resultado.toString();

    }


    return dv === dvCalculado;

}




formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let valido = true;


    

    const valorRUN = run.value.trim();

    if (valorRUN === "") {

        alert("El RUN es obligatorio.");

        valido = false;

    }
    else if (
        valorRUN.includes(".") ||
        valorRUN.includes("-")
    ) {

        alert(
            "El RUN no debe contener puntos ni guion."
        );

        valido = false;

    }
    else if (!validarRUN(valorRUN)) {

        alert("El RUN ingresado no es válido.");

        valido = false;

    }


 

    const valorNombre = nombre.value.trim();

    if (valorNombre === "") {

        alert("El nombre es obligatorio.");

        valido = false;

    }
    else if (valorNombre.length > 50) {

        alert(
            "El nombre no puede superar los 50 caracteres."
        );

        valido = false;

    }




    const valorApellido = apellido.value.trim();

    if (valorApellido === "") {

        alert("Los apellidos son obligatorios.");

        valido = false;

    }
    else if (valorApellido.length > 100) {

        alert(
            "Los apellidos no pueden superar los 100 caracteres."
        );

        valido = false;

    }




    const valorCorreo = correo.value.trim();

    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (valorCorreo === "") {

        alert("El correo es obligatorio.");

        valido = false;

    }
    else if (valorCorreo.length > 100) {

        alert(
            "El correo no puede superar los 100 caracteres."
        );

        valido = false;

    }
    else if (!formatoCorreo.test(valorCorreo)) {

        alert(
            "El correo electrónico no tiene un formato válido."
        );

        valido = false;

    }




    if (tipoUsuario.value === "") {

        alert(
            "Debe seleccionar un tipo de usuario."
        );

        valido = false;

    }




    if (region.value === "") {

        alert("Debe seleccionar una región.");

        valido = false;

    }




    if (comuna.value === "") {

        alert("Debe seleccionar una comuna.");

        valido = false;

    }




    if (valido) {

        alert(
            "Usuario registrado correctamente."
        );

        formulario.reset();

        comuna.innerHTML =
            '<option value="">Seleccione una comuna</option>';

    }

});

