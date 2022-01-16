import React from 'react'

const Persons = ({persons, newSearch, handleDelete}) => {
    return(
      <div>
      {persons.map( (person) => {
        if(person.name.toUpperCase().includes(newSearch.toUpperCase()) || newSearch === ''){
          return (
            <p key={person.name}>
                {person.name}: {person.number}
                <button type="button" id={person.id} onClick={handleDelete}>
                    delete
                </button>
            </p>
          )
        }
      })}
      </div>
    )
  }

export default Persons