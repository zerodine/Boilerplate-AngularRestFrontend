(function() {
    angular.module('partials.about', ['components.version'])
        .config(Route)
        .controller('AboutCtrl', AboutCtrl);

    /* @ngInject */
    function Route($stateProvider) {
        $stateProvider.state('about', {
            url: "/about",
            parent: "base",
            templateUrl: 'partials/about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'vm'
        });
    }

    /* @ngInject */
    function AboutCtrl(version) {
        vm = this;
        vm.version = version.version;
    }
})();