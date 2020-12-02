// dependencies
import React, { Component } from 'react';

import SearchBar from './search/SearchBar'

class SearchResult extends Component
{
  constructor(props)
  {
    super(props);
  
  //   this.searchTextChange = this.searchTextChange(this);
  //   this.searchByValue = this.searchByValue(this);
    this.state = 
    {
      searchText:''
    }
    this.searchTextChange = this.searchTextChange.bind(this);
    this.searchByValue = this.searchByValue.bind(this);
  }
  componentWillReceiveProps(nextProps)
  {
    this.setState({searchText:nextProps.value})
  }
  searchTextChange(event)
  {
    event.persist();
    this.setState({searchText:event.target.value});
    if(event.keyCode == 13 || event.which == 13)
    {
      this.searchByValue();
    }
  }
  searchByValue()
  {
    if(this.state.searchText.length >= 5)
    {
      console.log("the search text is" + this.state.searchText);
      this.props.searchByValue(this.state.searchText);
    }
  }
  
  render()
  {
    let {searchText} = this.state;
    let {searchByValue} = this.props;
    console.log(this.state);
    return (
      <div className = "search-results">
        <SearchBar
        searchText = {searchText}
        searchTextChange = {this.searchTextChange}
        searchByValue = {this.searchByValue}/>
      </div>
    );
  }
}

export default SearchResult;