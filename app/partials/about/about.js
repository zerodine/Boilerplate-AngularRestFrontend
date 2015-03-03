(function() {
    angular.module('partials.about', [])
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

    function AboutCtrl() {

    }
})();