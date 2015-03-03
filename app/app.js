(function () {
    angular.module('app', [
        'ui.router',

        'partials.home',
        'partials.about'
    ])
        .config(Route);

    /* @ngInject */
    function Route($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('base', {
            templateUrl: 'partials/base.html'
        });
    };
})();