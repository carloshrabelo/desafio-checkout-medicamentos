import ExportButton from "./ExportButton";
import info from "./info";
import BvsChart from "./BvsChart";

import React from "react";

import { FaDownload } from "react-icons/fa";

import { Grid, makeStyles, Fab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const Simple = () => {
  const classes = useStyles();

  return (
    <>
      <ExportButton>
        <Fab className={classes.fab} color="primary" aria-label="add">
          <FaDownload />
        </Fab>
      </ExportButton>
      <Grid>
        {info.map((data, key) => (
          <Grid container spacing={3} key={key}>
            <Grid item xs={4}>
              <BvsChart type="pie" data={data} title={data.attr}></BvsChart>
            </Grid>
            <Grid item xs={4}>
              <BvsChart type="bar" data={data} title={data.attr}></BvsChart>
            </Grid>
            <Grid item xs={4}>
              <BvsChart type="map" data={data} title={data.attr}></BvsChart>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Simple;
