import React from "react";
import Link from "next/link";

import * as S from "./Style";

const coord = {
  lat: -23.5648304,
  lon: -46.6436604,
};
const FindDrugstore = () => (
  <Link href={`/drugstores?${new URLSearchParams(coord).toString()}`}>
    <S.FindDrugstore>
      <b>Encontrar Farmácias</b>
      <br />
      <span>Serviço oferecido por Memed</span>
    </S.FindDrugstore>
  </Link>
);
export default FindDrugstore;
