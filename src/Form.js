import React, { Component } from 'react';

class Form extends Component{
  // constructor(props) {
  //   super(props)

  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   alert('selected' + this.state.value)
  //   event.preventDefault();
  // }
  render(){
    let options = [];
    for (let i = 1; i <= this.props.formMaxMarginalHours; i++) {
      options.push(<option value={i} key={i}>{i}</option>) 
    }
    return (
      <div>
        <form>
          <label>
            Hours of battery capacity
            <select value={this.props.maxMarginalHour} onChange={this.props.handleChange}>
              {options}
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    )
  }
}

export default Form