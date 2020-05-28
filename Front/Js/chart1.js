const width = 450;
const height = 450;
const margin = 40;

const radius = Math.min(width, height) / 2 - margin; 

const data = {
    "total_men": 1000,
    "total_women":2000
}

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