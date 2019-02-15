import React, { Component } from "react";
import DataGrid from "./dataGrid/dataGrid";
import Chart from "./charts/charts";
import { FormattedMessage } from "react-intl";
import "./dataGrid/dataGrid.css";
import {
  generateColumnDef,
  generateRowData,
  generateChartData
} from "../../utils/gridChartHelpers";
class MainContent extends Component {
  constructor() {
    super();
    this.name = "";
    this.state = {
      columnDefs: [],
      rowData: [],
      chartData: [],
      ChartLabels: [],
      display: false,
      type: "line"
    };
  }
  componentDidMount() {
    this.setState({
      columnDefs: generateColumnDef(),
      rowData: generateRowData()
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <DataGrid
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={"single"}
          />
        </div>
        <div>
          <Chart data={generateChartData()} type={this.state.type} />
        </div>
      </React.Fragment>
    );
  }
}
export default MainContent;
