google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Edad', 'Casos Totales'],
    ['0-20',     11],
    ['21-40',      2],
    ['41-60',  2],
    ['60-forward', 2]   
    ]);

    var options = {
        title: 'Casos por edad'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart3'));

    chart.draw(data, options);
}