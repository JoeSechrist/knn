self.onmessage = (evt) => {
    self.importScripts('async.min.js', 'rbush.min.js', 'knn.js', 'turf.min.js');

    let tree = rbush().load(evt.data.testData);
    let queryData = evt.data.queryData;

    let neighborObj = {};
    let neighborArray = [];

    queryData.forEach((testPoint) => {
        let knnIndex = testPoint.minX + ':' + testPoint.minY;
        let neighbors = knn(tree, testPoint.minX, -testPoint.minY, 50);
        let outputArray = [];
        neighbors.forEach(neighbor => {
            if (checkClosestPoints([testPoint.minX, testPoint.minY], neighbor, 5)) {
                outputArray.push(neighbor.minX, neighbor.minY);
            }
        });
        if (outputArray.length) {
            neighborObj[knnIndex] = new Float32Array(outputArray);
            neighborArray.push(neighborObj[knnIndex].buffer);
        }
    });
    self.postMessage(neighborObj, [...neighborArray]);
};

function checkClosestPoints(testPoint, item, distanceCheck) {
    let valid = false;
    let from = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [testPoint[0], testPoint[1]]
        }
    };
    let to = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [item.minX, item.minY]
        }
    };
    let distance = turf.distance(from, to, 'kilometers');
    if (distance < distanceCheck) {
        valid = true;
    }
    return valid;
}