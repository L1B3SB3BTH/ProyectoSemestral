// ============================================================
// Arreglo de productos (requisito: listado generado desde un arreglo JS)
// ============================================================
const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Parlante Bluetooth XR200',
    precio: 29990,
    imagen: 'imagenes/paginaPrincipal/parlantes.webp',
    descripcion: 'Parlante portátil con sonido potente y batería de larga duración.'
  },
  {
    id: 2,
    nombre: 'Set de Parlantes Torre',
    precio: 89990,
    imagen: 'imagenes/paginaPrincipal/parlantes3.jpg',
    descripcion: 'Torre de sonido ideal para fiestas y eventos, con graves profundos.'
  },
  {
    id: 3,
    nombre: 'Mini Parlante Portátil',
    precio: 19990,
    imagen: 'imagenes/paginaPrincipal/parlantes2.webp',
    descripcion: 'Compacto y liviano, perfecto para llevarlo a todos lados.'
  }
];

// ============================================================
// Selección de productos (requisito 4.8) guardada en LocalStorage
// ============================================================
const CLAVE_SELECCION = 'seleccionSonidoVivo';

function obtenerSeleccion() {
  const data = localStorage.getItem(CLAVE_SELECCION);
  return data ? JSON.parse(data) : [];
}

function guardarSeleccion(seleccion) {
  localStorage.setItem(CLAVE_SELECCION, JSON.stringify(seleccion));
}

function agregarASeleccion(id) {
  const seleccion = obtenerSeleccion();
  if (seleccion.includes(id)) {
    alert('Ese producto ya está en tu selección.');
    return;
  }
  seleccion.push(id);
  guardarSeleccion(seleccion);
  actualizarContadorSeleccion();
  alert('Producto agregado a tu selección.');
}

function quitarDeSeleccion(id) {
  const seleccion = obtenerSeleccion().filter((itemId) => itemId !== id);
  guardarSeleccion(seleccion);
  renderizarSeleccion();
  actualizarContadorSeleccion();
}

function actualizarContadorSeleccion() {
  const contador = document.getElementById('contadorSeleccion');
  if (contador) {
    contador.textContent = obtenerSeleccion().length;
  }
}

// Dibuja la lista de seleccionados en seleccion.html (si esa página está cargada)
function renderizarSeleccion() {
  const contenedor = document.getElementById('listaSeleccion');
  if (!contenedor) return;

  const idsSeleccionados = obtenerSeleccion();
  const productosSeleccionados = PRODUCTOS.filter((p) => idsSeleccionados.includes(p.id));

  contenedor.innerHTML = '';

  if (productosSeleccionados.length === 0) {
    contenedor.innerHTML = '<p class="seleccion-vacia">Todavía no has agregado productos a tu selección.</p>';
    document.getElementById('totalSeleccion').textContent = '$0';
    return;
  }

  let total = 0;
  productosSeleccionados.forEach((p) => {
    total += p.precio;

    const item = document.createElement('div');
    item.className = 'seleccion-item';
    item.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="seleccion-item-info">
        <h3>${p.nombre}</h3>
        <p>$${p.precio.toLocaleString('es-CL')}</p>
      </div>
      <button class="btn btn-outline-danger btn-sm" data-quitar="${p.id}">Quitar</button>
    `;
    contenedor.appendChild(item);
  });

  document.getElementById('totalSeleccion').textContent = '$' + total.toLocaleString('es-CL');

  contenedor.querySelectorAll('[data-quitar]').forEach((boton) => {
    boton.addEventListener('click', () => {
      quitarDeSeleccion(parseInt(boton.getAttribute('data-quitar'), 10));
    });
  });
}

// ============================================================
// Conecta los botones "Agregar a selección" que existan en la página
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadorSeleccion();
  renderizarSeleccion();

  document.querySelectorAll('[data-agregar]').forEach((boton) => {
    boton.addEventListener('click', () => {
      agregarASeleccion(parseInt(boton.getAttribute('data-agregar'), 10));
    });
  });
});
