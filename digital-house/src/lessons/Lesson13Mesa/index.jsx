import { useState } from "react"
import { useEffect } from "react"
import { Lesson13MesaListItem } from "../../components/Lesson13MesaListItem"
import "./style.scss"

export function Lesson13Mesa() {
  const [items, setItems] = useState([
    "Pizza de Calabresa", "Coca-Cola 600mL", "Pudim"
  ])
  const [isDisplayed, setIsDisplayed] = useState(false)

  function cancelarPedido(event) {
    event.preventDefault()
    alert("Seu pedido foi cancelado")
    setIsDisplayed(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true)
      console.log("Pedido atualizado")              
    }, 2000)
  }, [])

  return (
    <main className="decima-terceira-aula-component">
      <h2>Seu pedido:</h2>
      <ol className="pedido-list">
        {
          isDisplayed &&
          items.map(
            (item, index) => (
              <Lesson13MesaListItem itemName={item} key={index}/>
            )
          )
        }
      </ol>
      <button type="submit" onClick={(event) => cancelarPedido(event)}>Cancelar pedido</button>
    </main>
  )
}