var profileCounter = 0;
var artist = ophalen("dj_lijsten.json");

console.log(artist);
for (var i = 0; i < artist.length; i++) {
  var foto = artist[i].foto;
  var naam = artist[i].naam;
  makeProfile(foto, naam);
}


function makeProfile(url, name) {
  document.getElementById("profileBar").innerHTML += "<div class='profileContainer'><div onclick='profileClick(this.id)' id='profile-"+profileCounter+"' class='profile' title='"+name+"'></div></div>";
  document.getElementById("profile-"+profileCounter).style.backgroundImage = "url('"+url+"')";
  profileCounter++;
}

function ophalen(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  var response = request.responseText;
  return JSON.parse(response)
}

profileClick("profile-0");
function profileClick(id) {
  id = id.substring(id.indexOf("-")+1, id.lenght);
  id = parseInt(id);
  var left = id * 6 + 1.5;
  clearProfile();
  document.getElementById("selector").style.left = left + "em";
  document.getElementById("profile-"+id).style.transform = "scale(1.1)"
  document.getElementById("output").innerHTML = "naam: " + artist[id].naam + "<br>genre: " + artist[id].genre + "<br>minimaal aantal uur: " + artist[id].minuur + "<br>prijs per uur: " + artist[id].prijs + " euro<br>"+"<iframe src="+artist[id].video+"></iframe>";
}
function clearProfile() {
  for (var i = 0; i < artist.length; i++) {
    document.getElementById("profile-"+i).style.transform = "";
  }
}
