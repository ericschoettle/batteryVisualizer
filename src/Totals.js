import React, { Component } from "react";

class Totals extends Component {
  constructor(props) {
    super(props)
    this.calculateTotals = this.calculateTotals.bind(this);
  }
  calculateTotals(){
    let totals = [];
    for (let i = 0; i < 4; i++) {
      let total = this.props.data.reduce((acc, curr)=>{
        if (curr.marginalHour < i) {
          return curr.transaction === 'buy' ? acc - curr.price : acc + curr.price      
        } else {
          return acc
        }
      }, 0) 
      totals.push(`Marginal hour ${i}, cash flow: $${Math.round(total * 100)/100}. \n`)
    }
    return totals
  }

  render(){
    let totals = this.calculateTotals()
    return (
      <div>
        {totals}
      </div>
    )
  }
}

export default Totals