function ophalen(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  var response = request.responseText;
  return JSON.parse(response)
}
