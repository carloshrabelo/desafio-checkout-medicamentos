import styled from "styled-components";
import { darken } from "polished";
const bg = "#00b8d4";

export const FindDrugstore = styled.div`
  background: ${bg};
  color: #7cdbe9;
  cursor: pointer;
  padding: 2rem;
  text-align: center;

  b {
    color: #fff;
  }

  &:hover {
    background: ${darken("0.05", bg)};
  }
`;
