import React,{Component} from 'react';
class OwnerPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      hotel_name:'',
      location:'Chennai',
      Cuisine:'',
      dish:'',
      address:'',
      isToggleOn:false,
      menudetails:[]
    }
    this.submitDetails = this.submitDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMenuDetails = this.getMenuDetails.bind(this);

  }
  getMenuDetails()
  {
    var url = new URL("http://localhost:5000/getmenudetails")
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({menudetails:result}))
  }
  componentWillMount(){
    this.getMenuDetails();
  }
  handleClick(event) {
    event.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleChange(event)
  {
    this.setState({[event.target.name]:event.target.value})
  }

    submitDetails(event)
    {
      event.preventDefault();
      if(this.state.hotel_name === ""){alert("HOTEL NAME CANT BE EMPTY");return}
      if(this.state.location === ""){alert("LOCATION CANT BE EMPTY");return}
      if(this.state.Cuisine === ""){alert("CUISINE CANT BE EMPTY");return}
      if(this.state.dish === ""){alert("MENU ID CANT BE EMPTY");return}
      if(this.state.address === ""){alert("ADDRESS CANT BE EMPTY");return}

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(this.state)
      }
      var url = new URL("http://localhost:5000/addrestraunts")
      fetch(url,requestOptions)
      .then(response =>{
        if (response.status == 200)
        {
          alert(
            'Successfully Created',
            [
              {text: 'OK', onPress: this.props.history.goBack()},
            ],
            { cancelable: false }
          )
        }
      })
      
  }

render()
{
  let rows = [];
  rows.push(<br/>)
  rows.push(<br/>)
  rows.push(<br/>)
  if(this.state.menudetails && this.state.menudetails.length)
  {
    let menu_details = this.state.menudetails
    for(var i = 0 ; i < menu_details.length ; i++) 
    {
      let details = JSON.parse(this.state.menudetails[i].item_dtls)
      let value = (details.map(data=>data['name']))
      value = value.join(',');
      rows.push(<div>{menu_details[i]['menu_id']}.{value}</div>)

      
    }
  }
  return(
<div class="owner-container">
  <form>
  <div class="row">
      <div class="col-25">
        <label for="fname">Hotel Name</label>
      </div>
      <div class="col-75">
        <input type="text" name="hotel_name" value = {this.state.hotel_name} onChange={this.handleChange} /> 
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="fname">Location</label>
      </div>
      <div class="col-75">
        <select 
          name = "location"
          value={this.state.location} 
          onChange={this.handleChange}>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="fname">Address</label>
      </div>
      <div class="col-75">
        <input type="text" name="address" value = {this.state.address} onChange={this.handleChange}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="fname">Cuisine</label>
      </div>
      <div class="col-75">
        <input type="text" name="Cuisine" value = {this.state.Cuisine} onChange={this.handleChange} />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="fname">Please choose a menu id from the below details</label>
      </div>
      <div class="col-75">
        <input type="text" name="dish" value = {this.state.dish} onChange={this.handleChange}/>
      </div>
    </div>
    <div class = "row">
      <div className="col-25">
        <button className = "toggle-btn" onClick={this.handleClick}> CLICK ME TO KNOW THE MENU DETAILS
        </button>
      </div>
      <div className = "cols-25 menu-catalogue">
        {this.state.isToggleOn ? rows : ''}
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit" onClick={this.submitDetails} />
    </div>
  </form>
</div>
  )
}
}
export default OwnerPage;