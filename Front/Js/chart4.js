//const data = [data["deaths_one_day_old"],data["deaths_two_day_old"],data["deaths_three_day_old"],data["deaths_four_day_old"],data["deaths_five_day_old"],];
//const data = [['_old', 4],['Foure_old', 4],['Three', 9], ['Two_old', 3], ['One_old', 4]];


var myConfig = {
    "type": "bar",
    "title": {
        "text": "Muerte 5 días  ",
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
        "font-family": "Georgia",
        "font-size": 10,
        "font-weight": "normal"
      }
    },
    "plotarea": {
      "margin-right": "45%",
      "margin-top": "20%",
      "margin-bottom": "20%"
    },
    "series": [{
        "values": [34]
      },
      {
        "values": [30]
      },
      {
        "values": [15]
      },
      {
        "values": [14]
      },
      {
        "values": [5]
      }
    ]
  };
   
  zingchart.render({
    id: 'chart4',
    data: myConfig,
    height: 400,
    width: "100%"
  });