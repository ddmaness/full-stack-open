import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const uniqueCheck = () => !persons.find(person => person.name === newName)

  const addName = () => {
    const person = {
      name: newName
    }
    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleNameAdd = (event) => {
    event.preventDefault()
    if (uniqueCheck()) {
      addName()
    }
    else {
      alert(`${newName} already added`)
    }
  }

  const handleInput = ({target}, setterFunction) => () => console.log('test')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameAdd}>
        <div>
          name: <input onChange={handleInput(setNewName)} value={newName}/>
        </div>
        <div>
          number: <input onChange={(e) => handleInput(e, setNewNumber)} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(({name}) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}

export default App