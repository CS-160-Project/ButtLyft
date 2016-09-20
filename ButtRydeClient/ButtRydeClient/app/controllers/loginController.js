﻿'use strict';
app.controller('loginController', ['$location', 'authService', 'ngAuthSettings', function ($location, authService, ngAuthSettings) {
    var vm = this;
    vm.loginData = {
        userName: "",
        password: "",
        useRefreshTokens: false
    };

    vm.message = '';

    vm.login = function () {

        authService.login(vm.loginData).then(function (response) {
            $location.path('/dash');

        },
         function (err) {
             vm.message = err.error_description;
         });
    };

}]);
