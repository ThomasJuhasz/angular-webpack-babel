(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductController', [thjProductController])
        .component('thjProduct', {
            templateUrl: './app/components/product/product.html',
            controller: 'thjProductController',
            controllerAs: 'vm',
            bindings: {
                thjData: '<'
            }
        });

    function thjProductController() {
        var vm = this;
    }
})();