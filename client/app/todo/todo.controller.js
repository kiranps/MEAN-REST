'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, $http) {

    $scope.refresh = function() {
      $scope.todos = "";
      $http.get('/api/todos').success(function(data) {
        $scope.todos = data;
      });
    }

    $scope.addTodo = function() {
      if($scope.todo === '') {
        return;
      }
      $http.post('/api/todos', { todo: $scope.todo });
      $scope.todo = '';
      $scope.refresh();
    };

    $scope.updateItem = function(data, id) {
      console.log("update");
      console.log(data);
      console.log(id);
      return $http.put('/api/todos/' + id, data);
    }

    $scope.deleteThing = function(todo, index) {
      $http.delete('/api/todos/' + todo._id);
      $scope.todos.splice(index, 1);
      //$scope.refresh();
    };

    $scope.refresh();

  });
