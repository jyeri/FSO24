import React from 'react'

const PersonForm = ({text, handleSubmit, newName, newNumber, handleInputChange, handleNumberChange }) => {
  return (
    <>
    <h2>{text}</h2>
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input 
          value={newName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        number:
        <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    </>
  )
}

export default PersonForm