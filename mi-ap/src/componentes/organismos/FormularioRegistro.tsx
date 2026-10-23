import { useState, type FormEvent } from 'react'
import { regiones } from '../../data/regiones'
import { Boton } from '../atomos/Boton'
import { Selector } from '../atomos/Selector'
import { CampoTexto } from '../atomos/CampoTexto'
import { TarjetaFormulario } from '../moleculas/TarjetaFormulario'

export function FormularioRegistro() {
  const [regionIndex, setRegionIndex] = useState('')
  const [message, setMessage] = useState('')
  const comunas = regionIndex === '' ? [] : regiones[Number(regionIndex)]?.comunas ?? []

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const run = String(data.get('run') || '').trim()
    const required = ['nombre', 'apellido', 'correo', 'tipoUsuario', 'region', 'comuna', 'direccion']
      .some((key) => !String(data.get(key) || '').trim())

    if (required) return setMessage('Falta completar uno o más campos obligatorios.')
    if (!/^[0-9]+[0-9Kk]$/.test(run)) return setMessage('El RUN ingresado no es válido.')

    setMessage('Usuario registrado correctamente.')
    event.currentTarget.reset()
    setRegionIndex('')
  }

  const regionOptions = [
    { value: '', label: 'Seleccione una región' },
    ...regiones.map((region, index) => ({ value: String(index), label: region.nombre })),
  ]
  const comunaOptions = [
    { value: '', label: 'Seleccione una comuna' },
    ...comunas.map((comuna) => ({ value: comuna, label: comuna })),
  ]

  return (
    <TarjetaFormulario title="Registro de Usuario">
      <form onSubmit={submit}>
        <CampoTexto label="RUN (sin puntos ni guion):" name="run" maxLength={9} />
        <CampoTexto label="Nombre:" name="nombre" maxLength={50} />
        <CampoTexto label="Apellidos:" name="apellido" maxLength={100} />
        <CampoTexto label="Correo electrónico:" name="correo" type="email" maxLength={100} />
        <CampoTexto label="Fecha de nacimiento (opcional):" name="fechaNacimiento" type="date" />
        <Selector
          label="Tipo de usuario:"
          name="tipoUsuario"
          options={[
            { value: '', label: 'Seleccione un tipo' },
            { value: 'cliente', label: 'Cliente' },
            { value: 'administrador', label: 'Administrador' },
          ]}
        />
        <Selector
          label="Región:"
          name="region"
          value={regionIndex}
          onChange={setRegionIndex}
          options={regionOptions}
        />
        <Selector label="Comuna:" name="comuna" options={comunaOptions} />
        <CampoTexto label="Dirección:" name="direccion" maxLength={300} />
        <p className="form-message" aria-live="polite">{message}</p>
        <Boton type="submit">Registrar</Boton>
      </form>
    </TarjetaFormulario>
  )
}
