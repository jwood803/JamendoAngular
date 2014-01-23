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