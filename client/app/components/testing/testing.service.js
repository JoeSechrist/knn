import angular from 'angular';
// import kdbush from 'kdbush';
// import rbush from 'rbush';
// import knn from 'rbush-knn';
import geojsonRbush from 'geojson-rbush'
// import * as turf from '@turf/turf/turf.min.js';
import { lineString } from '@turf/helpers';
import lineIntersect from '@turf/line-intersect';
import { randomLineString } from '@turf/random';
import worldGeo from '../../common/data/world.geo.json';

// window.turf = turf;

let testingModule = angular.module('TestingService', [])

    .factory('TestingService', testingService).name;

function testingService($q, StorageService, DataService, ViewerService) {
    'ngInject';

    let service = {
        getData
    };
    return service;

    function getData(count) {
        console.log('worldGeo: ', worldGeo);
        const tree = geojsonRbush();
        tree.load(worldGeo);
        const lineStrings = generateLineStrings(count);
        console.log(lineStrings);
        lineStrings.features.forEach((feature, index) => {
            const collision = tree.collides(feature);
            if (collision) {
                const overlap = tree.search(feature);
                // console.log(index, ' feature: ', feature);
                let actualOverlap = false;
                let length = feature.geometry.coordinates.length;
                while (length--) {
                    if (length - 1) {
                        let segment = lineString([feature.geometry.coordinates[length], feature.geometry.coordinates[length - 1]]);
                        if(lineIntersect(segment, overlap).features.length){
                            actualOverlap = true;
                            break;
                        }
                    } else {
                        break;
                    }
                }
                console.log('feature overlaps: ', actualOverlap);
            } else {
                console.log('no collision');
            }
        })
        ViewerService.populateMap(lineStrings);
    }

    function generateLineStrings(count) {
        return randomLineString(count, { num_vertices: 100, max_length: 1 });
    }
}

export default testingModule;