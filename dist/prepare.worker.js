self.onmessage = (evt) => {
    let ab = evt.data;
    let dataView = new Float32Array(ab);
    let data = [...dataView];

    let output = [];
    let index = 0;
    let max = data.length;
    for (let index = 0; index < max; index += 2) {
        let latEntry = data[index];
        let lngEntry = data[index + 1];
        output.push({
            minX: latEntry,
            minY: lngEntry,
            maxX: latEntry,
            maxY: lngEntry
        });
    }

    self.postMessage(output);
};
