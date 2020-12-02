import React from 'react'
import { Redirect } from 'react-router-dom'
class MyComponent extends React.Component {
  constructor(props)
  {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  
  onChangeValue(event) {
    this.props.history.push(`/${event.target.value}`)
  console.log(event.target.value);
}
  render () {
    return (
      <div>
        <div className = "checkbox-container" onChange={this.onChangeValue}>
          <h3 className = "role-heading">SELECT YOUR ROLE</h3>
          <div className = "radio-buttons">
            <input type="radio" value="user" name="group" /> USER <br></br>
            <div className = "space-class"></div>
            <input type="radio" value="owner" name="group" /> OWNER
          </div>
        </div>
      </div>
    )
  }
}
export default MyComponent