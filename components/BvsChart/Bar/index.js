import option from "./options";
import React from "react";
import ReactEcharts from "echarts-for-react";

const BvsChartBar = ({ data }) => <ReactEcharts option={option(data)}  
style={{ height: "350px", width: "100%" }}/>;

export default BvsChartBar;
