// Preparing the chart data
const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];

// Create a JSON object to store the chart configurations
const chartConfigs = {
    //Specify the chart type
    type: "column2d",
    //Set the container object
    renderAt: "chart5",
    //Specify the width of the chart
    width: "50%",
    //Specify the height of the chart
    height: "400",
    //Set the type of data
    dataFormat: "json",
    dataSource: {
      chart: {
        //Set the chart caption
        caption: "Muertes últimos 5 días en México",
        //Set the chart subcaption
        subCaption: "Mayo 21 - Mayo 25",
        //Set the x-axis name
        xAxisName: "Día",
        //Set the y-axis name
        yAxisName: "Muertes",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data from Step 2
      data: chartData
    }
};

FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(chartConfigs);
    fusioncharts.render();
});