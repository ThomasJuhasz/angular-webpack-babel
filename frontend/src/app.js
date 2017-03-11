(function () {
    'use strict';

    module.exports = angular.module('productListDemo', ['ui.router'])

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