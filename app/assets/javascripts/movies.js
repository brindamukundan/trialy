var app = angular.module("MoviesApp", []);

app.service("moviesService", function($http, $q){
	var deferred = $q.defer();
	$http.get('/movies.json').then(function(data){
		deferred.resolve(data);
	});

	this.getMovies = function(){
		return deferred.promise;
	}
})

.controller("moviesCtrl", function($scope, moviesService){
	var promise = moviesService.getMovies();

	promise.then(function(data){
		$scope.movies = data.data;
		console.log($scope.movies);
	});
})