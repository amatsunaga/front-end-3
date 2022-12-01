import { useState } from "react"
import { Lesson14Item } from "../../components/Lesson14Item"



export function Lesson14() {
  const registers = [
    { id: 1, title: 'Primeiro registro'}
  ]

  const [registerListVisible, setRegisterListVisible] = useState(true)

  function deleteRegisterFromList() {

  }

  return (
    <>
      <h1>Lista de Registros</h1>

      <button onClick={() => setRegisterListVisible(!registerListVisible)}>
        {`${registerListVisible ? 'Ocultar' : 'Mostrar'}`}
      </button>

      {
        registerListVisible ? (

          <ul>
            {
              registers.map(register => (
                <Lesson14Item
                  key={register.id}
                  registerData={register}
                  deleteRegister={(registerReturned) => deleteRegisterFromList(registerReturned)}
                  />
              ))
            }
          </ul>

        ) : (
          <p>A lista está oculta</p>
        )
      }

    </>
  )
}