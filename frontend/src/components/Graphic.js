import React, { Component } from 'react';

class Graphic extends Component {
  componentDidMount() {
    const { container, title, type, data } = this.props;
    const chart = new CanvasJS.Chart(container, {
      animationEnabled: true,
      exportEnabled: true,
      title: { text: title },
      data: [{
        indexLabelPlacement: "inside",
        type: type,
        indexLabel: "{y}%",
        dataPoints: data
      }]
    });
    chart.render();
  }
  
  render() {
    const { container } = this.props;
    return (
      <div id={container} className="graphics-container w-100" />
    );
  };
};

export default Graphic;