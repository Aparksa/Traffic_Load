import React from "react";
import Highcharts from "highcharts/js/highcharts"; // Style by CSS import
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Tooltip,
  Legend,
  AreaSplineSeries,
  PlotLine
} from "react-jsx-highcharts";
import "./index.css"; // CSS Styles
import data from "./data";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const plotOptions = {
  series: {
    pointStart: 0,
    pointInterval: 1
  }
};

var products = [{
  id: null,
  tv: "TV",
  peak: "PEAK ",
  sustain: "SUSTAIN" ,
  duration:"Duration ",
  counts:"Counts ",
  stam:"Stam " ,
  regul:"Regul ",
  scenar:"Scenar "
}, {
    id: null,
    tv: "LFBBP14",
    peak: [data.peak],
    sustain: [data.sustain],
    duration: "11",
    counts: "19",
    stam: "Y",
    regul: "N",
    scenar: "N"
}, ]

const HOURS = [
  "06: 20",
  "06: 22",
  "06: 24",
  "06: 26",
  "06: 28",
  "06: 30",
  "06: 32",
  "06: 34",
  "06: 38",
  "06: 40",
  "06: 40",
  "06: 42",
  "06: 44",
  "06: 46",
  "06: 48",
  "06: 50",
  "06: 52",
  "06: 54",
  "06: 56",
  "06: 58",
  "07: 00",
  "07: 02",
  "07: 04",
  "07: 06",
  "07: 08",
  "07: 10",
  "07: 12",
  "07: 14",
  "07: 16",
  "07: 18",
  "07: 20",
  "07: 22",
  "07: 24",
  "07: 26",
  "07: 28"
];

const App = () => (
  <div className="app">
    <div className="bandeau">
      <div className="top">
        <BootstrapTable tableHeaderClass='my-header-class' tableBodyClass='my-body-class' data={products} condensed striped hover>
        <TableHeaderColumn isKey dataField='id'></TableHeaderColumn>
        <TableHeaderColumn dataField='tv' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='peak' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='sustain' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='duration' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='counts' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='stam' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='regul' dataAlign="center"></TableHeaderColumn>
        <TableHeaderColumn dataField='scenar' dataAlign="center"></TableHeaderColumn>
      </BootstrapTable>
      </div>
    </div>
    
    <HighchartsChart plotOptions={plotOptions}>
      <Chart />

      <Title>TRAFFIC LOAD</Title>

      <Subtitle>Source: NM B2B </Subtitle>

      <Legend layout="horizontal" verticalAlign="bottom" borderWidth={0} />

      <Tooltip valueSuffix=" 000 traffic" shared />

      <XAxis type="datetime" categories={HOURS}>
        <XAxis.Title>HOURS</XAxis.Title>
        <PlotLine
          id="hour"
          className="hour"
          value={HOURS[2]}
          width={1}
          color="#666"
        >
          <PlotLine.Label>NOW</PlotLine.Label>
        </PlotLine>
      </XAxis>

      <YAxis id="traffic">
        <YAxis.Title>TRAFFIC</YAxis.Title>
        <AreaSplineSeries id="my-areaspline" name="Load" data={data.load} />
        <AreaSplineSeries id="my-areaspline" name="Demand" data={data.demand} />
        <AreaSplineSeries
          id="my-areaspline"
          name="Regulated"
          data={data.regulated}
        />
        <PlotLine
          id="peak"
          className="peak"
          value={data.peak}
          width={1}
          color="#666"
        >
          <PlotLine.Label>PEAK</PlotLine.Label>
        </PlotLine>
        <PlotLine
          id="sustain"
          className="sustain"
          value={data.sustain}
          width={1}
          color="#700"
        >
          <PlotLine.Label>SUSTAIN</PlotLine.Label>
        </PlotLine>
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(App, Highcharts);
