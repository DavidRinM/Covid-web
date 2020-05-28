new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Total Ambulatorio", "Total Hospitalizado"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: [2300,1200]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Casos Ambulatorios vs Casos Hospitalizados'
      }
    }
});
