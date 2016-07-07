/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
// Doesn't need to specify the file extension, e.g., JS at the end.
import GithubHelpers from '../utils/GithubHelpers';
import UserProfile from './UserProfile';
import UserRepositories from './UserRepositories';

// console.log(GithubHelpers);

class UserDetailsContainer extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount(){
    const username = this.props.routeParams.username;
    GithubHelpers.getUserInfo(username).then(function (req) {
      const user = req.data;
      this.setState({
        user: user
      });
    }.bind(this));
    GithubHelpers.getUserRepos(username).then(function (req) {
      const repos = req.data;
      this.setState({
        repos: repos
      });
    }.bind(this));
  }
  render(){
    console.log( this.state );
    return (
      <div>
        <h3><em>{this.props.routeParams.username}</em></h3>
        <UserProfile user={this.state.user}/>
        <hr />
        <UserRepositories repos={this.state.repos}/>
      </div>
    );
  }
};

UserDetailsContainer.contextTypes = {
  router: PropTypes.object.isRequired
};


export default UserDetailsContainer;
