// import Topbar from "../components/Layout/Topbar";
import FilterBar from "../components/FilterBar";
import Simple from "../components/Simple";

import React from "react";
import { Container } from "@material-ui/core";

export default function MenuAppBar() {
  return (
    <>
      {/* <Topbar /> */}
      <FilterBar />
      <Simple />
    </>
  );
}
