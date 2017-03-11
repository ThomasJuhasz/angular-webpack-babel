import { app } from '../../app.js'

(function () {
    'use strict';

    app.factory('repository', ['$http', repository]);

    function repository($http) {
        var publicMethods = {
            getProduct: getProduct,
            getProducts: getProducts    
        };

        function getProduct(id) {
            return $http.get('http://localhost:8080/api/product?id=' + id);
        }

        function getProducts() {
            return $http.get('http://localhost:8080/api/products');
        }

        return publicMethods;
    }
})();