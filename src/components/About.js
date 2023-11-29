import React, { Component } from 'react';
import UserClass from './UserClass';

export class About extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div>
        <h1>This is about us component</h1> 

        <UserClass  name="Shreya" location="Ranchi, Jh" />
      </div>
    )
  }
}

export default About