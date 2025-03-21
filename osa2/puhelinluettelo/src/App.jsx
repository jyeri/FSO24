import { useState, useEffect, use } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])
  

  const handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(personObject)
    if (persons.some(person => person.name === newName)) {
      if (persons.some(person => person.number !== newNumber)) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) === false) {
          return
        }
        else {
          personService
            .update(persons.find(person => person.name === newName).id, personObject)
            .then(response => {
              console.log(response)
              setPersons(persons.map(person => person.name === newName ? response.data : person))
            })
        }
      }
    } else {
      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}?`) === false) {
      return
    }
    personService
      .deletePerson(id)
      .then(response => {
        console.log(response)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter with" value={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonForm text="Add a New" handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleNumberChange={handleNumberChange}/>
      <Persons text="numbers" persons={persons} newFilter={newFilter} handleDelete={handleDelete}/>
    </div>
  )

}

export default App