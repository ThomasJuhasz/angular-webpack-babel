import { app } from '../../../app.js';
import { repository } from '../../services/repository.js';

(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductListController', ['repository', thjProductListController])
        .component('thjProductList', {
            templateUrl: './app/pages/product-list/product-list.html',
            controller: 'thjProductListController',
            controllerAs: 'vm'
        });

    function thjProductListController(repository) {
        var vm = this;
        
        repository.getProducts().then(function(response) {
            vm.products = response.data;
        });

        vm.filterIsNew = function(product) {
            return !vm.isNewFilter || product.isNew
        }
    }
})();