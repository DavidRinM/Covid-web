//const data = [data["deaths_one_day_old"],data["deaths_two_day_old"],data["deaths_three_day_old"],data["deaths_four_day_old"],data["deaths_five_day_old"],];
//const data = [['_old', 4],['Foure_old', 4],['Three', 9], ['Two_old', 3], ['One_old', 4]];
var promise = fetch('http://0.0.0.0:5000/graphs/4').then(
  function(response){
    return 200
  }
).catch(error => {return 500})

promise.then(response => {
  if(response == 200){
    var request = new XMLHttpRequest()
    request.open('GET', 'http://0.0.0.0:5000/graphs/4', true)
    request.onload = function() {
      var data = JSON.parse(this.response)
      createChart4(data)
    }
    request.send()
  } else {
    var data = {
      "new_5/21/2020": 7539,
      "new_5/22/2020": 7645,
      "new_5/23/2020": 3368,
      "new_5/24/2020": 2448,
      "new_5/25/2020": 3399
    }
    createChart4(data)
  }
})


var createChart4 = (data) => {
  var myConfig = {
      "type": "bar",
      "title": {
          "text": "Nuevos casos  ",
          "font-family": "arial",
          "x": "40px",
          "y": "5px",
          "align": "left",
          "bold": false,
          "font-size": "16px",
          "font-color": "#000000",
          "background-color": "none"
        },
        "subtitle": {
          "text": "<i>Mayo21 - Mayo 25</i>",
          "font-family": "arial",
          "x": "175px",
          "y": "5px",
          "align": "left",
          "bold": false,
          "font-size": "16px",
          "font-color": "#7E7E7E",
          "background-color": "none"
        },
  /*     "labels": [{ //Label One
          "text": "35%",
          "font-family": "Arial",
          "font-size": "20",
          "x": "60%",
          "y": "20%"
        },
        { //Label Two
          "text": "of surveyed users prefer the color",
          "font-family": "Georgia",
          "font-size": "12",
          "x": "60%",
          "y": "40%"
        },
        { //Label Three
          "text": "blue",
          "font-color": "#29A2CC",
          "font-family": "Georgia",
          "font-size": "40",
          "x": "60%",
          "y": "45%"
        },
        { //Label Four
          "text": "over other colors.",
          "font-family": "Georgia",
          "font-size": "12",
          "x": "60%",
          "y": "60%"
        }
      ], */
      "plot": {
        "value-box": {
          "placement": "out",
          "offset-r": "-10",
          "font-family": "Roboto",
          "font-size": 10,
          "font-weight": "normal"
        }
      },
      "plotarea": {
        "margin-right": "30%",
        "margin-top": "15%",
        "margin-bottom": "20%"
      },
      "series": [{
          "values": [data["new_5/21/2020"]],
          'background-color': '#67B7DC',
        },
        {
          "values": [data["new_5/22/2020"]],
          'background-color': '#6794DC'
        },
        {
          "values": [data["new_5/23/2020"]],
          'background-color': '#8E5EA2'
        },
        {
          "values": [data["new_5/24/2020"]],
          'background-color': '#6794BD'
        },
        {
          "values": [data["new_5/25/2020"]],
          'background-color': '#8E5EB2'
        }
      ]
    };
    
    zingchart.render({
      id: 'chart4',
      data: myConfig,
      height: 400,
      width: "100%"
    });
}