import React, { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

export class About extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div className='user-card'>
        <h1>This is about us component</h1> 
        {/* <div>LoggedIn User
          <UserContext.Consumer>
            {({loggedUser}) => (<h1>{loggedUser}</h1>)}
          </UserContext.Consumer>
        </div> */}

        <UserClass  name="Kumari Durga" location="Varanasi, UP" />
      </div>
    )
  }
}

export default About