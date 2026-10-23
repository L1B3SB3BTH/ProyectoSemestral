import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Boton } from '../atomos/Boton'
import { CampoTexto } from '../atomos/CampoTexto'
import { TarjetaFormulario } from '../moleculas/TarjetaFormulario'

export function FormularioLogin() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('correo') || '').trim().toLowerCase()
    const password = String(data.get('clave') || '')

    if (email !== 'admin@sonidovivo.cl' || password !== '1234') {
      return setMessage('El correo o la contraseña son incorrectos.')
    }

    localStorage.setItem('sonidoVivoSesion', JSON.stringify({ correo: email, inicio: new Date().toISOString() }))
    setMessage('Ingreso correcto. Redirigiendo...')
    setTimeout(() => navigate('/'), 500)
  }

  return (
    <TarjetaFormulario title="Iniciar sesión">
      <form onSubmit={submit}>
        <CampoTexto label="Correo electrónico:" name="correo" type="email" />
        <CampoTexto label="Contraseña:" name="clave" type="password" />
        <Boton type="submit">Ingresar</Boton>
        <p className="form-message" aria-live="polite">{message}</p>
      </form>
      <p className="demo"><strong>Acceso de prueba:</strong><br />correo: admin@sonidovivo.cl<br />contraseña: 1234</p>
    </TarjetaFormulario>
  )
}
