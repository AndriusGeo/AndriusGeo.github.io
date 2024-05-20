function createMap() {
  var objTitle = document.getElementById("objTitle").value;
  var objDescription = document.getElementById("objDescription").value;
  var objCoordinatesLat = document.getElementById("objCoordinatesLat").value;
  var objCoordinatesLng = document.getElementById("objCoordinatesLng").value;

  var urlForSharing =
    "http://127.0.0.1:5501/js_demo/map.html?objTitle=" +
    objTitle +
    "&objDescription=" +
    objDescription +
    "&lat=" +
    objCoordinatesLat +
    "&lng=" +
    objCoordinatesLng;

  document.getElementById("urlForSharing").value = urlForSharing;
}

var map = L.map("map").setView([0, 0], 1);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.on("click", function (e) {
  var coord = e.latlng;
  var lat = coord.lat;
  var lng = coord.lng;
  document.getElementById("objCoordinatesLat").value = lat;
  document.getElementById("objCoordinatesLng").value = lng;
});
