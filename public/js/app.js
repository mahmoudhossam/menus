var elmenusApp = angular.module('elmenusApp', ['ngRoute', 'menuControllers', 'categoryControllers', 'itemControllers', 'sizeControllers']);


elmenusApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/menus.html', controller: 'MenuListController'}).
      when('/menus', {templateUrl: 'partials/menus.html', controller: 'MenuListController'}).
      when('/menus/add', {templateUrl: 'partials/menus-add.html', controller: 'MenuCreateController'}).
      when('/menus/:menuId/categories/add', {templateUrl: 'partials/category-add.html', controller: 'CategoryCreateController'}).
      when('/menus/:menuId/categories/:categoryId/items/add', {templateUrl: 'partials/item-add.html', controller: 'ItemCreateController'}).
      when('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/add', {templateUrl: 'partials/size-add.html', controller: 'SizeCreateController'}).
      when('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/:sizeId', {templateUrl: 'partials/size-detail.html', controller: 'SizeDetailController'}).
      when('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/:sizeId/edit', {templateUrl: 'partials/size-edit.html', controller: 'SizeEditController'}).
      when('/menus/:menuId/categories/:categoryId/items/:itemId', {templateUrl: 'partials/item-detail.html', controller: 'ItemDetailController'}).
      when('/menus/:menuId/categories/:categoryId/items/:itemId/edit', {templateUrl: 'partials/item-edit.html', controller: 'ItemEditController'}).
      when('/menus/:menuId/categories/:categoryId', {templateUrl: 'partials/category-detail.html', controller: 'CategoryDetailController'}).
      when('/menus/:menuId/categories/:categoryId/edit', {templateUrl: 'partials/category-edit.html', controller: 'CategoryEditController'}).
      when('/menus/:menuId', {templateUrl: 'partials/menu-detail.html', controller: 'MenuDetailController'}).
      when('/menus/:menuId/edit', {templateUrl: 'partials/menu-edit.html', controller: 'MenuEditController'}).
      otherwise({redirectTo: '/'});
  }]);
