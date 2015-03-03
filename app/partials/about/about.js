(function() {
    angular.module('partials.about', ['ui.router', 'components.version'])
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
        var vm = this;
        vm.version = version;
    }
})();