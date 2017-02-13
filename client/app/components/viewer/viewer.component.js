import template from './viewer.html';
import controller from './viewer.controller';
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/leaflet.markercluster-src.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './viewer.css';

let viewerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default viewerComponent;
