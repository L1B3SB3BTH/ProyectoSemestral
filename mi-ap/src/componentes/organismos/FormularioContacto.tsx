import { useState, type FormEvent } from 'react'
import { Boton } from '../atomos/Boton'
import { CampoTexto } from '../atomos/CampoTexto'
import { TarjetaFormulario } from '../moleculas/TarjetaFormulario'

export function FormularioContacto() {
  const [message, setMessage] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('nombre') || '').trim()
    const email = String(data.get('correo') || '').trim()
    const text = String(data.get('mensaje') || '').trim()

    if (!name || !email || !text) return setMessage('Los campos no pueden estar vacíos.')
    if (name.length < 10) return setMessage('El nombre debe tener al menos 10 caracteres.')
    if (text.length < 10) return setMessage('El mensaje debe tener al menos 10 caracteres.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setMessage('El correo no es válido.')

    setMessage('Formulario enviado correctamente.')
    event.currentTarget.reset()
  }

  return (
    <TarjetaFormulario title="¿Tienes alguna duda? Contáctanos">
      <form onSubmit={submit}>
        <CampoTexto label="Nombre:" name="nombre" maxLength={100} />
        <CampoTexto label="Correo electrónico:" name="correo" type="email" maxLength={100} />
        <CampoTexto label="Mensaje:" name="mensaje" rows={6} maxLength={500} />
        <p className="form-message" aria-live="polite">{message}</p>
        <Boton type="submit">Enviar</Boton>
      </form>
    </TarjetaFormulario>
  )
}
