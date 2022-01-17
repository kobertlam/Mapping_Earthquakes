// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085], // Los Angeles International Airport (LAX)
    [37.6213, -122.3790], // San Francisco International Airport (SFO)
    [40.7899, -111.9791], // Salt Lake City International Airport (SLC)
    [47.4502, -122.3088] // Seattle-Tacoma International Airport (SEA)
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one circleMarker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    // Bind a popup to the marker, and format the population with a thousands separator
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

//  Add a point/dot to the map for Los Angeles, California, with a 100-meter radius over central LA
/* L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map); */

// Add a circle to the map using the circleMarker() function:
// create a light-yellow circle with black lines indicating a 300-pixel radius on a dark map.
/* L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1' // light-yellow
}).addTo(map); */

// We create the tile layer that will be the background of our map using "satellite view": satellite-streets-v11 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map using "street view": streets-v11
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); */

// We create the tile layer that will be the background of our map using "dark view": dark-v10
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); */

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);