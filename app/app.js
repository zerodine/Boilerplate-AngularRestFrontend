(function () {
    angular.module('app', [
        'ui.router',
        'ngResource',
        'restclient',

        'models.User',

        'partials.home',
        'partials.about'
    ])
        .config(Route)
        .config(Api);

    /* @ngInject */
    function Route($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('base', {
            templateUrl: 'partials/base.html'
        });
    }

    /* @ngInject */
    function Api(apiProvider) {
        apiProvider.baseRoute('');

        apiProvider.endpoint('users')
            .route('/api_demo.json')
            .model('User');
    }
})();