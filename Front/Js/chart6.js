var promise = fetch('http://0.0.0.0:5000/graphs/6').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/6', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      console.log(data)
      createChart6(data)
    }
    request.send()
  } else {
    var data = {
      "actual_sick": 214517,
      "total_deaths": 111333
    }
    createChart6(data)
  }
})


var createChart6 = (data) => {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  let chart = am4core.create("chart6", am4charts.PieChart);

  // Add data
  chart.data = [ {
    "Count": "Total de enfermos",
    "count": data["actual_sick"]
  }, {
    "Count": "Total de muertos",
    "count": data["total_deaths"]
  } ];

  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "count";
  pieSeries.dataFields.category = "Count";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
}
