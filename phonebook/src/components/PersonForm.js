import React from 'react'

const PersonForm = ({newName, newNumber, handleContactChange, handleNumberSubmit, handleContactSubmit}) => {
    return(
      <div>
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
      </div>
    )
  }

export default PersonForm