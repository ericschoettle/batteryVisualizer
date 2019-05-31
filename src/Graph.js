import React, { Component } from 'react';
import * as d3 from "d3";
// import algorithm from './arbitrage-algorithm.js';

// console.log(algorithm());

class Graph extends Component {
  // constructor(props) {
  //   super(props);
  //   this.createGraph = this.createGraph.bind(this);
  // }

  componentDidMount() {
    this.createGraph()
  }
  // componentDidUpdate() {
  //   this.createGraph()
  // }

  createGraph(){
    const segments = (values) => {
      let i = 0;
      let n = values.length;
      let segments = new Array(n - 1);

      while (++i < n) {
        segments[i - 1] = [values[i - 1], values[i]];
      }
      return segments;
    };

    const padding = 20; //SVG to window edges
    const margin = { top: 30, right: 50, bottom: 70, left: 70 }, // graph to svg edges
      width = window.innerWidth - (margin.left + margin.right + padding * 2), // Use the window's width
      height = window.innerHeight - (margin.top + margin.bottom); // Use the window's height

    // 5. X scale will use the index of our data
    const xScale = d3
      .scaleLinear()
      .domain([0, 24]) // input
      .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    const yScale = d3
      .scaleLinear()
      .domain([0, 100]) // input
      .range([height, 0]); // output

    // 7. d3's line generator
    let line = d3
      .line()
      .x(function(d) {
        return xScale(d.x);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d.y);
      }); // set the y values for the line generator

    var dataset = [];

    this.props.data.forEach((d, index) => {
      let obj = {
        y: parseFloat(d.transaction === "sell" ? -1 * d.price : d.price),
        transaction: d.transaction
      };
      dataset.push({ ...obj, x: parseFloat(d.operatingHour) - 1 });
      dataset.push({ ...obj, x: parseFloat(d.operatingHour) });
    });

    // 1. Add the SVG to the page and employ #2
    var svg = d3
      .select(this.node)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // // var g = svg.append("g")
    // //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var g = svg
      .selectAll("g")
      .data([dataset])
      .enter()
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    var path = g
      .selectAll("path")
      .data(segments)
      .enter()
      .append("path")
      .attr("d", line)
      .attr("stroke-width", 2)
      .style("stroke", function(d) {
        if (d[0].transaction === d[1].transaction && d[0].transaction) {
          return d[0].transaction === "buy" ? "blue" : "red";
        } else {
          return "gray";
        }
      });

    // 3. Call the x axis in a group tag
    let xAxis = svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${margin.left},${margin.top + height})`)
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    let yAxis = svg
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // now add titles to the axes
    let yAxisLabel = svg
      .append("text")
      .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
      .attr(
        "transform",
        "translate(" +
          margin.left / 2 +
          "," +
          (height / 2 + margin.top) +
          ")rotate(-90)"
      ) // text is drawn off the screen top left, move down and out and rotate
      .text("Dollars/megawatt-hour");

    let xAxisLabel = svg
      .append("text")
      .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
      .attr(
        "transform",
        "translate(" +
          (width / 2 + margin.left) +
          "," +
          (height + margin.top + margin.bottom / 2) +
          ")"
      ) 
      .text("Hour");
    }
  render() {
    
    return (
      <div ref={node => this.node = node}>
      </div>
    );
  }
}

export default Graph;