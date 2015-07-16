"use strict";

require('leaflet-plugins/layer/tile/Google');

var map = new L.Map('map', {center: new L.LatLng(53.9618, 58.4277), zoom: 13});
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var ggl = new L.Google();
var ggl2 = new L.Google('TERRAIN');
map.addLayer(ggl);
map.addControl(new L.Control.Layers( {'OSM':osm, 'Google':ggl, 'Google Terrain':ggl2}, {}));
