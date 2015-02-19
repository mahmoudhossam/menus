var categoryControllers = angular.module('categoryControllers', []);

categoryControllers.controller("CategoryDetailController", ["$scope", "$http", "$window", "$routeParams",
   function(scope, $http, $window, $routeParams) {

    $http.get('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId).success(function(data) {
        scope.category = data.category;
        scope.menu = data.menu;
    });

    scope.delete = function(name) {
        $http.delete('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId).success(function(){
            $window.location.href = '#/menus/' + $routeParams.menuId;
        });
    };
}]);

categoryControllers.controller("CategoryCreateController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {

    var menuId = $routeParams.menuId;
    $http.get('api/menus/' + menuId).success(function(data) {
         scope.menu = data.menu;
    });
    scope.submit = function(name) {
       $http.post('api/menus/' + menuId +'/categories/add', {'name': name}).success(function(data) {
        $window.location.href = '#/menus/' + menuId + '/categories/' + data.id;
    });
   };
}]);


categoryControllers.controller("CategoryEditController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {
     var menuId = $routeParams.menuId;
     scope.update = function() {
         $http.get('api/menus/' + menuId + '/categories/' + $routeParams.categoryId).success(function(data) {
            scope.menu = data.menu;
            scope.category = data.category;
        });
     };
     scope.update();
     scope.submit = function(name) {
        $http.put('api/menus/' + menuId + '/categories/' + $routeParams.categoryId, {'name': name}).success(function(data) {
            $window.location.href =  '#/menus/' + menuId + '/categories/' + $routeParams.categoryId;
        });
    };
}]);
