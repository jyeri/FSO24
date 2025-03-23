import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';
import './app.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [notification, setNotification] = useState({ message: null, type: null });

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };

    if (persons.some((person) => person.name === newName)) {
      const existingPerson = persons.find((person) => person.name === newName);
      if (existingPerson.number !== newNumber) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          personService
            .update(existingPerson.id, personObject)
            .then((response) => {
              setPersons(persons.map((person) => (person.id === existingPerson.id ? response.data : person)));
              showNotification(`Updated ${newName}`, 'success');
            })
            .catch((error) => {
              showNotification(`Failed to update ${newName}. Please try again.`, 'error');
              console.log(error);
            });
        }
      } else {
        showNotification(`${newName} is already in the phonebook with the same number.`, 'error');
      }
    } else {
      personService
        .create(personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          showNotification(`Added ${newName}`, 'success');
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          showNotification(`Failed to add ${newName}. Please try again.`, 'error');
          console.log(error);
        });
    }
  };

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          showNotification(`Deleted ${name}`, 'success');
        })
        .catch((error) => {
          showNotification(`Information of ${name} has already been removed from server`, 'error');
          console.log(error);
        });
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    console.log("notification is now", message, type);
    setTimeout(() => {
      setNotification({ message: null, type: null });
    }, 5000);
  };

  const handleInputChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter with" value={newFilter} handleFilterChange={handleFilterChange} />
      <Notification message={notification.message} type={notification.type} />
      <PersonForm
        text="add a new"
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleNumberChange={handleNumberChange}
      />
      <Persons text="numbers" persons={persons} newFilter={newFilter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
