import { useState, useEffect } from 'react'

export function Lesson13Aula() {

  // const { id } = useParams()

  const [contador, setContador] = useState(0)
  const [userName, setUserName] = useState('')
  const [userNameError, setUserNameError] = useState(true)
  const [errorForm, setErrorForm] = useState(false)

  function adicionar() {
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
    if(userNameError) {
      setErrorForm(true)
    } else {
      setErrorForm(false)
    }
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
      <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />

      { userNameError ? (<small>O campo Nome deve ter pelo menos 10 caracteres</small>) : null }

      <p>O valor do contador é {contador}</p>

      <button onClick={() => adicionar()}>Atualizar contador</button>

      <button onClick={() => validar()}>Validar</button>
    </>
  )
}