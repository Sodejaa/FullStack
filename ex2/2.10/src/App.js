import { useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    console.log(persons.some(person => person.name === newName))
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
    }
    else{
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
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
      <Persons filteredpersons={filteredpersons}/>
    </div>
  )

}


export default App