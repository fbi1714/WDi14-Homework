/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';

class UserDetails extends Component {
  render(){
    console.log( this.props );
    return (
      <div>
        <h2>{this.props.routeParams.username}</h2>
      </div>
    );
  }
};

UserDetails.contextTypes = {
  router: PropTypes.object.isRequired
};


export default UserDetails;
