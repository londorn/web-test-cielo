(function () {
    'use strict';


     angular.module('extrato-web', [])
        .controller('ExtratoController', function ($scope, $http) {
            $http.get('http://localhost:8080/extrato/busca-extrato').then(function(response) {
                $scope.extratos = response.data.listaControleLancamento;
                console.log(response.data.listaControleLancamento);
            });

        });
})();

