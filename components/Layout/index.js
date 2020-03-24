import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "./Drawer";
import AppBar from "./AppBar";


const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar openDrawer={open} onToggleDrawer={toggleDrawer} />
      <Drawer open={open} onToggleDrawer={toggleDrawer} />
      <main className={classes.content}>{children}</main>
    </>
  );
};
