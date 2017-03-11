require('../../../app');
require('../../services/repository');

(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductListController', ['repository', thjProductListController])
        .component('thjProductList', {
            template: require('./product-list.html'),
            controller: 'thjProductListController',
            controllerAs: 'vm'
        });

    function thjProductListController(repository) {
        var vm = this;

        repository.getProducts().then(function (response) {
            vm.products = response.data;
        });

        vm.filterIsNew = function (product) {
            return !vm.isNewFilter || product.isNew
        }
    }
})();