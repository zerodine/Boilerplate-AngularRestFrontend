(function() {
    angular.module('partials.home', [])
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
                users: function () {
                    return [
                        {name: 'Jack Bauer', age: 53},
                        {name: 'Sandra Bullock', age: 50}
                    ]
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