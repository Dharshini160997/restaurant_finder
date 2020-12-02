import React,{Component} from 'react';
import './css/styles.css'
import UserPage from './components/UserPage';
import OwnerPage from './components/OwnerPage';
import SearchResult from './components/SearchResult';
import HotelDetails from './components/HotelDetails';
import RestrauntDtls from './components/RestrauntDtls';
import MyComponent from './components/MyComponent';


import {Redirect, BrowserRouter, Route } from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route 
          path='/' exact
          render={ props => <MyComponent {...props} />}
        />
        <Route 
          path='/user'
          render={ props => <UserPage {...props} />}
        />
        <Route 
          path='/owner'
          render={ props => <OwnerPage {...props} />}
        />
        <Route 
          path='/restaurant/details' 
          render={ props => <RestrauntDtls {...props} />}
        />
         <Route 
          path='/hotel/details' 
          render={ props => <HotelDetails {...props} />}
        />
      </BrowserRouter>
    )
  }
}

export default App;