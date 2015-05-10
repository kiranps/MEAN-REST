'use strict';

angular.module('todoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/thing',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
