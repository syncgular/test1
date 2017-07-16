let app = angular.module("app", []);

app.controller("first", ["$scope", function($scope) {
    $scope.refjson = { "title": "Hello Controllerrr." };
}]);