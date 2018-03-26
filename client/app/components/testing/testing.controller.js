class TestingController {

    constructor(TestingService, $q) {
        'ngInject';

        this.TestingService = TestingService;
        this.$q = $q;
        this.count = 10;
    }

    getData() {
        this.TestingService.getData(this.count);
    }
}

export default TestingController;
