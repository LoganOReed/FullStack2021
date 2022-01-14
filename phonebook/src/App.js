import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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
      <h2>
        Phonebook
      </h2>
      <Filter search={newSearch} handler={handleSearchChange} />
      <h2>
        Add a New Number
      </h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleContactChange={handleContactChange} 
        handleNumberSubmit={handleNumberSubmit}
        handleContactSubmit={handleContactSubmit} 
      />
      <h2>
        Numbers
      </h2>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App