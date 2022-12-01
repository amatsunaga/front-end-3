import { useEffect, useState } from "react"

export function Lesson14Item(props) {
  const [formInvalid, setFormInvalid] = useState(false)

  function validarFormulario() {

    setFormInvalid(!formInvalid)

  }

  function deletarRegistro() {
    props.deletarRegister(props.registerData)
  }

  useEffect(() => {

    console.log('O componente foi Construído')

    return () => console.log('O componente foi destruído')

  }, [])

  // useEffect(() => {

  //   if (formInvalid) {
  //     console.log("O formulário está inválido")
  //   } else {
  //     console.log("O formulário está válido")
  //   }
  
  // }, [formInvalid])

  return(
    <li>
      <h2>{props.registerData.title}</h2>
      <button>Deletar</button>
    </li>

    // <>
    //   <button onClick={} => /></button>
    //   <button onClick={() => validarFormulario()}>Mudar estado validação</button>
    //   <p>{formInvalid ? 'O formulário está Inválido' : 'O formulário está Válido'}</p>
    // </>


  )


}