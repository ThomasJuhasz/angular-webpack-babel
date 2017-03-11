require('../../app');

import { apiBaseUrl } from '../../configuration.js';

(function () {
    'use strict';

    angular.module('productListDemo').factory('httpService', ['$http', httpService]);

    function httpService($http) {
        var publicMethods = {
            get: get
        };

        function get(url) {
            return $http.get(`${apiBaseUrl}/${url}`);
        }

        return publicMethods;
    }
})();