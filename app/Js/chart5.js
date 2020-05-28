// Preparing the chart data

var promise = fetch('http://0.0.0.0:5000/graphs/5').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/5', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      createChart5(data)
    }
    request.send()
  } else {
    var data = {
      "death_5/21/2020": 217,
      "death_5/22/2020": 153,
      "death_5/23/2020": 137,
      "death_5/24/2020": 110,
      "death_5/25/2020": 18
    }
    createChart5(data)
  }
})

var createChart5 = (data) => {
  const chartData = [
    {
      label: "5/21/2020",
      value: data["death_5/21/2020"]
    },
    {
      label: "5/22/2020",
      value: data["death_5/22/2020"]
    },
    {
      label: "5/23/2020",
      value: data["death_5/23/2020"]
    },
    {
      label: "5/24/2020",
      value: data["death_5/24/2020"]
    },
    {
      label: "5/25/2020",
      value: data["death_5/25/2020"]
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
}


