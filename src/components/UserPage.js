import React,{Component} from 'react';
import SearchResult from './SearchResult'
import RestrauntDtls from './RestrauntDtls'
import '../css/styles.css'




class UserPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      searchText:''
    }
    this.searchByValue = this.searchByValue.bind(this);
    this.getRestraunts = this.getRestraunts.bind(this);
   
  }
   getRestraunts()
  {
    console.log("restraunt in",this.state)
    var url = new URL("http://localhost:5000/getrestraunts"),
    params = {"region":`${this.state.searchText}`}
    console.log(params)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
     fetch(url)
    .then(response => response.json())
    .then(result => 
      {
        console.log(result);
        if(result.length !== 0)
        {
          this.props.history.push({pathname: `/restaurant/details`,state:{apiResponse:result}})
        }
        else 
        {alert(
      'No Hotels Present at the given Location',
      [
        {text: 'OK', onPress: this.setState({searchText:''})},
      ],
      { cancelable: false }
    
    )}})
    
  }
  
  searchByValue(searchText)
  {
    console.log("the search text is ",searchText);
    this.setState({showContent:true,searchText:searchText},()=>{
      this.getRestraunts();
    });
    
  }
  render()
  {
    let{ showContent,searchText,searchByValue } = this.state;
    return (
      <div className = 'container'>
        <div className = "app-class">
          <SearchResult searchByValue = {this.searchByValue} value = {searchText}/>       
        </div>
      </div>
    );
  }
}
export default UserPage;