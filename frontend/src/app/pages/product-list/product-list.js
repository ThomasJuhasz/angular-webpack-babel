require('../../../app');
require('../../services/repository');
require('../../components/product/product');

(function () {
    'use strict';

    class ProductListController {
        constructor(repository) {
            this.repository = repository;
        }

        $onInit() {
            var vm = this;

            this.repository.getProducts().then(response => {
                this.products = response.data;
            });

            this.filterIsNew = product => {
                return !this.isNewFilter || product.isNew
            }
        }
    }

    angular.module('productListDemo')
        .controller('thjProductListController', ['repository', ProductListController])
        .component('thjProductList', {
            template: require('./product-list.html'),
            controller: 'thjProductListController',
            controllerAs: 'vm'
        });
})();