import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  

  const handleContactSubmit = (e) => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    e.preventDefault()  //stop the program from refreshing the page

    // add newName to persons if it is a new contact
    if(persons.find( p => p.name === newName) !== undefined){
      alert(`${newName} is already in the phonebook`)
    }
    else{
      setPersons(persons.concat(newPerson))
    }

    //send this information to the server
    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        console.log(response)
      })
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

  useEffect(() => {
    if(persons.length === 0){
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
          console.log(persons)
      })
    }
  })

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