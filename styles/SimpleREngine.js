object.onload = function(){loadDoc()};
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("xml_http_REquest").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://7r.re/styles/footer.html", true);
  xhttp.send();
}