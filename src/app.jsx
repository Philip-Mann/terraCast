import React, { useState } from 'react';
import Current from './components/current';
import Header from './components/header'
import './App.css';


function App() {

  const [query, setQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('Washington DC');

  const handleChange = e => {
    setQuery(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLocationQuery(query);
    setQuery('');
  }

  return (
    <div className="App">
      <Header />
        <form onSubmit={handleSubmit} className="form">
          <input id="query" onChange={handleChange} placeholder="Search By City..." type="text" value={query} />
          <button className="btn-dark btn-sm" type="submit">Search</button>
        </form>
      <Current 
        locationQuery={locationQuery}
      />
    </div>
  );
}

export default App;