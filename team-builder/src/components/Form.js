import React, { useState } from 'react';

const MemberForm = props => {

  const [member, setMember] = useState({ name: "", email: "", role: ""});

  const handleChange = evt => {
 
    setMember({ ...member, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    props.addMemberFn(member);
    console.log(member);
    setMember({ name: "", email: "", role: ""});
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={member.name}
        name="name"
        type="text"
        placeholder="Shafi Masoumi"
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        value={member.email}
        name="email"
        placeholder="email@example.com"
        onChange={handleChange}
      />
      <label htmlFor="role">Role</label>
      <select
        id="role"
        value={member.role}
        name="role"
        onChange={handleChange} >
        <option>Please Select</option>
        <option value='Full Stack Developer'>Full Stack Developer</option>
        <option value='SoftWare Engineer'>SoftWare Engineer</option>
        <option value='Back End Developer'>Back End Developer</option>
        <option value='Front End Developer'>Front End Developer</option>
        <option value='Data Analyst'>Data Analyst</option>
        <option value='UX Designer'>UX Designer</option>
      </select>
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MemberForm; 