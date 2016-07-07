/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
// Doesn't need to specify the file extension, e.g., JS at the end.
import GithubHelpers from '../utils/GithubHelpers';

console.log(GithubHelpers);

class UserDetailsContainer extends Component {
  render(){
    console.log( this.props );
    return (
      <div>
        <h2>{this.props.routeParams.username}</h2>
      </div>
    );
  }
};

UserDetailsContainer.contextTypes = {
  router: PropTypes.object.isRequired
};


export default UserDetailsContainer;
