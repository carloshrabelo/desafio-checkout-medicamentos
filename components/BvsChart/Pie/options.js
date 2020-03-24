const converter = data =>
  Object.entries(data.value).map(([name, value]) => ({
    name,
    value
  }));

export default data => ({
  legend: {
    type: 'scroll',
    left: "center",
    orient: "horizontal",
    bottom: 0
  },
  series: [
    {
      label: {
        show: false
      },
      type: "pie",
      data: converter(data)
    }
  ]
});
