/*jshint esversion: 6 */
import React, { Component } from 'react';

class UserDetails extends Component {
  render(){
    console.log( this );
    return (
      <div>
        Username
      </div>
    );
  }
};

UserDetails.contextTypes = {
  router: PropTypes.object.isRequired
};


export default UserDetails;
