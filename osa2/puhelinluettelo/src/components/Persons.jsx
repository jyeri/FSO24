import React from 'react'

const Persons = ({ text, persons, newFilter }) => {
    return (
      <div>
        <h2>{text}</h2>
        <ul>
          {persons
            .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map((person, index) => (
              <li key={index}>{person.name} - {person.number}</li>
            ))}
        </ul>
      </div>
    )
  }

export default Persons