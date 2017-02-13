class ViewerController {

    constructor(ViewerService) {
        'ngInject';
        L.control.layers(ViewerService.baseMaps).addTo(ViewerService.map);
    }
}

export default ViewerController;
