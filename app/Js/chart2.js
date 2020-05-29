var promise = fetch('http://0.0.0.0:5000/graphs/2').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/2', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      createChart2(data)
    }
    request.send()
  } else {
    var data = {
      "total_ambulatorio": 170531,
      "total_hospitalizado":55119
    }
    createChart2(data)
  }
})

var createChart2 = (data) =>{
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Total Ambulatorio", "Total Hospitalizado"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#6794DC", "#8e5ea2"],
        data: [data['total_ambulatorio'],data['total_hospitalizado']]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Casos Ambulatorios vs Casos Hospitalizados',
        responsive: true,
        fontSize: 16
      }
    }
  });
}


