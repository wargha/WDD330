var startURL = "http://swapi.dev/api/starships";
var nextURL = " ";
var previousURL = " ";
console.log("here");

function showHidden(e) {
  console.log(e.getElementsByTagName("span"));
  var span = e.getElementsByTagName("span")[0];
  if (span.style.display == "none") {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
}

function jumpTo(num) {
  var url = "http://swapi.dev/api/starships/?page=" + num;
  getList(url);
}

function listPages(count) {
  var numPages = Math.ceil(count / 10);
  console.log(numPages);
  var str = "";
  for (var i = 1; i <= numPages; i++) {
    str += '<button type="button" onclick="jumpTo(';
    str += i + ')">' + i + "</button>";
  }
  document.getElementById("pages").innerHTML = str;
}

function convert(text) {
  var obj = JSON.parse(text);
  listPages(obj.count);
  if (obj.next != null) {
    nextURL = obj.next;
    console.log(nextURL);
  }
  if (obj.previous != null) {
    previousURL = obj.previous;
  }
  var str = "";
  console.log(obj);
  for (var i = 0; i < obj.results.length; i++) {
    str += "<li onclick='showHidden(this)'>";
    str += "Name: " + obj.results[i].name + "<br>";
    str += "<span style = 'display:none;'>";
    str += "Model: " + obj.results[i].model + "<br>";
    str += "Manufacturer: " + obj.results[i].manufacturer + "<br>";
    str += "Cost in Credits: " + obj.results[i].cost_in_credits + "<br>";
    str += "Length: " + obj.results[i].length;
    str += "</span>";
    str += "<hr>";
    str += "</li>";
  }
  document.getElementById("SW-list").innerHTML = str;
}

function getFirstPage() {
  getList(startURL);
}
function getNextPage() {
  console.log("clicked");
  getList(nextURL);
}
function getPrevPage() {
  console.log("Why?");
  getList(previousURL);
}

function getList(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then((response) => response.text())
    .then((text) => convert(text))
    .catch(
      (error) =>
        (document.getElementById("SW-list").innerHTML = "Not found. Try again.")
    );
}

document.body.addEventListener("load", getFirstPage());
