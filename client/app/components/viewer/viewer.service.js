let viewerModule = angular.module('ViewerService', [])

    .factory('ViewerService', viewerService).name;

function viewerService() {
    'ngInject';
    let service = {
        map: L.map('map').setView([9.977005492196, -14.589843750000002], 4),
        populateMap: populateMap
    }
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.light'
    }).addTo(service.map);

    window.service = service;
    return service;

    function populateMap(data) {
        console.log(data);
        L.geoJSON(data).addTo(service.map);
    }
}

export default viewerModule;