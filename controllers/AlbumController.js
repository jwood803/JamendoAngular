jamendoApp.controller('AlbumController', ['albumsService', function($scope, $http, albumsService) {
    $scope.albums = albumsService.getAlbums(); 
}]);