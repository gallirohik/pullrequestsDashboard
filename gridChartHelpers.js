import content from "../content/content";
import gridColumnNames from "../content/gridColumnNames";
import labels from "../content/chartLabels";
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
export function generateColumnDef() {
  const columnDefs = gridColumnNames.map((name, index) => {
    return index == 0
      ? Object.assign(
          {},
          {
            headerName: capitalize(name),
            field: name,
            sortable: true,
            filter: true,
            checkboxSelection: true
          }
        )
      : Object.assign(
          {},
          {
            headerName: capitalize(name),
            field: name,
            sortable: true,
            filter: true
          }
        );
  });
  return columnDefs;
}
function subset(object, properties) {
  let requiredObject = {};
  for (let property of properties) {
    requiredObject[property] = object[property];
  }
  return requiredObject;
}
export function generateRowData() {
  const Data = content.Grid.payload.dataServiceQueryResults.data;
  let rowData = Data.map(data => subset(data, gridColumnNames));

  return rowData;
}
function getbackgroundColor(type) {
  return type == "border"
    ? `rgb(${Math.floor(Math.random() * 255 + 1)},${Math.floor(
        Math.random() * 255 + 1
      )},${Math.floor(Math.random() * 255 + 1)})`
    : `rgb(${Math.floor(Math.random() * 255 + 1)},${Math.floor(
        Math.random() * 255 + 1
      )},${Math.floor(Math.random() * 255 + 1)},0.3)`;
}
export function generateChartData() {
  let chartData = content.Chart.payload.dataServiceQueryResults.data;
  let chartLabels = {};
  for (let label of labels) {
    chartLabels[label] = [];
  }
  chartData.map(data => {
    let keys = Object.keys(data);
    for (let key of keys) {
      chartLabels[key].push(data[key]);
    }
  });
  const datasets = labels.map((label, index) => {
    return index != 0
      ? Object.assign(
          {},
          {
            label: label,
            data: chartLabels[label],
            backgroundColor: getbackgroundColor(),
            bordercolor: getbackgroundColor()
          }
        )
      : "";
  });
  datasets.shift();
  const data = {
    labels: chartLabels[labels[0]],
    datasets
  };
  return data;
}
/*label: "Hello",
data: chartData,
backgroundColor: [],
bordercolor: ""*/
