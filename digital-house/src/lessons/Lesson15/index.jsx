import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Lesson15Item } from "../../components/Lesson15Item";

import './style.scss'

export function Lesson15() {

  const [cep, setCep] = useState()
  const [locations, setLocations] = useState([])
  const [count, setCount] = useState(0)
  const [formError, setFormError] = useState(false)

  function searchCep(event, cepReceived) {
    event.preventDefault()
  
    if(cepReceived.length === 8) {

        fetch(`https://viacep.com.br/ws/${cepReceived}/json/`).then(
          response => {
            response.json().then(
              address => {

                if(address.erro !== undefined) {
                   setFormError(true)
                } else {
                  setFormError(false)
                  setLocations([...locations, address])
                  setCep('')
                }
              }
            )
          }
        )
    } else {
      setFormError(true)
    }
  }

  // useEffect(() => {

  //   fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
  //     response => {
  //       response.json().then(
  //         address => console.log(address)
  //       )
  //     }
  //   )
  // }, [cep])

  function deleteLocation(currentLocation) {
    let auxLocations = [...locations]
    let index = auxLocations.indexOf(currentLocation)
    if (index !== -1) {
      auxLocations.splice(index, 1)
      setLocations([...auxLocations])
    }

  //   removePeople(e) {
  //     this.setState({people: this.state.people.filter(function(person) { 
  //         return person !== e.target.value 
  //     })});
  // }
  }

  function addCount() {
    setCount(count + 1)
  }

  return (

    <div className="decima-quinta-aula-component">
      
      <form className={`decima-quinta-aula-form ${formError ? 'form-error' : ''}`}>

        <h1 className="decima-quinta-aula-title">Cadastrar endereços</h1>

        <div className="cep-wrapper">
          <label htmlFor="cep">Cep</label>
          <input 
            type="number"
            id="cep"
            value={cep} 
            onChange={event => setCep(event.target.value)} />
        </div>

        <button className="register-button" onClick={event => searchCep(event, cep)}>Cadastrar</button>

      </form>

      {formError && <span>Cep inválido</span>}

      <section className="locations">

        {
          locations.map((location, index) => (
              <Lesson15Item
                key={index}
                data={location}
                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
              />
            )
          )
        }

      </section>

      <Link to="/decima-quarta-aula">
        <button>Aula anterior</button>
      </Link>

    </div>
  )
}

