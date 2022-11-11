import { useState, useEffect } from 'react'

export function Lesson13Aula() {

  const [contador, setContador] = useState(0)
  const [userName, setUserName] = useState('')
  const [userNameError, setUserNameError] = useState(false)
  const [errorForm, setErrorForm] = useState(false)

  function adicionarContador() {
    setContador(contador + 1)
  }

  useEffect(() => {

    if (userName.length < 10) {
      setUserNameError(true)
    } else {
      setUserNameError(false)
    }

  }, [userName])

  function validar() {
    setErrorForm(!errorForm)
  }

  // ValidarNome
  useEffect(() => {
    if(errorForm) {
      console.log('Existe erro')
    } else {
      console.log('Não existe erro')
    }
  }, [errorForm])


  return (
    <>
      {/* <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
      { userNameError ? (<small>O campo Nome deve ter pelo menos 10 caracteres</small>) : null }
      <p>O valor do contador é {contador}</p>
      <button onClick={() => adicionar()}>Atualizar contador</button> */}
      <button onClick={() => validar()}>Validar</button>
    </>
  )
}