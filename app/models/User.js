(function() {
    angular.module('models.User', [])
        .factory('User', function(Model) {
            function User(object) {

                this.name = {
                    type: 'string'
                };

                this.age = {
                    type: 'integer'
                };

                // Map the given object
                this.init(object);
            }

            angular.extend(User.prototype, Model.prototype);

            return User;
        });
})();