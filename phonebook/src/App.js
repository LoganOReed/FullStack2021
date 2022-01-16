import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'



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
    let p = persons.find( p => p.name === newName)
    if(p !== undefined){
      //if the number is different ask if user would like to update
      if(p.number !== newNumber){
        if(window.confirm(`Would you like to update ${p.name}'s number to ${newNumber}?`)){
          const changedPerson = { ...p, number: newNumber}
          //update persons
          personService
          .update(p.id, changedPerson)
          .then(returnedPerson => {
            setNewName('')
            setNewNumber('')
            //map unchanged elem to themselves and changed to new one
            setPersons(persons.map(person => person.id !== p.id ? person : returnedPerson))
          })
        }
      }
    }
    else{
      //send this information to the server
      personService
        .create(newPerson)
        .then(returnedPerson => {
          //clear input fields
          setNewName('')
          setNewNumber('')
          setPersons(persons.concat(returnedPerson))
      })
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

  const handlePersonDelete = e => {
    let id = e.target.id
    personService
      .remove(id)
      .then(() => {
        //update persons state to not include deleted object
        setPersons(persons.filter( person => person.id !== id ))
      })
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons)
      })
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
      <Persons persons={persons} newSearch={newSearch} handleDelete={handlePersonDelete} />
    </div>
  )
}

export default App