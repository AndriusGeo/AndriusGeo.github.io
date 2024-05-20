let params = new URLSearchParams(document.location.search);
let objTitle = params.get("objTitle");
let objDescription = params.get("objDescription");
let objCoordinatesLat = params.get("lat");
let objCoordinatesLng = params.get("lng");

let objCoordinates = [objCoordinatesLat, objCoordinatesLng];

var popupInfo = "<b>" + objTitle + "</b><br><hr>" + objDescription;

var map = L.map("mapForSharing").setView(objCoordinates, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(objCoordinates).addTo(map).bindPopup(popupInfo).openPopup();
