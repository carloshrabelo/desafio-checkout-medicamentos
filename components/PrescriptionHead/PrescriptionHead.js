import React from "react";
import PropTypes from "prop-types";
import * as S from "./Style";

const PrescriptionHead = ({ date }) => (
  <S.Head>
    <S.Title>Dr. Memed</S.Title>
    <span>Prescrição criada em {date}</span>
  </S.Head>
);

PrescriptionHead.propTypes = {
  date: PropTypes.string,
};
export default PrescriptionHead;
