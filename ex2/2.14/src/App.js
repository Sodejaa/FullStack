import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Person"

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
    }
    else{
      personService
      .create(personObject)
      .then(returnedPrerson => {
        setPersons(persons.concat(returnedPrerson))
        setNewName('')
        setNewNumber('')
    })
  }
}


const deletePersonWithId = (id) => {
  const personToBeDeleted = persons.find(person => person.id === id)
  if(window.confirm(`Do you want to delete ${personToBeDeleted.name}?`)){
    personService
    .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredpersons = persons.filter(({ name }) =>
    name.toLowerCase().includes(newFilter.toLowerCase())
  )
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons deletePerson={deletePersonWithId} filteredpersons={filteredpersons}/>
    </div>
  )

}


export default App