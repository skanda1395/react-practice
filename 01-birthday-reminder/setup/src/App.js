import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const clearItems = () => {
    for(let i = 0; i < people.length; i++) {
      const newPeople = await clearPerson();
    }
  }
  const clearPerson = async() => {
    
  }

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => clearItems()}>Clear All</button>
    </section>
  </main>
}

export default App;
