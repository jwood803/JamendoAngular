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