angular.module("kb")
.controller('CategoriesControl', ['$scope', '$http', function($scope, $http){
	$http.get('/categories').success(function(data){
		$scope.categories = data;
	})
}])