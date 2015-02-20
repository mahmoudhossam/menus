var itemControllers = angular.module('itemControllers', []);

itemControllers.controller("ItemDetailController", ["$scope", "$http", "$window", "$routeParams",
   function(scope, $http, $window, $routeParams) {

    scope.menuId = $routeParams.menuId;
    $http.get('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId).success(function(data) {
        scope.item = data.item;
        scope.category = data.category;
        scope.sizes = data.sizes;
    });

    scope.delete = function(name) {
        $http.delete('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId).success(function(){
            $window.location.href = '#/menus/' + $routeParams.menuId + '/categories/' + $routeParams.categoryId;
        });
    };
}]);

itemControllers.controller("ItemCreateController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {

    var menuId = $routeParams.menuId;
    var categoryId = $routeParams.categoryId;
    $http.get('api/menus/' + menuId + '/categories/' + categoryId).success(function(data) {
         scope.category = data.category;
    });
    scope.submit = function(name) {
       $http.post('api/menus/' + menuId +'/categories/' + categoryId +'/items/add', {'name': name}).success(function(data) {
        $window.location.href = '#/menus/' + menuId + '/categories/' + categoryId + '/items/' + data.id;
    });
   };
}]);

itemControllers.controller("ItemEditController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {
     var menuId = $routeParams.menuId;
     scope.update = function() {
         $http.get('api/menus/' + menuId + '/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId).success(function(data) {
            scope.category = data.category;
            scope.item = data.item;
        });
     };
     scope.update();
     scope.submit = function(name) {
        $http.put('api/menus/' + menuId + '/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId, {'name': name}).success(function(data) {
            $window.location.href =  '#/menus/' + menuId + '/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId;
        });
    };
}]);
