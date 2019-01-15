import React, { Component } from 'react';
import Emoji from '../../common/Emoji';
import { BarChart } from 'react-charts-d3';
import { /*BarChart,*/ PieChart } from 'react-d3-components';

// class LectureChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [
//         {
//           label: 'Point',
//           values: [
//             { x: '1 point', y: 32 },
//             { x: '2 point', y: 421 },
//             { x: '3 point', y: 743 },
//             { x: '4 point', y: 256 },
//             { x: '5 point', y: 53 }
//           ]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <PaperSheet>
//         <BarChart
//           data={this.state.data}
//           width={400}
//           height={400}
//           margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
//         />
//       </PaperSheet>
//     );
//   }
// }

// class LectureChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [
//         // { key: 'Group 1', values: [{ x: 'A', y: 23 }, { x: 'B', y: 8 }] },
//         // { key: 'Group 2', values: [{ x: 'A', y: 15 }, { x: 'B', y: 37 }] }
//         { key: '😡', values: [{ x: '😡', y: 23 }] },
//         { key: '😠', values: [{ x: '😠', y: 56 }] },
//         { key: '😐', values: [{ x: '😐', y: 432 }] },
//         { key: '😊', values: [{ x: '😊', y: 324 }] },
//         { key: '😆', values: [{ x: '😆', y: 123 }] }
//       ]
//     };
//   }
//   render() {
//     return <BarChart data={this.state.data} />;
//   }
// }

class LectureChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: 'Grade',
          values: [
            { x: '😡', y: 1 },
            { x: '😠', y: 2 },
            { x: '😐', y: 3 },
            { x: '😊', y: 5 },
            { x: '😆', y: 0 }
          ]
        }
      ]
    };
  }
  render() {
    return <BarChart data={this.state.data} />;
  }
}

// Bar Chart
//-----
// Pie Chart

// class LectureChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: {
//         label: 'Grade',
//         values: [
//           { x: '😡', y: 23 },
//           { x: '😠', y: 56 },
//           { x: '😐', y: 432 },
//           { x: '😊', y: 324 },
//           { x: '😆', y: 123 }
//         ]
//       }
//     };
//   }
//   render() {
//     return (
//       <PieChart
//         data={this.state.data}
//         width={600}
//         height={400}
//         margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
//       />
//     );
//   }
// }

export default LectureChart;
