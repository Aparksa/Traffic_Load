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

      <XAxis type="datetime" categories={data.hours}>
        <XAxis.Title>HOURS</XAxis.Title>
        <PlotLine
          id="hour"
          className="hour"
          value={data.hours[8]}
          width={2}
          color="#FF00006"
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
