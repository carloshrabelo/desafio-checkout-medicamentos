import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import { MdMenu as MenuIcon, MdPublic, MdCloudUpload } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { drawerWidth } from "../Layout/config";
import Select from "./Select";


import {
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { FaFilter } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "6rem"
  },
  appBar: {
    top: "4rem !important",
    marginLeft: drawerWidth,
    width: `calc(100% - 70px)`
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
              flex: 1
            }}
          >
            <div>Esta busca retornou 100.000 resultados.</div>
            <Button
              variant="contained"
              color="primary"
              endIcon={<MdCloudUpload />}
            >
              Exportar
            </Button>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flex: 1
            }}
          >
            <div style={{ alignSelf: "center" }}>
              <Chip color="primary" onDelete={_ => _} label="Sexo:Masculino" />
              <Chip color="primary" onDelete={_ => _} label="Sexo:Feminio" />
              <Chip
                color="primary"
                onDelete={_ => _}
                label="Spacial"
                icon={<MdPublic />}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              endIcon={<FaFilter />}
              onClick={handleDrawerOpen}
            >
              Filtrar
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <Select></Select>
      </Drawer>
    </div>
  );
};
