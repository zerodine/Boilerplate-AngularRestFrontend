(function() {
    angular.module('partials.home', ['ui.router', 'restclient'])
        .config(Route)
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function Route($stateProvider) {
        $stateProvider.state('home', {
            url: "/home",
            parent: "base",
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm',
            resolve: {
                users: function (api) {
                    return api.users.get();
                }
            }
        });
    }


    /* @ngInject */
    function HomeCtrl(users) {
        var vm = this;
        vm.users = users;
    }
})();