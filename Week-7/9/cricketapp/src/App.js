import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false;

  return (
    <div className="App">
      <h1>List of Cricket Players</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div> 

  );
}
export default App;