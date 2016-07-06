/*jshint esversion: 6 */
import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateSearch(e){
    this.setState({
      search: e.currentTarget.value
    });
  }
  handleSubmit(e){
    var searchQuery = this.state.search;
    console.log( searchQuery );
  }
  render(){
    return (
      <div>
        <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="Username " />
        <br />
        <input
            type="submit"
            className="button-primary"
            onClick={this.handleSubmit}
            value={`Search for ${this.state.search}`} />
      </div>
    );
  }
};

export default Search;
