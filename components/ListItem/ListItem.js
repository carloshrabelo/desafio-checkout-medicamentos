import React from "react";
import PropTypes from "prop-types";
import * as S from "./Style";

const ListItem = ({ icon, children, className }) => {
  return (
    <S.ListItem className={className}>
      {icon && <S.Icon>{icon}</S.Icon>}
      <div>{children}</div>
    </S.ListItem>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default ListItem;
