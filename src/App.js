import React, { Component } from 'react';
import './App.css';
import './Graph.js'
import Graph from './Graph.js';
// import algorithm from './arbitrage-algorithm.js';

// console.log(algorithm());


class App extends Component {
  render() {
    let data = [];

    data.push(
      JSON.parse(
        `[{"operatingHour":1,"startTime":{"years":2018,"months":11,"date":30,"hours":0,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":1,"minutes":0,"seconds":0,"milliseconds":0},"price":40.77451,"duration":60},{"operatingHour":2,"startTime":{"years":2018,"months":11,"date":30,"hours":1,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"price":39.54736,"duration":60},{"operatingHour":3,"startTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"price":38.0692,"duration":60},{"operatingHour":4,"startTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":4,"minutes":0,"seconds":0,"milliseconds":0},"price":37.00198,"duration":60},{"operatingHour":5,"startTime":{"years":2018,"months":11,"date":30,"hours":4,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":5,"minutes":0,"seconds":0,"milliseconds":0},"price":36.99813,"duration":60},{"operatingHour":6,"startTime":{"years":2018,"months":11,"date":30,"hours":5,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":6,"minutes":0,"seconds":0,"milliseconds":0},"price":40.97678,"duration":60},{"operatingHour":7,"startTime":{"years":2018,"months":11,"date":30,"hours":6,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":7,"minutes":0,"seconds":0,"milliseconds":0},"price":44.13963,"duration":60},{"operatingHour":8,"startTime":{"years":2018,"months":11,"date":30,"hours":7,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"price":41.10152,"duration":60},{"operatingHour":9,"startTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"price":35.73333,"duration":60},{"operatingHour":10,"startTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"price":27.07546,"duration":60},{"operatingHour":11,"startTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"price":20.39903,"duration":60},{"operatingHour":12,"startTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":12,"minutes":0,"seconds":0,"milliseconds":0},"price":15.26051,"duration":60},{"operatingHour":13,"startTime":{"years":2018,"months":11,"date":30,"hours":12,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":13,"minutes":0,"seconds":0,"milliseconds":0},"price":10.4678,"duration":60},{"operatingHour":14,"startTime":{"years":2018,"months":11,"date":30,"hours":13,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"price":13.15073,"duration":60},{"operatingHour":15,"startTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"price":17.08489,"duration":60},{"operatingHour":16,"startTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"price":33.37696,"duration":60},{"operatingHour":17,"startTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":17,"minutes":0,"seconds":0,"milliseconds":0},"price":41.59734,"duration":60},{"operatingHour":18,"startTime":{"years":2018,"months":11,"date":30,"hours":17,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":18,"minutes":0,"seconds":0,"milliseconds":0},"price":51.1383,"duration":60},{"operatingHour":19,"startTime":{"years":2018,"months":11,"date":30,"hours":18,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":19,"minutes":0,"seconds":0,"milliseconds":0},"price":50.58134,"duration":60},{"operatingHour":20,"startTime":{"years":2018,"months":11,"date":30,"hours":19,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"price":48.81057,"duration":60},{"operatingHour":21,"startTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"price":47.07113,"duration":60},{"operatingHour":22,"startTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":22,"minutes":0,"seconds":0,"milliseconds":0},"price":46.0286,"duration":60},{"operatingHour":23,"startTime":{"years":2018,"months":11,"date":30,"hours":22,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":23,"minutes":0,"seconds":0,"milliseconds":0},"price":43.59983,"duration":60},{"operatingHour":24,"startTime":{"years":2018,"months":11,"date":30,"hours":23,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":31,"hours":0,"minutes":0,"seconds":0,"milliseconds":0},"price":39.10871,"duration":60}]`
      )
    );

    data.push(
      JSON.parse(
        `[{"transaction":"sell","price":-40.77451,"operatingHour":1,"marginalHour":0},{"operatingHour":2,"startTime":{"years":2018,"months":11,"date":30,"hours":1,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"price":39.54736,"duration":60},{"operatingHour":3,"startTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"price":38.0692,"duration":60},{"operatingHour":4,"startTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":4,"minutes":0,"seconds":0,"milliseconds":0},"price":37.00198,"duration":60},{"transaction":"buy","price":36.99813,"operatingHour":5,"marginalHour":0},{"operatingHour":6,"startTime":{"years":2018,"months":11,"date":30,"hours":5,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":6,"minutes":0,"seconds":0,"milliseconds":0},"price":40.97678,"duration":60},{"transaction":"sell","price":-44.13963,"operatingHour":7,"marginalHour":0},{"operatingHour":8,"startTime":{"years":2018,"months":11,"date":30,"hours":7,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"price":41.10152,"duration":60},{"operatingHour":9,"startTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"price":35.73333,"duration":60},{"operatingHour":10,"startTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"price":27.07546,"duration":60},{"operatingHour":11,"startTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"price":20.39903,"duration":60},{"operatingHour":12,"startTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":12,"minutes":0,"seconds":0,"milliseconds":0},"price":15.26051,"duration":60},{"transaction":"buy","price":10.4678,"operatingHour":13,"marginalHour":0},{"operatingHour":14,"startTime":{"years":2018,"months":11,"date":30,"hours":13,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"price":13.15073,"duration":60},{"operatingHour":15,"startTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"price":17.08489,"duration":60},{"operatingHour":16,"startTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"price":33.37696,"duration":60},{"operatingHour":17,"startTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":17,"minutes":0,"seconds":0,"milliseconds":0},"price":41.59734,"duration":60},{"transaction":"sell","price":-51.1383,"operatingHour":18,"marginalHour":0},{"operatingHour":19,"startTime":{"years":2018,"months":11,"date":30,"hours":18,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":19,"minutes":0,"seconds":0,"milliseconds":0},"price":50.58134,"duration":60},{"operatingHour":20,"startTime":{"years":2018,"months":11,"date":30,"hours":19,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"price":48.81057,"duration":60},{"operatingHour":21,"startTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"price":47.07113,"duration":60},{"operatingHour":22,"startTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":22,"minutes":0,"seconds":0,"milliseconds":0},"price":46.0286,"duration":60},{"operatingHour":23,"startTime":{"years":2018,"months":11,"date":30,"hours":22,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":23,"minutes":0,"seconds":0,"milliseconds":0},"price":43.59983,"duration":60},{"transaction":"buy","price":39.10871,"operatingHour":24,"marginalHour":0}]`
      )
    );

    data.push(
      JSON.parse(
        `[{"transaction":"sell","price":-40.77451,"operatingHour":1,"marginalHour":0},{"transaction":"sell","price":-39.54736,"operatingHour":2,"marginalHour":1},{"operatingHour":3,"startTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"price":38.0692,"duration":60},{"transaction":"buy","price":37.00198,"operatingHour":4,"marginalHour":1},{"transaction":"buy","price":36.99813,"operatingHour":5,"marginalHour":0},{"operatingHour":6,"startTime":{"years":2018,"months":11,"date":30,"hours":5,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":6,"minutes":0,"seconds":0,"milliseconds":0},"price":40.97678,"duration":60},{"transaction":"sell","price":-44.13963,"operatingHour":7,"marginalHour":0},{"transaction":"sell","price":-41.10152,"operatingHour":8,"marginalHour":1},{"operatingHour":9,"startTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"price":35.73333,"duration":60},{"operatingHour":10,"startTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"price":27.07546,"duration":60},{"operatingHour":11,"startTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"price":20.39903,"duration":60},{"operatingHour":12,"startTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":12,"minutes":0,"seconds":0,"milliseconds":0},"price":15.26051,"duration":60},{"transaction":"buy","price":10.4678,"operatingHour":13,"marginalHour":0},{"transaction":"buy","price":13.15073,"operatingHour":14,"marginalHour":1},{"operatingHour":15,"startTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"price":17.08489,"duration":60},{"operatingHour":16,"startTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"price":33.37696,"duration":60},{"operatingHour":17,"startTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":17,"minutes":0,"seconds":0,"milliseconds":0},"price":41.59734,"duration":60},{"transaction":"sell","price":-51.1383,"operatingHour":18,"marginalHour":0},{"transaction":"sell","price":-50.58134,"operatingHour":19,"marginalHour":1},{"operatingHour":20,"startTime":{"years":2018,"months":11,"date":30,"hours":19,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"price":48.81057,"duration":60},{"operatingHour":21,"startTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"price":47.07113,"duration":60},{"operatingHour":22,"startTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":22,"minutes":0,"seconds":0,"milliseconds":0},"price":46.0286,"duration":60},{"transaction":"buy","price":43.59983,"operatingHour":23,"marginalHour":1},{"transaction":"buy","price":39.10871,"operatingHour":24,"marginalHour":0}]`
      )
    );

    data.push(
      JSON.parse(
        `[{"transaction":"sell","price":-40.77451,"operatingHour":1,"marginalHour":0},{"transaction":"sell","price":-39.54736,"operatingHour":2,"marginalHour":1},{"operatingHour":3,"startTime":{"years":2018,"months":11,"date":30,"hours":2,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":3,"minutes":0,"seconds":0,"milliseconds":0},"price":38.0692,"duration":60},{"transaction":"buy","price":37.00198,"operatingHour":4,"marginalHour":1},{"transaction":"buy","price":36.99813,"operatingHour":5,"marginalHour":0},{"transaction":"sell","price":-40.97678,"operatingHour":6,"marginalHour":2},{"transaction":"sell","price":-44.13963,"operatingHour":7,"marginalHour":0},{"transaction":"sell","price":-41.10152,"operatingHour":8,"marginalHour":1},{"operatingHour":9,"startTime":{"years":2018,"months":11,"date":30,"hours":8,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"price":35.73333,"duration":60},{"operatingHour":10,"startTime":{"years":2018,"months":11,"date":30,"hours":9,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"price":27.07546,"duration":60},{"operatingHour":11,"startTime":{"years":2018,"months":11,"date":30,"hours":10,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":11,"minutes":0,"seconds":0,"milliseconds":0},"price":20.39903,"duration":60},{"transaction":"buy","price":15.26051,"operatingHour":12,"marginalHour":2},{"transaction":"buy","price":10.4678,"operatingHour":13,"marginalHour":0},{"transaction":"buy","price":13.15073,"operatingHour":14,"marginalHour":1},{"operatingHour":15,"startTime":{"years":2018,"months":11,"date":30,"hours":14,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"price":17.08489,"duration":60},{"operatingHour":16,"startTime":{"years":2018,"months":11,"date":30,"hours":15,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"price":33.37696,"duration":60},{"operatingHour":17,"startTime":{"years":2018,"months":11,"date":30,"hours":16,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":17,"minutes":0,"seconds":0,"milliseconds":0},"price":41.59734,"duration":60},{"transaction":"sell","price":-51.1383,"operatingHour":18,"marginalHour":0},{"transaction":"sell","price":-50.58134,"operatingHour":19,"marginalHour":1},{"transaction":"sell","price":-48.81057,"operatingHour":20,"marginalHour":2},{"operatingHour":21,"startTime":{"years":2018,"months":11,"date":30,"hours":20,"minutes":0,"seconds":0,"milliseconds":0},"endTime":{"years":2018,"months":11,"date":30,"hours":21,"minutes":0,"seconds":0,"milliseconds":0},"price":47.07113,"duration":60},{"transaction":"buy","price":46.0286,"operatingHour":22,"marginalHour":2},{"transaction":"buy","price":43.59983,"operatingHour":23,"marginalHour":1},{"transaction":"buy","price":39.10871,"operatingHour":24,"marginalHour":0}]`
      )
    );

    let graphs = data.map((dataSet)=>{
      return <Graph data={dataSet}></Graph>
    })

    return (
      <div className="App">
        {graphs}
      </div>
    );
  }
}

export default App;
