require('../../app');
require('./httpService');

(function () {
    'use strict';

    angular.module('productListDemo').factory('repository', ['httpService', repository]);

    function repository(httpService) {
        var publicMethods = {
            getProduct: getProduct,
            getProducts: getProducts
        };

        function getProduct(id) {
            return httpService.get(`product?id=${id}`);
        }

        function getProducts() {
            return httpService.get(`products`);
        }

        return publicMethods;
    }
})();