var promise = fetch('http://0.0.0.0:5000/graphs/3').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/3', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      createChart3(data)
    }
    request.send()
  } else {
    var data = {
      "0-20": 14877,
      "21-40": 94097,
      "41-60": 83653,
      "61-forward": 33023
    }
    createChart3(data)
  }
})


var createChart3 = (data_chart) => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function() {drawChart(data_chart)});

    function drawChart(data_chart) {
        console.log(data)
        var data = google.visualization.arrayToDataTable([
            ['Edad', 'Casos Totales'],
            ['0-20', data_chart['0-20']],
            ['21-40', data_chart['21-40']],
            ['41-60', data_chart['41-60']],
            ['60-forward', data_chart['60-forward']]   
        ]);

        var options = {
            title: 'Casos por edad',
            colors: ['#67B7DC', '#6794DC', '#8E5EA2', '#f3b49f', '#f6c7b6']
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart3'));

        chart.draw(data, options);
    }
}


