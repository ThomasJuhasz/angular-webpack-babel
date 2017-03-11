(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductDetailController', ['$stateParams', 'repository', thjProductDetailController])
        .component('thjProductDetail', {
            templateUrl: './app/pages/product-detail/product-detail.html',
            controller: 'thjProductDetailController',
            controllerAs: 'vm'
        });

    function thjProductDetailController($stateParams, repository) {
        var vm = this;        

        vm.$onInit = function() {
            var productId = $stateParams.id;

            repository.getProduct(productId).then(function(response) {
                vm.product = response.data;
            });
        }
    }
})();