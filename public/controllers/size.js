var sizeControllers = angular.module('sizeControllers', []);

sizeControllers.controller("SizeDetailController", ["$scope", "$http", "$window", "$routeParams",
   function(scope, $http, $window, $routeParams) {

    scope.menuId = $routeParams.menuId;
    scope.categoryId = $routeParams.categoryId;
    $http.get('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId + '/sizes/' + $routeParams.sizeId).success(function(data) {
        scope.size = data.size;
        scope.item = data.item;
    });

    scope.delete = function(name) {
        $http.delete('api/menus/' + $routeParams.menuId +'/categories/' + $routeParams.categoryId + '/items/' + $routeParams.itemId).success(function(){
            $window.location.href = '#/menus/' + $routeParams.menuId + '/categories/' + $routeParams.categoryId;
        });
    };
}]);

sizeControllers.controller("SizeCreateController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {

    var menuId = $routeParams.menuId;
    var categoryId = $routeParams.categoryId;
    var itemId = $routeParams.itemId;
    $http.get('api/menus/' + menuId + '/categories/' + categoryId + '/items/' + itemId).success(function(data) {
     scope.item = data.item;
 });
    scope.submit = function(size) {
       $http.post('api/menus/' + menuId +'/categories/' + categoryId +'/items/' + itemId + '/sizes/add', {'name': size.name, 'price': size.price}).success(function(data) {
        $window.location.href = '#/menus/' + menuId + '/categories/' + categoryId + '/items/' + itemId + '/sizes/' + data.id;
    });
   };
}]);

sizeControllers.controller("SizeEditController", ["$scope", "$http", "$window", "$routeParams",
 function(scope, $http, $window, $routeParams) {

     var menuId = $routeParams.menuId;
     var sizeId = $routeParams.sizeId;
     var categoryId = $routeParams.categoryId;
     var itemId = $routeParams.itemId;
     scope.update = function() {
         $http.get('api/menus/' + menuId + '/categories/' + categoryId + '/items/' + itemId + '/sizes/' + sizeId).success(function(data) {
            scope.size = data.size;
            scope.item = data.item;
        });
     };
     scope.update();
     scope.submit = function(size) {
        $http.put('api/menus/' + menuId + '/categories/' + categoryId + '/items/' + itemId + '/sizes/' + sizeId, {'name': size.name, 'price': size.price}).success(function(data) {
            $window.location.href =  '#/menus/' + menuId + '/categories/' + categoryId + '/items/' + itemId + '/sizes/' + sizeId;
        });
    };
}]);
