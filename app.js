// Used for globals and Angular config settings such as routing.
var jamendoApp = angular.module('jamendoApp', []);

// Used to enable CORS
jamendoApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

jamendoApp.controller('AlbumController', function($scope, $http, albumsService) {
    $scope.getAlbums = function() {
		var artist = $scope.artist;

    	albumsService.getAlbums(artist, function(data) {
		            if(data.headers.status == 'success') {
		              $scope.albums = data.results;
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });
    }
});

jamendoApp.service('albumsService', function($http) {
	var serviceBase = "http://api.jamendo.com/v3.0/";

	this.getAlbums = function(artist, callback) {
		$http.get(serviceBase + "albums/?client_id=b6747d04&format=jsonpretty&artist_name=" + artist)
				 .success(callback)
		         .error(function(x, status, error) {
		           alert(error);
 				});
	}
});