import React, { useState } from 'react';
import data from './data';
import List from './List';

export const PersonContext = React.createContext()

function App() {
  const [people, setPeople] = useState(data)
    
  const removePerson = (id) => {
    // setPeople((people) => {
    //   return people.filter((person) => person.id !== id)
    // })
    console.log(id)
  }
  
  return (
    <PersonContext.Provider value={{removePerson}}>
      <main>
        <section value='' className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </PersonContext.Provider>
  )
}

export default App;
