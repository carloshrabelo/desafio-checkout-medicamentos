import blue from "@material-ui/core/colors/blue";
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";

const getBigger = (bigger, current) =>
  bigger[1] > current[1] ? bigger : current;

const getColor = data => {
  const length = Object.keys(data.value).length;
  const values = Object.values(blue);
  return length <= values.length
    ? values
    : [
        ...values,
        ...Object.values(teal),
        ...Object.values(red)
      ];
};
const converter = data =>
  data.geo.map(({ name, values }) => ({
    name,
    value: Object.entries(values)
      .reduce(getBigger)
      .reverse(),
    values
  }));

export default data => ({
  visualMap: {
    type: "piecewise",
    left: "center",
    orient: "horizontal",
    categories: Object.keys(data.value),
    inRange: {
      color: getColor(data),
      symbolSize: [30, 100]
    }
  },

  tooltip: {
    formatter: ({ name, data: { values } }) => `
      <table>
      <caption>${name}</caption>
      ${Object.entries(values)
        .map(
          v => `<tr>
        <td>${v[0]}</td>
        <td>${v[1]}</td>
        </tr>`
        )
        .join("")}
        </table>
        `
  },
  series: [
    {
      name: "Valor XPTO",
      type: "map",
      map: "UF",
      data: converter(data)
    }
  ]
});
