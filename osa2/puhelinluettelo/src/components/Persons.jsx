import React from 'react'

const Persons = ({ text, persons, newFilter, handleDelete }) => {
    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {persons
            .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map((person, index) => (
            <div key={index}>
              <li key={index}>{person.name} - {person.number}</li>
              <button onClick={() => handleDelete(person.name, person.id)}>delete</button>
            </div>
            ))}
        </ul>
      </div>
    )
  }

export default Persons