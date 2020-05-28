var promise = fetch('http://0.0.0.0:5000/graphs/1').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/1', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      createChart1(data)
    }
    request.send()
  } else {
    var data = {
      "total_men": 115213,
      "total_women":110437
    }
    createChart1(data)
  }
})


// Send request


var createChart1 = (data) => {
  const width = 450;
  const height = 450;
  const margin = 40;

  const radius = Math.min(width, height) / 2 - margin; 

  const svg = d3.select("#chart1")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const color = d3.scaleOrdinal().domain(data).range(["#58FA58", "#0000FF"]);

  const pie = d3.pie().value(function(d) {return d.value; });
  const data_ready =pie(d3.entries(data));

  svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)
}

