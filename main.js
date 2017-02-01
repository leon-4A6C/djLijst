var json = ophalen("dj_lijsten.json");
console.log(json);




function ophalen(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  var response = request.responseText;
  request.send();
  return JSON.parse(response);
}
