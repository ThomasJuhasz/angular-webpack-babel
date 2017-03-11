webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

(function () {
    'use strict';

    module.exports = angular.module('productListDemo', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("product-list");

        $stateProvider.state('productList', {
            url: "/product-list",
            template: "<thj-product-list></thj-product-list>"
        }).state('productDetail', {
            url: "/product-detail/:id",
            template: "<thj-product-detail></thj-product-detail>"
        });
    }]);
})();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(6)(function () {
    'use strict';

    angular.module('productListDemo').factory('repository', ['$http', repository]);

    function repository($http) {
        var publicMethods = {
            getProduct: getProduct,
            getProducts: getProducts
        };

        function getProduct(id) {
            return $http.get(`${configuration.apiBaseUrl}/product?id=${id}`);
        }

        function getProducts() {
            return $http.get('http://localhost:8080/api/products');
        }

        return publicMethods;
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<h1>Product List</h1>\r\n\r\n<div class=\"filter-container\">\r\n    <div>\r\n        Search:\r\n        <input type=\"text\" ng-model=\"vm.textFilter\"></input>\r\n    </div>\r\n    <div>\r\n        Show only new items:\r\n        <input type=\"checkbox\" ng-model=\"vm.isNewFilter\"></input>\r\n    </div>\r\n</div>\r\n\r\n<thj-product ng-repeat=\"product in vm.products | orderBy: 'name' | filter: { name: vm.textFilter } | filter: vm.filterIsNew\"\r\n    thj-data=\"product\" ui-sref=\"productDetail({ id: product.id })\"></thj-product>";

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = {
    apiBaseUrl: 'localhost:5000/api/'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(3);

(function () {
    'use strict';

    angular.module('productListDemo').controller('thjProductListController', ['repository', thjProductListController]).component('thjProductList', {
        template: __webpack_require__(4),
        controller: 'thjProductListController',
        controllerAs: 'vm'
    });

    function thjProductListController(repository) {
        var vm = this;

        repository.getProducts().then(function (response) {
            vm.products = response.data;
        });

        vm.filterIsNew = function (product) {
            return !vm.isNewFilter || product.isNew;
        };
    }
})();

/***/ })
],[7]);