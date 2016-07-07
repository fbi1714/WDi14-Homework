/*jshint esversion: 6 */
import React, { Component } from 'react';

class UserRepositories extends Component{
  render() {
      if(!this.props.repos){
        return ( <div>Loading...</div> );
      }

      let repos = this.props.repos.map((repo) => {
        console.log(repo);
      });

      return(
      <div>
        <h5>Repositories</h5>
        <ul>
          
        </ul>
      </div>
    );
  }
};

export default UserRepositories
