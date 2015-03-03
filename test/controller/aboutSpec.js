describe('AboutCtrl', function() {
    beforeEach(module('partials.about'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('version', function() {
        it('check if the version is present', function() {
            var $scope = {};
            var controller = $controller('AboutCtrl', { $scope: $scope });
            expect(controller.version).toBeDefined();
            expect(controller.version).toEqual('0.0.1');
        });
    });
});