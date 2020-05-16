import React from "react";
import PropTypes from "prop-types";

export const Logged = ({ children }) => <>{children}</>;

Logged.propTypes = {
  children: PropTypes.any,
};

export default Logged;
