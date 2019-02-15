import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { FormattedMessage } from "react-intl";

class DataGrid extends Component {
  constructor() {
    super();
    this.getSelectedRows = this.getSelectedRows.bind(this);
    this.onGridReady = this.onGridReady.bind(this);
  }
  getSelectedRows(e) {
    const selectedNodes = this.gridApi.getSelectedNodes();
    // eslint-disable-next-line
    if (selectedNodes == 0) {
      alert("You haven't selected any Language,Please select one Language");
    } else {
      const selectedData = selectedNodes.map(node => node.data);
      const selectedNode = selectedData.pop();
      this.props.generateChart(selectedNode.name);
    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="my-grid"
          style={{
            height: "450px",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            onGridReady={this.onGridReady}
            rowSelection={this.props.rowSelection}
            columnDefs={this.props.columnDefs}
            rowData={this.props.rowData}
            pagination={true}
            paginationPageSize={50}
          />{" "}
        </div>{" "}
        <br />
        <button
          className="button is-primary is-size-5"
          onClick={this.getSelectedRows}
        >
          <FormattedMessage
            id="dataGrid.button.text"
            defaultMessage=" Get Chart for Selected Language"
          />
        </button>{" "}
      </React.Fragment>
    );
  }
}
export default DataGrid;
