const UFs = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO"
];
const doValue = () => (Math.random() * 1000).toFixed() * 1;
const doFake = (attr, values) => {
  const geo = UFs.map(uf => ({
    name: uf,
    values: values.reduce(
      (all, label) => ({
        ...all,
        [label]: doValue()
      }),
      {}
    )
  }));
  const value = geo.reduce((_all, g) => {
    return Object.entries(g.values).reduce((all, [key, __value]) => {
      return { ...all, [key]: __value + (_all[key] || 0) };
    }, {});
  });
  return {
    attr,
    value,
    geo
  };
};

const info = [
  doFake("sexo", ["MASCULINO", "FEMININO", "INDETERMINADO"]),
  doFake("Classe Social", ["D", "", "C2", "E"]),
  doFake("TESTE COMPLEMENTAR 1_100 linhas_Nomes e Números", [
    "SEM INFORMAÇÃO",
    "27",
    "Vítor ou Victor Norões",
    "Neusa Gama",
    "28",
    "Cesário Villela",
    "Antonieta Linhares",
    "43",
    "46",
    "Celso Imperial",
    "Anselmo Figueiredo",
    "37",
    "17",
    "3",
    "Adélia Vicario",
    "Saul Barroso",
    "Neusa Portela",
    "Viriato Larangeira",
    "Filena Conceição",
    "Olavo Anlicoara"
  ]),
  doFake("TESTE COMPLEMENTAR 1_100 linhas_Valores_e_Nomes_Duplicados", [
    "SEM INFORMAÇÃO",
    "Odete Doutel",
    "21",
    "16",
    "Claudemira Lustosa",
    "27",
    "Vítor ou Victor Norões",
    "Neusa Gama",
    "28",
    "Cesário Villela",
    "Antonieta Linhares",
    "43",
    "46",
    "Celso Imperial",
    "Anselmo Figueiredo",
    "37",
    "17",
    "3",
    "Adélia Vicario",
    "Saul Barroso"
  ]),
  doFake("Cópia de TESTE COMPLEMENTAR 1_100", [
    "SEM INFORMAÇÃO",
    "Odete Doutel",
    "21",
    "Claudemira Lustosa",
    "27",
    "Vítor ou Victor Norões",
    "Neusa Gama",
    "28",
    "Cesário Villela",
    "Antonieta Linhares",
    "43",
    "46",
    "Celso Imperial",
    "Anselmo Figueiredo",
    "37",
    "17",
    "3",
    "Adélia Vicario",
    "Saul Barroso",
    "Neusa Portela"
  ])
];

export default info;