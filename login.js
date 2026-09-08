const USUARIO_DEMO = {
  correo: 'admin@sonidovivo.cl',
  clave: '1234'
};

const CLAVE_SESION = 'sonidoVivoSesion';

function mostrarMensaje(mensaje, tipo = 'error') {
  const elemento = document.getElementById('mensajeLogin');
  if (!elemento) return;

  elemento.textContent = mensaje;
  elemento.className = `mensaje-login ${tipo}`;
}

function ingresar(evento) {
  evento.preventDefault();

  const correo = document.getElementById('correo').value.trim().toLowerCase();
  const clave = document.getElementById('clave').value;

  if (!correo || !clave) {
    mostrarMensaje('Debes completar todos los campos.');
    return;
  }

  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatoCorreo.test(correo)) {
    mostrarMensaje('Ingresa un correo electrónico válido.');
    return;
  }

  if (clave.length < 4) {
    mostrarMensaje('La contraseña debe tener al menos 4 caracteres.');
    return;
  }

  if (correo !== USUARIO_DEMO.correo || clave !== USUARIO_DEMO.clave) {
    mostrarMensaje('El correo o la contraseña son incorrectos.');
    return;
  }

  localStorage.setItem(CLAVE_SESION, JSON.stringify({
    correo,
    inicio: new Date().toISOString()
  }));

  mostrarMensaje('Ingreso correcto. Redirigiendo...', 'exito');
  window.setTimeout(() => {
    window.location.href = 'paginaPrincipal.html';
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioLogin');
  formulario.addEventListener('submit', ingresar);
});
