const USER_DATA = {
  imageURL: "https://avatars.githubusercontent.com/u/9123421?v=3",
  username: "fbi1714",
  name: "fbi"
};

const ProfilePic =(props) => {
  return ( <img src={props.imageURL} style={{width: "100px"}} />)
}
const ProfileName =(props) => {
  return ( <h3><em>{props.name}</em></h3> );
}
const ProfileLink =(props) => {
  return (
    <div>
      <a href={'https://www.github.com/' + props.username} target="_blank">
        {props.username}
      </a>
    </div>
  );
}

class Paragraph extends Component {
  render(){
    console.log(this);
    return ( <p>{this.props.children}</p>);
  }
}

const Avatar =(props) => {
    return (
      <div>
        <ProfilePic imageURL={props.user.imageURL} />
        <ProfileName name={props.user.name} />
        <ProfileLink username={props.user.username} />
        <Paragraph>Some text goes here</Paragraph>

      </div>
    );
}

// class ProfilePic extends Component {
//   render() {
//     console.log( this.props );
//     return ( <img src={this.props.imageUrl} /> );
//   }
// }

// class ProfileName extends Component {
//   render() {
//     return ( <h3>{this.props.name}</h3> );
//   }
// }
//
// class ProfileLink extends Component {
//   render() {
//     return (
//       <div>
//         <a href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </a>
//       </div>
//     );
//   }
// }

// class Avatar extends Component {
//   render() {
//     return (
//       <div>
//         <ProfilePic imageURL={this.props.user.imageURL} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     );
//   }
// }

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById("app"));

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
