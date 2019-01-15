import React, { Component } from 'react';
import Emoji from '../../common/Emoji';
import { BarChart } from 'react-charts-d3';

class InstructorChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: 'review',
          values: [
            { x: '😡', y: 23 },
            { x: '😠', y: 56 },
            { x: '😐', y: 432 },
            { x: '😊', y: 324 },
            { x: '😆', y: 123 }
          ]
        }
      ]
    };
  }
  render() {
    return <BarChart data={this.state.data} />;
  }
}

export default InstructorChart;
