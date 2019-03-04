// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
//var httpChannel = subject.

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://apiidiomas.firebaseapp.com/idiomas.json', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(typeof (data));
  //console.log(data);

  if (request.status >= 200 && request.status < 400) {
    var selectIdiomas = document.getElementById("idiomas");
    var option;
    var idiomas = Object.keys(data);
    
    idiomas.forEach(elem => {
      var selectIdiomas = document.getElementById("idiomas");
      var option = document.createElement("option");
      option.text = elem;
      selectIdiomas.add(option,selectIdiomas[0]);
    })
  } else
    console.log('error');
  
  
}

// Send request
request.send();