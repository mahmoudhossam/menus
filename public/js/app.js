var elmenusApp = angular.module('elmenusApp', ['ngRoute', 'menuControllers', 'categoryControllers']);


elmenusApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/menus.html', controller: 'MenuListController'}).
      when('/menus', {templateUrl: 'partials/menus.html', controller: 'MenuListController'}).
      when('/menus/add', {templateUrl: 'partials/menus-add.html', controller: 'MenuCreateController'}).
      when('/menus/:menuId/categories/add', {templateUrl: 'partials/category-add.html', controller: 'CategoryCreateController'}).
      when('/menus/:menuId/categories/:categoryId', {templateUrl: 'partials/category-detail.html', controller: 'CategoryDetailController'}).
      when('/menus/:menuId/categories/:categoryId/edit', {templateUrl: 'partials/category-edit.html', controller: 'CategoryEditController'}).
      when('/menus/:menuId', {templateUrl: 'partials/menu-detail.html', controller: 'MenuDetailController'}).
      when('/menus/:menuId/edit', {templateUrl: 'partials/menu-edit.html', controller: 'MenuEditController'}).
      otherwise({redirectTo: '/'});
  }]);
