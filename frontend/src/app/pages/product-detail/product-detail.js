require('../../../app');
require('../../services/repository');
require('../../components/product-details/product-details');

(function () {
    'use strict';

    class ProductDetailController {
        constructor($stateParams, repository) {
            this.$stateParams = $stateParams;
            this.repository = repository;
        }

        $onInit() {
            var productId = this.$stateParams.id;

            this.repository
                .getProduct(productId)
                .then(response => this.product = response.data);
        }
    }

    angular.module('productListDemo')
        .controller('thjProductDetailController', ['$stateParams', 'repository', ProductDetailController])
        .component('thjProductDetail', {
            template: require('./product-detail.html'),
            controller: 'thjProductDetailController',
            controllerAs: 'vm'
        });
})();