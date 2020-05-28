const request = new XMLHttpRequest()

request.open("GET",'http://a3f2594c.ngrok.io/test', true)
request.onload = function(){

    //Accesing JSON DATA
    const data = JSON.parse(this.response);
    console.log(data);

}

request.send()