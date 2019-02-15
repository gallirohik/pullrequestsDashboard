import React from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
function Chart(props) {
  const data = {
    labels: props.data.labels,
    datasets: props.data.datasets
  };

  const options = {
    title: {
      text: props.type.toUpperCase() + " Chart",
      display: true,
      fontSize: 25
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#60CEEB"
      }
    },
    layout: {
      padding: {
        left: 10,
        top: 0,
        right: 30,
        bottom: 0
      }
    },
    tooltips: {
      enabled: true
    }
  };

  function chartType() {
    switch (props.type) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      default:
        return <Line data={data} options={options} />;
    }
  }
  return <React.Fragment>{chartType()}</React.Fragment>;
}
export default Chart;
/*
{
        label: "Hello",
        data: chartData,
        backgroundColor: [],
        bordercolor: ""
      }*/
