import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import * as S from "./Style";

const Header = ({ children }) => (
  <S.Header>
    <S.Icon onClick={() => Router.back()}>◀</S.Icon>
    <S.Content>{children}</S.Content>
  </S.Header>
);

Header.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Header;
