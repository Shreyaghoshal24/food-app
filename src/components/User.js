import React from 'react';
import "../index.css";

const User = (props) => {
  return (
    <div className='user-card'>
        <h1>Name: {props.name}</h1>
        <h3>Location: Jharkhand</h3>
        <h3>Email: abc24@gmail.com</h3>
    </div>
  )
}

export default User