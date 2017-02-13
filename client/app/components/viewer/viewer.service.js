let viewerModule = angular.module('ViewerService', [])

    .factory('ViewerService', viewerService).name;

function viewerService() {
    'ngInject';
    let streetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    let service = {
        map: L.map('map', {
            center: [39.73, -104.99],
            zoom: 10,
            layers: [streetMap]
        }),
        baseMaps: {
            "Base": streetMap,
        },
        populateMap: populateMap
    }
    return service;

    function populateMap(data) {
        console.log('adding to map');
        let markerList = [];
        let markers = L.markerClusterGroup({
            chunkedLoading: true,
            zoomToBoundsOnClick: false
        });
        for (let entry in data) {
            let latLng = entry.split(':');
            let marker = L.marker(L.latLng(latLng[0], latLng[1]), {
                icon: L.divIcon({ className: 'queryIcon' })
            });
            markerList.push(marker);
            data[entry].forEach(coords => {
                let marker = L.marker(L.latLng(coords[0], coords[1]));
                markerList.push(marker);
            });
        }
        markers.addLayers(markerList);
        service.map.addLayer(markers);
    }
}

export default viewerModule;