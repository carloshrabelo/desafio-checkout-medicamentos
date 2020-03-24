import BarChart from "./Bar";
import MapChart from "./Map";
import PieChart from "./Pie";

import React, { useState } from "react";

import { AiFillPieChart, AiOutlineBarChart } from "react-icons/ai";
import { MdPublic } from "react-icons/md";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Card, CardHeader } from "@material-ui/core";

const VALID_TYPES = ["pie", "bar", "map"];
const Charts = {
  bar: BarChart,
  map: MapChart,
  pie: PieChart
};

const getType = type => (VALID_TYPES.includes(type) ? type : "pie");

// const setType = _ => _;

const BvsChart = ({ title, data, type }) => {
  // const _type = getType(type);
  const [_type, setType] = useState(getType(type));
  const Chart = Charts[_type];

  return (
    <Card style={{ width: "100%" }}>
      <CardHeader
        style={{
          textTransform: "capitalize"
        }}
        title={title}
        action={
          <ToggleButtonGroup
            value={_type}
            exclusive
            onChange={(_, value) => value && setType(getType(value))}
            aria-label="text alignment"
          >
            <ToggleButton value="pie">
              <AiFillPieChart /> Pizza
            </ToggleButton>
            <ToggleButton value="bar">
              <AiOutlineBarChart /> Barra
            </ToggleButton>
            <ToggleButton value="map">
              <MdPublic /> Mapa
            </ToggleButton>
            
          </ToggleButtonGroup>
        }
      ></CardHeader>

      <Chart data={data} />
    </Card>
  );
};
BvsChart.defaultProps = {
  title: "1234567",
  type: "pie",
  data: []
};

export default BvsChart;
