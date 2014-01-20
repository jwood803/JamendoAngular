jamendoApp.service('albumsService', function($scope, $http) {
	var serviceBase = "http://api.jamendo.com/v3.0/";

	this.getAlbums = function() {
			$http.get(serviceBase + "albums/?client_id=b6747d04&format=jsonpretty&artist_name=" + $scope.artist)
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
		}
});