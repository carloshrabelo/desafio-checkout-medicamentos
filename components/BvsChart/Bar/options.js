export default data => ({
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  xAxis: [
    {
      type: "category",
      data: Object.keys(data.value),
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Serie name",
      type: "bar",
      data: Object.values(data.value)
    }
  ]
});
