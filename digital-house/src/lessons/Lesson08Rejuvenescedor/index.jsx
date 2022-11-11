import './style.scss'
import { useState, useRef } from 'react';

export function Lesson08Rejuvenescedor() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // const [showName, setShowName] = useState(false);

  const validateName = (name) => {
    if(name.length < 2) {
      alert("Nome inválido");
      return false;
    }
    return true;
  }

  const validateAge = (age) => {
    let ageNumber = +age;
    let positiveNumber = ageNumber > 0;
    let integerNumber = Number.isInteger(ageNumber);

    if(!positiveNumber || !integerNumber) {
      alert("Idade inválida");
      return false;
    }
    return true;
    
  }

  function handleSubmit(e, name, age) {
    e.preventDefault();
    if(validateName(name) && validateAge(age)) {
      alert(`${name}: ${age} anos`);
    }
  }
	
return (
	<div className="oitava-aula-rejuvenescedor-component">
    <form>
      <label>Name:</label>
      <input type="text" name="name" value={name} ref={nameRef}
      onChange={(e) => setName(e.target.value)} />
      <label>Idade:</label>
      <input type="text" name="age" value={age} ref={ageRef}
      onChange={(e) => setAge(e.target.value)}/>
      <button onClick={(e) => handleSubmit(e, nameRef.current.value, ageRef.current.value)} type="submit">
      Submit
      </button>
    </form>
	</div>
);
}
