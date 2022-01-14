import React from 'react'

const Filter = ({newSearch, handler}) => {
    return (
      <div>
      search: 
      <input 
        value={newSearch}
        onChange={handler}
      />
      </div>
    )
  }

export default Filter