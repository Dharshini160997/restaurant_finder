import React,{Component} from 'react'
class HotelDetails extends Component
{
  constructor(props)
  {
    super(props)
  }
     
  render()
  {
  //  if(this.props && this.props.location && this.props.location.state && this.props.location.state.hotel_info && this.props.location.state.hotel_info.item_dtls && this.props.location.state.hotel_info.item_dtls.length)
  //  {
  //  }
    let menu_details = this.props.location.state.hotel_info.item_dtls
    let menu = JSON.parse(menu_details);
    var rows = [] 
    if(menu.length > 0)
    {
      for(var i = 0 ; i < menu.length ; i++)
      {
        rows.push(<div className = "menu-parent"><img className = "menu-image" src = {require('/home/dharshini/node_and_react/restraunt-finder/src/images/food.jpeg').default}></img><h3>{menu[i]['name']}</h3><h4><p>{menu[i]['description']}</p><p>PRICE:{menu[i]['price']}</p></h4></div>)
      }
    }
    console.log(this.props.location.state.hotel_info['menu'])
    return(
      <div className="container">
        <p className = "welcome-to-text">WELCOME TO {this.props.location.state.hotel_info['hotel_name']}</p>
        <p className = "menu-text">To taste the best {this.props.location.state.hotel_info['cuisine']} dishes</p>
        <p className = "menu-text">Our delicious menu includes</p><br/>
        <div className = "hotel-parent" >
          {rows}
        </div>
        <p className = "menu-text">COME VISIT US AT {this.props.location.state.hotel_info['hotel_address']}</p>
      </div>
    );
  }
}
export default HotelDetails;