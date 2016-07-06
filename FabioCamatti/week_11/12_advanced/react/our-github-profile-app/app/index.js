/*jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const USER_DATA = {
  imageURL: "https://avatars.githubusercontent.com/u/9123421?v=3",
  username: "fbi1714",
  name: "fbi"
};

class ProfilePic extends Component {
  render() {
    return ( <img src="" /> );
  }
}

class ProfileName extends Component {
  render() {
    return ( <h3>Name</h3> );
  }
}

class ProfileLink extends Component {
  render() {
    return (
      <div>
        <a href="#">
          Username
        </a>
      </div>
    );
  }
}

class Avatar extends Component {
  render() {
    return (
      <div>
        <ProfilePic />
        <ProfileName />
        <ProfileLink />
      </div>
    );
  }
}

ReactDOM.render(<Avatar />, document.getElementById("app"));

// class HelloWorld extends Component{
//   render(){
//     return (
//       <div> Hello World </div>
//     );
//   }
// }
//
//
// ReactDOM.render(<HelloWorld />, document.getElementById("app"));
