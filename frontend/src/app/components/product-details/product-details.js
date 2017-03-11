require('../../../app');

(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductDetailsController', [thjProductDetailsController])
        .component('thjProductDetails', {
            template: require('./product-details.html'),
            controller: 'thjProductDetailsController',
            controllerAs: 'vm',
            bindings: {
                thjProduct: '<'
            }
        });

    function thjProductDetailsController() {

    }
})();