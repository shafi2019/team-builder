import React from "react";

const Members = props => {
    console.log(props)
    return (
    <div className="member-list">
        {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
          <h3><span>🧑</span> {member.name}</h3>
          <p><span>📧</span> {member.email}</p>
          <p><span>👨‍💻</span> {member.role}</p>
          </div>
          )
        })}  
    </div>
    );  
}

export default Members;