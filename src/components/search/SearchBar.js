import React from 'react';
const SearchBar = ({searchText,searchTextChange,searchByValue})=>{
  return(
        <div className = "searchBar">
          <input className = "searchBox" 
          type = "text" 
          value = {searchText}
          onKeyPress = {searchTextChange}
          onChange = {searchTextChange}
          placeholder = "Search restaurants by location."/>
          <button className = "search-buton" onClick={searchByValue}>
            search
          </button>
        </div>
    );
  }
export default SearchBar;