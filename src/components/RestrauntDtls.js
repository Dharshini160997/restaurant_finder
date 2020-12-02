import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotelDetails from './HotelDetails'
class RestrauntDtls extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      show_menu:false,
      menu_index:''
    }
  }
  showDetails(index)
  {
    this.props.history.push({pathname: `/hotel/details`,state:{hotel_info:this.props.location.state.apiResponse[index]}})
  }
  render()
  {
    let hotel_details;
    var rows = [];
    if(this.props && this.props.location && this.props.location.state && this.props.location.state.apiResponse && this.props.location.state.apiResponse.length)
    {
       hotel_details = this.props.location.state.apiResponse
       for(var i = 0 ; i < hotel_details.length ; i++)
       {
          var data = hotel_details[i];
          rows.push(<div className = "restaurants"><img className = 'menu-image' src = {require('/home/dharshini/node_and_react/restraunt-finder/src/images/hotel_2.jpeg').default}></img><h3><p>{data['hotel_name']}</p></h3><h4><p className = 'cuisine'>{data['cuisine']}</p><button className = "know-more" id = {i} onClick={(i) => this.showDetails(i.target.id)}>SEE MORE</button></h4></div>);
          rows.push(<br></br>)
        }

    }

    return(
      <div>
        <p className = "welcome-to-text">Restaurants in your {hotel_details[0]['city_name']} city</p>
        <div className = "restaurant-parent format-display">
          {rows}
        </div>
      </div>
      
    )
  }
}
export default RestrauntDtls;