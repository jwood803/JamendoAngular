var jamendoApp = angular.module('jamendoApp', []);

jamendoApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

jamendoApp.controller('Album', function($scope, $http) {
  $scope.getAlbums = function() {
    $http.get("http://api.jamendo.com/v3.0/albums/?client_id=b6747d04&format=jsonpretty&artist_name=" + $scope.artist)
         .success(function(data) {
            if(data.headers.status == 'success') {
              $scope.albums = data.results;
            }
            else {
              alert("Error - " + data.headers.error_message);
            }
         })
         .error(function(x, status, error) {
           alert(error);
         });
     };
});