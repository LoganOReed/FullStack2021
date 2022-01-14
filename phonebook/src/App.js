import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if(persons.find( p => p.name === newName) !== undefined){
      alert(`${newName} is already in the phonebook`)
    }
    else{
      setPersons(persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }))
    }
  }

  const handleSearchChange = e => {
    setNewSearch(e.target.value)
  }

  const handleContactChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberSubmit = e => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: 
        <input 
          value={newSearch}
          onChange={handleSearchChange}
        />
      </div>
      <h2>
        Add a New Number
      </h2>
      <form onSubmit={handleContactSubmit}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleContactChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberSubmit}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( (person) => {
          if(person.name.toUpperCase().includes(newSearch.toUpperCase()) || newSearch === ''){
            return (
              <p key={person.name}>{person.name}: {person.number}</p>
            )
          }else{
            console.log(`filtered out ${person.name}`)
          }
      })}
      ...
      <div>debug: {newSearch}</div>
      <div>num of contacts: {persons.length}</div>
    </div>
  )
}

export default App