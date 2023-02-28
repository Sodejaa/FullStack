import { useState } from 'react'
import Person from './components/Person'

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

  const filteredpersons = persons.filter(({ name }) =>
    name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
        filter shown with:
        <input
        type="Search"
        value={newFilter}
        onChange={({ target }) => setNewFilter(target.value)}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>number: <input value={newNumber} onChange={handleNumChange} /></div>
          <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
      {filteredpersons.map(person => 
          <Person key={person.name} person={person}/>
        )}
        </div>
    </div>
  )

}


export default App