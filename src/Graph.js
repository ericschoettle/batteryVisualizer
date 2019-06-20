import React, { Component } from 'react';
import * as d3 from "d3";
// import algorithm from './arbitrage-algorithm.js';

// console.log(algorithm());

class Graph extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.line = null;
    this.padding = 20; //SVG to window edges
    this.margin = { top: 30, right: 50, bottom: 70, left: 70 }; // graph to svg edges
    this.width = window.innerWidth - (this.margin.left + this.margin.right + this.padding * 2); // Use the window's width
    this.height = window.innerHeight - (this.margin.top + this.margin.bottom); // Use the window's height
    this.createGraph = this.createGraph.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
    this.state = {
      currentMarginalHour: 0
    }
  }

  componentDidMount() {
    console.log(this.state.maxMarginalHour)
    this.timer = setInterval(()=>{
      this.incrementMarginalHour()
    }, 1000)
    this.createGraph();
    this.updateGraph();
  }
  componentDidUpdate() {
    this.updateGraph();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incrementMarginalHour(){
    this.setState((state, props)=>({
      currentMarginalHour: (state.currentMarginalHour + 1) % (props.maxMarginalHour + 1 || props.data.length)
    }));
  }
  createGraph(){
    // Add SVG and put on this for later use
    this.svg = d3
      .select(this.node)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    // Add xScale
    let xScale = d3
      .scaleLinear()
      .domain([0, 24]) // input
      .range([0, this.width]); // output

    // Add yScale
    let yScale = d3
      .scaleLinear()
      .domain([0, 100]) // input
      .range([this.height, 0]); // output

    // d3's line generator - takes data, applies scale, returns line
    this.line = d3
      .line()
      .x(function(d) {
        return xScale(d.x);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d.y);
      }); // set the y values for the line generator

    // transform dataset - data comes in with sold as negative numbers, to make cash flow easy to calculate/mimic the general financial practices. But need to graph as positive numbers. 
    var dataSet = [];
    this.props.data.forEach(marginalHour => {
      var processedMarginalHour = [];
      marginalHour.forEach((d, index) => {
        let obj = {
          y: parseFloat(d.price),
          transaction: d.transaction
        };
        processedMarginalHour.push({ ...obj, x: parseFloat(d.operatingHour) - 1 });
        processedMarginalHour.push({ ...obj, x: parseFloat(d.operatingHour) });
      });
      dataSet.push(processedMarginalHour);
    });
    this.dataSet = dataSet

    // 3. Call the x axis in a group tag
    let xAxis = this.svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${this.margin.left},${this.margin.top + this.height})`)
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    let yAxis = this.svg
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`)
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // now add titles to the axes
    let yAxisLabel = this.svg
      .append("text")
      .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
      .attr(
        "transform",
        "translate(" +
          this.margin.left / 2 +
          "," +
          (this.height / 2 + this.margin.top) +
          ")rotate(-90)"
      ) // text is drawn off the screen top left, move down and out and rotate
      .text("Dollars/megawatt-hour");

    let xAxisLabel = this.svg
      .append("text")
      .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
      .attr(
        "transform",
        "translate(" +
          (this.width / 2 + this.margin.left) +
          "," +
          (this.height + this.margin.top + this.margin.bottom / 2) +
          ")"
      ) 
      .text("Hour");

    // Initially we need .enter().append() to produce the g.data items to translate - later we will do this directly on the selection, b/c the elements we need already exist. 
    var g = this.svg
      .selectAll("g.data")
      .data([this.dataSet[this.state.currentMarginalHour]])
      .enter()
      .append("g")
      .attr("class", "data")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    var path = g
      .selectAll("path")
      .data(this.segments)
      .enter()
      .append("path")
      .attr("d", this.line)
      .attr("stroke-width", 2)
      .style("stroke", function(d) {
        if (d[0].transaction === d[1].transaction && d[0].transaction) {
          return d[0].transaction === "buy" ? "blue" : "red";
        } else {
          return "gray";
        }
      });

  }

  segments(values){
    let i = 0;
    let n = values.length;
    let segments = new Array(n - 1);

    while (++i < n) {
      segments[i - 1] = [values[i - 1], values[i]];
    }
    return segments;
  };

  updateGraph(){
    var g = this.svg
      .selectAll("g.data")
      .data([this.dataSet[this.state.currentMarginalHour]])

    var path = g
      .selectAll("path")
      .data(this.segments)
      .style("stroke", function(d) {
        if (d[0].transaction === d[1].transaction && d[0].transaction) {
          return d[0].transaction === "buy" ? "blue" : "red";
        } else {
          return "gray";
        }
      });
  }
  render() {
    return (
      <div ref={node => this.node = node}>
      </div>
    );
  }
}

export default Graph;