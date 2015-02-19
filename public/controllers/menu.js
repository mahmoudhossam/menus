var menuControllers = angular.module("menuControllers", []);

menuControllers.controller("MenuListController", ["$scope", "$http", function(scope, $http) {
    $http.get('api/menus').success(function(data) {
        scope.menus = data;
    });
}]);

menuControllers.controller("MenuCreateController", ["$scope", "$http", "$window", function(scope, $http, $window) {
    scope.submit = function(name) {
        $http.post('api/menus', {'name': name}).success(function(menu) {
            $window.location.href = '#/menus/' + menu.id;
        });
    };
}]);

menuControllers.controller("MenuDetailController", ["$scope", "$http", "$window", "$routeParams",
   function(scope, $http, $window, $routeParams) {
    scope.menuId = $routeParams.menuId;

    $http.get('api/menus/' + scope.menuId).success(function(data) {
        scope.menu = data.menu;
        scope.categories = data.categories;
    });

    scope.delete = function(name) {
        $http.delete('api/menus/' + scope.menuId).success(function(data) {
            $window.location.href = '/';
        });
    };
}]);


menuControllers.controller("MenuEditController", ["$scope", "$http", "$window", "$routeParams", function(scope, $http, $window, $routeParams) {
    scope.menuId = $routeParams.menuId;

    scope.update = function() {
        $http.get('api/menus/' + scope.menuId).success(function(data) {
            scope.menu = data;
        });
    };

    scope.submit = function(name) {
        scope.menuId = $routeParams.menuId;
        $http.put('api/menus/' + scope.menuId, {'name': name}).success(function(menu) {
            $window.location.href = '#/menus/' + scope.menuId;
        });
    };
    scope.update();
}]);
