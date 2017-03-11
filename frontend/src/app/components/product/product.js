require('../../../app');

(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('thjProductController', [thjProductController])
        .component('thjProduct', {
            template: require('./product.html'),
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