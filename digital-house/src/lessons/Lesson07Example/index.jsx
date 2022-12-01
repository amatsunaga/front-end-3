import { useState } from 'react'
import { useParams } from "react-router-dom";

import './style.scss'

export function Lesson07Example() {
  
  // const { id } = useParams()

  const [contador, setContador] = useState(0)
  const [temaEscuro, setTemaEscuro] = useState(false)

  function somarNumero(numero) {

    setContador(contador + numero)

  }

  function mudarTema() {

    setTemaEscuro(!temaEscuro)

  }

  return (

    <main className={`setima-aula-exemplo-component ${temaEscuro ? 'dark-theme' : ''}`}>

      <h1>Contador</h1>

      <button onClick={() => mudarTema()}>Mudar tema</button>
      <button onClick={() => somarNumero(1)}>Adicionar</button>
      <span>Número atual: {contador}</span>

    </main>

  )
}
