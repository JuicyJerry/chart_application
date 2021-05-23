const configObj = {
  plotOptions: {
    series: {
      showInLegend: false,
    },
  },
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      name: "sample1",
      data: [1, 2, 1, 4, 3, 6],
    },
    {
      name: "sample2",
      data: [5, 4, 3, 2, 1, 9],
    },
    {
      name: "sample3",
      data: [2, 4, 2, 6, 2, 8],
    },
  ],
};

export default configObj;
