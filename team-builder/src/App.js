import React, { useState }  from 'react';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Shafi",
      email: "masoumi2017@icloud.com",
      role: "Full Stack Web Developer",

    }
  ]);

  return (
    <div className="App">
      <h2>Team List</h2> 

    </div>
  );
}

export default App;