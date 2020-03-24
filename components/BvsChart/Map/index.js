import UFJson from "../../uf";
import option from "./options";

import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";

echarts.registerMap("UF", UFJson);


const BvsChartMap = ({ data }) => <ReactEcharts option={option(data)}  
style={{ height: "350px", width: "100%" }}/>;

export default BvsChartMap;
