(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductDetailsController', [thjProductDetailsController])
        .component('thjProductDetails', {
            templateUrl: './app/components/product-details/product-details.html',
            controller: 'thjProductDetailsController',
            controllerAs: 'vm',
            bindings: {
                thjProduct: '<'
            }
        });

    function thjProductDetailsController() {
        
    }
})();