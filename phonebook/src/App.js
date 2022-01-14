import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target)
    console.log('filtered array ', persons.find( p => p.name === newName))
    if(persons.find( p => p.name === newName) !== undefined){
      alert(`${newName} is already in the phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName}))
    }
  }

  const handleContactChange = (e) => {
    setNewName(e.target.value)
    console.log('button clicked', e.target)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleContactSubmit}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleContactChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( (person) => {
        return (
          <p key={person.name}>{person.name}</p>
        )
      })}
      ...
      <div>debug: {newName}</div>
    </div>
  )
}

export default App