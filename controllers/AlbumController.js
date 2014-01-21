jamendoApp.controller('AlbumController', ['albumsService', function($scope, $http, albumsService) {
    $scope.getAlbums = function() {
    	$scope.albums = albumsService.getAlbums();
    }
}]);