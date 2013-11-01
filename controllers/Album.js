jamendoApp.controller('Album', ['albumsService', function($scope, $http, albumsService) {
    $scope.albums = albumsService.getAlbums(); 
}]);