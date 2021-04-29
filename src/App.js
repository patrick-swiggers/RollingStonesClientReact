import React from 'react';
import Songs from './components/Songs';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Rolling Stones</a>
        </div>
      </nav>
      <div className="row">
        <Songs />
      </div>
    </div>
  );
}

export default App;
