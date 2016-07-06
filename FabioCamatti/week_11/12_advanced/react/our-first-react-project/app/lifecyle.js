/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

class ChildComponent extends React.Component {
  constructor() {
    super(); // Inherits all of the functionality from React.Component
    console.log("ChildComponent: constructor");
  }
  componentWillMount() {
    console.log("ChildComponent: componentWillMount");
  }
  render() {
    console.log("ChildComponent: render");
    return (
      <div>
        <h2>CHILD COMPONENT</h2>
        <p>this.props.text: {this.props.text}</p>
      </div>
    );
  }
  componentDidMount() {
    console.log("ChildComponent: componentDidMount");
  }
  componentWillUnmount() {
    console.log("ChildComponent: componentWillUnmount");
  }
  componetWillReceiveProps(nextProps){
    console.log("ChildComponent: componetWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(){
    console.log("ChildComponent: shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("ChildComponent: componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("ChildComponent: componentDidUpdate");
  }
}

class ParentComponent extends React.Component{
  constructor(){
    super();
    console.log("ParentComponent: getInitialState");
    this.state = { text: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount(){
    //You do AJAX request in here.
    console.log("ParentComponent: componentWillMount");
  }
  render(){
    console.log("ParentComponent: render");
    return (
      <div className="container">
      <h2>PARENT COMPONENT</h2>
        <input
          type="text"
          value={this.state.text}
          onChange={ this.handleInputChange } />
          <p>this.props.text: {this.props.text}</p>
          <hr />
          <ChildComponent text={this.state.text} />
      </div>);
  }
  componentDidMount(){
    console.log("ParentComponent: componentDidMount");
  }

  componentWillUnmount(){
    console.log("ParentComponent: componentWillUnmount");
  }
  handleInputChange(e){
    this.setState({
      text: e.currentTarget.value
    }, () => {

    });
  }
};
ParentComponent.defaultProps = {
  text: ''
};
ParentComponent.propTypes = {
  text: React.PropTypes.string.isRequired
};

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("app")
);
