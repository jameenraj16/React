import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))|| []);

  // Load saved notes from local storage
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNotes(prevNotes => ({
      ...prevNotes,
      [id]: value
    }));
  };

  const noteIds = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];

  return (
    <div className="app">
      <div className="container">
        <h1 className="head">Sticky Notes</h1>
        <div className="body">
          {noteIds.map(id => (
            <textarea
              key={id}
              type="text"
              className="text-box"
              id={id}
              value={notes[id] || ''}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
