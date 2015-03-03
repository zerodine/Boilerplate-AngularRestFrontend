(function() {
    angular.module('components.version', [])
        .service('version', Version);

    function Version() {
        return {
            version: '0.0.1'
        };
    }
})();