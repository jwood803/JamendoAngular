// Used for globals and Angular config settings such as routing.
var jamendoApp = angular.module('jamendoApp', []);

// Used to enable CORS
jamendoApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);