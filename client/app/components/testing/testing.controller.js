class TestingController {

    constructor(TestingService, $q) {
        'ngInject';

        this.TestingService = TestingService;
        this.$q = $q;
    }

    getData() {
        this.TestingService.getData();
    }
}

export default TestingController;
