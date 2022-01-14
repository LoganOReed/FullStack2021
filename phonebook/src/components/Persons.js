import React from 'react'

const Persons = ({persons, newSearch}) => {
    return(
      <div>
      {persons.map( (person) => {
        if(person.name.toUpperCase().includes(newSearch.toUpperCase()) || newSearch === ''){
          return (
            <p key={person.name}>{person.name}: {person.number}</p>
          )
        }
      })}
      </div>
    )
  }

export default Persons