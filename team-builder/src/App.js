import React, { useState }  from 'react';
import MemberForm from './components/Form';
import './App.css';
import Members from './components/Members';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Shafi",
      email: "masoumi2017@icloud.com",
      role: "Full Stack Web Developer",

    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h2>Team List</h2> 
      <div> 
        <MemberForm addMemberFn={addMember} /> 
        <Members memberList={members}/>
      </div> 
    </div>
  );
}

export default App;