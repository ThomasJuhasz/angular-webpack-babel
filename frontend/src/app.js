// import { angular } from '../node_modules/angular/angular.js';
// import { uiRouter } from '../node_modules/angular-ui-router/release/angular-ui-router.js';
var angular = require('../node_modules/angular/angular.js');

(function() {
    'use strict';

    angular.module('productListDemo', ['ui.router'])
    
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("product-list");

        $stateProvider
            .state('productList', {
                url: "/product-list",
                template: "<thj-product-list></thj-product-list>"
            })
            .state('productDetail', {
                url: "/product-detail/:id",
                template: "<thj-product-detail></thj-product-detail>"
            });
    }]);
})();