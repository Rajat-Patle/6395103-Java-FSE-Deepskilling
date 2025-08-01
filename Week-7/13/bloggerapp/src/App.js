import React from 'react';
import Course from './components/Course';
import Book from './components/Book';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center' }}>Blogger App</h1>
      <div className="grid-container">
        <Course />
        <Book />
        <Blog />
      </div>
    </div>
  );
}

export default App;
